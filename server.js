import 'dotenv/config'
import mongoose from "mongoose";
import { MONGO_URL, PORT } from "./src/config/config.js";
import app from "./app.js";

mongoose.connect(MONGO_URL).then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY.");

    app.listen(PORT, ()=>{
        console.log(`Server Running at port: ${PORT}`);
    });
}).catch((err)=>{
    console.log(`Databse connection is error due to ${err}`);
})