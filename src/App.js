import React, { useState } from "react";

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// Components
import Menu from "./shared/components/Menu";
import Drawer from "./shared/components/Drawer";
import Footer from "./shared/components/Footer";

// Views
import About from "./views/About";
import Work from "./views/Work";
import Skills from "./views/Skills";

import mediaQueries from "./shared/media-queries";

const Container = styled.div`
  font-family: 'Athiti', sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(30%, rgba(255, 255, 255, 1)),
    color-stop(47%, rgba(246, 246, 246, 1)),
    color-stop(72%, rgba(237, 237, 237, 1)),
    color-stop(100%, rgba(237, 237, 237, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  a {
    text-decoration: none;
  }
  @media ${mediaQueries.desktop("min")} {
    padding: 0rem 35rem;
  }
  @media ${mediaQueries.laptopL("min")} {
    padding: 0rem 30rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 0rem 10rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0rem 2rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 0rem;
  }
`;

// const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       "Athiti",
//       "Roboto Condensed",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"'
//     ].join(",")
//   }
// });

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () =>
    setIsDrawerOpen(!isDrawerOpen)

  return (
    <Container>
      <Router>
        <Menu toggleDrawer={toggleDrawer} />
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        <Route exact path="/" component={() => <Redirect to='/about' />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/knowledge" component={Skills} />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
