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
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
  Toast,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/imagen/logo64-white.png";
import modAcademico from "../../assets/imagen/mod-academico.png";
import modGrados from "../../assets/imagen/mod-grados.png";
import modEvaluacion from "../../assets/imagen/mod-evaluacion.png";
import modEscalafon from "../../assets/imagen/mod-escalafon.png";
import modBiblioteca from "../../assets/imagen/mod-biblioteca.png";
import modCalidad from "../../assets/imagen/mod-calidad.png";
import modCentroPre from "../../assets/imagen/mod-centro-pre.png";
import modInformatica from "../../assets/imagen/mod-informatica.png";
import modPago from "../../assets/imagen/mod-pago.png";
import modDocumento from "../../assets/imagen/mod-documento.png";
import modNoLectivas from "../../assets/imagen/mod-no-lectivas.png";

const NavBar = (props) => {
  const [showGap, setShowGap] = useState(false);
  const handleCloseGap = () => setShowGap(false);
  const [showNoti, setShowNoti] = useState(false);
  const handleCloseNoti = () => setShowNoti(false);

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
              <div className="me-2 align-content-center px-4">
                <Nav.Link
                  onClick={() => {
                    setShowNoti(!showNoti);
                  }}
                  style={{ position: "relative" }}
                >
                  <i class="bi bi-bell fs-3"></i>
                  <span className="notification-badge">9+</span>
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

      <Offcanvas show={showNoti} onHide={handleCloseNoti} placement={"end"}>
        <Offcanvas.Header closeButton className="border-info border-2">
          <Offcanvas.Title  >Notificaciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        style={{ height: "470px", top: "95px" }}
        className="border-bottom border-top rounded-4 shadow"
        backdrop={true}
        placement={"end"}
        show={showGap}
        onHide={handleCloseGap}
      >
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modAcademico}
                    rounded
                  />
                  <Card.Text className="text-cut  ">Académico </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0 text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modGrados}
                    rounded
                  />
                  <Card.Text className="text-cut">Grados y Titulos </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modEvaluacion}
                    rounded
                  />
                  <Card.Text className="text-cut">Evaluación </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modBiblioteca}
                    rounded
                  />
                  <Card.Text className="text-cut">Biblioteca </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modEscalafon}
                    rounded
                  />
                  <Card.Text className="text-cut">Escalafon </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modPago}
                    rounded
                  />
                  <Card.Text className="text-cut">Pagos Virtuales </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modCalidad}
                    rounded
                  />
                  <Card.Text className="text-cut">Calidad</Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modCentroPre}
                    rounded
                  />
                  <Card.Text className="text-cut">Centro PRE </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modInformatica}
                    rounded
                  />
                  <Card.Text className="text-cut">
                    Informática e Idiomas{" "}
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2 p-1 "
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modNoLectivas}
                    rounded
                  />
                  <Card.Text className="text-cut">No lectivas </Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2 p-1"
              >
                <Card className="btn btn-light border-0  text-cut-parent">
                  <Image
                    className="mx-auto"
                    style={{ width: "48px" }}
                    src={modDocumento}
                    rounded
                  />
                  <Card.Text className="text-cut">Documentos</Card.Text>
                </Card>
              </Col>
              <Col
                xs
                lg="4"
                style={{ height: "105px" }}
                className="d-grid gap-2  p-1"
              ></Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
