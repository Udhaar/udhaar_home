import React, { useState } from "react"
import NavbarLink from "./NavbarLink"
import NavButton from "./NavButton"

export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  return (
    <div className="flex flex-col pt-3 md:py-3 md:flex-row justify-between px-3 mb-3 md:mb-0 bg-[#afd6fe]">
      <div className="flex md:w-max w-full justify-between">
        <a href="/">
          <img src="/Logoo.svg" alt="" className="h-10 md:h-14" />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setNavbarVisible(!navbarVisible)
          }}
          className="h-7 w-7 md:hidden self-center "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`flex flex-col md:flex-row items-center gap-5 md:mt-0 mt-3 transition-all ease-in-out duration-500 ${
          !navbarVisible ? `max-h-0 md:max-h-52` : `max-h-52`
        } overflow-hidden`}
      >
        <NavbarLink link="/" text="How it works" />
        <NavbarLink link="/" text="Features" />
        <NavbarLink link="/" text="Contact Us" />
        <div className="flex gap-5 mb-3 md:mb-0">
          <NavButton
            link="/"
            text="Login"
            classes="bg-[#1789FC] py-2 hover:text-[#0067cf] px-8 font-bold border-[#1789FC] hover:bg-[#D7EBFE]"
          />
          <NavButton
            link="/"
            text="Sign up"
            classes="bg-[#CD4B13] py-2 hover:text-[#CD4B13] px-8 font-bold border-[#CD4B13] hover:bg-[#D7EBFE]"
          />
        </div>
      </div>
    </div>
  )
}
