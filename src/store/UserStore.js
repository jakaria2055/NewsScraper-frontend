import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail } from "../utility/utility";
import Cookies from "js-cookie";

const Base_Url = "https://newsscraper-newsportal.onrender.com";


const UserStore = create((set) => ({
 isLogin: () => {
  return !!Cookies.get("token");
},

  LoginFormData: { email: "", name: "", bio: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [name]: value,
      },
    }));
  },

  OTPFormData: { otp: "" },
  OTPFormOnChange: (name, value) => {
    set((state) => ({
      OTPFormData: {
        ...state.OTPFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,

  UserOTPRequest: async (formData) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`${Base_Url}/api/v1/UserRegistration/${formData.email}`, {
      name: formData.name,
      bio: formData.bio,
    });
    setEmail(formData.email);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`${Base_Url}/api/v1/UserLogin/${email}/${otp}`);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  
}));

export default UserStore;
