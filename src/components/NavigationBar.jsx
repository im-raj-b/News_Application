import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./DarkModeSwitcher";
import news from "../assets/news_new.png";

export default function NavigationBar() {
  return (
    <div>
      <nav className="flex flex-row justify-between">
        <div className="">
          <span>
            <Link className="flex items-center" to="/">
              <img src={news} className="h-8 mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                News
              </span>
            </Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span>
            <Switcher />
          </span>
          <span>button</span>
        </div>
      </nav>
      {/* <nav className="flex flex-row items-center justify-center">
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/tech"
          >
            Technology
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/science"
          >
            Science
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/sports"
          >
            Sports
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/business"
          >
            Business
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/entertainment"
          >
            Entertainment
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/health"
          >
            Health
          </Link>
        </span>
        <span>
          <Link
            className="px-4 py-2 text-blue-500 font-semibold hover:text-blue-700"
            to="/about"
          >
            About
          </Link>
        </span>
      </nav> */}

      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Dashboard
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Settings
            </button>
          </li>
          <li role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="home"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        ></div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        ></div>
      </div>
    </div>
  );
}
