import React from "react"

export default function NavbarLink({ text, link }) {
  return (
    <div>
      <a
        className="font-bold block border-transparent px-0.5 hover:border-gray-900 border-b-2 transition-all duration-300"
        href={link}
      >
        {text}
      </a>
    </div>
  )
}
