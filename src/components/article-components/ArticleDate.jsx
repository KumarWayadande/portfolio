import formatGeneralDate from "../utility components/formatted-date";

// Component for displaying specific formatted date in article components
export default function ArticleDate(prop) {
  return (
    <div className="text-gray-500 px-7 md:p-7 md:px-0 my-3 md:w-[200px]">
      <div className="article-row flex flex-col md:flex-row">
        {formatGeneralDate(prop.articleDate)}
      </div>
    </div>
  );
}
