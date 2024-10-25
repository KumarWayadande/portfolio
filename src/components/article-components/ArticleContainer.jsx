import Article from "./Article";
import Heading from "../utility components/Heading.jsx";
import HeadingContainer from "../utility components/HeadingContainer.jsx";
import SubHeading from "../utility components/SubHeading.jsx";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

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
        <Heading
          heading="Writing on software design, company building, and the aerospace
          industry."
        />
        <SubHeading
          subHeading="All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order."
        />
      </HeadingContainer>

      {lengthOfArticles > 0 && (
        <div className="article-card-container flex flex-col border-l-[1px] sm:w-[100%] dark:border-gray-700 border-b-gray-50 md:w-[80%] sm:pl-5">
          {/* All articles are listed and displayed in abstract way */}
          {ARTICLES.map((article, index) => {
            {
              /* return <Article {...article} key={index} />;    // Article wrapper */
            }
            return (
              <Article {...ARTICLES[lengthOfArticles - 1 - index]} key={index} />
            ); // Article wrapper
          })}
          {/* End of all articles */}
        </div>
      )}
      {
        lengthOfArticles == 0 && <p>No Articles Found!!!</p>
      }
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
