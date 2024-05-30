const NavbarItem = (prop) => {
  let classes =
    "dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]";
    if(prop.currentNavbarItem == prop.componentName){
        // classes = " text-[#1fbcaa]";
        classes = "dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa] text-[#1fbcaa] dark:text-[#1fbcaa]";
    }
  return (
    <div className={classes} onClick={() => prop.handleClick(prop.component)}>
      {prop.navbarHeading}
    </div>
  );
};

export default NavbarItem;
