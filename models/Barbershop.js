import mongoose from "mongoose";

const barbershopSchema = mongooseSchema({
  nameBarbershop: {
    type: String,
    require: [
      true,
      "Es necesario un nombre de tu barbershop para continuar con el registro",
    ],
  },
  Country: {
    type: String,
    require: [
      true,
      "Necesitamos saber en que pais se encuentra tu barbershop para continuar con el registro",
    ],
  },
  City: {
    type: String,
    require: [
      true,
      "Necesitamos saber en que ciudad se encuentra tu barbershop para continuar el registro",
    ],
  },
  Address: {
    type: String,
    require: [
      true,
      "Necesitamos saber la direccion de la barbershop para continuar con el registro",
    ],
  },
  Phone: {
    type: String,
    require: [
      true,
      "Necesitamos saber el numero telefonico de la barbershop para continuar con el registro",
    ],
  },
  Schundles: {
    type: String,
    require: [
      true,
      "Necesitamos saber el horario de tu barbershop para continuar con el registro",
    ],
  },
});
