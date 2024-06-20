import { createPortal } from "react-dom";
import NavItemContainer from "./NavItemContainer";
import NavItem from "./NavItem";
import LandingPage from "../utility components/LandingPage";
import ArticleContainer from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import { NavbarContext } from "../../store/NavbarContext";
import { useContext } from "react";

export default function Navbar() {
  const {handleModalClick} = useContext(NavbarContext);
  // handleComponentClick
  return createPortal(
    // <nav className="md:hidden bg-[#050505e1] backdrop-blur-sm w-[100%]  z-10 absolute">
    <nav onClick={handleModalClick} className="md:hidden bg-zinc-800/40 fixed backdrop-blur-sm dark:bg-black/80 opacity-100 w-[100%] z-40 inset-0">
      <div className="inner-navbar-container dark:bg-zinc-900 bg-white w-[95%] mx-auto my-10 rounded-3xl flex flex-col">
        <div className="navigator flex items-center flex-row justify-between px-10 py-5">
          <div>
            <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              Navigator
            </span>
          </div>
          <div>
            <span
              className="text-2xl cursor-pointer dark:text-stone-300"
              onClick={(event) => {
                event.stopPropagation();
                handleModalClick();}}
            >
              x
            </span>
          </div>
        </div>
        <NavItemContainer>
          <>
            <NavItem
              content="About"
              isBottomBorder
              component={<LandingPage />}
            />
            <NavItem
              content="Articles"
              isBottomBorder
              component={<ArticleContainer />}
            />
            <NavItem
              content="Projects"
              isBottomBorder
              component={<ProjectContainer />}
            />
            <NavItem
              content="Speaking"
              isBottomBorder
              component={<Speaking />}
            />
            <NavItem
              content="Uses"
              isBottomBorder={false}
              component={<Uses />}
            />
          </>
        </NavItemContainer>
      </div>
    </nav>,
    document.getElementById("navbar")
  );
}
