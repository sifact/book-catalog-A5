import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menu from "/icon-menu.svg";
import close from "/icon-close.svg";
import newRequest from "../utils/newRequest";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;



  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null!);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
                    translate duration-300 w-4/6 pt-20  gap-4 h-full bg-white flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue
        

        `}
        >
          <img
            className=" absolute top-4 left-4"
            onClick={setOpen}
            src={close}
            alt="Image"
          />
          <div className="space-y-20">
            <div
              className={` flex flex-col justify-center items-center gap-8 md:hidden text-xl md:2xl text-black`}
            >
              <Link to="/books">All Books</Link>

              {/* <Link to="/request">Request Book</Link> */}

              {currentUser && (
                <>
                  <Link to="/wishList">WishList</Link>
                  <Link to="/readingList">Reading List</Link>
                </>
              )}
            </div>
            <div
              className={`text-black flex flex-col justify-center items-center gap-5 md:hidden text-xl md:2xl`}
            >
              {currentUser ? (
                <>
                  <img
                    className="rounded-[50%] w-[40px]"
                    src="/images/noavatar.jpg"
                    alt=""
                  />
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 container mx-auto">
        <div className="flex gap-3 items-center justify-center ">
          <img onClick={setOpen} className="md:hidden" src={menu} alt="Image" />
          <h1 className="text-3xl font-bold">
            <Link to="/">Chapter Quest</Link>
          </h1>

          <div
            className={`ml-32 md:flex justify-center items-center gap-8 hidden text-xl md:2xl `}
          >
            <Link to="/books">All Books</Link>

            {/* <Link to="/request">Request Book</Link> */}

            {currentUser && (
              <>
                <Link to="/wishList">WishList</Link>
                <Link to="/readingList">Reading List</Link>
              </>
            )}
          </div>
        </div>

        <div
          className={`ml-20 md:flex justify-center items-center gap-5 hidden text-xl md:2xl`}
        >
          {currentUser ? (
            <>
              <img
                className="rounded-[50%] w-[40px]"
                src="/images/noavatar.jpg"
                alt=""
              />
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
