import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="max-w-screen-xl relative mx-auto px-4 sm:px-5 md:px-10 flex justify-between items-center py-6 font-inter font-normal">
      <div className="w-[9em]">
        <img src="/images/logo.png" alt="logo" className="w-full" />
      </div>

      <div className="hidden sm:block">
        <Link className="mx-4" to={"/"}>
          Home
        </Link>
        <Link className="mx-4" to={"/"}>
          Flashcard
        </Link>
        <Link className="mx-4" to={"/"}>
          Contact
        </Link>
        <Link className="mx-4" to={"/"}>
          FAQ
        </Link>
        <Link
          className="mx-4 bg-gradient-to-t from-gradient-6 to-gradient-5 text-primary-color px-6 py-2 rounded-full"
          to={"/"}
        >
          Login
        </Link>
      </div>

      {showMenu && (
        <div className="flex flex-col font-semibold bg-primary-color absolute right-0 top-7 z-0 w-full max-w-48">
          <Link className="mx-4 my-2" to={"/"}>
            Home
          </Link>
          <Link className="mx-4 my-2" to={"/"}>
            Flashcard
          </Link>
          <Link className="mx-4 my-2" to={"/"}>
            Contact
          </Link>
          <Link className="mx-4 my-2" to={"/"}>
            FAQ
          </Link>
          <Link
            className="mx-4 my-2 bg-gradient-to-t from-gradient-6 to-gradient-5 text-primary-color py-2 rounded-full text-center"
            to={"/"}
          >
            Login
          </Link>
        </div>
      )}

      <div
        className="block sm:hidden z-10"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <AiOutlineClose className="text-xl"></AiOutlineClose>
        ) : (
          <FaBars className="text-xl"></FaBars>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
