import React from "react"
import { Link } from "gatsby"
import Tag from "../components/Tag";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import WorkCard from "../components/WorkCard";



const WorkCards = styled("div")`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap:30px;
  margin: 2.5rem auto;

  @media(max-width: 930px){
    grid-template-columns: 1fr 1fr;
    
  }

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`;
const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query{
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          
            nodes {
              frontmatter {
                title
                date(formatString: "d. MMM YYYY")
                tags
                cover_image{
                  sharp: childImageSharp{
                    fluid(
                      maxHeight: 250,
                      duotone: {
                        highlight: "#000000",
                        shadow: "#000000",
                        opacity: 45
                      }
                    ){
                      ...GatsbyImageSharpFluid_withWebp 
                    }
                  }
                }
                
              }
            }
          
        }
      }

`);
  return (
    <Layout>
      <SEO title="Home" />
      <WorkCards>
        {data.allMarkdownRemark.nodes.map(workcard => <WorkCard title={workcard.frontmatter.title}
          date={workcard.frontmatter.date}
          tags={workcard.frontmatter.tags}
          image={workcard.frontmatter.cover_image}
          key = {workcard.frontmatter.title}
        />)}
      </WorkCards>
    </Layout>);
}

export default IndexPage;
