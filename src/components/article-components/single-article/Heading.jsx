// Component to display Heading for the article, Main heading is displayed using this component
export default function Heading(prop) {
  const classes =
    "font-bold dark:text-gray-100 text py-4 text-4xl md:text-5xl dark:text-gray-100" +
    prop.extraClasses; // Some extra classes to be added
  return <h2 className={classes}>{prop.children}</h2>;
}
