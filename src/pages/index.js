import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar/Navbar"
import Introduction from "../components/introduction"
import Features from "../components/Features"

export default function Home() {
  return (
    <div className="bg-[#D7EBFE]">
      <Layout>
        <Navbar />
        <Introduction />
        <Features />
      </Layout>
    </div>
  )
}
