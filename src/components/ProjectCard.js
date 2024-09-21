import { Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, aboutProject, projectLink }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Col size={4} sm={4} md={4} lg={4} xl={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <Button variant="primary" onClick={() => setShowModal(true)}>Learn More</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} style={{ backgroundColor: '#333' }}>
                <Modal.Header closeButton style={{ backgroundColor: '#333', color: 'white' }}>
                    <Modal.Title style={{ color: 'white' }}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#333', color: 'white' }}>
                    <p>{aboutProject}</p>
                    <p>Visit the website: <a href={projectLink} target="_blank" style={{ color: 'white' }}>{projectLink}</a></p>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#333', color: 'white' }}>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Col>
    )
}
