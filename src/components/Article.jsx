const Article = () => {
  return (
    <div className="article-row flex flex-col md:flex-row">
      <p className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
        September 5, 2024
      </p>
      <div className="second-col hover:bg-gray-50 p-7 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
        <h2 className="font-semibold my-3 dark:text-gray-100">
          Crafting a design system for a multiplanetary future
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>
        <p className="w-fit my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
          Read article &gt;
        </p>
      </div>
      
    </div>
  );
};


export default Article;