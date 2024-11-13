import User from "../models/Users.js";

async function getAll(req, res) {
  try {
    const users = await User.find({ deletedAt: null });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Usuarios no encontrados");
  }
}

async function getById(req, res) {
  try {
    const users = await User.findById(req.params.id);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Usuario no encontrado");
  }
}
async function create(req, res) {
  try {
    const newUser = User.create({
      userName: req.body.userName,
      Password: req.body.Password,
      Name: req.body.Name,
      LastName: req.body.LastName,
      Phone: req.body.Phone,
      Email: req.body.Email,
      Country: req.body.Country,
      City: req.body.City,
      TypeUser: req.body.TypeUser,
    });
    return res.status(201).json("usuario creado con exito");
  } catch (error) {
    console.log(error.message || error);
    return res.status(501).json("Error en el servidor");
  }
}

async function update(req, res) {
  const userToUpdate = await User.findById(req.params.id);
  try {
    if (userToUpdate !== null) {
      const {
        userName,
        Password,
        Name,
        LastName,
        Phone,
        Email,
        Country,
        City,
        TypeUser,
      } = req.body;
      userToUpdate.userName = userName || userToUpdate.userName;
      userToUpdate.Password = Password || userToUpdate.Password;
      userToUpdate.Name = Name || userToUpdate.Name;
      userToUpdate.LastName = LastName || userToUpdate.LastName;
      userToUpdate.Phone = Phone || userToUpdate.Phone;
      userToUpdate.Email = Email || userToUpdate.Email;
      userToUpdate.Country = Country || userToUpdate.Country;
      userToUpdate.City = City || userToUpdate.City;
      userToUpdate.userName = userName || userToUpdate.userName;

      userToUpdate.TypeUser = TypeUser || userToUpdate.TypeUser;

      await userToUpdate.save();
      return res.json("El usuario se actualizo");
    } else {
      return res.json("El usuario no existe con este id");
    }
  } catch (err) {
    console.log(err);
    return res.json(
      "Hubo algun error al intentar actualizar el usuario, vuelve a intentarlo"
    );
  }
}

async function destroy(req, res) {
  try {
    const userToDelete = await User.findById(req.params.id);
    if (!userToDelete) {
      console.log("Usuario no encontrado");
      return res.status(404).json("El usuario no existe con este id");
    }

    userToDelete.deletedAt = Date.now();
    await userToDelete.save();

    return res.json("Usuario eliminado con éxito");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(
        "Hubo algún error al intentar eliminar el usuario, vuelve a intentarlo"
      );
  }
}

export default {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  destroy: destroy,
};
