import React from "react";
import PropTypes from "react-proptypes";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

import mediaQueries from "../media-queries";
import theme from "../theme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ButtonBase from "@material-ui/core/ButtonBase";
import { MdClose } from 'react-icons/md';

const Container = styled.div`
    @media ${mediaQueries.tablet("min")} {
        display: none;
    }
    sans-serif;
    display: flex;
    width: 100vw;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    @media ${mediaQueries.tablet("min")} {
        justify-content: flex-end;
    }
    @media ${mediaQueries.tablet("max")} {
    }
    sans-serif;
    height: 100vh;
    overflow: hidden;
    padding: 5rem 0 0;
`;

const ButtonContainer = styled.div`
    text-align: center;
    padding: 10rem 0;
    font-size: 2.5rem;
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${theme.colors.black.main};
  font-size: 1.35rem;
  font-weight: 550;
  background: none;
  margin: auto;
  font-family: 'Athiti', sans-serif;
  transition: 0.2s ease;
  @media ${mediaQueries.tablet("min")} {
    text-align: right;
  }

  padding: 0.25rem 0 0.25rem;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
`;

const StyledLink = styled(Link)`
  && {
    display: inline-block;
    margin:  auto;
  }
`;

const DrawerComponent = props => {
    const { onClose, isOpen } = props;
    const path = props.location.pathname.replace("/", "");
    return (
        <SwipeableDrawer open={isOpen} onClose={onClose}>
            <Container>

                <Menu>
                    <StyledLink onClick={props.onClose} to="about">
                        <StyledButton isActive={path === "about"}>About</StyledButton>
                    </StyledLink>
                    <StyledLink onClick={props.onClose} to="work">
                        <StyledButton isActive={path === "work"}>Work</StyledButton>
                    </StyledLink>
                    <StyledLink onClick={props.onClose} to="knowledge">
                        <StyledButton isActive={path === "knowledge"}>Knowledge</StyledButton>
                    </StyledLink>
                    <ButtonContainer>
                        <ButtonBase
                            onClick={onClose}
                            variant="contained"
                            color="default"
                            fullWidth={false}
                        >
                            <MdClose />
                        </ButtonBase>
                    </ButtonContainer>
                </Menu>

            </Container>
        </SwipeableDrawer>
    );
};
export default withRouter(DrawerComponent);