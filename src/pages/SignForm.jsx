import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthProvider";
import EmailInput from "../components/formInput/EmailInput";
import PasswordInput from "../components/formInput/PasswordInput";
import { ErrorInput } from "../components/controlInput/ErrorInput";
import { useState } from "react";
import { Loading } from "../components/controlInput/Loading";

const SignForm = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMessage: "",
    loading: false,
  });

  const handleChange = (e) => {
    if (e.target.name === "loading") return;
    setFormData({ ...formData, [e.target.name]: e.target.value, errorMessage: "" });
  };

  const loginFunc = async () => {
    setFormData({ ...formData, loading: true, errorMessage: "", successMessage: "" });

    if (!formData.email || !formData.password) {
      setFormData({ ...formData, errorMessage: "All fields must be filled out" });
    } else {
      try {
        await axios.post("https://server-inky-five.vercel.app/users/login", {
          email: formData.email,
          password: formData.password,
        });

        setFormData({
          ...formData,
          errorMessage: "",
          loading: false,
        });
        setIsLoggedIn(true);
        navigate("/");
      } catch (error) {
        setFormData({
          ...formData,
          errorMessage: "An error occurred while registering. Please try again later.",
          loading: false,
        });
        setIsLoggedIn(false);
      }
    }
  };

  return (
    <div className="w-full h-screen py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-l from-cyan-500 to-blue-500 font-body">
      {" "}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Sign in</h1>
      </div>
      <div className="w-full h-3/4 md:w-3/4 max-w-5xl grid grid-cols-2 border border-gray-200 rounded-2xl bg-white text-gray-500 shadow-lg overflow-hidden mx-auto flex items-center justify-center">
        <div className="col-span-2 lg:col-span-1 py-10 px-10 ">
          <div className="flex flex-col items-center justify-center">
            <EmailInput value={formData.email} onChange={handleChange} />
            <PasswordInput value={formData.password} onChange={handleChange} />
            <div className="w-full py-3 flex items-center justify-center">
              <button
                onClick={loginFunc}
                className="py-2 px-6 rounded-lg bg-yellow-400 text-white font-semibold tracking-wider uppercase transition duration-150 transform hover:scale-105 hover:bg-yellow-500"
              >
                Login
              </button>
            </div>
          </div>

          {/* :::Additional options */}
          <div className="mt-2 flex justify-around items-center text-sm">
            {/* Register */}
            <Link to="/register" className="text-yellow-500 transition duration-150 transform hover:scale-105">
              Register
            </Link>
          </div>
          <div className="lg:hidden mt-5 flex items-center justify-center">
            {formData.errorMessage && <ErrorInput message={formData.errorMessage} />}
            {formData.loading && <Loading />}
          </div>
        </div>

        {/* ::Illustration */}
        <div className="relative hidden lg:col-span-1 w-full h-full bg-[#BACDB0] lg:flex lg:items-center lg:justify-center">
          {formData.errorMessage && <ErrorInput message={formData.errorMessage} />}
          {formData.loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default SignForm;
