import { Container, Nav, Navbar } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Blog Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
            <NavLink end to={"/"} className={'nav-item nav-link'}>Inicio</NavLink>
            <NavLink end to={"/registro"} className={'nav-item nav-link'}>Registro</NavLink>
            <NavLink end to={"/administrador"} className={'nav-item nav-link'}>Administrador</NavLink>
            <NavLink end to={"/login"} className={'nav-item nav-link'}>Login</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
