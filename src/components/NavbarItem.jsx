import { useContext } from "react";
import { NavbarContext } from "../store/NavbarContext";

const NavbarItem = (prop) => {

  const {currentPage, handleClick} = useContext(NavbarContext);

  let classes =
    "dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]";
    if(currentPage.type.name == prop.componentName){
        // classes = " text-[#1fbcaa]";
        classes = "dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa] text-[#1fbcaa] dark:text-[#1fbcaa]";
    }
  return (
    <div className={classes} onClick={() => handleClick(prop.component)}>
      {prop.navbarHeading}
    </div>
  );
};

export default NavbarItem;
