import { Card, CardGroup, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


function ProjectCards() {

  const [showMammoth, setShowMammoth] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showtahpin, setShowtahpin] = useState(false);
  const [showTatics, setShowTatics] = useState(false);


  const handleCloseMammoth = () => setShowMammoth(false);
  const handleShowMammoth = () => setShowMammoth(true);

  const handleCloseHome = () => setShowHome(false);
  const handleShowHome = () => setShowHome(true);

  const handleClosetahpin = () => setShowtahpin(false);
  const handleShowtahpin = () => setShowtahpin(true);

  const handleCloseTatics = () => setShowTatics(false);
  const handleShowTatics = () => setShowTatics(true);

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
            <Card onClick={handleShowtahpin} style={{ cursor: 'pointer', width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" className='Project-Cover-Image' />
              <Card.Body>
                <Card.Title>Tahpin</Card.Title>
                <Card.Text>
                  Designer and Programmer for moblie application Tahpin.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={handleShowTatics} style={{ cursor: 'pointer', width: '18rem', height: '24rem' }}>
              <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" className='Project-Cover-Image' />
              <Card.Body>
                <Card.Title>Turn Based Tatics</Card.Title>
                <Card.Text>
                  Independent Developer
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
                <a href='https://mkashew13.wixsite.com/project-mammoth' target="_blank"><h3 className='Mod-URL-Text'>projectmammoth.com</h3></a>
                <a href='https://github.com/macnemat/Project-Mammoth' target="_blank"><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              Project Mammoth is a hologram display focused on raising awareness to endangered species across the planet.
              The project aimed to use a more technologically advanced approach as a way to increase attention to the animals on display.
              The display featured a full 360° video projection that could be interacted with via a touch sensor.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth/pm_prototype.jpg' fluid />
            <p className='Mod-Body-Text'>
              As the primary technical lead on Project Mammoth, I was responsible for the setup and operation of the display and interactivity. I additionally built the application that would be running the video feed for the animals.
              The entire setup was bulit using a Raspberry Pi as the centeral computing system that would be connected to both the TV and gesture interface.
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
                <a href='https://linktr.ee/homeinvr' target="_blank"><h3 className='Mod-URL-Text'>homeinvr</h3></a>
                <a href='https://github.com/Montainproductions/4L00-VR-Project' target="_blank"><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              HOME, Hall of Mental Health Experiences, is a Virtual Reality experience that simulates what someone may experience living with a mental illness.
              HOME focused on five mental illnesses that we could best emulate through the technology available, those being: OCD, PTSD, DPDR, Panic Disorder, and Schizophrenia.
              HOME was built using an Oculus Quest 2 headset and would have the user move through scripted set pieces in order to follow the simulation.
              As a Programming Lead for the project, I was responsible for constructing the Virtual Reality interactions, key features, and implementation of the art and musical assets.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HOME/HOME-Panic-Capture.PNG' fluid />
            <p className='Mod-Body-Text'>
              I was in charge of getting the VR movement system set up, it was decided early on that the user would move using teleportation to avoid any problems with motion sickness.
              Each of the rooms has a floor map in which the user can teleport around. For the Panic Room I had to ensure we had working interaction system that would allow the user to pick up the eggs for the section.
              The room has several stages that the player triggers apon reaching certain parts of the room. The different stages affect the voice lines that are played, the sound level, the light level, the position of the ceiling,
              and whether the controller starts vibrating.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HOME/HOME-Schizophrenia-Capture.PNG' fluid />
            <p className='Mod-Body-Text'>
              The Schizophrenia room is a more linear experience that presents a series of different events that may or may out be real. The experience involves multiple moving pieces such as, shadows moving across the walls, voices talking from different directions,
              objects moving on their own, and fires starting out of nowhere. The sequences are scripted with specific time intervals that were modified based on design decisions.
            </p>
            <iframe className='Mod-Body-Video' width="908" height="480" src="https://www.youtube.com/embed/wZ8f6lBxQlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseHome} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showtahpin} onHide={handleClosetahpin} dialogClassName="modal-90w">
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image className='Mod-Banner-Image mx-auto d-block' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" fluid />
              </Col>
              <Col>
                <h1 className='Mod-Title-Text'>Tahpin</h1>
                <a href='https://tahpin.com/' target="_blank"><h3 className='Mod-URL-Text'>tahpin.com</h3></a>
                <a href='https://github.com/AbubakarBunamay/3P99-Tahpin' target="_blank"><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              Tahpin is a financial literacy application that I and others had the opportunity to construct mini-games for. I worked as both a designer and programmer on the project,
              I was responsible for developing mini-games from inception to functionality for a mobile phone application. This involved laying out the groundwork for mini-games, developing their mechanics,
              and creating the user interface functionality.
            </p>
            <Row>
              <Col>
                <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Tahpin/Trivia%20Capture.PNG' fluid />
              </Col>
              <Col>
                <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Tahpin/Catch-Finances-Capture.PNG' fluid />
              </Col>
            </Row>
            <p className='Mod-Body-Text'>
              There we a multitude of mini-games designed for the project although for the production portion, we selected the ones that we believed could be completed in a strict timeframe.
              Trivia was a straightforward process of displaying the questions, answers, timer, and a score increase for answering correctly. The question base is constructed from a CSV form that can be freely
              edited without trouble.
              <br />
              <br />
              Catch Finances is the second mini game I worked on, it features a statement with a missing word that the user will have to fill in by catching one of the falling words with the basket.
              Missing the correct word or catching the wrong word will cause the user to fail the current question and a layer of blocks to the bottom limiting the space in which the user can react to the falling words.
              The game requires the user to be able to read and analyze the question well enough to determine if the a falling answer is correct or not and be able to catch the right answer and dodge the wrong answers.
            </p>
            <Image className='Mod-Body-Image' style={{ width: '30%' }} src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Tahpin/Game-End-Capture.PNG' fluid />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClosetahpin} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTatics} onHide={handleCloseTatics} dialogClassName="modal-90w">
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image className='Mod-Banner-Image mx-auto d-block' src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HomeLogo_no_words.png" fluid />
              </Col>
              <Col>
                <h1 className='Mod-Title-Text'>Turn Based Tatics Demo</h1>
                <a href='https://github.com/macnemat' target="_blank"><Image className='Mod-GitHub' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/5b685a804a59ce5537db30a7107319760d171672/MatthewPortfolio/src/assets/github-mark/github-mark/github-mark.svg' fluid /></a>
              </Col>
            </Row>
            <hr />
            <p className='Mod-Body-Text'>
              A Turn Based Tactics RPG built in the Godot engine. The game takes place on a two dimensional grid which contains “units” that either the player controllers or must defeat.
              All units from one side may make an action on their turn, after which the opposing set of units can make their actions.
              This project has been a personal favourite of mine full of difficulties and problem solving. However all by myself, and with the knowledge of others who posted and answered questions online,
              I’ve created working demo technical demo with dream of being able to build the project further.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HOME/HOME-Panic-Capture.PNG' fluid />
            <p className='Mod-Body-Text'>
              Pathfinding is a crucial part of any turn based strategy game in terms of not just the path a unit can walk on but the areas that walkable themselves, along with the attackable areas.
              In order to get an accurate overlay of walkable cells the use Dijkstra’s Algorithm was necessary and is the backbone of the grid system.
            </p>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HOME/HOME-Schizophrenia-Capture.PNG' fluid />
            <p className='Mod-Body-Text'>
              Each unit has a list of stats, weapons, and spells. Stats effect different aspects of the combat, weapons are the method in which a unit may attack an enemy, armour can increase the
              defensive stats of a unit, and spells can be used to attack an enemy or heal/enhance an ally. The biggest challenge with units was having a unit be able to contain the a list of stats
              and items without the either being directly tied to the unit object itself. Godot’s Resources were a massive help as they are able to contain all the information regarding
              a specific unit’s information, stats, and inventory without being tied to the specific unit object and are able to be freely moved to another unit object if necessary.
            </p>
            <h2>In Progess: Large Scale Engagements</h2>
            <Image className='Mod-Body-Image' src='https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HOME/HOME-Schizophrenia-Capture.PNG' fluid />
            <p className='Mod-Body-Text'>
              Currently in development is a “battalion” system, a battalion made up from several individual units under one united battalion. The battalion have their own map to move on but once engaged
              in combat the battalions can no longer move and the units that make up the battalion can now move freely with a combat sector. The biggest challenge so far with this system is integrating
              with the existing unit combat and movement systems. Another problem has been syncing movement of both battalion movement and unit movement together and preventing any overlapping scenarios.
              This system has required far more development time than previous systems but it’s coming along quite well. I’m hoping to have a working demo of with this system soon.
            </p>
            <iframe className='Mod-Body-Video' width="908" height="480" src="https://www.youtube.com/embed/wZ8f6lBxQlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseHome} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCards;