import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Toaster } from "react-hot-toast"

function Layout({ children }) {
  return (
    <main className="container mx-auto lg:w-[72rem]">
      <Toaster />
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
