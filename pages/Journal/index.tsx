import NavMenu from "../../components/NavMenu"
import EntryForm from "./EntryForm"
import JournalEntries from "./JournalEntries"
import NewEntry from "./NewEntry"
const Journal = () => {
    return (
        <div className="w-screen h-screen flex">
            <NavMenu />
            <div className="flex flex-col">
            <NewEntry />
            <JournalEntries />
            </div>
            <EntryForm />
        </div>
    )
}
export default Journal