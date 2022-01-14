import Link from "next/link"

const NavMenu = () => {
  return (
    <div className="w-48 h-screen bg-white flex flex-col border-r-2">
      <h1 className="pb-10 pt-6 px-4 font-semibold text-2xl">Growth</h1>
      <ul className="space-y-4 font-medium text-gray-600">
        <Link href="/">
          <li className="flex items-center hover:bg-teal-500 hover:text-teal-100 px-4 py-2 cursor-pointer duration-300 ease-in-out rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </li>
        </Link>
        <Link href={"/Journal"}>
          <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out rounded-md px-4 py-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Journal
          </li>
        </Link> 
        <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out rounded-md px-4 py-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
          Goals
        </li>
        <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out px-4 py-2 cursor-pointer rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
          Profile
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
