import mongoose from "mongoose";

const typeUserSchema = mongoose.Schema({
    userType:{
        type:String,
        require: [
            true,
            "Necesitamos saber el tipo de usuario",
          ],
    }
})

const typeUser = mongoose.model("typeUser", typeUserSchema )
export default typeUser;