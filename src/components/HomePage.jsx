import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarContext from "../context/ShowNavBarContext";
import TopLoadingContext from "../context/TopLoadContext";
import Typewriter from "typewriter-effect/dist/core";

export default function HomePage() {
  const toggleNavBar = useContext(NavBarContext);
  const topLoader = useContext(TopLoadingContext);

  topLoader.update(0);
  topLoader.update(40);
  useEffect(() => {
    topLoader.update(60);
    toggleNavBar.update(false);
  }, []);
  const showBar = () => {
    toggleNavBar.update(true);
  };
  topLoader.update(100);

  new Typewriter(document.getElementById("typewriter"), {
    strings: ["Welcome to Suddi Samachara!", "You'll get all news here."],
    autoStart: true,
    loop: true,
    delay: 60,
  });

  return (
    <>
      <section class="dark:text-white text-black py-20 relative top-20 dark:bg-gray-900">
        <div class="container mx-auto text-center p-5">
          <h1 class="text-5xl font-bold">News</h1>
          <p class="mt-4 text-lg">Daily news dose</p>

          <div id="typewriter" class="text-2xl font-bold overflow-hidden"></div>
          <button
            onClick={showBar}
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 mt-8 rounded-full"
          >
            <Link to="/main">Fetch News</Link>
          </button>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto text-center p-10 ">
          <h2 class="text-3xl dark:text-white font-bold">What you'll get</h2>
          <p class="mt-4 text-lg dark:text-white">
            Tech-savvy, science-curious, sports-fanatic, health-conscious? Dive
            into today's top headlines across tech, science, sports & health.
            Get informed, stay inspired.
          </p>
        </div>
      </section>

      <footer class="bg-gray-900 text-white py-2 fixed w-full bottom-0">
        <div class="container mx-auto text-center">
          <p>&copy; 2023 Suddi Samachar</p>
        </div>
      </footer>
    </>
  );
}
