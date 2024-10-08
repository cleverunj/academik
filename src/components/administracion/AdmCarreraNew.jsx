import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import Swal from "sweetalert2";
import Dashboard from "../dashboard/Dashboard";
import { useNavigate, useParams } from "react-router-dom";

const AdmCarreraNew = () => {
  const navigate = useNavigate();
  const [modificar, setModificar] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getModulo(id);
      setModificar(true);
    }

    // eslint-disable-next-line
  }, []);

  const getModulo = async (id) => {
    let _datos = JSON.stringify({
      id: id,
    });
    await Axios.post(
      window.globales.url + "/admcarrera/modulo",
      _datos
    ).then((res) => {
      setFieldValue("estructura", res.data.items[0].estructura);
      setFieldValue("descripcion", res.data.items[0].descripcion);
      setFieldValue("responsable", res.data.items[0].responsable);
      setFieldValue("resolucion", res.data.items[0].resolucion);
    });
  };

  const guardar = async () => {
    let _datos = JSON.stringify({ data: values });
    let url =
      window.globales.url +
      "/admcarrera/" +
      (modificar ? "modificar" : "guardar");
    await Axios.post(url, _datos)
      .then((res) => {
        if (res.data.rpta === "1") {
          Swal.fire({
            text: res.data.msg,
            icon: "info",
          }).then((result) => {
            if (result.isConfirmed) {
                navigate("/adm/admcarrera");
            }
          });
        } else {
          Swal.fire({ text: res.data.msg, icon: "warning" });
        }
      })
      .catch((error) => {
        Swal.fire({ text: "Algo pasó! " + error, icon: "error" });
      });
  };

  const initialValues = {
    estructura: "",
    descripcion: "",
    responsable: "",
    resolucion: "",
  };

  const validationSchema = Yup.object({
    descripcion: Yup.string().required("Por favor ingrese la descripción"),
  });

  const { values, errors, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      enableReinitialize: true,
      onSubmit: (values, { resetForm }) => {
        guardar(values, resetForm);
      },
    });

  const componente = (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => window.history.back()}>
            Regresar
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xs xxl="6" xl="12">
          <Card className="border-0">
            <Card.Body>
              <Card.Title>Carrera profesional</Card.Title>
              <Card.Text>
                Nuevo registro de Programas de estudio que conducen a un título
                profesional.
              </Card.Text>
              <Row className="px-4">
                <Form noValidate onSubmit={handleSubmit} autoComplete="off">
                  <Row>
                    <Form.Group as={Col} md="12" className="mt-3">
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        required
                        value={values.descripcion}
                        onChange={handleChange}
                        name="descripcion"
                        type="text"
                        placeholder="Descripción de la Carrera profesional"
                        maxLength={100}
                        style={{ textTransform: "uppercase" }}
                        isInvalid={!!errors.descripcion & touched.descripcion}
                        
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.descripcion}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} md="12" className="mt-3">
                      <Form.Label>Responsable</Form.Label>
                      <Form.Control
                        required
                        value={values.responsable}
                        onChange={handleChange}
                        name="responsable"
                        type="text"
                        placeholder="Responsable"
                        maxLength={100}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} md="12" className="mt-3">
                      <Form.Label>Resolución</Form.Label>
                      <Form.Control
                        required
                        value={values.resolucion}
                        onChange={handleChange}
                        name="resolucion"
                        type="text"
                        placeholder="Resolución"
                        maxLength={100}
                      />
                    </Form.Group>
                  </Row>
                  <div className="text-center mt-4">
                    {modificar ? (
                      <Button className="mt-4 " variant="danger" type="submit">
                        Modificar
                      </Button>
                    ) : (
                      <Button className="mt-4 " variant="primary" type="submit">
                        Guardar
                      </Button>
                    )}
                  </div>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  return (
    <>
      <Dashboard componente={componente} />
    </>
  );
};

export default AdmCarreraNew;
