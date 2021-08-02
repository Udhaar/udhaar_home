import React from "react"

export default function NavButton({ link, text, classes }) {
  return (
    <div>
      <a
        href={link}
        // className={`text-white ${bgColor} rounded-full inline-block py-2 hover:text-gray-900
        //  px-8 font-bold border-2 ${border} hover:bg-primary duration-500`}
        className={`text-white rounded-full inline-block border-2 duration-500 ${classes}`}
      >
        {text}
      </a>
    </div>
  )
}
