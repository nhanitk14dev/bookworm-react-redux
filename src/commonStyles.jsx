import styled, { createGlobalStyle } from 'styled-components';
import { ChevronDown, ChevronRight, ArrowUpCircle } from "@styled-icons/bootstrap"


const CommonStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;

// Default Button
export const Button = styled.button.attrs(props => ({
  type: props.type || "button",
}))`
  background: ${props => props.background || "#d9232d"};
  padding: 0.5rem;
  margin-left: 30px;
  border-radius: 4px;
  font-weight: 400;
  color: ${props => props.inputColor || "#FFF"};
  transition: 0.5s all ease-out;
  border: none;
  &:hover {
    background: ${props => props.backgroundHover || "#e1444d"};
  }
`;


// Example override Button
export const OverrideButton = styled(Button)`
  border: none;
`;


// Default Input
export const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
}))`
  color: ${props => props.inputColor || "palevioletred"};
  background: '#FFF';
  border: none;
`;

// Submit Input
export const SubmitInput = styled(Input).attrs({
  type: 'submit'
})`
  background: ${props => props.background || "#d9232d"};
  padding: 0.5rem;
  margin-left: 30px;
  border-radius: 4px;
  font-weight: 400;
  color: ${props => props.inputColor || "#FFF"};
  transition: 0.5s all ease-out;
  &:hover {
    background: ${props => props.backgroundHover || "#e1444d"};
  }
`;


export const IconChervonDown = styled(ChevronDown)`
    height: 10px;
    width: 10px;
    margin-left: 5px;
`;


export const IconChervonRight = styled(ChevronRight)`
    height: 10px;
    width: 10px;
`;


export const IconArrowUpCircle = styled(ArrowUpCircle)`
  width: 40px;
`;


export default CommonStyles;