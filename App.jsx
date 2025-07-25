import React from "react";
import { createRoot } from "react-dom/client";
import { styled } from "@linaria/react";

const GlobalStyle = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: white transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-color: #000;
    overflow: hidden;
  }

  @keyframes rotar {
    0% {
      transform: perspective(20000px) rotateX(-20deg) rotateY(-359deg);
    }
    100% {
      transform: perspective(20000px) rotateX(-20deg) rotateY(359deg);
    }
  }

  @keyframes rotarLogo {
    0% {
      transform: perspective(20000px) translate(-50%, -50%)
        translateZ(calc(var(--w-negative) / 2)) rotateY(-359deg);
    }
    100% {
      transform: perspective(20000px) translate(-50%, -50%)
        translateZ(calc(var(--w-negative) / 2)) rotateY(359deg);
    }
  }
`;

const ContainerCube = styled.aside`
  --w: 120px;
  --w-negative: calc(var(--w) * -1);
  position: relative;
  width: var(--w);
  height: var(--w);
  transform-style: preserve-3d;
  animation: rotar 8s linear infinite alternate;

  img {
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    top: 50%;
    left: 50%;
    animation: rotarLogo 8s linear infinite alternate-reverse;
  }

  .side {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    border: 2px solid #fff;
    border-image-source: linear-gradient(45deg, red, white, gray);
    border-image-slice: 3;

    &.behind {
      transform: translateZ(var(--w-negative));
      background-color: #00000020;
    }

    &.right {
      transform-origin: 100% 50%;
      transform: rotateY(-90deg);
      background-color: #ffffff20;
    }

    &.left {
      transform-origin: 0% 50%;
      transform: rotateY(90deg);
      background-color: #ffffff20;
    }

    &.top {
      transform-origin: 50% 0%;
      transform: rotateX(-90deg);
      background-color: #ffffff35;
    }

    &.bottom {
      transform-origin: 50% 100%;
      transform: rotateX(90deg);
      background-color: #ffffff35;
    }
  }
`;

function App() {
  return (
    <GlobalStyle as="div">
      <ContainerCube>
        <div className="side front" />
        <div className="side behind" />
        <div className="side right" />
        <div className="side left" />
        <div className="side top" />
        <div className="side bottom" />
        <img src="assets/lg-logo.webp" alt="logo" />
      </ContainerCube>
    </GlobalStyle>
  );
}

const mount = document.createElement("div");
document.body.appendChild(mount);
const root = createRoot(mount);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
