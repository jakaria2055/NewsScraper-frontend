import { DecodeToken } from "../utility/TokenHelper.js";

export const AuthVerification = (req, res, next) =>{
    const token = req.headers.token || req.cookies.token;

    const decoded = DecodeToken(token);

    if(!decoded) {
        return res.status(401).json({status: "failed", message: "Unauthorized user"});
    }

    const {email, user_id} = decoded;
    req.headers.email = email;
    req.headers.user_id = user_id;

    next();
}