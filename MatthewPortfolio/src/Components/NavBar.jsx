import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant='dark'>
      <Container>
        {/* <div className="navbar-margin">
          
          </div> */}
        <Navbar.Brand href="#home">Matthew MacNeil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarContent">
          <Nav className="mb-lg-1 ms-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/macnemat/macnemat.github.io/blob/4110aa684d6bb6ee19cbe19ad991068a960903e5/MatthewPortfolio/src/assets/Resume/Matthew-MacNeil-Resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;