import React, { useState, createContext, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
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
import CommonNavBar from "./CommonNavBar";

export default function NavBar() {
  const countryCon = useContext(CountryContext);
  const [dataNews, setDataNews] = useState([]);
  const newsContext = createContext(dataNews);
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);

  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];

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

  // const selectCountry = async (e) => {
  //   console.log(location.pathname);

  //   toggleNavBar.updateCurrentRoute(location.pathname);
  //   console.log(toggleNavBar);
  //   finalArray = [];
  //   let selectedCountry;
  //   if (e.target.getAttribute("data-country")) {
  //     selectedCountry = e.target.getAttribute("data-country");
  //   }
  //   if (e.target.textContent) {
  //     selectedCountry = e.target.textContent;
  //   }
  //   // setCountry(selectedCountry);

  //   countryCon.update(selectedCountry);
  //   if (selectedCountry.toLowerCase() === "us") {
  //     countryCon.updateLogo("/src/assets/us.svg");
  //     const { data } = await supabase
  //       .from("USA_duplicate")
  //       .select("technology")
  //       .not("technology", "is", null);

  //     data.forEach((ele) => {
  //       if (ele.technology) {
  //         finalArray.push(ele.technology);
  //       }
  //     });
  //     countryCon.setData(finalArray);
  //   }

  //   if (selectedCountry.toLowerCase() === "in") {
  //     countryCon.updateLogo("/src/assets/india.svg");
  //     const { data } = await supabase
  //       .from("India_duplicate")
  //       .select("business")
  //       .not("business", "is", null);

  //     data.forEach((ele) => {
  //       if (ele.business) {
  //         finalArray.push(ele.business);
  //       }
  //     });
  //     countryCon.setData(finalArray);
  //   }

  //   if (selectedCountry.toLowerCase() === "ch") {
  //     countryCon.updateLogo("/src/assets/china.svg");
  //     const { data } = await supabase
  //       .from("China_duplicate")
  //       .select("technology")
  //       .not("technology", "is", null);

  //     data.forEach((ele) => {
  //       if (ele.technology) {
  //         finalArray.push(ele.technology);
  //       }
  //     });
  //     countryCon.setData(finalArray);
  //   }

  //   if (selectedCountry.toLowerCase() === "fr") {
  //     countryCon.updateLogo("/src/assets/france.svg");
  //     const { data } = await supabase
  //       .from("France_duplicate")
  //       .select("health")
  //       .not("health", "is", null);

  //     data.forEach((ele) => {
  //       if (ele.health) {
  //         finalArray.push(ele.health);
  //       }
  //     });
  //     countryCon.setData(finalArray);
  //   }
  // };

  return (
    <>
      <div className="relative">
        <CommonNavBar />
        <LoadingBar
          color="#f11946"
          progress={topLoader.state}
          height={3}
          // onLoaderFinished={1}
        />
        {toggleNavBar.state && (
          //px-18 py-10
          <div className="news-navbar-sec flex justify-center content-center overflow-x-hidden">
            <div className="mb-0 md:px-10 text-white flex flex-nowrap gap-8 fixed justify-center z-10 sm:top-30 w-1/2 sm:news-navbar-width top-10">
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
