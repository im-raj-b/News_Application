import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import noImage from "../assets/no-image.png";

const NewsCard = function ({ data, scrollPosition }) {
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 mx-4 my-4 h-fit shadow-[5px_5px_0px_0px_rgba(45,212,191)] dark:bg-gray-700">
    //   <a href="#">
    //     <LazyLoadImage
    //       className="rounded-t-lg"
    //       src={data.urlToImage}
    //       effect="blur"
    //       delayTime={5000}
    //       scrollPosition={scrollPosition}
    //     />
    //     {/* <img
    //       className="rounded-t-lg"
    //       src={data.urlToImage}
    //       alt=""
    //       loading="lazy"
    //     /> */}
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {data.title}
    //       </h5>
    //     </a>
    //     {/* <p className="mb-3 font-normal text-gray-800">{data.content}</p> */}
    //     <a
    //       target="_blank"
    //       href={data.url}
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-gray-300 border hover:border-gray-700 dark:bg-purple-500 dark:text-white"
    //     >
    //       Read more
    //       <svg
    //         className="w-3.5 h-3.5 ml-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl border-black dark:bg-zinc-800 py-8 px-8 md:grid-cols-2 md:gap-2 shadow-[5px_5px_0px_0px_rgba(45,212,191)]">
      <span className="nw-image">
        <LazyLoadImage
          className="rounded-t-lg"
          src={data.urlToImage ? data.urlToImage : noImage}
          effect="blur"
          delayTime={5000}
          scrollPosition={scrollPosition}
        />
        {/* <img
          className="rounded-t-lg"
          src={data.urlToImage}
          alt=""
          loading="lazy"
        /> */}
      </span>

      <div className="flex flex-col pr-1">
        <span title={data.title}>
          <h5 className="text-xl tracking-wide text-black  dark:text-white overflow-hidden line-clamp-3 top-0 mb-8">
            {data.title}
          </h5>
        </span>
        {/* <p className="mb-3 font-normal text-gray-800">{data.content}</p> */}
        <a
          target="_blank"
          href={data.url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black dark:text-purple-500"
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
      <span className="text-yellow-800 text-xs font-medium me-2 rounded dark:text-yellow-300">
        Source: {data.source.name}
      </span>
    </div>
  );
};

export default trackWindowScroll(NewsCard);
