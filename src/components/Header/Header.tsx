import React from "react";
import {
  worldIcon,
  callIcon,
  whatsapp,
  viber,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../assets/icons";
import { logo } from "../../assets/img";

const Header = () => {
  return (
    <div className="header">
      <div className="bg-primary-color p-6 text-lg flex items-center justify-between topbar">
        <div className="flex items-center info">
          <img className="w-5 mr-2" src={worldIcon} alt="email-icon" />
          <span className="mr-5">firststepbiratnagar@gmail.com</span>
          <img className="mr-2 w-5" src={callIcon} alt="call-icon" />
          <span>+977-9851329205</span>
        </div>
        <div className="socials">
          <img className="h-8 mr-4" src={whatsapp} alt="whatsapp-icon" />
          <img className="h-8 mr-4" src={viber} alt="viber-icon" />
          <img className="h-8 mr-4" src={facebook} alt="facebook-icon" />
          <img className="h-8 mr-4" src={instagram} alt="instagram-icon" />
          <img className="h-8 mr-4" src={twitter} alt="twitter-icon" />
          <img className="h-8 mr-4" src={youtube} alt="youtube-icon" />
        </div>
      </div>

      <div className="bg-color-1 px-6 py-4 bottom-bar">
        <img className="h-16" src={logo} alt="logo" />
        <div>
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown hover{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
