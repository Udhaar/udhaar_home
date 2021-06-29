import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/Navbar"
import Introduction from "../components/introduction"
import Features from "../components/Features"
import ContactUs from "../components/Contact Us"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div className="bg-[#D7EBFE]">
      <Helmet>
        <title>Udhaar</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Helmet>
      <Layout>
        <Navbar />
        <Introduction />
        <Features />
        <ContactUs />
      </Layout>
    </div>
  )
}
