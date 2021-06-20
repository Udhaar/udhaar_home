import React from "react"
import NavbarLink from "./NavbarLink"
import NavButton from "../NavButton"

export default function Navbar() {
  return (
    <div className="flex justify-between px-5">
      <div>
        <a href="/">
          <img src="/Logoo.svg" alt="" className="h-14" />
        </a>
      </div>
      <div className="flex items-center gap-5">
        <NavbarLink link="/" text="How it works" />
        <NavbarLink link="/" text="Features" />
        <NavbarLink link="/" text="Contact Us" />
        <NavButton
          link="/"
          text="Login"
          classes="bg-[#1789FC] py-2 hover:text-gray-900 px-8 font-bold border-[#1789FC] hover:bg-[#D7EBFE]"
        />
        <NavButton
          link="/"
          text="Sign up"
          classes="bg-[#CD4B13] py-2 hover:text-gray-900 px-8 font-bold border-[#CD4B13] hover:bg-[#D7EBFE]"
        />
      </div>
    </div>
  )
}
