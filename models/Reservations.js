import mongoose from "mongoose";

const reservationsSchema = mongooseSchema({
  serviceName: {
    type: mongoose.Types.ObjectId,
    ref: "Services",
  },
  chosenTime:{
    type:String,
    require:[false]
  },
reservationTime:{type:String,
    require:[true,"Necesitamos saber la hora a la cual quieres agendar la reserva"]

},
informationAditional:{
    type:String,
    require:[false,"Si necesitas poner alguna informacion adicional seria importante que la dejes aqui"]
},
});
