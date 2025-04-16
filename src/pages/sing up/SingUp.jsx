import { useState } from "react";
import PhoneDropdown from "../../components/PhoneDropDown";
import { Link } from "react-router";
import AuthSideBar from "../../components/authSideBar";
import axios from "axios";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

    if (!isDefaultChecked) {
      alert("You must agree to the terms to proceed.");
      return;
    }

    if (!isChecked) {
      alert("You must agree to receive SMS and emails.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/signup",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        alert("Signup successful!");
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
    <div className="bg-[#1f1f1f] flex justify-between items-center h-screen w-full xl:px-40 md:px-10 px-5">
      {/* Left Side */}
      <AuthSideBar />
      <form className="max-w-xl p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl font-semibold mb-6">Sign up now</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="label-style">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="enter your first name"
              className="input-style"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="label-style">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="enter your last name"
              className="input-style"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="enter your email address"
            className="input-style"
            required
          />
        </div>
        <div className="mt-4">
          <label className="label-style">Phone Number</label>
          <div className="flex">
            <PhoneDropdown />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="border-y border-r border-gray-300 px-4 py-2 rounded-e-lg w-full"
              required
            />
          </div>
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
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <input
              id="terms"
              type="checkbox"
              checked={isDefaultChecked}
              onChange={(e) => setIsDefaultChecked(e.target.checked)}
              className="checkbox-style"
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the <span className="underline">Terms of Use</span> and
              <span className="underline ml-1">Privacy Policy</span>
            </label>
          </div>

          <div className="flex mt-5">
            <div>
              <input
                id="marketing"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="checkbox-style"
              />
            </div>
            <label htmlFor="marketing" className="ml-2 text-gray-700">
              By creating an account, I am also consenting to receive SMS
              messages and emails, including product new feature updates,
              events, and marketing promotions. 1
            </label>
          </div>
        </div>
        <div className="flex space-x-10 items-center mt-6">
          <button
            onClick={handleSubmit}
            className="mt-6 bg-[#c3c3c3] text-white py-4 px-10 rounded-4xl hover:bg-[#afa8a8] transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-black mt-3 text-sm">
            Already have an account?
            <Link to="/singin" className="underline ml-2">
              sing in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
