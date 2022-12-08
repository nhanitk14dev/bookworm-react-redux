import styled from 'styled-components';
import { List } from "@styled-icons/bootstrap"

export const HeaderSection = styled.header`
    background: white;
    transition: all 0.5s;
    z-index: 2;
    padding: 20px 0;

    .header-scrolled {
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
        padding: 12px 0;
    }

    a,
    .active {
        text-decoration: none;
        color: #d9232d;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    .info {
        font-weight: 700;
        margin-right: 5px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.h1`
    font-size: 28px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    
    a, a:hover {
        color: #556270;
    }

    img {
        max-height: 40px;
    }
`;

export const Nav = styled.nav`
   padding: 0;

   ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;

    @media (max-width: 679px) {
        display: none;
    }

   }

   li {
    position: relative;
   }

   a {
    display: flex;
    align-items: center;
    padding: 10px 0 10px 30px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #556270;
    white-space: nowrap;
   }

    a:hover {
        color: #e24d55;
        text-decoration: none;
    }

`;

export const Dropdown = styled.li`
    
    ul {
        display: block;
        position: absolute;
        left: 14px;
        top: calc(100% + 30px);
        margin: 0;
        padding: 10px 0;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
        transition: 0.3s;
    }

    ul > li {
        min-width: 200px;
    }

    // sub
    .dropdown > ul {
        top: 0;
        left: calc(100% - 30px);
        visibility: hidden;
    }

    :hover > ul,
    .dropdown:hover > ul {
        opacity: 1;
        top: 100%;
        visibility: visible;
    }
`;

export const IconList = styled(List)`
    width: 40px;
    color: #556270;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;

    @media (max-width: 991px) {
        display: block;
    }
`;