import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const NavbarSwipe = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Link
          className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
          to="/"
        >
          Home
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
          to="/tech"
        >
          tech
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
          to="/science"
        >
          sciemce
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
          to="/sports"
        >
          sports
        </Link>
      </SwiperSlide>
      {/* Add more slides for each navigation link */}
    </Swiper>
  );
};

export default NavbarSwipe;
