import React from "react"

export default function NavbarLink({ text, link }) {
  return (
    <div>
      <a className="font-semibold" href={link}>
        {text}
      </a>
    </div>
  )
}
