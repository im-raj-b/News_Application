import React, { useState, createContext, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Switcher from "./DarkModeSwitcher";
import CountryContext from "../context/CountryContext";
import NavBarContext from "../context/ShowNavBarContext";
import LoadingBar from "react-top-loading-bar";
import TopLoadingContext from "../context/TopLoadContext";
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
