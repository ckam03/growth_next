import { useEffect, useState } from "react"
import Image from "next/image"

const getQuote = async () => {
  const url = "https://localhost:7034/Quote"
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  })
  const result = await response.json()
  return result
}

const Quote = () => {
  const [quote, setQuote] = useState<any>([])
  useEffect(() => {
    getQuote().then((res) => {
      setQuote(res[0])
    })
  }, [])
  return (
    <div className="flex flex-col items-center">
      <span>{quote.quoteContent}</span>
      <span>{quote.author}</span>
    </div>
  )
}
export default Quote
