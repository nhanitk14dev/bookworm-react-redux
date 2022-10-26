/*
  Spinner is a loading action to display on page, use styled-component to Css styles
  Follow: https://github.com/andrej-naumovski/react-suspense-typescript-example
  Styled: https://styled-components.com/docs/api#typescript
*/
import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  &:before {
    animation: 1.5s linear infinite ${spinnerAnimation};
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #d9232d;
    border-radius: 50%;
    content: "";
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
    z-index: 1500;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer className="loading-spinner" />
  );
}

export default Spinner;