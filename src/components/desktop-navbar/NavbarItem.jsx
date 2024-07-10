import { NavLink } from "react-router-dom";

const NavbarItem = (prop) => {
  let initialClass =
    "dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]";

  const newClass =
    "dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa] text-[#1fbcaa] dark:text-[#1fbcaa]";

  return (
    <>
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
