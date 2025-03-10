import { Container, Row, Col } from 'react-bootstrap';

function ThreePillars() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Programmer</h1>
                    <p>
                        I love to program. The process of creating something from scratch using various languages fills me with pride.
                        My time over these past years has been spent learning languages and programming methods to improve my capabilities.
                        On the side, I like to build and test small mechanisms to keep my skills sharp.
                    </p>
                </Col>
                <Col>
                    <h1>Designer</h1>
                    <p>
                        Game Design is a passion of mine, the idea behind creating a framework and flow is something I think about every single day.
                        My skills in Game Design were developed using the knowledge I gained from my time at University.
                        On my own free time, I design game structures and patterns to encourage myself to explore new ways players can interact with game mechanics.
                    </p>
                </Col>
                <Col>
                    <h1>Media</h1>
                    <p>
                        I possess numerous skills in creating various forms of media. My greatest skills lie in video editing and animation.
                        My experience in media creation was developed at an early age with my desire to create home videos and later edited YouTube content.
                        This was further expanded in dedicated Video editing and Animation courses.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default ThreePillars