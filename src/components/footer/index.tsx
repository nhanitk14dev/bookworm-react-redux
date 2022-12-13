import { Container, Row, Col } from "react-bootstrap";
import { FooterSection, FooterTop, FooterBottom } from "./Footer.style";
import NewLetterForm from "../../components/NewLetterForm";

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
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <NewLetterForm />
              </Col>
            </Row>
          </Container>
        </FooterTop>

        <FooterBottom className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Sailor</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </FooterBottom>
      </FooterSection>
    </div>
  );
};

export default Footer;
