import NavMenu from "../../components/NavMenu"
import EntryForm from "./EntryForm"
import JournalEntries from "./JournalEntries"
import NewEntry from "./NewEntry"
const Journal = () => {
    return (
        <div className="flex items-center">
            <NavMenu />
            <div className="flex flex-col h-screen">
            <NewEntry />
            <JournalEntries />
            </div>
            <EntryForm />
        </div>
    )
}
export default Journal