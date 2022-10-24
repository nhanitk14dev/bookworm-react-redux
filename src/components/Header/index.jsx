import { Button, IconChervonDown } from "../../commonStyles";
import { 
  HeaderSection, 
  HeaderContainer, 
  Logo, 
  Nav,
  Dropdown,
  IconList 
} from "./HeaderStyles";

const Header = () => {

  return <div>
    <HeaderSection>
      <HeaderContainer className="container">
        <Logo>
          <a href="/">React</a>
        </Logo>
        <Nav className="navbar">
          <ul>
            <li>
              <a href="index.html" className="active">Home</a>
            </li>
            <Dropdown className="dropdown">
              <a href="#"><span>About</span> <IconChervonDown /></a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <Dropdown className="dropdown"><a href="#"><span>Deep Drop Down</span>
                 <IconChervonDown /></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </Dropdown>
              </ul>
            </Dropdown>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
              <a href="index.html"><Button>Get Started</Button></a>
            </li>
          </ul>
          <IconList />
        </Nav>
      </HeaderContainer>
    </HeaderSection>
  </div>;
}

export default Header;