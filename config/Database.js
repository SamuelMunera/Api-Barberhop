import mongoose from "mongoose";
async function connectDB() {
    try {
        const connection = await mongoose.connect(
"mongodb://localhost:27017/DatabaseBarbershop"
        );
        console.log("Se ha establecido la conexión con la Base de Datos :) ")
    }catch (error){
        console.log(`Ups!, ha ocurrido un error -> ${error}`);
        process.exit(1);
    }
    
};
export default connectDB;