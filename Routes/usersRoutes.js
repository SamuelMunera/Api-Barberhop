import User from "../models/Users.js"; 
import express from "express";
import usersControllers from "../controllers/usersControllers.js";

const Router = express.Router()

Router.get("/api/Users", usersControllers.getAll);
Router.get("/api/Users/:id", usersControllers.getById);
Router.post("/api/Users",usersControllers.create);
Router.patch("/api/Users/:id", usersControllers.update);
Router.delete("/api/Users/:id", usersControllers.destroy);

export default Router;