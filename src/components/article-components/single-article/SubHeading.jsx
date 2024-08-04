export default function SubHeading(prop){
    return <h1 className="font-medium md:text-3xl mt-10 mb-3 text-2xl dark:text-gray-100">
        {prop.children}
    </h1>
}