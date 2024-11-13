import Services from "../models/Services.js";

async function getAll(req, res) {
  try {
    const services = await Services.find({ deletedAt: null });
    return res.json(services);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Servicios no encontrados");
  }
}

async function getById(req, res) {
  try {
    const services = await Services.findById(req.params.id);
    return res.json(services);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Servicio no encontrado");
  }
}

async function create(req, res) {
  try {
    const newService = Services.create({
      serviceName: req.body.serviceName,
      servicesTime: req.body.servicesTime,
      Information: req.body.Information,
        });
    return res.status(201).json("Servicio creado con exito");
  } catch (error) {
    console.log(error.message || error);
    return res
      .status(501)
      .json("Tuvimos un error al crear el servicio, vuelve a intentarlo");
  }
}

async function update(req, res) {
  const servicesToUpdate = await Services.findById(req.params.id);
  try {
    if (servicesToUpdate !== null) {
      const { serviceName, servicesTime, Information } = req.body;
      servicesToUpdate.serviceName =
        serviceName || servicesToUpdate.serviceName;
      servicesToUpdate.servicesTime =
        servicesTime || servicesToUpdate.servicesTime;
      servicesToUpdate.Information = Information || servicesToUpdate.Information;
      await servicesToUpdate.save();
      return res.json("El servicio se actualizo con exito");
    } else {
      return res.json("No existe servicio con este id");
    }
  } catch (error) {
    console.log(error);
    return res.json(
      "Hubo algun error al intentar actualizar el servicio,vuelve a intentarlo"
    );
  }
}

async function destroy(req, res) {
  try {
    const serviceToDelate = await Services.findById(req.params.id);
    if (!serviceToDelate) {
      console.log("Servicio no encontrado");
      return res.status(404).json("No existe servicio con este id");
    }

    serviceToDelate.deletedAt = Date.now();
    await serviceToDelate.save();

    return res.json("Servicio eliminado con exito");
  } catch (Error) {
    console.log(error);
    return res
      .status(500)
      .json(
        "Hubo algun error al intentar eliminar el servicio, vuelve a intentarlo"
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
