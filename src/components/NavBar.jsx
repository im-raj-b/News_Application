import React, { useState, createContext, useContext } from "react";
import "../App.css";
import indiaLogo from "../assets/india.svg";
import usLogo from "../assets/us.svg";
import chLogo from "../assets/china.svg";
import frLogo from "../assets/france.svg";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";
import news from "../assets/news_new.png";
import { Link, useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Switcher from "./DarkModeSwitcher";
import CountryContext from "../context/CountryContext";
import NavBarContext from "../context/ShowNavBarContext";
import LoadingBar from "react-top-loading-bar";
import TopLoadingContext from "../context/TopLoadContext";
import NavbarSwipe from "./SwipeNavBar";
import India from "./country/India";
import China from "./country/China";
import Usa from "./country/Usa";
import France from "./country/France";

export default function NavBar({ countryLogo }) {
  const [darkMode, setDarkMode] = useState(light);
  const countryCon = useContext(CountryContext);
  const [defaultCountry, setDefaultCountry] = useState("/src/assets/india.svg");
  const [selectIndia, setSelectIndia] = useState("/src/assets/india.svg");
  const [selectUsa, setSelectUsa] = useState("/src/assets/us.svg");
  const [selectChina, setSelectChina] = useState("/src/assets/china.svg");
  const [selectFrance, setSelectFrance] = useState("/src/assets/france.svg");
  const [dataNews, setDataNews] = useState([]);
  const newsContext = createContext(dataNews);
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);
  const location = useLocation();
  console.log(topLoader, "toploader");

  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];

  console.log(countryCon, "countryCon");
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
  let countrySVG;
  if (countryCon.state === "IN") {
    abbreVation = "(IN)";
    countrySVG = <India />;
  }
  if (countryCon.state === "CH") {
    abbreVation = "(CH)";
    countrySVG = <China />;
  }
  if (countryCon.state === "US") {
    abbreVation = "(US)";
    countrySVG = <Usa />;
  }
  if (countryCon.state === "FR") {
    abbreVation = "(FR)";
    countrySVG = <France />;
  }

  const showMenuModal = () => {
    const modalEle = document.querySelector(".news-modal");
    modalEle.classList.toggle("hidden");
  };

  const selectCountry = async (e) => {
    console.log(location.pathname);

    toggleNavBar.updateCurrentRoute(location.pathname);
    finalArray = [];
    let selectedCountry;
    if (e.target.getAttribute("data-country")) {
      selectedCountry = e.target.getAttribute("data-country");
    }
    if (e.target.textContent) {
      selectedCountry = e.target.textContent;
    }
    // setCountry(selectedCountry);

    countryCon.update(selectedCountry);
    if (selectedCountry.toLowerCase() === "us") {
      countryCon.updateLogo("/src/assets/us.svg");
      const { data } = await supabase
        .from("USA_duplicate")
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      countryCon.setData(finalArray);
    }

    if (selectedCountry.toLowerCase() === "in") {
      countryCon.updateLogo("/src/assets/india.svg");
      const { data } = await supabase
        .from("India_duplicate")
        .select("business")
        .not("business", "is", null);

      data.forEach((ele) => {
        if (ele.business) {
          finalArray.push(ele.business);
        }
      });
      countryCon.setData(finalArray);
    }

    if (selectedCountry.toLowerCase() === "ch") {
      countryCon.updateLogo("/src/assets/china.svg");
      const { data } = await supabase
        .from("China_duplicate")
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      countryCon.setData(finalArray);
    }

    if (selectedCountry.toLowerCase() === "fr") {
      countryCon.updateLogo("/src/assets/france.svg");
      const { data } = await supabase
        .from("France_duplicate")
        .select("health")
        .not("health", "is", null);

      data.forEach((ele) => {
        if (ele.health) {
          finalArray.push(ele.health);
        }
      });
      countryCon.setData(finalArray);
    }
  };

  return (
    <>
      <div className="relative">
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
                {/* <img
                  src={countrySVG}
                  alt=""
                  className="w-5 h-5 mr-2 rounded-full"
                /> */}
                {countryCon.state === "IN" ? (
                  <India />
                ) : countryCon.state === "US" ? (
                  <Usa />
                ) : countryCon.state === "CH" ? (
                  <China />
                ) : (
                  <France />
                )}
                {countryCon.state}
              </button>
              <div
                className="news-country-drop absolute z-50 top-[15px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
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
              {/* <div className="flex justify-center items-center md:hidden">
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
              </div> */}
            </div>
          </div>
        </nav>
        {toggleNavBar.state && (
          //px-18 py-10
          <div className="news-navbar-sec flex justify-center content-center">
            <div className="mb-0 md:px-10 text-white flex flex-nowrap gap-8 fixed justify-center z-10 sm:top-30 w-1/2 sm:news-navbar-width overflow-x-scroll sm:overflow-x-auto top-10">
              <nav className="flex md:flex-wrap sm:flex-none sm:justify-between">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/tech"
                >
                  Technology
                </Link>
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/science"
                >
                  Science
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/sports"
                >
                  Sports
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/business"
                >
                  Business
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/entertainment"
                >
                  Entertainment
                </Link>

                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/health"
                >
                  Health
                </Link>
              </nav>
            </div>
          </div>
        )}
        <LoadingBar
          color="#f11946"
          progress={topLoader.state}
          height={2}
          // onLoaderFinished={1}
        />
      </div>
    </>
  );
}

// <li>
//   <button
//     onClick={changeCategory}
//     id="dropdownNavbarLink"
//     data-dropdown-toggle="dropdownNavbar"
//     className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 dark:text-white"
//   >
//     Categories
//     <svg
//       className="w-2.5 h-2.5 ml-2.5"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 10 6"
//     >
//       <path
//         stroke="currentColor"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="m1 1 4 4 4-4"
//       />
//     </svg>
//   </button>
//   <div
//     id="dropdownNavbar"
//     className="absolute category-drop z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600"
//   >
//     <ul
//       className="py-2 text-sm text-black dark:text-gray-400"
//       aria-labelledby="dropdownLargeButton"
//     >
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/general">General</Link>
//       </li>
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/tech">Technology</Link>
//       </li>
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/science">Science</Link>
//       </li>
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/sports">Sports</Link>
//       </li>
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/business">Business</Link>
//       </li>
//       <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//         <Link to="/entertainment">Entertainment</Link>
//       </li>
//     </ul>
//     {/* <div className="py-1">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </div> */}
//   </div>
// </li>;
