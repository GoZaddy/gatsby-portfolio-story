import React from "react"
import { Link } from "gatsby"
import Tag from "../components/Tag";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css, Global } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Image from "gatsby-image";


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    query{
        allFile(filter: {relativePath: {eq: "man-standing.jpg"}, childImageSharp: {fluid: {src: {}}}}) {
          nodes {
            sharp: childImageSharp {
              fluid(
                  maxWidth: 400,
                  maxHeight: 900
              ){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      
    `);
    return (
        <Layout>
            <Global styles={css`
                h1,p{
                    color: white;
                }
            `}
            />
            <SEO title="About" />

            <div css={css`
                display: flex;
                > div{
                    flex: 2;
                    margin-right: 3rem;
                    

                    p{
                        font-size: 115%;
                        line-height: 2rem;
                    }
                }

                .gatsby-image-wrapper{
                    flex: 1.5; 
                    height: 550px;
                    width: 100%;
                    margin: 0;
                }
                @media (max-width:800px){
                    .gatsby-image-wrapper{
                        flex: 2; 
                    }
                }
                @media(max-width:750px){
                    flex-direction: column;
                    > div{
                        margin-right: 0;
                        p {
                            text-align: justify;
                            
                        }
                    }
                    .gatsby-image-wrapper{
                        height: 50px;
                        width: 80%;
                        margin: 1rem auto;
                    }
                }
                /** */
            `}>
                <div>
                    <h1>About</h1>
                    <p>
                        Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses.
                        Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast.
                        Use lap as chair give attitude poop on grasses sleep nap.
                        Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens.
                        Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall, play with food and get confused by dust so present belly, scratch hand when stroked.
                        Intrigued by the shower have secret plans. Sweet beast find something else more interesting, or stare at ceiling. Leave dead animals as gifts find something else more interesting.
                        Lick butt. Sleep in the bathroom sink why must they do that. Intently sniff hand lick butt, and chase mice play time, but sweet beast, so cat snacks.
                    </p>
                </div>

                {
                    data.allFile.nodes.map(image => (
                        <Image fluid={image.sharp.fluid} alt="A man Standing" fadeIn />
                    ))
                }



            </div>

        </Layout>);
}

export default AboutPage;
