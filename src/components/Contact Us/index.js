import React from "react"
import InputField from "./input_field"

export default function ContactUs() {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl pb-10">Contact us</h2>
      <div id="contact_us" className="pb-10 grid grid-cols-2 px-10">
        <div className="mb-5 md:mb-0 col-span-full md:col-span-1 flex justify-center px-10 hidden md:block">
          <img src="/contact_us.svg" alt="currency isometric" />
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center">
          <form className="flex-1">
            <div className="grid grid-cols-2 justify-center gap-10">
              <InputField
                placeholder="Name"
                classes="col-span-2 sm:col-span-1"
              />
              <InputField
                placeholder="Email"
                classes="col-span-2 sm:col-span-1"
              />
            </div>
            {/* <InputField placeholder="Email" /> */}
            <InputField placeholder="Message" />
            <div className="text-center">
              <input
                type="submit"
                value="Send"
                className="text-white rounded-md inline-block border-2 cursor-pointer duration-500 bg-secondary py-3 mt-5 md:my-5 px-12 font-extrabold border-secondary hover:border-[#0067cf] hover:bg-[#0067cf]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
