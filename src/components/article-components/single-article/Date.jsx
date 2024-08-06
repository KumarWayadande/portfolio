import formatGeneralDate from "../../utility components/formatted-date";

// Component for displaying specific formatted date in article components
export default function Date(prop) {
  return (
    <p className="article-date text-stone-300 dark:text-stone-600 font-semibold text-[100%] mb-10">
      <span className="mr-3 font-bold h-3">|</span>
      {/* Display date by formatting it using formatGeneralDate() function */}
      {formatGeneralDate(prop.articleDate)}
    </p>
  );
}
