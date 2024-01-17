import { FaAngleRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <nav className="w-full rounded-md max-w-screen-xl mx-auto px-4 sm:px-5 md:px-10 text-sm font-inter mt-8">
      <ol className="list-reset flex items-center flex-wrap">
        <li className="flex items-center justify-center">
          <Link
            to={"/"}
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <GoHome className="text-lg"></GoHome>
          </Link>
        </li>

        <li className="mx-2">
          <span className="mx-2 text-xs">
            <FaAngleRight></FaAngleRight>
          </span>
        </li>

        <li>
          <Link
            to={"/"}
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Flashcard
          </Link>
        </li>

        <li className="mx-2">
          <span className="mx-2 text-xs">
            <FaAngleRight></FaAngleRight>
          </span>
        </li>

        <li>
          <Link
            to={"/"}
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Mathematics
          </Link>
        </li>

        <li className="mx-2">
          <span className="mx-2 text-xs">
            <FaAngleRight></FaAngleRight>
          </span>
        </li>

        <li className="text-gradient-5 font-semibold">Relation and Function</li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
