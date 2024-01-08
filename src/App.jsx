import { useContext, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createClient } from "@supabase/supabase-js";
import NewsCards from "./components/NewsCards";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NavBarState from "./context/states/NavBarState";
import LoadingBar from "react-top-loading-bar";
import TopLoadingBar from "./context/states/TopLoadingBar";
import ActiveRouteState from "./context/states/ActiveRoute";
import RouteContext from "./context/ActiveRouteContext";
import SwipeHandler from "../SwipeHandler";
import NavigationBar from "./components/NavigationBar";
import NavBarContext from "./context/ShowNavBarContext";
// import CountryContext from "./context/CountryContext";
import CountryState from "./context/states/CountryState";

const supabase = createClient(
  "https://tctywptybskokqycvohr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
);
let finalArray = [];
function App() {
  // const [count, setCount] = useState([]);
  const currentRoute = useContext(NavBarContext);

  const activeRoute = useContext(RouteContext);
  // const country = useEffect(CountryContext);
  console.log(activeRoute, "active", currentRoute);
  useEffect(function () {
    // document.addEventListener("click", () => {
    //   const dropDownEle = document.querySelector(".news-country-drop");
    //   if (!dropDownEle.classList.contains("hidden"))
    //     dropDownEle.classList.toggle("hidden");
    // });
  }, []);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/tech", label: "Technology" },
    { path: "/science", label: "Science" },
    { path: "/sports", label: "Sports" },
    { path: "/business", label: "Business" },
    { path: "/entertainment", label: "Entertainment" },
    { path: "/health", label: "Health" },
  ];

  return (
    <>
      <TopLoadingBar>
        <CountryState>
          <NavBarState>
            {/* <NavBar
              countryLogo={{
                in: selectIndia,
                us: selectUsa,
                ch: selectChina,
                fr: selectFrance,
                default: defaultCountry,
              }}
            /> */}
            <NavigationBar />
            {/* <LoadingBar
              color="#f11946"
              progress={50}
              height={2}
              onLoaderFinished={1}
            /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />

              <Route
                path="/main"
                element={
                  <div
                    className="main transition duration-200 dark:bg-gray-900"
                    id="swipeElement"
                  >
                    <NewsCards category="general" />
                  </div>
                }
              />
              <Route
                exact
                path="/tech"
                element={
                  <div className="main">
                    <NewsCards category="technology" key={"technology"} />
                  </div>
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <div className="main">
                    <NewsCards category="general" key={"general"} />
                  </div>
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <div className="main">
                    <NewsCards category="science" key={"science"} />
                  </div>
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <div className="main">
                    <NewsCards category="sports" key={"sports"} />
                  </div>
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <div className="main">
                    <NewsCards category="business" key={"business"} />
                  </div>
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <div className="main">
                    <NewsCards category="entertainment" key={"entertainment"} />
                  </div>
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <div className="main">
                    <NewsCards category="health" key={"health"} />
                  </div>
                }
              />
            </Routes>
          </NavBarState>
        </CountryState>
      </TopLoadingBar>

      {/* <img
          src="https://www.gstatic.com/youtube/img/promos/growth/ddf13c1c1c7a76c5e367063489ca4a6ace2fef8adc8597726b4ec2e46e34151f_129x56.webp"
          alt=""
        /> */}
      {/* </div>
      )} */}
    </>
  );
}

export default App;
