import React from "react";
import UserStore from "../../store/UserStore";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper";
import UserSubmitButton from "./UserSubmitButton";
import { useNavigate } from "react-router-dom";

function UserLoginForm() {
  let navigate = useNavigate();
  let { LoginFormData, LoginFormOnChange, UserOTPRequest } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Valid Email Address Required");
    } else {
      let res = await UserOTPRequest(LoginFormData);
      res ? navigate("/otp") : toast.error("Something went wrong!");
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-center">
        <div className="w-full md:w-2/5">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Enter Credential Data
            </h4>
            <p className="text-gray-600 mb-6">
              A verification code will be sent to the email address you provide
            </p>

            <div className="space-y-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={LoginFormData.email}
                onChange={(e) => LoginFormOnChange("email", e.target.value)}
                placeholder="Email Address"
                type="email"
                required
              />

              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={LoginFormData.name}
                onChange={(e) => LoginFormOnChange("name", e.target.value)}
                placeholder="Name"
                type="text"
                required
              />

              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={LoginFormData.bio}
                onChange={(e) => LoginFormOnChange("bio", e.target.value)}
                placeholder="Profession"
                type="text"
              />
            </div>

            <UserSubmitButton
              onClick={onFormSubmit}
              className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLoginForm;
