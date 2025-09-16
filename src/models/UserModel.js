import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true, lowercase: true},
        otp: {type: String, required: true},
        name: {type: String},
        profileImage: {type: String},
        bio: {type: String},
    },{
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = mongoose.model("users", DataSchema);

export default UserModel;