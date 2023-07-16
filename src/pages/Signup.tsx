import { Link } from "react-router-dom";

import { useState } from "react";
import Alert from "../components/Alert";

export interface AlertProps {
  show?: boolean;
  msg?: string;
  type?: string;
}
const Signup = () => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    msg: "",
    type: "",
  });

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <form className="w-[400px] p-8 rounded-md shadow-lg">
        <h1 className="text-2xl font-semibold mb-8 text-center">Signup</h1>
        {alert.show && <Alert {...alert} />}
        <div className="mb-3 ">
          <label htmlFor="">Email</label>
          <input
            className="w-full p-3 border-[1.9px] border-gray-600 rounded-sm outline-green-900 mt-2"
            name="email"
            type="email"
            placeholder="email"
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
          />
        </div>

        <button
          className="text-xl mb-4  w-full py-4 bg-green-900 rounded-sm text-white"
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
