import React from "react"

export default function InputField({ placeholder, classes }) {
  return (
    <div className={"flex justify-center " + classes}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full my-2 bg-primary border-b-4 font-bold border-[#35406E] text-[#35406E] outline-none px-1 py-2 placeholder-[#35406E] placeholder-opacity-70"
      />
    </div>
  )
}
