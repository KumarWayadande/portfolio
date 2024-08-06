// Component that displays article main heading 
export default function ArticleHeading(prop) {
  return (
    <h2 className="font-semibold my-3 dark:text-gray-100 line-clamp-2">
      {prop.articleHeading}
    </h2>
  );
}
