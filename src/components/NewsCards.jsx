import React, { useContext } from "react";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import NavBarContext from "../context/ShowNavBarContext";
import TopLoadingContext from "../context/TopLoadContext";
import CountryContext from "../context/CountryContext";
import callForData from "../api/SupaBase";
// import NavBarContext from "../context/ShowNavBarContext";

const NewsCards = function ({ category, scrollPosition }) {
  const [dataNews, setDataNews] = useState([]);
  const [value, setValue] = useState("");
  const toggleNavBar = useContext(NavBarContext);
  const topLoadBar = useContext(TopLoadingContext);
  // const currentNavbar = useContext(NavBarContext);
  // const news = useContext(newsContext);
  // console.log(news, "context");
  const countryData = useContext(CountryContext);
  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];
  topLoadBar.update(0);
  console.log(toggleNavBar, "toggleNavBar-------");

  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: add smooth scrolling behavior
    });
  };

  useEffect(
    function () {
      console.log("useEffect");
      console.log(callForData, "funnnnnn");
      window.addEventListener("scroll", handleScroll);
      const ele = document.querySelectorAll(".news-list li").forEach((ele) => {
        console.log(ele, "elements");

        ele.addEventListener("click", (e) => {
          console.log(e);
          // if (e.target.parentElement.classList.contains("bg-teal-300")) {
          //   e.target.parentElement.classList.remove("bg-teal-300");
          //   e.target.parentElement.classList.remove("rounded");
          //   e.target.parentElement.classList.remove("h-6");
          // } else {
          const allLiEle = document.querySelectorAll(".news-list li");
          allLiEle.forEach((ele) => {
            ele.classList.remove("bg-teal-300");
            ele.classList.remove("rounded");
            ele.classList.remove("h-6");
          });
          e.target.parentElement.classList.add("bg-teal-300");
          e.target.parentElement.classList.add("rounded");
          e.target.parentElement.classList.add("h-6");
          // }
        });
      });
      console.log(ele, "Lists");
      const fetchData = async () => {
        await getCountries();
        // await getTech();
      };
      toggleNavBar.update(true);
      fetchData();
      topLoadBar.update(80);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [value]
  );
  topLoadBar.update(100);

  async function getCountries() {
    topLoadBar.update(60);
    let tableName;

    if (countryData.state.toLowerCase() === "in") {
      tableName = "India_duplicate";
    } else if (countryData.state.toLowerCase() === "us") {
      tableName = "USA_duplicate";
    } else if (countryData.state.toLowerCase() === "fr") {
      tableName = "France_duplicate";
    } else if (countryData.state.toLowerCase() === "ch") {
      tableName = "China_duplicate";
    }
    if (category.toLowerCase() === "general") {
      const { data } = await supabase
        .from(tableName)
        .select("general")
        .not("general", "is", null);

      data.forEach((ele) => {
        if (ele.general) {
          finalArray.push(ele.general);
        }
      });
      countryData.setData(finalArray);
      return;
    }
    if (category.toLowerCase() === "science") {
      const { data } = await supabase
        .from(tableName)
        .select("science")
        .not("science", "is", null);

      data.forEach((ele) => {
        if (ele.science) {
          finalArray.push(ele.science);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "sports") {
      const { data } = await supabase
        .from(tableName)
        .select("sports")
        .not("sports", "is", null);

      data.forEach((ele) => {
        if (ele.sports) {
          finalArray.push(ele.sports);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "entertainment") {
      const { data } = await supabase
        .from(tableName)
        .select("entertainment")
        .not("entertainment", "is", null);

      data.forEach((ele) => {
        if (ele.entertainment) {
          finalArray.push(ele.entertainment);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "business") {
      const { data } = await supabase
        .from(tableName)
        .select("business")
        .not("business", "is", null);

      data.forEach((ele) => {
        if (ele.business) {
          finalArray.push(ele.business);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "health") {
      const { data } = await supabase
        .from(tableName)
        .select("health")
        .not("health", "is", null);

      data.forEach((ele) => {
        if (ele.health) {
          finalArray.push(ele.health);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "technology") {
      const { data } = await supabase
        .from(tableName)
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      countryData.setData(finalArray);

      return;
    } else {
      const { data } = await supabase
        .from("NewsData")
        .select("dataUS")
        .not("dataUS", "is", null);

      data.forEach((ele) => {
        if (ele.dataUS) {
          finalArray.push(ele.dataUS);
        }
      });
      countryData.setData(finalArray);

      return;
    }
  }

  async function getTech() {
    console.log("tech");
    if (category.toLowerCase() === "technology") {
      const { data } = await supabase
        .from("India_duplicate")
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      setDataNews(finalArray);
    }
  }
  return (
    <>
      <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col relative top-20 custom-scrollbar max-h-full">
        {/* <div className="mb-10 px-8 py-10 md:px-10 text-white flex flex-nowrap gap-8 fixed top-30 sm:top-30  w-full">
          <nav class="flex flex-wrap sm:justify-between">
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
        </div> */}
        <div className="mb-auto px-5 py-10 md:py-20 md:px-10 mt-10">
          <div className="mb-20 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div
                className={`scroll-to-top ${
                  isVisible
                    ? "visible dark:text-white text-yellow-500 z-30"
                    : ""
                }`}
              >
                {isVisible && (
                  <button
                    className="arrow"
                    onClick={scrollToTop}
                    title="Go to top"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up"
                    >
                      <path d="M8 6L12 2L16 6" />
                      <path d="M12 2V22" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
                {countryData.allNewsData.map((ele) => {
                  // console.log(ele, "got it");
                  return (
                    <>
                      {ele
                        ? ele.map((eachEle, index) => {
                            let filteredData = {};

                            if (
                              eachEle.title &&
                              eachEle.author &&
                              eachEle.urlToImage &&
                              eachEle.source.name &&
                              eachEle.url
                            ) {
                              filteredData = {
                                title: eachEle.title,
                                author: eachEle.author,
                                content: eachEle.content,
                                urlToImage: eachEle.urlToImage,
                                source: eachEle.source.name,
                                url: eachEle.url,
                              };
                            }
                            return (
                              <div className="">
                                <NewsCard data={eachEle} key={index} />
                              </div>
                            );
                          })
                        : ""}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const NewsCard = function ({ data }) {
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 mx-4 my-4 h-fit shadow-[5px_5px_0px_0px_rgba(45,212,191)] dark:bg-gray-700">
//       <a href="#">
//         <LazyLoadImage
//           className="rounded-t-lg"
//           src={data.urlToImage}
//           effect="blur"
//           delayTime={5000}
//           scrollPosition={scrollPosition}
//         />
//         {/* <img
//           className="rounded-t-lg"
//           src={data.urlToImage}
//           alt=""
//           loading="lazy"
//         /> */}
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {data.title}
//           </h5>
//         </a>
//         {/* <p className="mb-3 font-normal text-gray-800">{data.content}</p> */}
//         <a
//           target="_blank"
//           href={data.url}
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-gray-300 border hover:border-gray-700 dark:bg-purple-500 dark:text-white"
//         >
//           Read more
//           <svg
//             className="w-3.5 h-3.5 ml-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

export default trackWindowScroll(NewsCards);
