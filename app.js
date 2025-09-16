import cookieParser from "cookie-parser";
import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import router from "./src/routes/api.js";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();


//MIDDLEWARES
app.use(cookieParser());
app.use(cors());
app.use(hpp());
app.use(helmet());


//PARSE
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true, limit: "10mb"}));

//RATE LIMIT
const limiter = rateLimit({
    windowMs: 20*60*1000,
    max: 1000
});


app.use(limiter);
app.set("etag", false);
app.use('/api/v1', router);


app.use(express.static('client/dist'));


// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

export default app;