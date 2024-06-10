import { useState } from "react";
import ArticleContainer from "./components/ArticleContainer";
import LandingPage from "./components/LandingPage";
import Uses from "./components/Uses";
import Speaking from "./components/Speaking";
import ProjectContainer from "./components/ProjectContainer";
import { IoSunny } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import NavbarItem from "./components/NavbarItem";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);


  let darkModeMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#434343"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>;

  if(darkMode)
      darkModeMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1fbcaa"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>;

  const handleClick = (component) => {
    setCurrentPage(component);
  };

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleModalClick = () => {
    setShowModal(prevValue => !prevValue);
  };

  return (
    <>
      {showModal && <Navbar handleModalClick={handleModalClick} handleComponentClick={handleClick} />}
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          <div className="nav-container flex md:justify-between my-6 justify-end">
            <div className="profile-container">
              {/* <img src="./profile.jpg" className="w-16 hidden rounded-full translate-y-24 absolute border border-gray-200 shadow-sm md:block" alt="" /> */}
            </div>

            <nav className="hidden dark:bg-[#252529] dark:border-gray-800 md:block max-w-fit shadow-sm px-5 py-2.5 rounded-full border border-b-gray-50">
              <div className="flex navbar flex-row space-x-4">
                <NavbarItem
                  handleClick={handleClick}
                  component={<LandingPage />}
                  navbarHeading="About"
                  currentNavbarItem={currentPage.type.name}
                  componentName="LandingPage"
                />
                <NavbarItem
                  handleClick={handleClick}
                  component={<ArticleContainer />}
                  navbarHeading="Articles"
                  currentNavbarItem={currentPage.type.name}
                  componentName="ArticleContainer"
                />
                <NavbarItem
                  handleClick={handleClick}
                  component={<ProjectContainer />}
                  navbarHeading="Projects"
                  currentNavbarItem={currentPage.type.name}
                  componentName="ProjectContainer"
                />
                <NavbarItem
                  handleClick={handleClick}
                  component={<Speaking />}
                  navbarHeading="Speaking"
                  currentNavbarItem={currentPage.type.name}
                  componentName="Speaking"
                />
                <NavbarItem
                  handleClick={handleClick}
                  component={<Uses />}
                  navbarHeading="Uses"
                  currentNavbarItem={currentPage.type.name}
                  componentName="Uses"
                />
              </div>
            </nav>

            <div className="nav-buttons flex justify-end">
             {!showModal && <button
                onClick={handleModalClick}
                className="dark:hover:border-gray-500 dark:shadow-none dark:border-gray-600 dark:border-[1px] dark:bg-[#252529] dark:text-gray-200 md:hidden px-3 py-2 text-sm font-semibold shadow-sm border border-b-gray-200 rounded-full mx-2"
              >
                <span className="flex"><span>Menu</span>{darkModeMenuIcon}</span>
              </button>}
              {!darkMode && (
                <button
                  className="hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2"
                  onClick={darkModeHandler}
                >
                  {" "}
                  <IoSunny fontSize="20px" color="#1fbcaa" />
                </button>
              )}
              {darkMode && (
                <button
                  className="hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2 dark:bg-[#252529] dark:hover:border-gray-500 dark:border-gray-600 dark:border-[1px] dark:hover:text-stone-400 dark:shadow-none"
                  onClick={darkModeHandler}
                >
                  <LuMoonStar fontSize="20px" color="#1fbcaa" />
                </button>
              )}
            </div>
          </div>

          {/* Any intermediate code goes in this section */}
          {/* Start of this section */}

          {currentPage}

          {/* End of this section */}

          <div className="footer flex flex-col items-center md:flex-row justify-between py-10 px-5 my-5 border-t-2 border-gray-100 dark:border-t-[1px] dark:border-gray-800">
            <div className="supportive-links flex gap-5 my-3">
              <NavbarItem
                handleClick={handleClick}
                component={<LandingPage />}
                navbarHeading="About"
                currentNavbarItem={currentPage.type.name}
                componentName="LandingPage"
              />
              <NavbarItem
                handleClick={handleClick}
                component={<ArticleContainer />}
                navbarHeading="Articles"
                currentNavbarItem={currentPage.type.name}
                componentName="ArticleContainer"
              />
              <NavbarItem
                handleClick={handleClick}
                component={<ProjectContainer />}
                navbarHeading="Projects"
                currentNavbarItem={currentPage.type.name}
                componentName="ProjectContainer"
              />
              <NavbarItem
                handleClick={handleClick}
                component={<Speaking />}
                navbarHeading="Speaking"
                currentNavbarItem={currentPage.type.name}
                componentName="Speaking"
              />
              <NavbarItem
                handleClick={handleClick}
                component={<Uses />}
                navbarHeading="Uses"
                currentNavbarItem={currentPage.type.name}
                componentName="Uses"
              />
            </div>
            <div className="copy-right my-3">
              <span className="text-stone-500 text-sm">
                © 2024 Spencer Sharp. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
