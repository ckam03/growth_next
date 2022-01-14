const EntryMenu = () => {
    const date = new Date()
    const todaysDate = date.toLocaleDateString()
  return (
    <div>
      <ul className="flex items-center justify-center space-x-4">
        <span className="font-bold">{todaysDate}</span>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </li>
        <li className="font-bold text-2xl">
            B
        </li>
        <li className="font-medium italic text-2xl">
            I
        </li>
        <li>

        </li>
      </ul>
    </div>
  )
}
export default EntryMenu
