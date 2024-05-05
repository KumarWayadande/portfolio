const Article = () => {
  return (
    <div className="article-row flex flex-col md:flex-row ">
      <p className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
        September 5, 2024
      </p>
      <div className="second-col hover:bg-gray-50 p-7 rounded-xl">
        <h2 className="font-semibold my-3">
          Crafting a design system for a multiplanetary future
        </h2>
        <p className="text-sm text-stone-600">
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>
        <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
          Read article &gt;
        </p>
      </div>
      
    </div>
  );
};


export default Article;