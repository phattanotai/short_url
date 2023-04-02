import React, { useEffect, useContext } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { initializeUser } from "./features/authSlice";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  color: rgb(85, 75, 85);
  background-color: rgb(255, 255, 255);

  * {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }
`;

const App = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const intialize = async () => {
      // 1. Check if token is already in local storage
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(initializeUser());
      }
    };
    intialize();
  }, [dispatch]);

  return (
    <StyledThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Router />
      </Wrapper>
    </StyledThemeProvider>
  );
};

export default App;
