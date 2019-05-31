import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

const Content = styled.div`
  display: flex;
  @media ${mediaQueries.laptopL("min")} {
    padding: 5rem 3rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 3rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 2rem 1rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 2rem; 1rem;
    background: none;
  }
  overflow: hidden;
  flex-wrap: wrap;
`;

const LinkedIn = styled.div`
  display: flex;
  margin: 1rem auto;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;
const GitHub = styled.div`
  display: flex;
  margin: 1rem auto;
  line-height: 1.4rem;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;
const BitBucket = styled.div`
  display: flex;
  margin: 1rem auto;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
  }
`;

const Email = styled.div`
  display: flex;
  margin: 1rem auto;
  font-weight: 600;
  @media ${mediaQueries.tablet("min")} {
    flex: 1;
    justify-content: flex-end;
  }
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      margin: auto;
    }
  }
`;

const StyledLink = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Content>
      <LinkedIn>
        <StyledLink
          target="_blank"
          href="https://www.linkedin.com/in/daniel-larsson-56a777110/"
        >
          LinkedIn
        </StyledLink>
      </LinkedIn>
      <GitHub>
        <StyledLink target="_blank" href="https://github.com/nauberinho">
          Some Link 1
        </StyledLink>
      </GitHub>
      <BitBucket>
        <StyledLink target="_blank" href="https://github.com/nauberinho">
          Some link 2
        </StyledLink>
      </BitBucket>
      <Email>
        <span>daniel.larsson@vx.se</span>
      </Email>
    </Content>
  );
};

export default Footer;
