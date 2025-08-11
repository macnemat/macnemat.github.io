import { Image, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className="Footer" id="contact">
            <Row>
                <Col>
                    <a href="https://www.linkedin.com/in/matthew-macneil-9999ba22b"><Image className="mx-auto d-block" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Linkedin_Logo.png" width="50" height="50" /></a>
                </Col>
                <Col md="auto">
                    <h2>macnemat@gmail.com</h2>
                </Col>
                <Col>
                    <h2 href = "../assets/Resume/Matthew-MacNeil-Resume.pdf">Resume</h2>
                </Col>
            </Row>
        </div>
    )
}

export default Footer