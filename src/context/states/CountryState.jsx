import React from "react";
import CountryContext from "../CountryContext";
import { useState } from "react";

const CountryState = (props) => {
  const [countryState, setCountryState] = useState("IN");
  const [newsData, setNewsData] = useState([]);
  const [logo, setLogo] = useState("/src/assets/india.svg");
  const [isLoading, setLoader] = useState(true);
  const updateCountryState = (params) => {
    setCountryState(params);
  };
  const updateNewsData = (params) => {
    setNewsData(params);
    console.log(newsData, "---------->Data");
  };
  const updateCountryLogo = (params) => {
    setLogo(params);
  };
  const updateLoaderSate = (params) => {
    setLoader(params);
  };
  return (
    <CountryContext.Provider
      value={{
        state: countryState,
        update: updateCountryState,
        setData: updateNewsData,
        allNewsData: newsData,
        countryLogo: logo,
        updateLogo: updateCountryLogo,
        loaderState: isLoading,
        updateLoad: updateLoaderSate,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
