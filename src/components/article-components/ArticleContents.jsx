export default function ArticleContents(prop){
    return <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-4">
    {prop.article}
  </p>
}