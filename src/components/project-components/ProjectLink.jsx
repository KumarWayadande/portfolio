const ProjectLink = (prop) => {
  return (
    <a href={prop.projectLink}>
      <p className="my-4 text-stone-500 text-sm font-semibold cursor-pointer group-hover:text-[#1fbcaa] dark:text-gray-300">
        <i className="fa-solid fa-link"></i> {prop.buttonText}
      </p>
    </a>
  );
};

export default ProjectLink;
