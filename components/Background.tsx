import water from "../images/snow.jpg"
import Image from "next/image"

const Background = () => {
    return (
        <div>
            <Image src={water} width={1728} height={400} objectFit="cover"/>
        </div>
    )
}
export default Background