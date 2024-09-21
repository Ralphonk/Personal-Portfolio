import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo from '../assets/img/UJ-logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import instaLogo from "../assets/img/instagramLogo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />

                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/umesh-joshi-40bbb4308"><img src={navIcon1} alt="LinkedinIcon" /></a>
                            <a href="https://github.com/Ralphonk"><img src={navIcon2} alt="GithubIcon" /></a>
                            <a href="https://www.instagram.com/_its_me_rahuljoshi/"><img src={instaLogo} alt="Icon" /></a>
                        </div>
                        <p>© 2024 Copyright: Umesh Joshi (Ralph) | All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}