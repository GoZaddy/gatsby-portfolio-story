import React from "react";
import styled from "@emotion/styled";
import Tag from "./Tag";
import Image from "gatsby-image";
import { css } from "@emotion/core";

import BackgroundImage from "gatsby-background-image";

const StyledWorkCard = styled("div")`
    background-color: #1c1d22;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
    width: 270px;
    height: 250px;
    position: relative;

    img{
        position: absolute;
        
        top: 0;
        left:0;
        width: 100%;
        
    }

    
`;

const ImageBackground = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    height: 60%;

`;
const TagContainer = styled("div")`
    display: flex;
`;
const WorkCard = (props) => {
    const tags = props.tags;
    return (
        <StyledWorkCard>
            <div css={css`
                transition: transform 0.3s;
                height: 100%;
                display: flex;
                flex-direction: column;
                :hover{
                    transform: scale(1.06);
                }
            `}>
                <ImageBackground Tag="div" fluid={props.image.sharp.fluid} fadeIn>
                    <div css = {css`
                        color: white;
                        padding: 1.3rem 0 0 1.2rem;
                    `}>
                        <h3>{props.title}</h3>
                        <p>{props.date}</p>
                    </div>
                </ImageBackground>

                <div css = {css`
                    margin-top: 12%;
                    padding: 0 0 0 1rem;
                `}>
                    <TagContainer>
                        {tags.map(tag => <Tag tagFor={tag} />)}
                    </TagContainer>
                </div>


            </div>



        </StyledWorkCard>
    );
}

export default WorkCard;