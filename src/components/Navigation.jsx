import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { FaGoogle } from "react-icons/fa6";

const Navigation = ({ logout }) => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <nav className="bg-blue-500 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            {locale === "en" ? "Notes App" : "Aplikasi Catatan"}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                onClick={toggleLocale}
                className="flex items-center text-red-100 hover:text-red-300 md:p-0 dark:text-white dark:hover:text-red-500"
              >
                <span className="mr-2">{locale === "en" ? "EN" : "ID"}</span>
                <FaGoogle />
              </Link>
            </li>
            <li>
              <Link
                to="/arsip"
                className="text-gray-100 hover:text-gray-300 md:p-0 dark:text-white dark:hover:text-red-500"
              >
                {locale === "en" ? "Archive" : "Arsip"}
              </Link>
            </li>
            <li>
              <Link
                onClick={logout}
                className="text-gray-100 hover:text-gray-300 md:p-0 dark:text-white dark:hover:text-red-500"
              >
                {locale === "en" ? "Logout" : "Keluar"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;
