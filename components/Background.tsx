import water from "../images/snow.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"

const getBackground = async () => {
  const url = "https://localhost:7034/Image"
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  })
  const result = await response.json()
  console.log(result)
  return result
}
const Background = () => {
  const [background, setBackground] = useState<any>([])
  useEffect(() => {
    getBackground().then((res) => {
      setBackground(res[0])
    })
  }, [])
  return (
    <div>
      <Image src={water} width={1728} height={400} objectFit="cover" />
      
    </div>
  )
}
export default Background
