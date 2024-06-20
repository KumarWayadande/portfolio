import { useContext } from "react";
import { NavbarContext } from "../../store/NavbarContext";

export default function NavItem(prop) {

  const {handleClick, handleModalClick} = useContext(NavbarContext);

  let classes = "py-2.5 mx-5 dark:text-stone-400 font-normal text-stone-700";
  if (prop.isBottomBorder) {
    classes += "border-b-stone-200 border-b-[1px] dark:border-b-stone-800";
  }

  function handleClick1(event){
    event.stopPropagation();
    handleModalClick();
    handleClick(prop.component);
  }

  return (
    <li className={classes}>
      <button onClick={handleClick1}>{prop.content}</button>
    </li>
  );
}
