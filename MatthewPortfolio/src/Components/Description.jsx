import { Container, Row, Col } from 'react-bootstrap';

function Description() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Programmer</h1>
                    <p>
                        I love to program. The process of the creating something from scratch using various languages fills me with pride.
                        My time over these past years has been spent to learning languages and programming methods to improve cabablities.
                        On the side I like to build and test small mechanisms to keep my skills sharp.
                    </p>
                </Col>
                <Col>
                    <h1>Game Designer</h1>
                    <p>
                        Game Design is a passion of mine, the ideas behind creating a framework and flow is something I think about every single day.
                        My skills in Game Design were developed using the knowledge I gained from my time in University.
                        On my own free time I design game structures and patterns to encourage myself to explore new ways players can interact with game mechanics.
                    </p>
                </Col>
                <Col>
                    <h1>Media</h1>
                    <p>
                        I possess numerous skills in creating various forms of media. My greatest skills lie in video editing and animation.
                        My experince in media creation was developed at a early age with my desire to create home videos and later edited Youtube content.
                        This was further expaned in dedicated Video editing and Animation courses.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Description