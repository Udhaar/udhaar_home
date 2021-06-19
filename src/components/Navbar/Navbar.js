import React from "react"
import NavbarLink from "./NavbarLink"
import NavButton from "./NavButton"

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
          bgColor="bg-[#1789FC]"
          border="border-[#1789FC]"
        />
        <NavButton
          link="/"
          text="Sign up"
          bgColor="bg-[#CD4B13]"
          border="border-[#CD4B13]"
        />
      </div>
    </div>
  )
}
