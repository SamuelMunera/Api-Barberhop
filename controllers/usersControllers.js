import User from "../models/Users";

async function getAll(req, res) {
  try {
    const user = await User.find({ deletadAt: null });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Usuarios no encontrados");
  }
}

async function getById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Usuario no encontrado");
  }
}
async function create(req, res) {
  try {
    const newUser = user.create({
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
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.errors.name.propierties.message);
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
    const userToDelate = await user.findById(req.params.id);
    if (userToDelate) {
      userToDelate.deletadAt = Date.now();
      userToDelate.save();

      return res.json("Usuario creado con exito");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(404)
      .json(
        "Hubo algun error al intentar eliminar el usuario, vuelve a intentarlo"
      );
  }
}
 export default {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    destroy: destroy,
 }