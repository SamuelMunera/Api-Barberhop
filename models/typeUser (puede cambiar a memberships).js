import mongoose from "mongoose";


const typeUserSchema = mongooseSchema(
    {
        membershipStatus:{
            type: String,

        },
        typeMembership:{

        }
    }
)