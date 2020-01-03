import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import WorkCard from "../components/WorkCard";



const WorkCards = styled("div")`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap:30px;
  margin: 2.5rem auto;

  @media(min-width: 1100px){
    width: 80%;
    
  }
  @media(max-width: 930px){
    grid-template-columns: 1fr 1fr;
    width: 85%;
    
  }
  @media(max-width: 670px){
    width: 90%;
    
  }
  @media(max-width: 630px){
    width: 95%;
    
  }
  @media(max-width: 600px){
    grid-template-columns: 1fr;
    width: 100%;
    font-size: 140%;
    > div{
      width:70%;
    }
    
    
  }
  
  @media(max-width: 500px){
    > div{
      width:80%;
    }
    
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
