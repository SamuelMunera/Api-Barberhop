import express from "express";
import connectDB from "./config/Database.js";
import userRoutes from "./Routes/usersRoutes.js";
import serviceRoutes from "./Routes/serviceRoutes.js"

const app = express();
const port = 3000;


app.use(express.json());
connectDB();


//Routes
app.use(userRoutes)
app.use(serviceRoutes)



//Poniendo en escucha el servidor
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
