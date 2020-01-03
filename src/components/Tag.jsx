import React from "react";
import styled from "@emotion/styled";

const StyledTag = styled("div")`
    background-color: rgba(17,17,17,0.6);
    color: #4ecca3;
    border-radius: 25em;
    padding: 0.1rem 0.4rem;
    margin-right: 1rem;
    whitespace: no-wrap;

    p{
        margin:0;
        font-size: 85%;
    }

`;

const Tag = (props) => {
    return (

        <StyledTag>
            <p>{props.tagFor}</p>
        </StyledTag>
    );
}

export default Tag;