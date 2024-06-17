import ArticleButton from "./ArticleButton";
import ArticleContents from "./ArticleContents";
import ArticleContentsContainer from "./ArticleContentsContainer";
import ArticleDate from "./ArticleDate";
import ArticleHeading from "./ArticleHeading";

const Article = (prop) => {
  return (
    <div className="article-row flex flex-col md:flex-row">
      <ArticleDate articleDate={prop.date} />
      <ArticleContentsContainer>
        <ArticleHeading articleHeading={prop.articleHeading} />
        <ArticleContents article={prop.article} />
        <ArticleButton />
      </ArticleContentsContainer>
    </div>
  );
};

export default Article;
