import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NameInput from "../components/formInput/NameInput";
import EmailInput from "../components/formInput/EmailInput";
import PasswordInput from "../components/formInput/PasswordInput";
import { ErrorInput } from "../components/controlInput/ErrorInput";
import { SuccessInput } from "../components/controlInput/SuccessInput";
import { Loading } from "../components/controlInput/Loading";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    errorMessage: "",
    successMessage: "",
    loading: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleChange = (e) => {
    if (e.target.name === "loading") return;
    setFormData({ ...formData, [e.target.name]: e.target.value, errorMessage: "" });
  };

  const registerFunc = async () => {
    setFormData({ ...formData, loading: true, errorMessage: "", successMessage: "" });

    if (!formData.name || !formData.email || !formData.password) {
      setFormData({ ...formData, errorMessage: "All fields must be filled out", loading: false });
    } else if (!emailRegex.test(formData.email)) {
      setFormData({ ...formData, errorMessage: "Invalid email address", loading: false });
    } else if (!passwordRegex.test(formData.password)) {
      setFormData({
        ...formData,
        errorMessage: "Password must be at least 8 characters long and include at least one letter and one number",
        loading: false,
      });
    } else {
      try {
        const response = await axios.post("https://server-inky-five.vercel.app/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 201) {
          console.log(response);
          setFormData({
            ...formData,
            successMessage: "You successfully read this important alert message.",
            errorMessage: "",
            loading: false,
          });
        }
      } catch (error) {
        console.log(error);
        setFormData({
          ...formData,
          errorMessage: "An error occurred while registering. Please try again later.",
          loading: false,
        });
      }
    }
  };

  return (
    <div className="w-full h-screen py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-l from-cyan-500 to-blue-500 font-body">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Register Now</h1>
      </div>
      <div className="w-full h-3/4 md:w-3/4 max-w-5xl grid grid-cols-2 border border-gray-200 rounded-2xl bg-white text-gray-500 shadow-lg overflow-hidden mx-auto items-center justify-center">
        <div className="col-span-2 lg:col-span-1 py-10 px-10 ">
          <div className="flex flex-col items-center justify-center ">
            <NameInput value={formData.name} onChange={handleChange} />
            <EmailInput value={formData.email} onChange={handleChange} />
            <PasswordInput value={formData.password} onChange={handleChange} />
            <div className="w-full py-3 flex items-center justify-center">
              <button
                onClick={registerFunc}
                id="btn"
                className="py-2 px-6 rounded-lg bg-yellow-400 text-white font-semibold tracking-wider uppercase transition duration-150 transform hover:scale-105 hover:bg-yellow-500"
              >
                Register
              </button>
            </div>
          </div>

          {/* :::Additional options */}
          <div className="mt-2 flex justify-around items-center text-sm">
            <Link to="/login" className="text-yellow-500 transition duration-150 transform hover:scale-105">
              Login
            </Link>
          </div>
          <div className="lg:hidden mt-5 flex items-center justify-center">
            {formData.errorMessage && <ErrorInput message={formData.errorMessage} />}
            {formData.successMessage && <SuccessInput />}
            {formData.loading && <Loading />}
          </div>
        </div>

        {/* ::Illustration */}
        <div className="relative hidden px-16 lg:col-span-1 w-full h-full bg-[#BACDB0] lg:flex lg:items-center lg:justify-center">
          {formData.errorMessage && <ErrorInput message={formData.errorMessage} />}
          {formData.successMessage && <SuccessInput />}
          {formData.loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
