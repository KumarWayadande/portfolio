export default function Heading(prop) {
    const classes = "font-bold dark:text-gray-100 text mt-10 py-4 text-4xl md:text-5xl dark:text-gray-100" + prop.extraClasses;
    return (
      <h2 className={classes}>
        {prop.children}
      </h2>
    );
  }
  