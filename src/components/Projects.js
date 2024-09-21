import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import CocaCola from "../assets/img/Coca-cola-ad.png";
import sneakers from "../assets/img/sneakers-e-commerce-website.png";
import easyPG from "../assets/img/EasyPg-paying-guest-booking-system.png";
import weatherApp from "../assets/img/Weather-app.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Coca Cola 3D Rotation Advertisement Design",
            description: "Design & Development",
            imgUrl: CocaCola,
            aboutProject: "This project was a 3D rotation advertisement design for Coca Cola. It was designed to showcase the brand's new product in a unique and eye-catching way.",
            projectLink: "https://ralphonk.github.io/Coca-Cola-3D-Rotation/",

        },
        {
            title: "E-commerce Website for sneakers",
            description: "Design & Development",
            imgUrl: sneakers,
            aboutProject: "A visually stunning and user-friendly e-commerce website designed to showcase a wide range of sneakers from Nike.",
            projectLink: "https://ralphonk.github.io/.sneakers-E-commerce-Website/",
        },
        {
            title: "Paying Guest Booking System",
            description: "Design & Development",
            imgUrl: easyPG,
            aboutProject: "A web-based application designed to simplify the process of booking and managing paying guest accommodations. This system provides an easy-to-use interface for guests to search and book available rooms, and for administrators to manage bookings, rooms, and guest information.",
            projectLink: "https://ralphonk.github.io/Paying-Guest-Booking-System/"
        },
        {
            title: "Weather App",
            description: "Design & Development",
            imgUrl: weatherApp,
            aboutProject: "A simple weather app built using HTML, CSS, and JavaScript. This project retrieves current weather data from openweather API and displays it in a clean and user-friendly interface.",
            projectLink: "ralphonk.github.io/Weather-App/",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p style={{ textAlign: 'center' }}>Below are some of the projects I've worked on, showcasing my skills in web development, problem-solving, and creativity. These projects demonstrate my ability to design and build functional and user-friendly applications, and my passion for delivering high-quality results.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.slice(0, 3).map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects.slice(3, 6).map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects.slice(3, 6).map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=" "></img>
        </section>
    )
}
