import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imagen/logo64.png";

const NavBar = (props) => {
  let navigate = useNavigate();

  const cerrar_sesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar
        id="navbar-header"
        expand={false}
        className="mb-3 fixed-top  shadow bg-primary " >
        <Container fluid>
          <Navbar.Toggle
            className="mx-2 "
            onClick={() => {
              props.show ? props.handleClose() : props.handleShow();
            }}
          />
          <NavDropdown
            drop={"start"}
            className="me-2 hide-split-before "
            title={
              <span >
                <span className="small ">Administración </span>
                <i className="bi bi-person-circle btn-lg fs-4"></i>
              </span>
            }>
            <NavDropdown.Item>Cambiar contraseña</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => cerrar_sesion()}>
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;
