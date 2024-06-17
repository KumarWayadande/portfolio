export default function ArticleContentsContainer(prop) {
  return (
    <div className="second-col hover:bg-gray-50 p-7 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
      {prop.children}
    </div>
  );
}
