interface IJournalEntry {
  date: string
  entry: string
}

const JournalEntry: React.FC<IJournalEntry> = (props) => {
  return (
    <>
      <li className="border-2 rounded-lg bg-white h-28">
        <h1 className="text-bold text-4xl pb-2">{props.date}</h1>
        <p>{props.entry}</p>
      </li>
    </>
  )
}
export default JournalEntry
