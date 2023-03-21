import React from "react"
import Layout from "../../Layout"
import * as Section from "./Sections"

function Landing() {
  return (
    <Layout>
      <Section.Hero />
      <Section.Features />
    </Layout>
  )
}

export default Landing
