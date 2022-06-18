import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isWebUri } from "valid-url";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Main = styled.div`
  text-align: center;
  max-width: 500px;

  & svg {
    width: 80px;
    height: 80px;
    margin-bottom: 40px;
  }

  .desc {
    margin-top: 40px;
  }
`;

// Handles Redirection
const RedirectHandler = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pckd = pathname.split("/")[1];

  useEffect(() => {
    if (pckd) setTimeout(() => navigate("/"), 1500);
  }, []);

  // Meanwhile message
  return (
    <Wrapper>
      <Main>
        <Logo className="logo" />
        <h1>Redirecting to the correct page!...</h1>
        <p className="desc">
          Powered by <a href="/">Gracia Dev</a>
        </p>
      </Main>
    </Wrapper>
  );
};

export default RedirectHandler;
