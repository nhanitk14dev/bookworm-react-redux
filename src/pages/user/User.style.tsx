import styled from "styled-components";

export const UserContainer = styled.div`
  position: relative;
  margin: auto;
  padding: 10px;

  .title {
    font-weight: 600;
    text-align: center;
  }

  .btn-main {
    height: 40px;
    border: none;
    background: none;
    font-size: 16px;
    padding: 10px;
    background: #d9232d;
    color: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 4px;
    line-height: 130%;
  }

  a {
    color: var(--bs-link-color);
  }
`;

export const UserInfoStyles = styled.div`
  position: relative;
  background: #e9ecef;
  margin: 50px 0;
  padding: 50px;
  max-width: 600px;
`;
