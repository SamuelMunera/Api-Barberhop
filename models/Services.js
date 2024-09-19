import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
  serviceName: {
    type: String,
    require: [
      true,
      "Necesitamos saber el nombre de el servicio para seguir con la creacion ",
    ],
  },
  servicesTime: {
    type: String,
    require: [
      true,
      "Necesitamos saber cuanto dura cada servicio para poder seguir creando el servicio",
    ],
  },
  Information: {
    type: String,
    require: [false],
  },
  barbershopServices: {
    type: mongoose.Types.ObjectId,
    ref: "Barbershop",
  },
});
const Service = mongoose.model("Services", servicesSchema);
export default Service;
