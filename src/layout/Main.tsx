import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from '../components/Head';
import Header from '../components/Header';
import FixedBackground from '../components/fixedBackground';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  :root {
      --primary-color: #0879c9;
      --primary-white: #ffffff;
      --primary-grey: #EEEEEE;
      --primary-black: rgba(53, 53, 66, 0.8);
      --primary-font: Brands, sans-serif;
      --regular-font: Regular, sans-serif;
      --solid-font: Solid, sans-serif;
  }

  html {
    width: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-family: var(--primary-font);
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: var(--primary-font);
  }

  
`;

const MainContainer = styled.main`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-size: 100%;
`;

const Main: FC = ({ children }) => (
  <MainContainer>
    <Head />
    <GlobalStyle />
    <Header />
    {children}
    <FixedBackground />
    <Footer />
  </MainContainer>
);

export default Main;
