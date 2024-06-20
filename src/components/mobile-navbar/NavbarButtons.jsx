import { useContext } from "react";
import { NavbarContext } from "../../store/NavbarContext";

export default function NavbarButtons() {
  const {
    showModal,
    handleModalClick,
    getDarkModeMenuIcon,
    darkModeHandler,
    getBothModeIcon,
  } = useContext(NavbarContext);

  const {btn, btnClass} = getBothModeIcon();
  return (
    <div className="nav-buttons flex justify-end">
      {!showModal && (
        <button
          onClick={handleModalClick}
          className="dark:hover:border-gray-500 dark:shadow-none dark:border-gray-600 dark:border-[1px] dark:bg-[#252529] dark:text-gray-200 md:hidden px-3 py-2 text-sm font-semibold shadow-sm border border-b-gray-200 rounded-full mx-2"
        >
          <span className="flex">
            <span>Menu</span>
            {getDarkModeMenuIcon()}
          </span>
        </button>
      )}
      <button className={btnClass} onClick={darkModeHandler}>
        {btn}
      </button>
    </div>
  );
}
