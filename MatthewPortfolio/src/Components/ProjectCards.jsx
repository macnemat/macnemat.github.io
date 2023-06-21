import { Card, CardGroup, Modal, Button, Container, Row, Col } from 'react-bootstrap';
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
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
             Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCards;