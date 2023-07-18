import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import newRequest from "../utils/newRequest";
import { toast } from "react-hot-toast";

export interface AlertProps {
  show?: boolean;
  msg?: string;
  type?: string;
}
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  console.log(user);
  const handleChange = (e: any) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        // img: url,
      });
      toast.success("User created successfully");
      navigate("/");
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <form className="w-[400px] p-8 rounded-md shadow-lg">
        <h1 className="text-2xl font-semibold mb-8 text-center">Signup</h1>

        <div className="mb-3 ">
          <label htmlFor="">Username</label>
          <input
            className="w-full p-3 border-[1.9px] border-gray-600 rounded-sm outline-green-900 mt-2"
            name="name"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="">Email</label>
          <input
            className="w-full p-3 border-[1.9px] border-gray-600 rounded-sm outline-green-900 mt-2"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="">Password</label>
          <input
            className="mt-2 w-full p-3 border-[1.9px] border-gray-600 rounded-sm
          outline-green-900"
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <button
          className="text-xl mb-4  w-full py-4 bg-green-900 rounded-sm text-white"
          onClick={handleSubmit}
          id="btn-submit"
        >
          Sign up
        </button>
        <small className="opacity-70">
          Already have an account?
          <Link className="hover:underline ml-3" to="/login">
            Log in now
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Signup;
