export default function ArticleContentsContainer(prop) {
  return (
    <div className="hover:duration-200 md:w-[700px] second-col hover:bg-gray-50 p-7 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
      {prop.children}
    </div>
  );
}
