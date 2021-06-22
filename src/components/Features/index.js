import React from "react"
import Feature from "./feature"

export default function Features() {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl py-10">Features</h2>

      <div class="flex flex-wrap gap-14 pb-14 px-16 items-stretch justify-center">
        <Feature
          imgSrc="/Feature1.svg"
          text="Track your transactions with friends, be it split, debt or just a loan, we have it all."
        />
        <Feature
          imgSrc="/Feature2.svg"
          text="Manage personal expenses easily with our Expense Tracker"
        />
        <Feature
          imgSrc="/Feature3.svg"
          text="Stay on top of your expenses with analytics that help you save money."
        />
      </div>
    </div>
  )
}
