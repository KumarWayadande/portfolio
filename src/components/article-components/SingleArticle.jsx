import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function SingleArticle() {
  const result = useLoaderData();
  const { data } = result;

  if (!data.article) return <h1>Article not found</h1>;

  //   Article Data - data.article

  return (
    <>
      <h1>Article Found</h1>
      {/* Render single detailed article page - pending */}
    </>
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
