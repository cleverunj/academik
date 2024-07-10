import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
  Toast,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagen/logo64-white.png";

const NavBar = (props) => {
  const [showGap, setShowGap] = useState(false);
  const handleCloseGap = () => setShowGap(false);

  let navigate = useNavigate();

  const cerrar_sesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar key={false} expand={"lg"} bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img
              style={{ width: "40px" }}
              src={logo}
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
          </Navbar.Brand>

          <Navbar.Text className="justify-content-end">
            <div className="d-flex ">
              <div className="me-4 align-content-center px-4">
                <Nav.Link href="#action1">
                  <i class="bi bi-bell fs-3"></i>
                  <Badge
                    bg="warning text-dark"
                    style={{ position: "absolute" }}
                  >
                    9+
                  </Badge>
                </Nav.Link>
              </div>
              <div className="align-content-center">
                <NavDropdown
                  className="hide-split-after "
                  title={
                    <div className="d-flex">
                      <div className="align-content-center">
                        <span className="  ">
                          Hola, <strong>Clever </strong>
                        </span>
                        <p className="small text-muted text-end  m-0">
                          Administrativo
                        </p>
                      </div>
                      <i className="bi bi-person-circle btn-lg fs-1 ps-3"></i>
                    </div>
                  }
                >
                  <NavDropdown.Item href="#action3">Mi perfil</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Cambiar mi contraseña
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="  mx-4 pt-1">
                <Nav.Link
                  onClick={() => {
                    setShowGap(!showGap);
                  }}
                >
                  <i class="bi bi-grid-3x3-gap-fill fs-2"></i>
                </Nav.Link>
              </div>
              <div className="">
                <Navbar.Toggle
                  onClick={() => {
                    props.show ? props.handleCloseOc() : props.handleShowNv();
                  }}
                />
              </div>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Offcanvas
        style={{ height: "380px", top: "95px" }}
        className="border-bottom border-top rounded-4 shadow"
        backdrop={true}
        placement={"end"}
        show={showGap}
        onHide={handleCloseGap}
      >
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0 text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut  ">Académico </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0 text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Grados y Titulos </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Evaluación </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Biblioteca </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Escalafon </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Pagos Virtuales </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
            <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Calidad</Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Centro PRE </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Informática e Idiomas </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2 p-1 ">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">No lectivas </Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2 p-1">
                <Card className="btn btn-light border-0  text-cut-parent">
                  <i class="bi bi-person-workspace  d-block mx-auto"></i>
                  <Card.Text className="text-cut">Documentos</Card.Text>
                </Card>
              </Col>
              <Col xs lg="4" style={{height:"85px"}} className="d-grid gap-2  p-1"></Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
