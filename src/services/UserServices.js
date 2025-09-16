import UserModel from "../models/UserModel.js";
import { EmailSend } from "../utility/EmailHelper.js";
import { EncodeToken } from "../utility/TokenHelper.js";

export const UserRegistrationService = async (req) => {
  try {
    let email = req.params.email;
    let reqBody = req.body;

    let code = Math.floor(100000 + Math.random() * 900000);

    let emailText = `Your Verification Code is ${code}`;
    let emailSubject = "Email verification of NewsScraper";

    await EmailSend(email, emailText, emailSubject);

    await UserModel.updateOne(
      { email: email },
      {
        $set: {
          ...reqBody,
          otp: code,
        },
      },
      { upsert: true }
    );
    return { status: "success", message: "Your OTP has ben sent" };
  } catch (e) {
    return { status: "fail", data: e.message || e.toString() };
  }
};

export const UserLoginService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    let user = await UserModel.find({
      email: email,
      otp: otp,
    }).countDocuments();

    if (user == 1) {
      let user_id = await UserModel.find({
        email: email,
        otp: otp,
      }).select("_id");

      let token = EncodeToken(email, user_id[0]["_id"].toString());

      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });
      return { status: "success", message: "Your OTP is valid", token: token };
    } else {
      return { status: "failed", message: "Your OTP is Invalid" };
    }
  } catch (error) {
    return { status: "fail", data: error.message || error.toString() };
  }
};
