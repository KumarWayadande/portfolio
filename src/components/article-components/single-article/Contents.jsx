export default function Contents(prop){
  const linkClasses = "[&>a]:text-[#14b8a6] [&>a]:font-semibold [&>a]:cursor-pointer [&>a]:underline-none text-base my-5 leading-7 text-stone-600 dark:text-stone-400"
    return <p className={linkClasses}>
    {prop.children}
  </p>
}