import React from "react"

export default function Feature({ imgSrc, text }) {
  return (
    <div className="rounded-md w-72 overflow-hidden flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl">
      <div className="p-8 bg-[#35406E] flex-1">
        <img src={imgSrc} />
      </div>
      <div className="py-5 font-bold px-10 flex-1 bg-[#1C2653] text-white text-center self-center flex items-center">
        {text}
      </div>
    </div>
  )
}
