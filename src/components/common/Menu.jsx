import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate();

  const logout = () =>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Blog Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0">
            <NavLink end to={"/"} className={"nav-item nav-link"}>
              Inicio
            </NavLink>
            <NavLink end to={"/registro"} className={"nav-item nav-link"}>
              Registro
            </NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
                <NavLink
                  end
                  to={"/administrador"}
                  className={"nav-item nav-link"}
                >
                  Administrador
                </NavLink>
                <Button variant="danger" onClick={logout}>Logout</Button>
              </>
            ) : (
              <NavLink end to={"/login"} className={"nav-item nav-link"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
