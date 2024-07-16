import axios from "axios";
import { useContext } from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { Link, useLoaderData } from "react-router-dom";

export default function SingleArticle() {
  const result = useLoaderData();
  const { data } = result;

  if (!data.article) return <h1>Article not found</h1>;
  return (
    <div className="single-article-container">
      <div className="back-aero-container flex">
        <Link to="/articles" className="border border-gray-200 p-3 rounded-full shadow-md">
            <TfiArrowLeft className="dark:text-white text-stone-600 text-xs" />
            {/* dark:bg-[#252529] dark:hover:border-gray-500 dark:border-gray-600 dark:border-[1px] dark:hover:text-stone-400 dark:shadow-none             */}
        </Link>
      </div>
      <div className="article-contents-container"></div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const articleId = params.id;
    return await axios.post("http://localhost:3000/articles/" + articleId, {
      articleId,
    });
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
