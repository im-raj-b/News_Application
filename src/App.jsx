import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createClient } from "@supabase/supabase-js";
import NewsCards from "./components/NewsCards";
// import indiaLogo from "./assets/india.svg";
// import usLogo from "./assets/us.svg";
// import chLogo from "./assets/china.svg";
// import frLogo from "./assets/france.svg";
// import dark from "./assets/dark.svg";
// import light from "./assets/light.svg";
import news from "./assets/news.png";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";

const supabase = createClient(
  "https://tctywptybskokqycvohr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
);
let finalArray = [];
function App() {
  // const [count, setCount] = useState([]);
  // const [country, setCountry] = useState("India (IN)");
  const [defaultCountry, setDefaultCountry] = useState("/src/assets/india.svg");
  const [selectIndia, setSelectIndia] = useState("/src/assets/india.svg");
  const [selectUsa, setSelectUsa] = useState("/src/assets/us.svg");
  const [selectChina, setSelectChina] = useState("/src/assets/china.svg");
  const [selectFrance, setSelectFrance] = useState("/src/assets/france.svg");
  const [showContent, setShowContent] = useState(false);

  // useEffect(function () {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //   const { data } = await supabase
  //     .from("NewsData")
  //     .select("dataUS")
  //     .not("dataUS", "is", null);

  //   data.forEach((ele) => {
  //     if (ele.dataUS) {
  //       finalArray.push(ele.dataUS);
  //     }
  //   });
  //   setCount(finalArray);
  // }

  const handleClick = () => {
    setShowContent(true);
  };
  return (
    <>
      <NavBar
        // selectCountry={selectCountry}
        countryLogo={{
          in: selectIndia,
          us: selectUsa,
          ch: selectChina,
          fr: selectFrance,
          default: defaultCountry,
        }}
        // country={country}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/main"
          element={
            <div className="main transition duration-200 dark:bg-gray-900">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
              /> */}
              <NewsCards category="general" />
            </div>
          }
        />
        <Route
          exact
          path="/tech"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"technology"}
              /> */}
              <NewsCards category="technology" key={"technology"} />
            </div>
          }
        />
        <Route
          exact
          path="/general"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"general"}
              /> */}
              <NewsCards category="general" key={"general"} />
            </div>
          }
        />
        <Route
          exact
          path="/science"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"science"}
              /> */}
              <NewsCards category="science" key={"science"} />
            </div>
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"sports"}
              /> */}
              <NewsCards category="sports" key={"sports"} />
            </div>
          }
        />
        <Route
          exact
          path="/business"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"sports"}
              /> */}
              <NewsCards category="business" key={"business"} />
            </div>
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <div className="main">
              {/* <NavBar
                // selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                // country={country}
                key={"sports"}
              /> */}
              <NewsCards category="entertainment" key={"entertainment"} />
            </div>
          }
        />

        {/* {showContent ? (
          <div className="main">
            <NavBar
              selectCountry={selectCountry}
              countryLogo={{
                in: selectIndia,
                us: selectUsa,
                ch: selectChina,
                fr: selectFrance,
                default: defaultCountry,
              }}
              country={country}
            />
            <NewsCards newsData={count} />
          </div>
        ) : (
          <HomePage show={handleClick} />
        )} */}
        {/* <HomePage show={handleClick} /> */}
        {/* {showContent && (
        <div className="main">
          <NavBar
            selectCountry={selectCountry}
            countryLogo={{
              in: selectIndia,
              us: selectUsa,
              ch: selectChina,
              fr: selectFrance,
              default: defaultCountry,
            }}
            country={country}
          />
          <NewsCards newsData={count} /> */}
        {/* <img
          src="https://www.gstatic.com/youtube/img/promos/growth/ddf13c1c1c7a76c5e367063489ca4a6ace2fef8adc8597726b4ec2e46e34151f_129x56.webp"
          alt=""
        /> */}
        {/* </div>
      )} */}
      </Routes>
    </>
  );
}

export default App;
