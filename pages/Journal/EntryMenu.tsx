import { Icon } from "@iconify/react"

const EntryMenu = () => {
  const date = new Date()
  const todaysDate = date.toLocaleDateString()
  return (
    <div className="border-b-2">
      <ul className="flex items-center justify-center space-x-2">
        <span className="font-bold">{todaysDate}</span>
        <li>
          <Icon icon="la:bold" className="h-7 w-7" />
        </li>
        <li>
          <Icon icon="la:italic" className="h-7 w-7" />
        </li>
        <li>
          <Icon icon="la:image" className="h-7 w-7" />
        </li>
        <li>
          <Icon icon="la:list" className="h-7 w-7" />
        </li>
        <li>
          <Icon icon="la:list-ol" className="h-7 w-7" />
        </li>
        <li>
          <button className="border bg-teal-500 p-2 rounded text-teal-100">
            Done
          </button>
        </li>
      </ul>
    </div>
  )
}
export default EntryMenu
