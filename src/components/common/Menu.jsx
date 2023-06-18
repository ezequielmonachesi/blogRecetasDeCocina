import { Container, Nav, Navbar } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Blog Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
            <Nav.Link className={'nav-item nav-link'}>Inicio</Nav.Link>
            <Nav.Link className={'nav-item nav-link'}>Registro</Nav.Link>
            <Nav.Link className={'nav-item nav-link'}>Administrador</Nav.Link>
            <Nav.Link className={'nav-item nav-link'}>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
