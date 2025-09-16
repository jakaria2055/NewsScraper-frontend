import { UserLoginService, UserRegistrationService } from "../services/UserServices.js";


export const UserRegistration = async (req, res) => {
  const result = await UserRegistrationService(req);
  return res.status(200).json(result);
};

export const UserLogin = async (req, res) => {
  const result =await UserLoginService(req);

  if (result.status == "success") {
    const cookieOptions = {
      expire: new Date(Date.now() + 48 * 60 * 60 * 1000),
      httpOnly: false,
    };

    res.cookie("token", result.token, cookieOptions);
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};
