import Article from "./Article";
import Heading from "../utility components/Heading.jsx";
import HeadingContainer from "../utility components/HeadingContainer.jsx";
import SubHeading from "../utility components/SubHeading.jsx";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
const ArticleContainer = () => {
  const { data } = useLoaderData();
  const { articles: ARTICLES } = data;

  return (
    <div className="article-container my-20">
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

      <div className="article-card-container flex flex-col border-l-[1px] sm:w-[100%] dark:border-gray-700 border-b-gray-50 md:w-[80%] sm:pl-5">
        {/* All articles */}
        {ARTICLES.map((article, index) => {
          return <Article {...article} key={index} />;
        })}
        {/* End of all articles */}
      </div>
    </div>
  );
};

export default ArticleContainer;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    return await axios.get("http://localhost:3000/articles", {
      headers: { "Content-Type": "Applicarion/json" },
    });
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
