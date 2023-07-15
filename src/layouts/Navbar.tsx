import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "/icon-menu.svg";
import close from "/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "block md:hidden" : "hidden"
        } fixed z-50 bg-neutral-900/70  inset-0    `}
      >
        <div
          style={{ transition: "all 0.3s ease-in-out" }}
          className={`
                    translate duration-300 w-4/6 pt-20 pl-8 gap-4 h-full bg-white flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue
        

        `}
        >
          <img
            className=" absolute top-4 left-4"
            onClick={setOpen}
            src={close}
            alt="Image"
          />

          <div className={`ml-20 md:flex gap-5 hidden text-xl md:2xl`}>
            <Link to="/books">Books</Link>

            <Link to="/request">Request Book</Link>
          </div>
          <div className={`ml-20 md:flex gap-5 hidden`}>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 container mx-auto">
        <div className="flex gap-3 items-center justify-center ">
          <img onClick={setOpen} className="md:hidden" src={menu} alt="Image" />
          <h1 className="text-3xl font-bold">Chapter Quest</h1>

          <div className={`ml-32 md:flex gap-5 hidden text-xl md:2xl `}>
            <Link to="/books">Books</Link>

            <Link to="/request">Request Book</Link>
          </div>
        </div>

        <div className={`ml-20 md:flex gap-5 hidden text-xl md:2xl`}>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
