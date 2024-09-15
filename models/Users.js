import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Timestamp } from "bson";
const userSchema = mongooseSchema(
  {
    userName: {
      type: String,
      required: [true, "El nombre de usuario es requerido para el registro"],
    },
    Password: {
      type: String,
      required: [true, "La contraseña es requerida para el registro"],
    },
    Name: {
      type: String,
      required: [true, "El nombre es requerido para el registro"],
    },
    lastName: {
      type: String,
      required: [true, "El apellido es requerido para el registro"],
    },
    Phone: {
      type: String,
      required: [true, "El numero telefonico es requerido para el registro"],
    },
    Email: {
      type: String,
      required: [true, "El correo es requerido para el registro"],
    },
    Country: {
      type: String,
      required: [true, "El pais es requerido para el registro"],
    },
    City: {
      type: String,
      required: [true, "La ciudad es requerida para el registro"],
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    typeUser: {
      type: mongoose.Types.ObjectId,
      ref: "TypeUser",
    },
  },
  {
    timestamp: true,
  }
);
userSchema.pre("save", async function (next) {
  const passwordHash = await bycrpt.hash(this.password, 10);
  this.password = passwordHash;
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
