import React from "react"
import InputField from "./input_field"
// import {} from "gatsby-link"

export default function ContactUs() {
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: { name: "divya garg" },
  //   })
  //     .then(() => alert("done"))
  //     .catch(error => alert(error))
  // }

  return (
    <div>
      <h2 className="text-center font-bold text-2xl pb-10">Contact us</h2>
      <div id="contact_us" className="pb-10 grid grid-cols-2 px-10">
        <div className="mb-5 md:mb-0 col-span-full md:col-span-1 flex justify-center px-10 hidden md:block">
          <img src="/contact_us.svg" alt="currency isometric" />
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center">
          <form
            className="flex-1"
            method="POST"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
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
            <InputField placeholder="Message" />
            <div className="text-center">
              <input
                type="submit"
                value="Send"
                name="submit"
                className="text-white rounded-md inline-block border-2 cursor-pointer duration-500 bg-[#1789FC] py-3 mt-5 md:my-5 px-12 font-extrabold border-[#1789FC] hover:border-[#0067cf] hover:bg-[#0067cf]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
