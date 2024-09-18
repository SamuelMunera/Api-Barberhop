import mongoose from "mongoose";

const servicesSchema = mongooseSchema({
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
  Information:{
    type:String,
    require:[false]
  },
});
