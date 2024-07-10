import { NAVBAR_ITEM_INFO } from "../../contents/Navbar-item-info";
import NavbarButtons from "../mobile-navbar/NavbarButtons";
import NavbarItem from "../desktop-navbar/NavbarItem";
import NavbarItemContainer from "../desktop-navbar/NavbarItemContainer";

export default function TopNavbarContainer() {
  return (
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
                path={item.path}
                navbarHeading={item.navbarHeading}
              />
            );
          })}
        </NavbarItemContainer>
      </nav>
      <NavbarButtons />
    </div>
  );
}
