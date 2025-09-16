import express from "express";
import { UserLogin, UserRegistration } from "../controllers/UserControllers.js";
import { CreateNews, DeleteNews, EditNews, ReadNews } from "../controllers/NewsController.js";
import { AuthVerification } from "../middlewares/AuthVerification.js";


const router = express.Router();

//USER
router.get("/UserRegistration/:email", UserRegistration);
router.get("/UserLogin/:email/:otp", UserLogin);

//CRUD OPERATION IN BLOG
router.post("/CreateNews", AuthVerification, CreateNews);
router.get("/ReadNews", ReadNews);
router.put("/EditNews/:newsId", AuthVerification, EditNews);
router.delete("/DeleteNews/:newsId", AuthVerification, DeleteNews);



export default router;