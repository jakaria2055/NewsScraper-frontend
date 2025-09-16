import React from "react";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserOtp() {
  let navigate = useNavigate();

  let { OTPFormData, OTPFormOnChange, VerifyLoginRequest } = UserStore();

  const onFormSubmit = async () => {
    if (ValidationHelper.IsEmpty(OTPFormData.otp)) {
      toast.error("Invalid OTP");
    } else {
      let res = await VerifyLoginRequest(OTPFormData.otp);
      res ? navigate("/") : toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <div className="w-full md:w-2/5">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Enter Verification Code
            </h4>
            <p className="text-gray-600 mb-4">
              A verification code has been sent to the email address you provide
            </p>
            <input
              value={OTPFormData.otp}
              onChange={(e) => OTPFormOnChange("otp", e.target.value)}
              placeholder="Verification"
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              submit={false}
              className="w-full mt-3 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOtp;
