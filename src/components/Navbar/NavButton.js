import React from "react"

export default function NavButton({ link, text, bgColor, border }) {
  return (
    <div>
      <a
        href={link}
        className={`text-white ${bgColor} rounded-full inline-block py-2 hover:text-gray-900
         px-8 font-bold border-2 ${border} hover:bg-[#D7EBFE] duration-500`}
      >
        {text}
      </a>
    </div>
  )
}
