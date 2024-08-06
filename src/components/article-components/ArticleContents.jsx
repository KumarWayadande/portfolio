// Component - it renders all contents (parsed array of react elements)
export default function ArticleContents(prop){
    return <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-3">
    {prop.article}
  </p>
}