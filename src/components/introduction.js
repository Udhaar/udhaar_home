import React from "react"
import NavButton from "./NavButton"

export default function Introduction() {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-3 lg:pt-32 md:pt-20">
        <h1 className="lg:text-5xl text-center lg:px-3 md:px-2 md:text-3xl font-extrabold">
          Debt management with friends made easy
        </h1>
        <h3 className="font-bold text-lg text-center lg:py-10 lg:px-8 md:px-8 md:py-6">
          Udhaar is a personal finance and debt management app that helps you
          track your debts and loans with friends. <br />
          Never forget any debts or split payments with your friends again with
          udhaar.
        </h3>
        <div className="text-center">
          <NavButton
            link="/"
            text="Try Now"
            classes={`bg-[#1789FC] py-3
						 px-12 font-extrabold border-[#1789FC] hover:border-[#0067cf] hover:bg-[#0067cf] `}
          />
        </div>
      </div>
      <div className="col-span-4">
        <img src="/Currency_Isometric 1.svg" alt="current isometric" />
      </div>
    </div>
  )
}
