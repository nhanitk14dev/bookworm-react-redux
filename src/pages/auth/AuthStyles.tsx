import styled from "styled-components";

export const AuthContainer = styled.div`
  margin: 40px auto;
  background: #e9ecef;
  max-width: 400px;
  padding: 30px;
  color: black;

  h2 {
    text-align: center;
    font-weight: 600;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: black;
    font-size: 14px;
    font-weight: 500;
  }

  button,
  input[type="submit"] {
    background: #d9232d;
    color: black;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 10px;
  }
`;
