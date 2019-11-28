import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core";
import styled from "@emotion/styled";
const StyledNav = styled("nav")`
  display: flex;
  justify-content: space-between;
  
  a{
    text-decoration: none;
  }
  >a{
    transition: opacity 0.5s;
    :hover{
      opacity: 0.8;
    }
  }
  
`;

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: #31363d;
      margin-bottom: 1.45rem;
      padding: 1.2rem 10%;
      position: sticky;
      z-index: 1000;
      top: 0;
      width: 100%;
      @media (max-width: 576px){
        padding:1.2rem 4%;
      }
    `}
  >
    <StyledNav>
      <Link to="/" css = {css`
        font-size: 130%;
        color: #fff;
      `}>Gatsby</Link>
      <div css = {css`
        a{
          color: #fff;
          font-size: 120%;
          transition: color 0.5s;
          &.current-page{
            color: #4ecca3;
          }

          :hover{
            color: #4ecca3;
          }
        }
      `}>
        <Link to = "/" activeClassName = "current-page" css = {css`margin-right: 1.5rem`}>Work</Link>
        <Link to = "/about" activeClassName = "current-page">About</Link>
      </div>

    </StyledNav>



  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
