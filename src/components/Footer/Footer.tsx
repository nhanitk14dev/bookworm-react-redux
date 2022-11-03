import { IconChervonRight, IconArrowUpCircle } from "../../commonStyles";
import { Container, Row, Col } from 'react-bootstrap';
import { Twitter, Facebook, Instagram, Google } from '@styled-icons/bootstrap';
import { FooterSection, FooterTop, FooterBottom, SocialLinkContainer } from "./Footer.style";
import NewLetterForm from "../../components/NewLetterForm";

const Footer = () => {
  return <div>
    <FooterSection>
      <FooterTop>
        <Container>
          <Row>
            <Col>
              <div className="footer-info">
                <h3>Sailor</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <SocialLinkContainer>
                  <a href="#"><Twitter /></a>
                  <a href="#"><Facebook /></a>
                  <a href="#"><Instagram /></a>
                  <a href="#"><Google /></a>
                </SocialLinkContainer>
              </div>
            </Col>
            <Col className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><IconChervonRight /> <a href="#">Home</a></li>
                <li><IconChervonRight /> <a href="#">About us</a></li>
                <li><IconChervonRight /> <a href="#">Services</a></li>
                <li><IconChervonRight /> <a href="#">Terms of service</a></li>
                <li><IconChervonRight /> <a href="#">Privacy policy</a></li>
              </ul>
            </Col>
            <Col className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><IconChervonRight /> <a href="#">Web Design</a></li>
                <li><IconChervonRight /> <a href="#">Web Development</a></li>
                <li><IconChervonRight /> <a href="#">Product Management</a></li>
                <li><IconChervonRight /> <a href="#">Marketing</a></li>
                <li><IconChervonRight /> <a href="#">Graphic Design</a></li>
              </ul>
            </Col>
            <Col className="footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <NewLetterForm />
            </Col>
          </Row>
        </Container>
      </FooterTop>

      <FooterBottom className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </FooterBottom>

    </FooterSection>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
      <IconArrowUpCircle />
    </a>
  </div>
};

export default Footer;