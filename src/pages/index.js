import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/wordpress/sample-page">Go to Sample Page</Link> <br />
    <Link to="/page-2/">Go to Page 2</Link> <br />
    <Link to="/aboutus/">Go to Page 2</Link> <br />
    <Link to="/wordpress/2019/09/30/hello-world/">Go to Hello World Post</Link>
   
  </Layout>
)

export default IndexPage
