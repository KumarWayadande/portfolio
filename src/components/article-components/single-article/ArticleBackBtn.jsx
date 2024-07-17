import { TfiArrowLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function ArticleBackButton() {
  return (
    <Link
      to="/articles"
      className="border dark:bg-[#252529] dark:border-gray-700 dark:hover:border-gray-600 border-gray-200 p-3 rounded-full shadow-md mb-10"
    >
      <TfiArrowLeft className="dark:text-stone-300 text-stone-600 text-xs" />
    </Link>
  );
}
