import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const FlexContainer = styled("div")`
    color: white;
    display: flex;
    margin-top: 3rem;
    hr{
        height: 2.5px;
        border-radius: 50px;
        background-color: #fff;
    }
    

     aside{
        flex: 0.5;
        margin-right: 3.5rem;
        
        > h1{
            font-size: 170%;
        }
        > p{
            font-size: 125%;
        }

       .grid{
           p,a{
               font-size: 125%;
           }
           a{
               color: #fff;
               text-decoration: none;
               transition: opacity 0.2s;
               :hover{
                    opacity: 0.6;
                }
           }
           
       }
        
    }
    > div{
        flex: 1;
        p{
            font-size: 115%;
            letter-spacing: 0.04rem;
        }
        
    }
    @media (max-width: 730px){
        flex-direction: column;

         > aside{
            margin-right: 0;
        }
    }
`;

const Grid = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.5rem;
`;

export const query = graphql`
query ($title: String!) {
    mdx(frontmatter: {title: {eq: $title}}) {
      frontmatter {
        title
        date(formatString: "YYYY")
        client
        role
        link
        description
      }
      body
    }
  }
  
  
`;

const WorkInfo = styled("p")`

`;

const Page = ({ data: { mdx: page } }) => {
    return (
        
        <Layout>
            
            <FlexContainer>
                <aside>
                    <h1>{page.frontmatter.title}</h1>
                    <p>{page.frontmatter.description}</p>
                    <hr />
                    <Grid className = "grid">
                        <p><b>Year</b></p>
                        <p><span>{page.frontmatter.date}</span></p>
                        <p><b>Client</b></p>
                        <p><span>{page.frontmatter.client}</span></p>
                        <p><b>Role</b></p>
                        <p><span>{page.frontmatter.role}</span></p>
                        <p><b>Link</b></p>
                        <a href = {`https://${page.frontmatter.link}`}>{page.frontmatter.link}</a>

                    </Grid>
            


                </aside>
                <div>
                    <MDXRenderer>
                        {page.body}
                    </MDXRenderer>
                </div>

            </FlexContainer>
        </Layout>
    );
}

export default Page;
