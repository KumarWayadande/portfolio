/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useState } from "react";
import LandingPage from "../components/LandingPage";

export const NavbarContext = createContext({
  currentPage:undefined,
  darkMode: undefined,
  showModal: undefined,
  getDarkModeMenuIcon: () => {},
  handleClick: () => {},
  darkModeHandler: () => {},
  handleModalClick: () => {},
});

export function NavbarContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    let darkModeMenuIcon = (
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

    if (darkMode)
      darkModeMenuIcon = (
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

    return darkModeMenuIcon;
  };

  const ctxValue = {
    currentPage: currentPage,
    darkMode: darkMode,
    showModal: showModal,
    getDarkModeMenuIcon: getDarkModeMenuIcon,
    handleClick: handleClick,
    darkModeHandler: darkModeHandler,
    handleModalClick: handleModalClick,
  };

  return (
    <NavbarContext.Provider value={ctxValue}>{children}</NavbarContext.Provider>
  );
}
