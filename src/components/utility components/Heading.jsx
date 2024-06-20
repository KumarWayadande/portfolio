const Heading = (prop) => {
  return (
    <span className="leading-[1.2] text-4xl sm:text-4xl md:text-5xl font-bold dark:text-white">
      {prop.heading}
    </span>
  );
};

export default Heading;
