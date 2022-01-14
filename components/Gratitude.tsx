import { useEffect, useState } from "react"

const getPrompts = async () => {
  const url = "https://localhost:7034/Gratitude"
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  })
  const result = await response.json()
  return result
}
const Gratitude = () => {
  const resArray: any[] = []
  const [gratitudes, setGratitudes] = useState(resArray)
  useEffect(() => {
    getPrompts().then((res) => {
      setGratitudes(res)
    })
  }, [])
  return (
    <div className="flex justify-center">
      {gratitudes.map((gratitude, index) => {
        return <div className="border rounded border-gray-300 p-2 shadow-md" key={index.toString()}>{gratitude.prompt}</div>
      })}
    </div>
  )
}
export default Gratitude
