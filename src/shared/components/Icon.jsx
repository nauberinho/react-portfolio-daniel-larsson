import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import {
  DiMozilla,
  DiReact,
  DiGithubBadge,
  DiJavascript1,
  DiNodejs,
  DiHeroku,
  DiPython
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import GraphQL from "../../icons/Graphql";
import Firebase from "../../icons/Firebase";
import Stripe from "../../icons/Stripe";
// import Apollo from "../../icons/Apollo";
import mediaQueries from "../media-queries";
import theme from "../theme";
import Apollo from "../../static/images/apollo.png";

const styleIcon = (icon, color, fontSize) => {
  return styled(icon)`
    && {
      color: ${() => color && theme.colors[color].main};
    }
    font-size: ${() => fontSize && fontSize};
  `;
};

const StyledImage = styled.img`
  height: 2.7rem;
`;

const Icon = ({ icon, fontSize }) => {
  let Icon = <DiMozilla />;
  switch (icon) {
    case "bitbucket":
      Icon = styleIcon(DiMozilla, "red", fontSize);
      return <Icon />;
    case "react":
      Icon = styleIcon(DiReact, "blue", fontSize);
      return <Icon />;
    case "github":
      Icon = styleIcon(DiGithubBadge, "red", fontSize);
      return <Icon />;
    case "javascript":
      Icon = styleIcon(DiJavascript1, "blue", fontSize);
      return <Icon />;
    case "node.js":
      Icon = styleIcon(DiNodejs, "green", fontSize);
      return <Icon />;
    case "graphql":
      Icon = styleIcon(GraphQL, "blue", fontSize);
      return <Icon />;
    case "vue":
      Icon = styleIcon(FaVuejs, "green", fontSize);
      return <Icon />;
    case "firebase":
      Icon = styleIcon(Firebase, "orange", fontSize);
      return <Icon />;
    case "heroku":
      Icon = styleIcon(DiHeroku, "purple", fontSize);
      return <Icon />;
    case "stripe":
      Icon = styleIcon(Stripe, "green", fontSize);
      return <Icon />;
    case "python":
      Icon = styleIcon(DiPython, "black", fontSize);
      return <Icon />;
    case "apollo":
      Icon = styleIcon(Apollo, "black", fontSize);
    case "apollo":
      return <StyledImage src={Apollo} />;
    default:
      Icon = styleIcon(DiMozilla, "red", fontSize);
      return <Icon />;
  }
};

export default Icon;
