import Article from "./Article";
import Heading from "../utility components/Heading.jsx";
import HeadingContainer from "../utility components/HeadingContainer.jsx";
// import SubHeading from "../utility components/SubHeading.jsx";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const tags = [
  "Software",
  "Programming Languages",
  "AWS",
  "Underworld",
];

// Component that acts as a wrapper for all articles
// This gives view of all articles in abstract way
const ArticleContainer = () => {
  // Load all articles from loader function of this component itself
  const { data } = useLoaderData(); // data.articles -> ARTICLES
  const { articles: ARTICLES } = data;

  console.log(ARTICLES);

  const lengthOfArticles = ARTICLES.length;

  return (
    <div className="article-container my-20">
      {/* Main heading of page */}
      <HeadingContainer>
        <Heading heading="Writing on software design, psychology and criminal activities." />
        {/* <SubHeading subHeading="All of my long-form thoughts on programming, leadership, india's underworld and more, collected in chronological order." /> */}
        <div className="tags-container my-10 p-4 overflow-scroll">
          {tags.map((item, index) => {
            return (
              <kbd
                key={index}
                className="cursor-pointer mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
              >
                {item}
              </kbd>
            );
          })}
        </div>
      </HeadingContainer>

      {lengthOfArticles > 0 && (
        <div className="article-card-container flex flex-col border-l-[1px] sm:w-[100%] dark:border-gray-700 border-b-gray-50 md:w-[80%] sm:pl-5">
          {/* All articles are listed and displayed in abstract way */}
          {ARTICLES.map((article, index) => {
            {
              /* return <Article {...article} key={index} />;    // Article wrapper */
            }
            return (
              <Article
                {...ARTICLES[lengthOfArticles - 1 - index]}
                key={index}
              />
            ); // Article wrapper
          })}
          {/* End of all articles */}
        </div>
      )}
      {lengthOfArticles == 0 && <p>No Articles Found!!!</p>}
    </div>
  );
};

export default ArticleContainer;

// eslint-disable-next-line react-refresh/only-export-components
// Loader that loads all articles from db
export async function loader() {
  try {
    return await axios.get("http://localhost:3000/articles", {
      headers: { "Content-Type": "Applicarion/json" },
    });
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
