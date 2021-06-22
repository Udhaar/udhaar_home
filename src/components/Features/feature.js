import React from "react"

export default function Feature({ imgSrc, text }) {
  return (
    <div className="flex-1 rounded-md overflow-hidden">
      <div className="p-8 bg-[#35406E]">
        <img src={imgSrc} alt="Image" />
      </div>
      <div className="py-5 font-bold px-10 bg-[#1C2653] text-white text-center h-28 self-center flex items-center">
        {text}
      </div>
    </div>
  )
}
