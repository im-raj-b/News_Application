import React, { useState, createContext } from "react";
import "../App.css";
import indiaLogo from "../assets/india.svg";
import usLogo from "../assets/us.svg";
import chLogo from "../assets/china.svg";
import frLogo from "../assets/france.svg";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";
import news from "../assets/news.png";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Switcher from "./DarkModeSwitcher";

export default function NavBar({ countryLogo }) {
  console.log(countryLogo, "logos");
  const [darkMode, setDarkMode] = useState(light);
  const [country, setCountry] = useState("India (IN)");
  const [defaultCountry, setDefaultCountry] = useState("/src/assets/india.svg");
  const [selectIndia, setSelectIndia] = useState("/src/assets/india.svg");
  const [selectUsa, setSelectUsa] = useState("/src/assets/us.svg");
  const [selectChina, setSelectChina] = useState("/src/assets/china.svg");
  const [selectFrance, setSelectFrance] = useState("/src/assets/france.svg");
  const [dataNews, setDataNews] = useState([]);
  const newsContext = createContext(dataNews);

  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];

  const handleDarkMode = (e) => {
    console.log(e.target, "element");
    console.log(e, "element");

    if (document.documentElement.classNameList.contains("dark")) {
      document.documentElement.classNameList.remove("dark");
    }
  };

  const changeIcon = (e) => {
    if (darkMode === "/src/assets/dark.svg") {
      setDarkMode(light);
    } else {
      setDarkMode(dark);
    }
  };

  const changeCategory = (e) => {
    const dropDownEle = document.querySelector(".category-drop");
    dropDownEle.classList.toggle("hidden");
    // console.log(e);
  };

  const changeCountry = (e) => {
    const dropDownEle = document.querySelector(".news-country-drop");
    dropDownEle.classList.toggle("hidden");
    // console.log(e);
  };

  const countryElements = document.querySelectorAll(".news-country-drop li");
  console.log(countryElements, "ele");

  // countryElements.addEventListener("click", selectCountry);

  // const selectCountry = (e) => {
  //   console.log(e.target.textContent);
  //   // setCountry(e.target.textContent);
  // };
  let abbreVation;
  if (country === "India") {
    abbreVation = "(IN)";
  }
  if (country === "China") {
    abbreVation = "(CH)";
  }
  if (country === "USA") {
    abbreVation = "(US)";
  }
  if (country === "France") {
    abbreVation = "(FR)";
  }

  const showMenuModal = () => {
    const modalEle = document.querySelector(".news-modal");
    modalEle.classList.toggle("hidden");
  };

  const selectCountry = async (e) => {
    console.log(e.target.textContent, "txt");
    console.log(e.target.getAttribute("data-country"), "data-Evnt");
    finalArray = [];
    let selectedCountry;
    if (e.target.getAttribute("data-country")) {
      selectedCountry = e.target.getAttribute("data-country");
    }
    if (e.target.textContent) {
      selectedCountry = e.target.textContent;
    }
    setCountry(selectedCountry);
    if (selectedCountry.toLowerCase() === "usa") {
      setDefaultCountry("/src/assets/us.svg");
      const { data } = await supabase
        .from("USA_duplicate")
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      setDataNews(finalArray);
    }

    if (selectedCountry.toLowerCase() === "india") {
      setDefaultCountry("/src/assets/india.svg");
      const { data } = await supabase
        .from("India_duplicate")
        .select("business")
        .not("business", "is", null);

      data.forEach((ele) => {
        if (ele.business) {
          finalArray.push(ele.business);
        }
      });
      setDataNews(finalArray);
    }

    if (selectedCountry.toLowerCase() === "china") {
      setDefaultCountry("/src/assets/china.svg");
      const { data } = await supabase
        .from("China_duplicate")
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      setDataNews(finalArray);
    }

    if (selectedCountry.toLowerCase() === "france") {
      setDefaultCountry("/src/assets/france.svg");
      const { data } = await supabase
        .from("France_duplicate")
        .select("health")
        .not("health", "is", null);

      data.forEach((ele) => {
        if (ele.health) {
          finalArray.push(ele.health);
        }
      });
      setDataNews(finalArray);
    }
  };

  return (
    <>
      <nav className="border-gray-200 bg-back transition duration-200 dark:bg-gray-900 fixed top-0 z-10">
        <div className="w-screen flex flex-wrap items-center justify-between p-4 mx-auto max-w-12xl px-2 sm:px-6 lg:px-8">
          <div className="flex left-0 items-center ml-0">
            <Link className="flex items-center" to="/">
              <img src={news} className="h-8 mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                News
              </span>
            </Link>
            {/* <a href="" className="flex items-center">
              <img src={news} className="h-8 mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                News
              </span>
            </a> */}
          </div>
          <div className="relative flex items-center md:order-4 nw-width-200">
            {/* <img
              src={darkMode}
              alt=""
              className="w-5 h-5 mr-2 cursor-pointer"
              onClick={changeIcon}
            /> */}
            <Switcher />
            <button
              onClick={changeCountry}
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="w-max inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900  rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            >
              <img
                src={countryLogo.default}
                alt=""
                className="w-5 h-5 mr-2 rounded-full"
              />
              {country} {abbreVation}
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
                      className="inline-flex items-center gap-2 dark:text-white"
                      onClick={selectCountry}
                    >
                      <img
                        src={countryLogo.in}
                        alt=""
                        className="h-7 w-7"
                        data-country="india"
                      />
                      India
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
                      {/* <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg> */}
                      <img
                        src={countryLogo.us}
                        alt=""
                        className="h-7 w-7"
                        data-country="usa"
                      />
                      USA
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
                      {/* <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fill-rule="evenodd" stroke-width="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg> */}
                      <img
                        src={countryLogo.ch}
                        alt=""
                        className="h-7 w-7"
                        data-country="china"
                      />
                      China
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
                      {/* <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlink:href="#a"
                        />
                      </svg> */}
                      <img
                        src={countryLogo.fr}
                        alt=""
                        srcset=""
                        className="h-7 w-7"
                        data-country="france"
                      />
                      France
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              onClick={showMenuModal}
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="news-modal news-sm-modal relative items-center justify-between hidden w-screen md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col  font-medium items-center justify-center p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white">
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-gray-900"
                  aria-current="page"
                >
                  Home
                </a> */}
                <Link to="/">Home</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white">
                <Link to="/about">About</Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white"
                >
                  Services
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white"
                >
                  Pricing
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={changeCategory}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 dark:text-white"
                >
                  Categories
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="absolute category-drop z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-black dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/general">General</Link>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/tech">Technology</Link>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/science">Science</Link>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/sports">Sports</Link>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/business">Business</Link>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link to="/entertainment">Entertainment</Link>
                    </li>
                  </ul>
                  {/* <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
