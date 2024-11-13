import express from "express";
import servicesControllers from "../controllers/servicesContollers.js";

const Router = express.Router()

    Router.get("/api/Services", servicesControllers.getAll)
    Router.get("/api/Services/:id", servicesControllers.getById)
    Router.post("/api/Services", servicesControllers.create)
    Router.patch("/api/Services/:id", servicesControllers.update)
    Router.delete("/api/Services/:id", servicesControllers.destroy)

    export default Router;