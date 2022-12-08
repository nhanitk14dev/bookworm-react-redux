import { IconChervonDown } from "../commonStyles";
import { Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  IconList,
  Logo,
  InfoContainer
} from "./header/Header.style";

const Navbar = () => {

  const auth = false;
  /*
    To type the onClick event of an element in React, 
    set its type to React.MouseEvent<HTMLElement>. 
    The MouseEvent interface is used to type onClick events in React.
    The easiest way is write the event handler inline in the funtion
  */

  return (
    <>
      <Logo><Link to="/">Logo</Link></Logo>
      <Nav className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/users">List Users</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <Dropdown className="dropdown">
            <Link to="/products">Products<IconChervonDown /></Link>
            <ul>
              <Link to="/product/category-01">Product Category 01</Link>
              <Link to="/product/category-02">Product Category 02</Link>
              <Link to="/product/category-03">Product Category 03</Link>
              <Dropdown className="dropdown"><a href="#"><span>Product Category 04</span>
                <IconChervonDown /></a>
                <ul>
                  <li><Link to="/product/category-04-a">Sub Category 04 - A</Link></li>
                  <li><Link to="/product/category-04-b">Sub Category 04 - B</Link></li>
                  <li><Link to="/product/category-04-c">Sub Category 04 - C</Link></li>
                  <li><Link to="/product/category-04-d">Sub Category 04 - D</Link></li>
                </ul>
              </Dropdown>
            </ul>
          </Dropdown>
          <li>
          {
            auth ? (<>
              <InfoContainer>
                <span className="info">Hi</span>
                <span><button className="btn btn-warning">Logout</button></span>
              </InfoContainer>
            </>)
            : <Link to="/login"><button className="btn btn-danger">Login</button></Link>
          }
          </li>
        </ul>
        <IconList />
      </Nav>
    </>
  );
}

export default Navbar;