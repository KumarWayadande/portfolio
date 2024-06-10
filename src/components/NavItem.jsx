export default function NavItem(prop) {
  let classes = "py-2.5 mx-5 dark:text-stone-400 font-normal text-stone-700";
  if (prop.isBottomBorder) {
    classes += "border-b-stone-200 border-b-[1px] dark:border-b-stone-800";
  }

  function handleClick(event){
    console.log("Clicked");
    event.stopPropagation();
    prop.handleModalClick();
    prop.handleComponentClick(prop.component);
  }

  return (
    <li className={classes}>
      <button onClick={handleClick}>{prop.content}</button>
    </li>
  );
}
