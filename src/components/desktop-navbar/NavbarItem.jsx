import { NavLink } from "react-router-dom";


// Navbar item - It displays navbar items (about, articles, projects...)
const NavbarItem = (prop) => {
  // Classes when link is inactive
  let initialClass =
    "dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]";

  // Classes when link is active
  const newClass =
    "dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa] text-[#1fbcaa] dark:text-[#1fbcaa]";

  return (
    <>
      {/* 

      React-router-dom <Navlink /> component 
      It displays navbar items (about, articles, projects...)
      When clicked then renders the desired page

    */}
      <NavLink
        to={prop.path}
        className={({ isActive }) => (isActive ? newClass : initialClass)}
      >
        {prop.navbarHeading}
      </NavLink>
    </>
  );
};

export default NavbarItem;
