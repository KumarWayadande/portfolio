import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ArticleBackButton from "./ArticleBackBtn";
import Heading from "./Heading";
import Date from "./Date";
import Image from "./Image";
import Parser from "html-react-parser";
import { getFormattedText } from "../../utility components/Parser";


// Component that renders a single article
// Input : Data is taken from loader of this component which is then parsed using getFormattedText()
export default function SingleArticle() {
  // Data returned by the loader
  // data -> article -> title
  const { data } = useLoaderData();

  // Parse raw data into array of react elements
  const parsedContents = getFormattedText(Parser(data.article.contents));

  if (!data.article) return <h1>Article not found</h1>;

  return (
    <div className="single-article-container mx-auto mt-15 md:mt-20 flex flex-col md:flex-row">
      <div className="back-aero-container md:basis-1/6 flex-col md:flex-row items-center">
        <div className="flex">
          <ArticleBackButton />
        </div>
      </div>
      <div className="article-contents-container max-w-2xl basis-10/12">
        <Date articleDate={data.article.articleDate} />
        <Heading extraClasses="mb-15">{data.article.title}</Heading>
        <Image className="rounded-xl my-10" src={data.article.articleImg} />
        {parsedContents} {/* Remaining body of the article */}
      </div>
    </div>
  );
}

// Loader to load single article
export async function loader({ params }) {
  try {
    // Access article id from url using params parameter 
    // Access it using "id" as url also contains id as a query like "/:id"
    const articleId = params.id;
    return await axios.post("http://localhost:3000/articles/" + articleId, {
      articleId,
    });
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}

