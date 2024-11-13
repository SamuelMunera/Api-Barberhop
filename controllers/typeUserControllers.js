import typeUser from "../models/typeUser.js";
import typeUser from "../models/typeUser.js";

async function getAll(req, res) {
  try {
    const typeUser = await typeUser.find({ deletedAt: null });
    return res.json(typeUser);
  } catch (error) {
    console.log(error);
    return res.status(404).json("tipos de usuarios no encontrados");
  }
}

async function getById(req, res) {
  try {
    const typeUser = await typeUser.findById(req.params.id);
    return res.json(typeUser);
  } catch (error) {
    console.log(error);
    return res.status(404).json("tipo de usuario no encontrado");
  }
}


async function create(req, res) {
    try {
      const typeUser = typeUser.create({
        userType: req.body.userType,
      });
      return res.status(201).json("tipo de usuario creado con exito");
    } catch (error) {
      console.log(error.message || error);
      return res
        .status(501)
        .json("Tuvimos un error al crear el tipo de usuario, vuelve a intentarlo");
    }
  } 

async function update(req,res) {
    const typeUserToUpdate = await typeUser.findById(req.params.id);
    try{
        if (typeUserToUpdate !== null) {
            const { userType } = req.body;

            typeUserToUpdate.userType = userType || typeUserToUpdate.userType;
            await typeUserToUpdate.save();
            return res.json("el tipo de usuario ha sido actualizado con exito ")
        } else {
            return res.json("el tipo de usuario no existe con este id")
        }
    }catch (error) {
        console.log(error); 
        return res.json ("hubo algun error al actualizar el tipo de usuario");
    }
}

async function  destroy (req, res){
    try {
        const typeUserToDelate = await typeUser.findById(req.params.id);
        if (!typeUserToDelate){
            console.log("tipo de usuario no encontrado");
            return res.status(404).json("no existe tipo de usuario con este id ")
        }
        typeUserToDelate.deletedAt =Date.now();
        await  typeUserToDelate.save();
        return res.json ("tipo de usuario eliminado con exito")

    }catch (error){
        console.log(error);
        return res.status(500).json("Hubo algun error al intentar eliminar el servicio, vuelve a intentarlo");
    }

}

export default {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    destroy: destroy,
  };