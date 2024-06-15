/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useState } from "react";
import LandingPage from "../components/LandingPage";
import { IoSunny } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

export const NavbarContext = createContext({
  currentPage: undefined,
  darkMode: undefined,
  showModal: undefined,
  getDarkModeMenuIcon: () => {},
  handleClick: () => {},
  darkModeHandler: () => {},
  handleModalClick: () => {},
  getBothModeIcon:() => {},
  footerCopyRightText:""
});

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

export function NavbarContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let footerCopyRightText = "© 2024 Kumar Wayadande. All rights reserved.";

  const handleClick = (component) => {
    setCurrentPage(component);
  };

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleModalClick = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const getDarkModeMenuIcon = () => {
    let darkModeMenuIcon = LIGHT_MODE_ICON;
    if (darkMode) darkModeMenuIcon = DARK_MODE_ICON;
    return darkModeMenuIcon;
  };

  const getBothModeIcon = () => {
    let btnClass =
      "hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2";
    let btn = null;
    if (!darkMode) {
      btn = <IoSunny fontSize="20px" color="#1fbcaa" />;
    } else {
      btn = <LuMoonStar fontSize="20px" color="#1fbcaa" />;
      btnClass +=
        "dark:bg-[#252529] dark:hover:border-gray-500 dark:border-gray-600 dark:border-[1px] dark:hover:text-stone-400 dark:shadow-none";
    }

    return {
      btn:btn,
      btnClass:btnClass
    }
  };

  const ctxValue = {
    currentPage: currentPage,
    darkMode: darkMode,
    showModal: showModal,
    getDarkModeMenuIcon: getDarkModeMenuIcon,
    handleClick: handleClick,
    darkModeHandler: darkModeHandler,
    handleModalClick: handleModalClick,
    getBothModeIcon:getBothModeIcon,
    footerCopyRightText:footerCopyRightText
  };

  return (
    <NavbarContext.Provider value={ctxValue}>{children}</NavbarContext.Provider>
  );
}
