import { IconArrowUpCircle } from "../../styles/commonStyles";
import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Instagram, Google } from "@styled-icons/bootstrap";
import {
  FooterSection,
  FooterTop,
  FooterBottom,
  SocialLinkContainer,
} from "./Footer.style";
import NewLetterForm from "../../components/NewLetterForm";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <FooterTop>
          <Container>
            <Row>
              <Col>
                <div className="footer-info">
                  <h3>Sailor</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <SocialLinkContainer>
                    <Link to="#">
                      <Twitter />
                    </Link>
                    <Link to="#">
                      <Facebook />
                    </Link>
                    <Link to="#">
                      <Instagram />
                    </Link>
                    <Link to="#">
                      <Google />
                    </Link>
                    <Link to="#">
                      <Twitter />
                    </Link>
                  </SocialLinkContainer>
                </div>
              </Col>
              <Col className="footer-links">
                <h4>Useful Links</h4>
              </Col>
              <Col className="footer-links">
                <h4>Our Services</h4>
              </Col>
              <Col className="footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Join with us</p>
                <NewLetterForm />
              </Col>
            </Row>
          </Container>
        </FooterTop>

        <FooterBottom className="container">
          <div className="copyright">
            &copy; Copyright{" "} { new Date().getFullYear() }
          </div>
        </FooterBottom>
      </FooterSection>
      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <IconArrowUpCircle />
      </Link>
    </div>
  );
};

export default Footer;
