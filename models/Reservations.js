import mongoose from "mongoose";

const reservationsSchema = mongoose.Schema({
  serviceName: {
    type: mongoose.Types.ObjectId,
    ref: "Services",
  },
  chosenTime: {
    type: String,
    require: [false],
  },
  reservationTime: {
    type: String,
    require: [
      true,
      "Necesitamos saber la hora a la cual quieres agendar la reserva",
    ],
  },
  informationAditional: {
    type: String,
    require: [
      false,
      "Si necesitas poner alguna informacion adicional seria importante que la dejes aqui",
    ],
  },
  Barbershop: {
    type: mongoose.Types.ObjectId,
    ref: "Barberhop",
  },
  Services: {
    type: mongoose.Types.ObjectId,
    ref: "Services",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  deletedAt:{
    type:Date, 
    default:null
  },
});
const Reservation = mongoose.model("Reservation", reservationsSchema);
export default Reservation;
