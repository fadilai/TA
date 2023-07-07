import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap"


const NavbarComponent = () => {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">

              <NavDropdown title="Mouthwash" id="basic-nav-dropdown">
                <NavDropdown.Item href="/OriginalsizePage">ORIGINAL SIZE</NavDropdown.Item>
                <NavDropdown.Item href="/TravelsizePage">TRAVEL SIZE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Toothbrush" id="basic-nav-dropdown">
                <NavDropdown.Item href="/HomePage">HOME</NavDropdown.Item>
                <NavDropdown.Item href="/HolidayPage">HOLIDAY</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/CollaborationPage">Collaboration</Nav.Link>

              <Nav.Link href="/BundlingPage">Bundling</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
}


export default NavbarComponent;