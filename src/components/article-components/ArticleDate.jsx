export default function ArticleDate(prop) {
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {dateStyle: 'long'});
  const formattedDate = dateTimeFormatter.format(prop.articleDate);

  return (
    <div className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
      <div className="article-row flex flex-col md:flex-row">
        {formattedDate}
      </div>
    </div>
  );
}
