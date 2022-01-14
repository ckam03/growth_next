import EntryMenu from "./EntryMenu"

const EntryForm = () => {
    return (
        <div className="w-6/12 border-2">
            <EntryMenu />
            <textarea value="Write Here"className="w-full h-1/2 border-none focus:border-none focus:ring-0">
            </textarea>
        </div>
    )
}
export default EntryForm