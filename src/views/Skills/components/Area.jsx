import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import { Icon } from 'semantic-ui-react';
import theme from "../../../shared/theme";
import mediaQueries from "../../../shared/media-queries";

const AreaContainer = styled.div`
  padding: 2rem 0 0 0;
`;

const AreaTitle = styled.div`
  color: ${theme.colors.black.main};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;

const Technique = styled.div`
  display: flex;
`;

const TechniqueTitle = styled.div`
  padding: 0.2rem 0;
  flex: 1;
  @media ${mediaQueries.tablet("min")} {
    font-size: 1.15rem;
  }
`;

const TechniqueRating = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${theme.colors.yellow.main};
`;

const IconWrapper = styled.div`
color: ${theme.colors.yellow.main};
opacity: ${({ opacity }) => opacity};
`



const Area = ({ title, techniques }) => (
  <AreaContainer>
    <AreaTitle>{title}</AreaTitle>
    {techniques.map((t, key) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        const opacity = `0.${i + 2}`;
        if (i <= t.rating && !(i - t.rating) !== -0.5) {
          stars.push(<IconWrapper opacity={opacity}><Icon name="circle" /></IconWrapper>);
        } else if (i - t.rating === 0.5) {
          stars.push(<IconWrapper opacity={opacity}><Icon name="adjust" /></IconWrapper>);
        } else {
          stars.push(<IconWrapper opacity={opacity}><Icon name="circle outline" /></IconWrapper>);
        }
      }
      return (
        <Technique>
          <TechniqueTitle>{t.title}</TechniqueTitle>
          <TechniqueRating>{stars}</TechniqueRating>
        </Technique>
      );
    })}
  </AreaContainer>
);

export default Area;
