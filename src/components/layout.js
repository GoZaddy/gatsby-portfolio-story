/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer";
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css?family=Harmattan&display=swap');
        body{
          font-family: 'Harmattan', sans-serif;
          background-color: #1d2229;
        }
        .gatsby-resp-image-background-image{
        display: none;
    }
      `} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "",
          padding: "0 10%",
          paddingTop: 0,
        }}
      >

        <main>{children}</main>
      </div>
      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
