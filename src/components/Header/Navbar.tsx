import { IconChervonDown } from "../../commonStyles";
import { Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  IconList,
  Logo
} from "./HeaderStyles";


const Navbar = () => {
  return (
    <>
      <Logo><Link to="/">Logo</Link></Logo>
      <Nav className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
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
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/card">Card</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/signup"><button className="btn btn-danger">Sign Up</button></Link></li>
        </ul>
        <IconList />
      </Nav>
    </>
  );
}

export default Navbar;