export default function ToolsContainer(prop){
    return <div className="article-row flex flex-col md:flex-row ">
        {prop.children}
    </div>
}