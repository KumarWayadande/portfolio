/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { NAVBAR_ITEM_INFO } from "../../contents/Navbar-item-info";
import NavbarItem from "../desktop-navbar/NavbarItem";
import NavbarItemContainer from "../desktop-navbar/NavbarItemContainer";

const  FooterNavbarContainer = ({ footerCopyRightText }) => {
  return (
    <div className="footer flex flex-col items-center md:flex-row justify-between py-10 px-5 my-5 border-t-2 border-gray-100 dark:border-t-[1px] dark:border-gray-800">
      <NavbarItemContainer extraClasses="my-3">
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
      <div className="copy-right my-3">
        <span className="text-stone-500 text-sm">{footerCopyRightText}</span>
      </div>
    </div>
  );
}


export default FooterNavbarContainer;