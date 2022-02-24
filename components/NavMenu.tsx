import Link from "next/link"
import { Icon } from '@iconify/react'

const NavMenu = () => {
  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r-2">
      <h1 className="pb-10 pt-6 ml-8 font-semibold text-2xl">Growth</h1>
      <ul className="space-y-4 font-medium text-gray-600 pl-4">
        <Link href={"/Home"} passHref>
          <li className="flex items-center hover:bg-teal-500 hover:text-teal-100 px-4 py-2 cursor-pointer duration-300 ease-in-out rounded-md">
            <Icon icon="la:home" className="h-8 w-8 mr-4"/>
            {/* <svg
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
            </svg> */}
            Home
          </li>
        </Link>
        <Link href={"/Journal"} passHref>
          <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out rounded-md px-4 py-2 cursor-pointer">
          <Icon icon="la:book-open" className="h-8 w-8 mr-4"/>
            Journal
          </li>
        </Link> 
        <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out rounded-md px-4 py-2 cursor-pointer">
        <Icon icon="la:clipboard-list" className="h-8 w-8 mr-4"/>
          Goals
        </li>
        <li className="flex items-center font-medium hover:bg-teal-500 hover:text-teal-100 duration-300 ease-in-out px-4 py-2 cursor-pointer rounded-md">
        <Icon icon="la:user-circle" className="h-8 w-8 mr-4"/>
          Profile
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
