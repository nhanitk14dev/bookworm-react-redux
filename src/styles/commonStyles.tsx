import styled, { createGlobalStyle } from "styled-components";
import {
  ChevronDown,
  ChevronRight,
  ArrowUpCircle,
} from "@styled-icons/bootstrap";

const CommonStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
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

export const ErrorLabel = styled.div`
  color: red;
  font-size: 14px;
`;

export const NewsLetterForm = styled.form`
  margin-top: 30px;
  background: #fff;
  padding: 20px 10px;
  position: relative;
  border-radius: 4px;

  input[type="email"] {
    border: 0;
    padding: 4px;
    width: 100%;
  }

  input[type="submit"] {
    height: 40px;
    border: none;
    background: none;
    font-size: 16px;
    padding: 0 20px 2px 20px;
    background: #d9232d;
    color: #fff;
    transition: 0.3s;
    border-radius: 0 4px 4px 0;
  }
`;

export const NewsLetterFormGroup = styled.div`
  display: flex;
  justify-content: center;
`;


export const SectionContainer = styled.div`
  margin: 40px auto;
  background: #e9ecef;
  padding: 30px;
  color: black;
  position: relative;

  h2 {
    font-weight: 600;
  }

  button,
  input[type="submit"] {
    background: #d9232d;
    color: white;
    text-transform: uppercase;
    border: none;
    padding: 10px 8px;
    margin: 5px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
  }
`;

export default CommonStyles;
