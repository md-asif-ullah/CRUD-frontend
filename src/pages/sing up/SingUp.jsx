import { useState } from "react";
import PhoneDropdown from "../../components/PhoneDropDown";
import { Link } from "react-router";
import sideImage from "../../assets/sideImage.png";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!isChecked) {
      alert("You must agree to receive SMS and emails.");
      return;
    }
  };

  return (
    <div className="bg-[#1f1f1f] flex justify-between items-center h-screen w-full xl:px-40 md:px-10 px-5">
      <section className="mt-24">
        <div className="">
          <h1 className="text-white text-4xl font-bold ">Design with up</h1>
          <p className="text-[#FFFFFFCC] mt-4 text-xl max-w-96">
            Access to thousands of design resources and templates
          </p>
        </div>
        <img
          src={sideImage}
          alt="side-image"
          className="max-w-[538px] max-h-[538px] mt-20"
        />
      </section>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl p-6 bg-white shadow-md rounded-xl"
      >
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
              placeholder="John"
              className="input-style"
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
              placeholder="Doe"
              className="input-style"
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
            placeholder="example@mail.com"
            className="input-style"
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
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="label-style">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="input-style"
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
            type="submit"
            className="mt-6 bg-[#c3c3c3] text-white py-4 px-10 rounded-4xl hover:bg-[#afa8a8] transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-black mt-3 text-sm">
            Already have an account?
            <Link href="/login" className="underline ml-2">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
