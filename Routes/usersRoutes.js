import User from "../models/Users.js"; 
import express from "express";
import usersControllers from "../controllers/usersControllers.js";

const Router = express.Router()

Router.get("/api/users", usersControllers.getAll);
Router.get("/api/users/:id", usersControllers.getById);
Router.post("/api/users",usersControllers.create);
Router.patch("/api/users/:id", usersControllers.update);
Router.delete("/api/users/:id", usersControllers.destroy);

export default Router;