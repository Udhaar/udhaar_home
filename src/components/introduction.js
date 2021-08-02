import React from "react"
import NavButton from "./Navbar/NavButton"

export default function Introduction() {
  return (
    <div className="grid grid-cols-7 pt-24">
      <div className="order-2 md:order-1 col-span-full md:col-span-3 lg:pt-32 md:pt-20">
        <h1 className="lg:text-5xl text-center md:ml-10  px-2 lg:px-3 md:px-2 md:text-3xl text-2xl mb-2 font-extrabold">
          Debt management with friends made easy
        </h1>
        <h3 className="font-bold text-base md:text-lg text-center px-6 lg:py-10 lg:px-8 md:px-8 md:py-6">
          Udhaar is a personal finance and debt management app that helps you
          track your debts and loans with friends. <br />
          Never forget any debts or split payments with your friends again with
          udhaar.
        </h3>
        <div className="text-center">
          <NavButton
            link="/"
            text="Try Now"
            classes={`bg-[#1789FC] py-3 mt-5 md:my-0
						 px-12 font-extrabold border-[#1789FC] hover:border-[#0067cf] hover:bg-[#0067cf] `}
          />
        </div>
      </div>
      <div className="order-1 md:order-2 mb-5 md:mb-0 col-span-full md:col-span-4 flex justify-center px-10">
        <img src="/Currency_Isometric 1.svg" alt="currency isometric" />
      </div>
    </div>
  )
}
