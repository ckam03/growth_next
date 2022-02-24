import EntryMenu from "./EntryMenu"

const EntryForm = () => {
    return (
        <div className="w-5/12 h-full border-2 rounded-lg">
            <EntryMenu />
            <textarea className="w-full border-none rounded-lg focus:border-none focus:ring-0">
            </textarea>
        </div>
    )
}
export default EntryForm