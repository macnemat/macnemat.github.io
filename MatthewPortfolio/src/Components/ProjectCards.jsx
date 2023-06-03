import { Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap';

function ProjectCards() {
  return (
    <div className="Featured-Projects">
      <Container>
        <Row>
          <Col>
          <a href="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" />
          < Card.Body>
              <Card.Title>Project Mammoth</Card.Title>
              <Card.Text>
                Programming Lead on for Project Mammoth, responsible for interactivity of the display
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
          </Col>
          <Col>
            <a href="https://homeinvr.ca/">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/HomeLogo_no_words.png" />
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
            <a href="https://youroceans.com/">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/tahpinLogoSnip.jfif" />
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
    </div>
  )
}

export default ProjectCards