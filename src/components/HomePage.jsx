import React from "react";
import { Link } from "react-router-dom";

export default function HomePage({ show }) {
  return (
    <>
      {/* <div class="flex items-center justify-center h-screen">
        <button
          onClick={show}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch some news
        </button>
      </div> */}
      {/* <header class="bg-blue-500 text-white py-4">
        <div class="container mx-auto">
          <nav class="flex justify-between items-center">
            <div class="logo text-2xl font-bold">News</div>
            <ul class="flex space-x-4">
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      <section class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl font-bold">News</h1>
          <p class="mt-4 text-lg">Daily news dose</p>
          <button
            // onClick={show}
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 mt-8 rounded-full"
          >
            <Link to="/main">Get Started</Link>
          </button>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold">Why React?</h2>
          <p class="mt-4 text-lg">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
      </section>

      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto text-center">
          <p>&copy; 2023 News</p>
        </div>
      </footer>
    </>
  );
}
