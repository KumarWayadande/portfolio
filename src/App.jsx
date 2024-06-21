import NavbarItem from "./components/desktop-navbar/NavbarItem";
import Navbar from "./components/mobile-navbar/Navbar";
import NavbarItemContainer from "./components/desktop-navbar/NavbarItemContainer";
import { useContext } from "react";
import { NavbarContext } from "./store/NavbarContext";
import NavbarButtons from "./components/mobile-navbar/NavbarButtons";
import { NAVBAR_ITEM_INFO } from "./contents/Navbar-item-info";
export default function App() {
  const { currentPage, showModal, footerCopyRightText } =
    useContext(NavbarContext);

  return (
    <>
      {showModal && <Navbar />}
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          <div className="nav-container flex md:justify-between my-6 justify-end">
            <div className="profile-container">
              {/* <img src="./profile.jpg" className="w-16 hidden rounded-full translate-y-24 absolute border border-gray-200 shadow-sm md:block" alt="" /> */}
              {/* This is just used as a placeholder */}
            </div>

            <nav className="hidden dark:bg-[#252529] dark:border-gray-800 md:block max-w-fit shadow-sm px-5 py-2.5 rounded-full border border-b-gray-50">
              <NavbarItemContainer>
                {NAVBAR_ITEM_INFO.map((item) => {
                  return (
                    <NavbarItem
                      key={item.id}
                      component={item.component}
                      navbarHeading={item.navbarHeading}
                      componentName={item.componentName}
                    />
                  );
                })}
                {/* 
                <NavbarItem
                  component={<ArticleContainer />}
                  navbarHeading="Articles"
                  componentName="ArticleContainer"
                />
                <NavbarItem
                  component={<ProjectContainer />}
                  navbarHeading="Projects"
                  componentName="ProjectContainer"
                />
                <NavbarItem
                  component={<Speaking />}
                  navbarHeading="Speaking"
                  componentName="Speaking"
                />
                <NavbarItem
                  component={<Uses />}
                  navbarHeading="Uses"
                  componentName="Uses"
                />*/}
              </NavbarItemContainer>
            </nav>
            <NavbarButtons />
          </div>

          {/* Any intermediate code goes in this section */}
          {/* Start of this section */}
          {/* This currentPage is handled entirely in the NavbarContext.jsx file */}

          {currentPage}

          {/* End of this section */}

          <div className="footer flex flex-col items-center md:flex-row justify-between py-10 px-5 my-5 border-t-2 border-gray-100 dark:border-t-[1px] dark:border-gray-800">
            <NavbarItemContainer extraClasses="my-3">
              {NAVBAR_ITEM_INFO.map((item) => {
                return (
                  <NavbarItem
                    key={item.id}
                    component={item.component}
                    navbarHeading={item.navbarHeading}
                    componentName={item.componentName}
                  />
                );
              })}
              {/* <NavbarItem
                component={<LandingPage />}
                navbarHeading="About"
                componentName="LandingPage"
              />
              <NavbarItem
                component={<ArticleContainer />}
                navbarHeading="Articles"
                componentName="ArticleContainer"
              />
              <NavbarItem
                component={<ProjectContainer />}
                navbarHeading="Projects"
                componentName="ProjectContainer"
              />
              <NavbarItem
                component={<Speaking />}
                navbarHeading="Speaking"
                componentName="Speaking"
              />
              <NavbarItem
                component={<Uses />}
                navbarHeading="Uses"
                componentName="Uses"
              /> */}
            </NavbarItemContainer>
            <div className="copy-right my-3">
              <span className="text-stone-500 text-sm">
                {footerCopyRightText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
