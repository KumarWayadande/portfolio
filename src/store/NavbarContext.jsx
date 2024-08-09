/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

// Navbar Context
// Mainly built for navbar
// Handles footer, dark mode and mobile navbar functionality
export const NavbarContext = createContext({
  darkMode: undefined,
  showModal: undefined,
  getDarkModeMenuIcon: () => {},
  darkModeHandler: () => {},
  handleModalClick: () => {},
  getBothModeIcon: () => {},
  onOAuthClick: () => {},
  footerCopyRightText: "",
});

// Global icons for dark and light mode
const LIGHT_MODE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#434343"
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
);

const DARK_MODE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#1fbcaa"
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
);

// Provider Component function that wraps all the children and provides context for use
export function NavbarContextProvider({ children }) {
  // Holds dark mode value fetched from localstorage to further use (true or false)
  // true means dark and false means white mode
  const localStorageDarkModeValue =
    localStorage.getItem("darkMode") === "true" ? true : false;

  // state for toggling darkmode and white mode
  // localStorageDarkModeValue value defines intial value for this state
  const [darkMode, setDarkMode] = useState(localStorageDarkModeValue);

  // showModal toggles display of mobile navbar
  const [showModal, setShowModal] = useState(false);

  // Global Footer text
  let footerCopyRightText = "© 2024 Kumar Wayadande. All rights reserved.";

  // Every time state changes this code runs again.
  // As this is the react component, so following codes is executed again
  // It adds "dark" class to the classlist of the entire document
  // Causing page to be dark
  if (darkMode) document.body.classList.add("dark");
  else document.body.classList.remove("dark");

  // Function to save or change value for dark mode in localstorage
  // Also changes state value to make page dark or light
  const darkModeHandler = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode((prev) => !prev);
  };

  // Handles showing of mobile navbar
  // If true then shows mobile navbar otherwise not
  // Also changes state value for the same
  const handleModalClick = () => {
    setShowModal((prevValue) => !prevValue);
  };

  // Function to get the navbar icon based on the dark or light mode
  // If dark mode -> return DARK_MODE_ICON
  // If light mode -> return LIGHT_MODE_ICON
  const getDarkModeMenuIcon = () => {
    let darkModeMenuIcon = LIGHT_MODE_ICON;
    if (darkMode) darkModeMenuIcon = DARK_MODE_ICON;
    return darkModeMenuIcon;
  };

  // Function to return theme mode icon based on the state of mode.
  // Returns SUN icon if dark mode is enabled
  // Returns MOON icon if light mode is enabled
  // Also returns required classes for the same dark mode icons
  const getBothModeIcon = () => {
    let lightModeBtnClass =
      "mx-1 hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2";
    let darkModeBtnClass =
      "dark:bg-[#252529] dark:hover:border-gray-500 dark:border-gray-600 dark:border-[1px] dark:hover:text-stone-400 dark:shadow-none";
    let btn = null;
    if (!darkMode) {
      btn = <IoSunny fontSize="20px" color="#1fbcaa" />;
    } else {
      btn = <LuMoonStar fontSize="20px" color="#1fbcaa" />;
      lightModeBtnClass += darkModeBtnClass;
    }

    return {
      btn: btn, // Button icon (light or dark)
      btnClass: lightModeBtnClass, // Dark mode Button class
    };
  };

  // function to handler google authentication clicks
  function onOAuthClick() {
    alert();
  }

  // Value to be shared as context
  const ctxValue = {
    darkMode,
    showModal,
    getDarkModeMenuIcon,
    darkModeHandler,
    handleModalClick,
    getBothModeIcon,
    footerCopyRightText,
    onOAuthClick,
  };

  return (
    <NavbarContext.Provider value={ctxValue}>{children}</NavbarContext.Provider>
  );
}
