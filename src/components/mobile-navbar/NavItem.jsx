import { NavLink } from "react-router-dom";

export default function NavItem(prop) {
  let classes = "py-2.5 mx-5 dark:text-stone-400 font-normal text-stone-700";
  if (prop.isBottomBorder) {
    classes += " border-b-[1px] dark:border-b-stone-800";
  }

  return (
    <NavLink to={prop.path}>
      <li className={classes}>{prop.content}</li>
    </NavLink>
  );
}
