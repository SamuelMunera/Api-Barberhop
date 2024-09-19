import mongoose from "mongoose";

const membershipSchema = mongoose.Schema(
  {
    typeOfMembership: {
      type: String,
      required: [
        true,
        "Necesitamos saber el tipo de membresia para poder crearla",
      ],
    },
    price: {
      type: String,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timeStamp: true }
);
const Membership = mongoose.model("Membership", membershipSchema);
export default Membership;
