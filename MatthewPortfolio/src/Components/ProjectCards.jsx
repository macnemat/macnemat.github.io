import { Card, CardGroup, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


function ProjectCards() {

  const [showMammoth, setShowMammoth] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showTaphin, setShowTaphin] = useState(false);


  const handleCloseMammoth = () => setShowMammoth(false);
  const handleShowMammoth = () => setShowMammoth(true);

  const handleCloseHome = () => setShowHome(false);
  const handleShowHome = () => setShowHome(true);

  const handleCloseTaphin = () => setShowTaphin(false);
  const handleShowTaphin = () => setShowTaphin(true);

  return (
    <div className="Featured-Projects">
      <Container>
        <Row>
          <Col>
            <Card onClick={handleShowMammoth} style={{ cursor: 'pointer', width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" className='Project-Cover-Image' />
              <Card.Body>
                <Card.Title>Project Mammoth</Card.Title>
                <Card.Text>
                  Techincal Lead on Hologram installation Project Mammoth
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShowHome} style={{ cursor: 'pointer', width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HomeLogo_no_words.png" className='Project-Cover-Image' />
              <Card.Body>
                <Card.Title>HOME</Card.Title>
                <Card.Text>
                  Programming Lead on the VR project HOME
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShowTaphin} style={{ cursor: 'pointer', width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" className='Project-Cover-Image' />
              <Card.Body>
                <Card.Title>Taphin</Card.Title>
                <Card.Text>
                  Designer and Programmer for moblie application Taphin.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showMammoth} onHide={handleCloseMammoth} dialogClassName="modal-90w">
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image className='Mod-Banner-Image mx-auto d-block' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" fluid />
              </Col>
              <Col>
                <h1 className='Mod-Title-Text'>Project Mammoth</h1>
                <a href='https://mkashew13.wixsite.com/project-mammoth'><h3 className='Mod-URL-Text'>projectmammoth.com</h3></a>
                <a href='https://github.com/macnemat/Project-Mammoth' ><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              Project Mammoth is a hologram display focused on raising awareness to endangered spieces across the planet.
              The project aimed to use a more technologically advanced approach as a way to increase attention to the animals on display.
              The display featured a full 360° video projection that could be interacted with via a touch sensor.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_prototype.jpg' fluid />
            <p className='Mod-Body-Text' style={{ marginTop: '6px' }}>
              As the primary techincal lead on Project Mammoth I was responsbile for the setup and operation of the display and interactivity. I addiontally built the application that would be running the video feed for the animals.
              The entire setup was
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_coding.jpg' fluid />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseMammoth} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showHome} onHide={handleCloseHome} dialogClassName="modal-90w">
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image className='Mod-Banner-Image mx-auto d-block' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HomeLogo_no_words.png" fluid />
              </Col>
              <Col>
                <h1 className='Mod-Title-Text'>HOME</h1>
                <a href='https://homeinvr.ca/'><h3 className='Mod-URL-Text'>homeinvr.ca</h3></a>
                <a href='https://github.com/Montainproductions/4L00-VR-Project' ><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              HOME, Hall of Mental Health Experinces, is a Virtual Reality experince that simulates what someone may experinnce living with a mental illness.
              HOME focused on five mental illnesses that we could best emulate through the techonology avaliable, those being: OCD, PTSD, DPDR, Panic Disorder, and Schizophrenia.
              HOME was built using a Oculus Quest 2 headset and would have the user move through scripted set pieces in order to follow the simulation.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_prototype.jpg' fluid />
            <p className='Mod-Body-Text' style={{ marginTop: '6px' }}>
              As a Programming Lead for the project, I was responsbile for the constructing the Virtual Reality interactions, key features, and implmentation of art and musical assests.

            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_coding.jpg' fluid />
            <iframe className='Mod-Body-Video' width="853" height="480" src="https://www.youtube.com/embed/wZ8f6lBxQlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseHome} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTaphin} onHide={handleCloseTaphin} dialogClassName="modal-90w">
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image className='Mod-Banner-Image mx-auto d-block' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" fluid />
              </Col>
              <Col>
                <h1 className='Mod-Title-Text'>Taphin</h1>
                <a href='https://tahpin.com/'><h3 className='Mod-URL-Text'>taphin.com</h3></a>
                <a href='https://github.com/AbubakarBunamay/3P99-Tahpin' ><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              Taphin is a finaical literacy application
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_prototype.jpg' fluid />
            <p className='Mod-Body-Text' style={{ marginTop: '6px' }}>
              I worked as both a desinger and Programmer on this project
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_coding.jpg' fluid />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseTaphin} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCards;