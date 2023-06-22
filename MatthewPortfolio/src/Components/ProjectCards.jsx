import { Card, CardGroup, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


function ProjectCards() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="Featured-Projects">
      <Container>
        <Row>
          <Col>
          {/* <a href="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png"> */}
          <Card onClick={handleShow} style={{ cursor:'pointer' , width: '18rem' , height: '25rem' }}>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" className='Project-Cover-Image'/>
          < Card.Body>
              <Card.Title>Project Mammoth</Card.Title>
              <Card.Text>
                Programming Lead on for Project Mammoth, responsible for interactivity of the display
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </a> */}
          </Col>
          <Col>
            <a href="https://homeinvr.ca/">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HomeLogo_no_words.png" className='Project-Cover-Image'/>
                <Card.Body>
                  <Card.Title>H.O.M.E</Card.Title>
                  <Card.Text>
                    Programming Lead on the VR project H.O.M.E
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>  
            <a href="https://tahpin.com/">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" className='Project-Cover-Image'/>
                <Card.Body>
                  <Card.Title>Taphin</Card.Title>
                  <Card.Text>
                   Designer and Programmer for the finanical literacy moblie application of Taphin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        
        <Modal.Body>
          <Container >
          <Row>
            <Col>
              <Image className='Mod-Banner-Image' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" fluid />
            </Col>
            <Col>       
              <h1 className='Mod-Title-Text'>Project Mammoth</h1>
              <a href='https://mkashew13.wixsite.com/project-mammoth'><h3 className='Mod-URL-Text'>projectmammoth.com</h3></a>
              <a href='https://github.com/macnemat/Project-Mammoth'><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' /></a>
            </Col>
          </Row>
          </Container>
            <p className='Mod-Body-Text'>
              Project Mammoth is a hologram interface focused on raising awareness to endangered spieces across the planet
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCards;