import { useState } from "react";
import { Link } from "react-router";
import AuthSideBar from "../../components/authSideBar";
import axios from "axios";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/signin",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        alert("Signin successful!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-[#1f1f1f] flex flex-col lg:flex-row justify-between items-center min-h-screen w-full xl:px-40 md:px-10 px-5 py-10">
      {/* Left Side */}
      <AuthSideBar />

      {/* Right Side - Sign In Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-md rounded-xl p-8 mt-10 lg:mt-0 h-[650px]"
      >
        <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="enter your email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <>
                  <i>
                    <FaRegEyeSlash />
                  </i>
                  <p>Hide</p>
                </>
              ) : (
                <>
                  <i>
                    <IoEyeOutline />
                  </i>
                  <p>Show</p>
                </>
              )}
            </div>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#c3c3c3] text-white font-medium py-3 rounded-4xl hover:bg-[#afa8a8] transition duration-300"
        >
          Sign in
        </button>

        <p className="text-sm text-center text-gray-700 mt-4">
          Don&apos;t have an account?
          <Link to="/" className="text-blue-600 underline ml-1">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
