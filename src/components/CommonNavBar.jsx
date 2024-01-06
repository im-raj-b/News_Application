import React from "react";
import Switcher from "./DarkModeSwitcher";

export default function CommonNavBar() {
  return (
    <nav className="border-gray-200 bg-back transition duration-200 dark:bg-gray-900 fixed top-0 z-10 p-5">
      <div className="w-screen flex flex-wrap items-center justify-between p-5 mx-auto max-w-12xl px-2 sm:px-6 lg:px-8 news-navbar">
        <div className="flex left-0 items-center ml-0">
          <Link className="flex items-center" to="/">
            <img src={news} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              News
            </span>
          </Link>
        </div>
        <div className="relative flex items-center md:order-4 w-200 px-8">
          <Switcher />
          <button
            onClick={changeCountry}
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="w-max inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900  rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
          >
            <img
              src={countryCon.countryLogo}
              alt=""
              className="w-5 h-5 mr-2 rounded-full"
            />
            {countryCon.state}
          </button>
          <div
            className="news-country-drop absolute z-50 top-[15px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
            id="language-dropdown-menu"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <img
                      src={countryLogo.in}
                      alt=""
                      className="nw-img cursor-default"
                      data-country="India"
                    />
                    IN
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <img
                      src={countryLogo.us}
                      alt=""
                      className="nw-img cursor-default"
                      data-country="USA"
                    />
                    US
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <img
                      src={countryLogo.ch}
                      alt=""
                      className="nw-img cursor-default"
                      data-country="China"
                    />
                    CH
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div
                    className="inline-flex items-center gap-2"
                    onClick={selectCountry}
                  >
                    <img
                      src={countryLogo.fr}
                      alt=""
                      srcset=""
                      className="nw-img cursor-default"
                      data-country="France"
                    />
                    FR
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
