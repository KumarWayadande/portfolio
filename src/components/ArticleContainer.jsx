import Article from "./Article";

const ArticleContainer = () => {
  return (
    <div className="article-container my-20">
      <div className="heading mt-20 sm:w-[100%] md:w-[70%]">
        <span className="leading-[1.2] text-4xl sm:text-4xl md:text-5xl font-bold">
          Writing on software design, company building, and the aerospace
          industry.
        </span>
        <p className="sub-text my-10 text-gray-500 pr-32">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>

      <div className="article-card-container flex flex-col border-l-[1px] border-b-gray-50 md:w-[80%] sm:pl-5">
        {/* All articles */}
        <Article />
        <Article />
        <Article />
        <Article />
        {/* End of all articles */}
      </div>
    </div>
  );
};

export default ArticleContainer;
