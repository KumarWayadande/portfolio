const OverviewArticle = () => {
  return (
    <div className="project1 flex flex-col my-5 hover:bg-gray-50 px-4 py-4 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
      <p className="border-l-2 border-b-gray-600 text-gray-500 px-4 my-3">
        September 5, 2024
      </p>
      <h2 className="font-semibold my-3 dark:text-white">
        Crafting a design system for a multiplanetary future
      </h2>
      <p className="text-sm text-stone-600 dark:text-stone-400">
        Most companies try to stay ahead of the curve when it comes to visual
        design, but for Planetaria we needed to create a brand that would still
        inspire us 100 years from now when humanity has spread across our entire
        solar system.
      </p>
      <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
        Read article &gt;
      </p>
    </div>
  );
};

export default OverviewArticle;
