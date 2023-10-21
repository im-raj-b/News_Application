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

const supabase = createClient(
  "https://tctywptybskokqycvohr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
);
let finalArray = [];
function App() {
  const [count, setCount] = useState([]);
  const [country, setCountry] = useState("India (IN)");
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
      setCount(finalArray);
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
      setCount(finalArray);
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
      setCount(finalArray);
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
      setCount(finalArray);
    }
  };

  const handleClick = () => {
    setShowContent(true);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/main"
          element={
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
              <NewsCards newsData={"hi"} />
            </div>
          }
        />
        <Route
          path="/technology"
          element={
            <div className="main">
              {/* <NavBar
                selectCountry={selectCountry}
                countryLogo={{
                  in: selectIndia,
                  us: selectUsa,
                  ch: selectChina,
                  fr: selectFrance,
                  default: defaultCountry,
                }}
                country={country}
              /> */}
              <NewsCards newsData={count} />
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
