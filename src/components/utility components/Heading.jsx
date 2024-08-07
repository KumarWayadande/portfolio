const Heading = (prop) => {
  let classes =
    "leading-[1.2] text-4xl sm:text-4xl md:text-5xl font-bold dark:text-white " +
    prop.extraClasses;
  return <span className={classes}>{prop.heading}</span>;
};

export default Heading;
