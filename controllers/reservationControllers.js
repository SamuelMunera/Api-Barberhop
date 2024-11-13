
import Reservations from "../models/Reservations.js";

async function getAll(req, res) {
  try {
    const reservations = await Reservations.findAll({ deletedat: null });
    return res.json(services);
  } catch (error) {
    return res.status(404).json("Reservaciones no encontradas");
  }
}

async function getById(req, res) {
  try {
    const reservations = await Reservations.findById(req.params.id);
    return res.json(reservations);
  } catch (error) {
    console.log(Error);
    return res.status(404).json("Reserva no encontrada");
  }
}

async function create(req, res) {
  try {
    const newReservation = Reservations.create({
      serviceName: req.body.serviceName,
      chosenTime: req.body.chosenTime,
      reservationTime: req.body.reservationTime,
      informationAditional: req.body.informationAditional,
      services: req.body.services,
      user: req.body.user,
    });
    return res.status(201).json("Reserva creada con exito");
  } catch (error) {
    console.log(error.message || error);
    return res
      .status(501)
      .json("Tuvimos un error al crear la reserva, vuelve a intentarlo");
  }
}

async function update(req, res) {
  const reservationToUpdate = await Services.findById(req.params.id);
  try {
    if (reservationToUpdate !== null) {
      const {
        serviceName,
        chosenTime,
        reservationTime,
        informationAditional,
        Barbershop,
        services,
        user,
      } = req.body;
      reservationToUpdate.serviceName =
        serviceName || reservationToUpdate.serviceName;
      reservationToUpdate.chosenTime =
        chosenTime || reservationToUpdate.chosenTime;
      reservationToUpdate.reservationTime =
        reservationTime || reservationToUpdate.reservationTime;
      reservationToUpdate.informationAditional =
        informationAditional || reservationToUpdate.informationAditional;
      reservationToUpdate.services = services || reservationToUpdate.services;
      reservationToUpdate.user = user || reservationToUpdate.user;
      await reservationToUpdate.save();
      return res.json("La reserva se actualizo con exito");
    } else {
      return res.json("No existe reservaciones con este id ");
    }
  } catch (error) {
    console.log(error);
    return res.json(
      "Hubo algun error al actualizar la resevacion, vuelve a intentarlo"
    );
  }
}

async function destroy(req, res) {
  try {
    const reservationToDelate = await Reservation.findById(req.params.id);
    if (!reservationToDelate) {
      console.log("Reserva no encontrada");
      return res.status(404).json("No existe reserva con este id");
    }
    reservationToDelate.deletedAt = Date.now();
    await reservationToDelate.save();
    return res.json("Reserva eliminada con exito");
  } catch (error) {
    return res
      .status(500)
      .json("Hubo algun error al eliminar la reservacion, vuelve a intentarlo");
  }
}

export default {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  destroy: destroy,
};
