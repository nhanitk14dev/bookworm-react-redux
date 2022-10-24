import styled from 'styled-components';

export const SocialLinkContainer = styled.div`
    position: relative;
    margin: 10px 0;
    display: flex;

    a {
      font-size: 18px;
      display: inline-block;
      background: rgba(255,255,255,0.1);
      color: #fff;
      line-height: 1;
      padding: 5px;
      margin-right: 4px;
      border-radius: 4px;
      text-align: center;
      width: 36px;
      height: 36px;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }

    a:hover {
      background: #d9232d;
      color: #fff;
    }
`;


export const FooterSection = styled.footer`
  background: #4a5562;
  padding: 0 0 30px 0;
  color: #fff;
  font-size: 14px;
  position: relative;
  margin: auto;
  width: 100%;
`;


export const FooterTop = styled.div`
  background: #515d6a;
  padding: 60px 0 30px 0;

  .footer-info {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 24px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700;
  }

  .footer-info > p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    color: #fff;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    position: relative;
    padding-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links > li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .footer-links li:first-child {
    padding-top: 0;
  }


  .footer-links a {
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
  }

  .footer-links a:hover {
    color: white;
  }

`;


export const NewsLetterForm = styled.form`
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 4px;

  input[type=email] {
    border: 0;
    padding: 4px;
    width: calc(100% - 110px);
  }

  input[type=submit] {
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px 2px 20px;
    background: #d9232d;
    color: #fff;
    transition: 0.3s;
    border-radius: 0 4px 4px 0;
  }
`;


export const FooterBottom = styled.div`
  .copyright {
    text-align: center;
    padding-top: 30px;
  }

  .credits {
    padding-top: 10px;
    text-align: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }


  .credits a {
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
    font-weight: 600;
  }

`;