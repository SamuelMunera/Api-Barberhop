import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Timestamp } from "bson";
const userSchema = mongoose.Schema(
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
    LastName: {
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
    Membership: {
      type: mongoose.Types.ObjectId,
      ref: "Membership",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const passwordHash = await bcrypt.hash(this.Password, 10);
  this.Password = passwordHash;
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
