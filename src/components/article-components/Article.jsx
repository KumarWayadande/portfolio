import { Link } from "react-router-dom";
import ArticleButton from "./ArticleButton";
import ArticleContents from "./ArticleContents";
import ArticleContentsContainer from "./ArticleContentsContainer";
import ArticleDate from "./ArticleDate";
import ArticleHeading from "./ArticleHeading";

// Component acts as a wrapper for article information (Abstract details of article)
const Article = (prop) => {
  return (
    <div className="article-row flex flex-col md:flex-row">
      <ArticleDate articleDate={prop.articleDate} />
      <Link to={`${prop.id}`}>
        {" "}
        {/* When clicked - navigates to the single detailed article */}
        <ArticleContentsContainer>
          <ArticleHeading articleHeading={prop.title} />
          <ArticleContents article={prop.contents} />
          <ArticleButton />
        </ArticleContentsContainer>
      </Link>
    </div>
  );
};

export default Article;
