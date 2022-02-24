import { useState } from "react"
import JournalEntry from "./JournalEntry"

const JournalEntries = () => {
    const [entries, setEntries] = useState()
    return (
        <div className="w-84">
            <ul>
                <JournalEntry date="1/2/11" entry="hello"/>
                {/* <li className="border-2 rounded-lg bg-white h-28">
                    <h1 className="text-bold text-4xl pb-2">1/7/2022</h1>
                    <p>Did this and that and stuff</p>
                </li>
                <li className="border-2 rounded-lg bg-white w-80 h-28">
                    <h1 className="text-bold text-4xl pb-2">1/7/2022</h1>
                    <p>Did this and that and stuff. It was a really great day.</p>
                </li>
                <li className="border-2 rounded-lg bg-white w-80 h-28">
                    <h1 className="text-bold text-4xl pb-2">1/7/2022</h1>
                    <p>Did this and that and stuff</p>
                </li> */}
            </ul>
        </div>
    )
}
export default JournalEntries