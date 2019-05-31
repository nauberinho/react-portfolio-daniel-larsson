import React from "react";
import PropTypes from "react-proptypes";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMenu } from 'react-icons/md';

import { withRouter } from "react-router-dom";

import mediaQueries from "../media-queries";
import theme from "../theme";

const Container = styled.div`
  display: flex;
  @media ${mediaQueries.laptopL("min")} {
    padding: 2rem 3rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 2rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 2rem 1rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 0rem 1rem 2rem;
    background: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  
  @media ${mediaQueries.tablet("min")} {
    padding: 2rem 0;
    font-size: 1.7rem;
  }
  @media ${mediaQueries.tablet("max")} {
    text-align: center;
    font-size: 1.4rem;
  }
`;

const LogoYellowSpan = styled.span`
  color: ${theme.colors.yellow.main};
  font-size: 4rem;
  margin-left: 0.3rem;
`;

const LogoBlackSpan = styled.span`
  color: ${theme.colors.black.main};
  margin-top: auto;
  margin-bottom: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const MenuWrapperMobile = styled(MenuWrapper)`
  @media ${mediaQueries.tablet("min")} {
    display: none;
  }
  flex: 0;
  font-size: 1.4rem;
`

const MenuWrapperDesktop = styled(MenuWrapper)` 
  @media ${mediaQueries.tablet("max")} {
      display: none;
  }
  display: flex;
`

const StyledLink = styled(Link)`
  && {
    margin: auto 0 auto 1rem;
    @media ${mediaQueries.tablet("max")} {
      margin: auto;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${theme.colors.black.main};
  font-size: 1.5rem;
  @media ${mediaQueries.tablet("max")} {
    font-size: 1.8rem;
  }
  font-family: 'Athiti', sans-serif!important;
  font-weight: 550;
  background: none;
  margin: auto;
  padding: 0.9rem 0 0 0;
  transition: 0.2s ease;
  text-align: right;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
`;

const Menu = props => {
  const path = props.location.pathname.replace("/", "");
  return (
    <Container>
      <LogoWrapper>

        <LogoBlackSpan>Daniel Larsson<LogoYellowSpan>.</LogoYellowSpan> </LogoBlackSpan>
      </LogoWrapper>
      <MenuWrapperMobile>
        <StyledButton onClick={props.toggleDrawer}><MdMenu /></StyledButton>
      </MenuWrapperMobile>
      <MenuWrapperDesktop>
        <StyledLink to="about">
          <StyledButton isActive={path === "about"}>About</StyledButton>
        </StyledLink>
        <StyledLink to="work">
          <StyledButton isActive={path === "work"}>Work</StyledButton>
        </StyledLink>
        <StyledLink to="knowledge">
          <StyledButton isActive={path === "knowledge"}>Knowledge</StyledButton>
        </StyledLink>
      </MenuWrapperDesktop>
    </Container>
  );
};

export default withRouter(Menu);
