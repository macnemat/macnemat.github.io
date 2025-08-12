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
            <Nav.Link href="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Resume/Matthew-MacNeil-Resume.pdf" target="_blank" type="application/pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;