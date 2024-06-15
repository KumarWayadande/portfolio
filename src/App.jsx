import ArticleContainer from "./components/ArticleContainer";
import LandingPage from "./components/LandingPage";
import Uses from "./components/Uses";
import Speaking from "./components/Speaking";
import ProjectContainer from "./components/ProjectContainer";
import NavbarItem from "./components/NavbarItem";
import Navbar from "./components/Navbar";
import NavbarItemContainer from "./components/NavbarItemContainer";
import { useContext } from "react";
import { NavbarContext } from "./store/NavbarContext";
import NavbarButtons from "./components/NavbarButtons";
export default function App() {
  const { currentPage, showModal } = useContext(NavbarContext);

  return (
    <>
      {showModal && <Navbar />}
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          <div className="nav-container flex md:justify-between my-6 justify-end">
            <div className="profile-container">
              {/* <img src="./profile.jpg" className="w-16 hidden rounded-full translate-y-24 absolute border border-gray-200 shadow-sm md:block" alt="" /> */}
            </div>

            <nav className="hidden dark:bg-[#252529] dark:border-gray-800 md:block max-w-fit shadow-sm px-5 py-2.5 rounded-full border border-b-gray-50">
              <NavbarItemContainer>
                <NavbarItem
                  component={<LandingPage />}
                  navbarHeading="About"
                  // currentNavbarItem={currentPage.type.name}
                  componentName="LandingPage"
                />
                <NavbarItem
                  // handleClick={handleClick}
                  component={<ArticleContainer />}
                  navbarHeading="Articles"
                  // currentNavbarItem={currentPage.type.name}
                  componentName="ArticleContainer"
                />
                <NavbarItem
                  // handleClick={handleClick}
                  component={<ProjectContainer />}
                  navbarHeading="Projects"
                  // currentNavbarItem={currentPage.type.name}
                  componentName="ProjectContainer"
                />
                <NavbarItem
                  // handleClick={handleClick}
                  component={<Speaking />}
                  navbarHeading="Speaking"
                  // currentNavbarItem={currentPage.type.name}
                  componentName="Speaking"
                />
                <NavbarItem
                  // handleClick={handleClick}
                  component={<Uses />}
                  navbarHeading="Uses"
                  // currentNavbarItem={currentPage.type.name}
                  componentName="Uses"
                />
              </NavbarItemContainer>
            </nav>
            <NavbarButtons />
          </div>

          {/* Any intermediate code goes in this section */}
          {/* Start of this section */}

          {currentPage}

          {/* End of this section */}

          <div className="footer flex flex-col items-center md:flex-row justify-between py-10 px-5 my-5 border-t-2 border-gray-100 dark:border-t-[1px] dark:border-gray-800">
            <NavbarItemContainer extraClasses="my-3">
              <NavbarItem
                // handleClick={handleClick}
                component={<LandingPage />}
                navbarHeading="About"
                // currentNavbarItem={currentPage.type.name}
                componentName="LandingPage"
              />
              <NavbarItem
                // handleClick={handleClick}
                component={<ArticleContainer />}
                navbarHeading="Articles"
                // currentNavbarItem={currentPage.type.name}
                componentName="ArticleContainer"
              />
              <NavbarItem
                // handleClick={handleClick}
                component={<ProjectContainer />}
                navbarHeading="Projects"
                // currentNavbarItem={currentPage.type.name}
                componentName="ProjectContainer"
              />
              <NavbarItem
                // handleClick={handleClick}
                component={<Speaking />}
                navbarHeading="Speaking"
                // currentNavbarItem={currentPage.type.name}
                componentName="Speaking"
              />
              <NavbarItem
                // handleClick={handleClick}
                component={<Uses />}
                navbarHeading="Uses"
                // currentNavbarItem={currentPage.type.name}
                componentName="Uses"
              />
            </NavbarItemContainer>
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
