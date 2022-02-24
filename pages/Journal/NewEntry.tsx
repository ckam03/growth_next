import { Icon } from "@iconify/react"

const NewEntry = () => {
    return (
        <div className="pt-4 pb-10">            
            <button className="text-3xl border rounded-lg w-12 h-12 bg-teal-500 flex items-center justify-center">
            <Icon icon="la:plus" className="h-6 w-6"/>
            </button>
        </div>
    )
}
export default NewEntry