import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import newRequest from "../utils/newRequest";

export interface AlertProps {
  show?: boolean;
  msg?: string;
  type?: string;
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // const location = useLocation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err: any) {
      setError(err.response.data);
    }
  };
  // const from = location.state?.from?.pathname || "/";

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <form
        className="w-[400px] p-8 rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-8 text-center">Login</h1>

        <div className="mb-3 ">
          <label htmlFor="">Email</label>
          <input
            className="w-full p-3 border-[1.9px] border-gray-600 rounded-sm outline-green-900 mt-2"
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="text-xl mb-4  w-full py-4 bg-green-900 rounded-sm text-white"
          id="btn-submit"
        >
          Log in
        </button>
        <small className="opacity-70">
          New to Chapter Quest?
          <Link className="hover:underline ml-3" to="/signup">
            Create a New Account
          </Link>
        </small>

        {error && error}
      </form>
    </div>
  );
};

export default Login;
