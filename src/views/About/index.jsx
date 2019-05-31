import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import {
  MdLocationOn,
} from "react-icons/md";
import {
  FaCircle,
} from "react-icons/fa";

import SectionContainer from "../../shared/components/SectionContainer";
import Avatar from "@material-ui/core/Avatar";
import image from "../../static/images/me.jpeg";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";
import { about } from '../../static/data';

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    display: flex;
    padding: 0 5rem;
  }
  @media ${mediaQueries.tablet("min")} {
    display: flex;
    padding: 2rem 0;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0;
  }
`;

const Heading = styled.div`
@media ${mediaQueries.laptop("min")} {
  padding: 0 5rem;
}
@media ${mediaQueries.tablet("min")} {
  padding: 0
}
@media ${mediaQueries.laptop("max")} {
  padding: 0;
}
color: ${theme.colors.black.main}
`

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`

const Introduction = styled.div`
  padding: 1rem 0;
  font-size: 1.3rem;
`

const TextContainer = styled.div`
  flex: 2;
  line-height: 1.4rem;
  @media ${mediaQueries.laptop("min")} {
    font-size: 1.15rem;
  }
  
  color: ${theme.colors.black.main};
`;

const Story = styled.div`

`

const StatusWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
`

const StatusItem = styled.div`
  padding: 0 1rem 0 0rem;
  display: flex;
  svg{
    margin:auto;
  }
`

const Image = styled.div`
  display: flex;
  flex: 1;
  @media ${mediaQueries.laptop("max")} {
    justify-content: center;
    padding: 3rem 0;
  }
  
  justify-content: flex-end;
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin-top: auto;
    margin-bottom: auto;
    width: 12rem;
    height: 12rem;
  }
`;

const StyledQuoteIcon = styled(FormatQuoteIcon)`
  color: ${theme.colors.yellow.main};
`;

const Dot = styled.span`
  font-size: 4rem;
  color: ${theme.colors.yellow.main};
`;

const StyledLink = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  font-weight: bold;
  display: inline-block;
  svg {
    margin-top: auto;
    display: inline-block;
  }
`
const StyledCircle = styled(FaCircle)`
font-size: 0.5rem;
`

const About = () => {
  return (
    <SectionContainer>
      <Heading><Title>About me</Title>
        <Introduction></Introduction>
      </Heading>

      <Content>

        <TextContainer>
          <Story>
          <StyledQuoteIcon />
          {about.text}
          <StyledQuoteIcon />
          </Story>
          <StatusWrapper>'
            <StatusItem>
            <StyledCircle /> 
            &nbsp;&nbsp;{about.occupation}
            </StatusItem>
            <StatusItem>
            <MdLocationOn/>&nbsp;&nbsp;{about.location}
            </StatusItem>
          </StatusWrapper>
        </TextContainer>
        
        <Image>
          <StyledAvatar alt="Me" src={image} />
        </Image>
      </Content>
    </SectionContainer>
  );
};

export default About;
