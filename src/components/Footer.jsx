import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled("footer")`
    background-color:#14161d;
    text-align: center;
    color: white;
    padding: 1.5rem 0;
    letter-spacing: 0.05rem;
    
    
    a{
        color: white;
        transition: color 0.5s;
        :hover{
            color: #4ecca3;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p style = {{margin: "0.7rem",}}>Built with 🍻 by <a href = "https://thekatana.tech">Yusuff Faruq</a></p>
            <p style = {{margin: "0.7rem",}}>Inspired by <a href = "https://edmundekott.me/" >Edmund Ekott</a></p>
            <p style = {{margin: "0",}}>Powered by <a href="https://www.gatsbyjs.org">Gatsby</a></p>
        </StyledFooter>
    );
}

export default Footer;
