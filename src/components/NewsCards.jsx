import React from "react";
import Tabs from "./Tabs";

export default function NewsCards({ newsData }) {
  return (
    <>
      <div className="h-screen grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1 items-center relative top-20">
        {newsData.map((ele) => {
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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4">
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
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.content}
        </p>
        <a
          target="_blank"
          href={data.url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
