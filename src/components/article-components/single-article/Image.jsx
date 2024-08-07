// Component for displaying an image in article, usually just single image is added
// Custom props are added using prop destructuring
export default function Image(prop){
    return <img {...prop} className="w-[100%] rounded-2xl my-10"/>
}