import React, { useState, createContext, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import news from "../assets/news_new.png";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";

import { createClient } from "@supabase/supabase-js";
import Switcher from "./DarkModeSwitcher";
import CountryContext from "../context/CountryContext";
import NavBarContext from "../context/ShowNavBarContext";
import LoadingBar from "react-top-loading-bar";
import TopLoadingContext from "../context/TopLoadContext";
import NavBar from "./NavBar";

export default function NavigationBar({ countryLogo }) {
  const [darkMode, setDarkMode] = useState(light);
  const countryCon = useContext(CountryContext);
  const [defaultCountry, setDefaultCountry] = useState("/src/assets/in.png");
  const [selectIndia, setSelectIndia] = useState("/src/assets/in.png");
  const [selectUsa, setSelectUsa] = useState("/src/assets/us.png");
  const [selectChina, setSelectChina] = useState("/src/assets/ch.png");
  const [selectFrance, setSelectFrance] = useState("/src/assets/fr.png");
  const [dataNews, setDataNews] = useState([]);
  const newsContext = createContext(dataNews);
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);

  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];

  console.log(countryCon, "countryCon");
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      console.log("Scrolling.......");

      const dropDownEle = document.querySelector(".news-country-drop");
      const navbarEle = document.querySelector(".nw-bar");

      if (!dropDownEle.classList.contains("hidden")) {
        dropDownEle.classList.toggle("hidden");
        navbarEle.classList.toggle("z-30");
      }
    });
  }, []);
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
    const navbarEle = document.querySelector(".nw-bar");
    dropDownEle.classList.toggle("hidden");
    dropDownEle.classList.toggle("z-30");
    navbarEle.classList.toggle("z-30");
    // if (!dropDownEle.classList.contains("z-30")) {
    //   dropDownEle.classList.toggle("z-30");
    // }
    // // dropDownEle.classList.toggle("z-30");
    // if (!navbarEle.classList.contains("z-30")) {
    //   navbarEle.classList.toggle("z-30");
    // }

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
  if (countryCon.state === "IN") {
    abbreVation = "(IN)";
  }
  if (countryCon.state === "CH") {
    abbreVation = "(CH)";
  }
  if (countryCon.state === "US") {
    abbreVation = "(US)";
  }
  if (countryCon.state === "FR") {
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
  window.mobileCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  const bool = window.mobileCheck();
  return !bool ? (
    <NavBar
      countryLogo={{
        in: selectIndia,
        us: selectUsa,
        ch: selectChina,
        fr: selectFrance,
        default: defaultCountry,
      }}
    />
  ) : (
    <div className="flex flex-row">
      {/* <nav className="flex flex-row justify-between">
        <div className="">
          <span>
            <Link className="flex items-center" to="/">
              <img src={news} className="h-8 mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                News
              </span>
            </Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span>
            <Switcher />
          </span>
          <span>button</span>
        </div>
      </nav> */}
      {/* <nav className="flex flex-row items-center justify-center">
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/tech"
          >
            Technology
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/science"
          >
            Science
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/sports"
          >
            Sports
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/business"
          >
            Business
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/entertainment"
          >
            Entertainment
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/health"
          >
            Health
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/about"
          >
            About
          </Link>
        </span>
      </nav> */}
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
              className="news-country-drop absolute top-[15px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
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
                        className="h-7 w-7"
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
                        className="h-7 w-7"
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
                        className="h-7 w-7"
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
                        className="h-7 w-7"
                        data-country="France"
                      />
                      FR
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div
              className="news-modal news-sm-modal relative items-center justify-between hidden w-450 md:flex md:w-auto md:order-1"
              id="navbar-language"
            >
              <ul className="flex flex-col  font-medium items-center justify-center p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white">
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 dark:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
        </div>
      </nav>
      {toggleNavBar.state && (
        <div class="fixed nw-bar top-20 z-30 nw-margin left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-blue-600 w-11/12 rounded-3xl h-50">
          <div class="news-list overflow-x-scroll overflow-y-hidden scroll-smooth">
            <ul
              class="relative flex justify-normal p-1 list-none rounded-lg bg-blue-gray-50/60"
              data-tabs="tabs"
              role="list"
            >
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500 rounded-sm"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500 "
                  to="/tech"
                >
                  Technology
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-black font-semibold hover:text-yellow-500"
                  to="/health"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* {toggleNavBar.state && (
        <div class="w-full relative right-0 top-20">
          <div class="w-full relative right-0 top-10 bg-blue-400">
            <ul
              class="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
              data-tabs="tabs"
              role="list"
            >
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/tech"
                >
                  Technology
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li class="flex-auto text-center">
                <Link
                  className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
                  to="/health"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )} */}
    </div>
  );
}
