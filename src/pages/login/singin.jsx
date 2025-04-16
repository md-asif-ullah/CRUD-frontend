import { useState } from "react";
import { Link } from "react-router-dom";
import AuthSideBar from "../../components/authSideBar";

function SignIn() {
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
            placeholder="example@mail.com"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
