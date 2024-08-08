import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap";
import Dashboard from "../dashboard/Dashboard";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";

const AdmGeneral = () => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const componente = (
    <Container fluid className="">
      <Card className="border-0">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Organización Institucional
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Programas Académicos
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Datos estudiantes
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Datos docentes
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                  Tipos y Categorías Diversas
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <ListGroup>
                    <ListGroup.Item action variant="primary">
                      Sedes
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Locales
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Ambientes
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Facultad
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Departamento Académico
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <ListGroup>
                    <ListGroup.Item
                      action
                      variant="primary"
                      as={Link}
                      href="/adm/admcarrera"
                      to="/adm/admcarrera"
                    >
                      Carreras Profesionales
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Curriculas
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Cursos
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Semestre
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <ListGroup>
                    <ListGroup.Item action variant="primary">
                      Condición alumno
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Grado Académico
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Modalidad de ingreso
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Modalidad de estudio
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Categoria alumno
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Discapcidad
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Becas
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de colegio
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de procedencia
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Estado civil
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de documento
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Nivel educativo
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo vía
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo zona
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <ListGroup>
                    <ListGroup.Item action variant="primary">
                      Categpría docente
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Condición docente
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Dedicación docente
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Cargo
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <ListGroup>
                    <ListGroup.Item action variant="primary">
                      Tipo de ambiente
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de dictado
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de evaluación
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de institución
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de preparación
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de resolución
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                      Tipo de ocupación
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        {/* <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <small class="text-muted ft-6">Precio</small>{" "}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <small class="text-muted ft-6">Precio</small>{" "}
          </li>
        </ul> */}
      </Card>
    </Container>
  );

  return (
    <>
      <Dashboard componente={componente} />
    </>
  );
};

export default AdmGeneral;
