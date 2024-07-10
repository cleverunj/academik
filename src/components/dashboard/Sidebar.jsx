import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation } from "react-router-dom";
import { Accordion, ListGroup, Nav, Offcanvas } from "react-bootstrap";
import './styles.css';

const Sidebar = (props) => {
  
  const location = useLocation();
  const sections = location.pathname.split("/");

  return (
    <>
      <div className="sidebar">
        <Offcanvas
          show={props.show}
          onHide={props.handleCloseOc}
          responsive="lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Universidad Nacional de Jaén</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Accordion defaultActiveKey="0" className="w-100 border-0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <i class="bi bi-house text-primary me-2"></i>{" "}
                    <strong>Administración</strong>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        action
                        variant="light"
                        style={{paddingLeft:"45px"}}
                        as={Link}
                        to="/administracion/general"
                      >
                        Inicio
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        variant="light"
                        className="ps-4 ms-4"
                        as={Link}
                        to="/administracion/general"
                      >
                        General
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Cronograma
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Cronograma estudiante
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Datos Alumno
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Datos docente
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Usuarios
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Subir resolución
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <i class="bi bi-house text-primary me-2"></i>
                    <strong>Asignatura</strong>{" "}
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Programación de cursos
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Programación de Horarios
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Ver sílabos
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Migrar Moodle
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Reprogramación
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Docente tutor
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Castone proj.
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <i class="bi bi-house text-primary me-2"></i>
                    <strong>Matricula</strong>{" "}
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item action variant="light"  style={{paddingLeft:"45px"}}>
                        Certificado de Estudios
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Homologación
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light"  style={{paddingLeft:"45px"}}>
                        Pre matrícula
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Habilitar
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Rezagados
                      </ListGroup.Item>
                      <ListGroup.Item action variant="light" style={{paddingLeft:"45px"}}>
                        Aplazados
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
