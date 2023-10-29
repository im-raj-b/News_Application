import React, { useContext } from "react";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function NewsCards({ category }) {
  const [dataNews, setDataNews] = useState([]);
  const [value, setValue] = useState("");
  // const news = useContext(newsContext);
  // console.log(news, "context");
  const supabase = createClient(
    "https://tctywptybskokqycvohr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
  );
  let finalArray = [];
  useEffect(
    function () {
      console.log("useEffect");
      const fetchData = async () => {
        await getCountries();
        // await getTech();
      };

      fetchData();
    },
    [value]
  );

  async function getCountries() {
    if (category.toLowerCase() === "general") {
      const { data } = await supabase
        .from("India_duplicate")
        .select("general")
        .not("general", "is", null);

      data.forEach((ele) => {
        if (ele.general) {
          finalArray.push(ele.general);
        }
      });
      setDataNews(finalArray);
      return;
    }
    if (category.toLowerCase() === "science") {
      const { data } = await supabase
        .from("India_duplicate")
        .select("science")
        .not("science", "is", null);

      data.forEach((ele) => {
        if (ele.science) {
          finalArray.push(ele.science);
        }
      });
      setDataNews(finalArray);
      return;
    }
    if (category.toLowerCase() === "sports") {
      const { data } = await supabase
        .from("India_duplicate")
        .select("sports")
        .not("sports", "is", null);

      data.forEach((ele) => {
        if (ele.sports) {
          finalArray.push(ele.sports);
        }
      });
      setDataNews(finalArray);
      return;
    }
    if (category.toLowerCase() === "entertainment") {
      const { data } = await supabase
        .from("India_duplicate")
        .select("entertainment")
        .not("entertainment", "is", null);

      data.forEach((ele) => {
        if (ele.entertainment) {
          finalArray.push(ele.entertainment);
        }
      });
      setDataNews(finalArray);
      return;
    }
    if (category.toLowerCase() === "business") {
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
      return;
    }
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
      setDataNews(finalArray);
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
      <div className="h-screen grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1 relative top-20 items-stretch">
        {dataNews.map((ele) => {
          // console.log(ele, "got it");
          return (
            <>
              {ele
                ? ele.map((eachEle, index) => {
                    return (
                      <div>
                        <NewsCard data={eachEle} key={index} />
                      </div>
                    );
                  })
                : ""}
            </>
          );
        })}
      </div>
    </>
  );
}

const NewsCard = function ({ data }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 mx-4 my-4 h-fit shadow-[5px_5px_0px_0px_rgba(45,212,191)] dark:bg-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={data.urlToImage}
          alt=""
          loading="lazy"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-800">{data.content}</p> */}
        <a
          target="_blank"
          href={data.url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-gray-300 border hover:border-gray-700 dark:bg-purple-500 dark:text-white"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
