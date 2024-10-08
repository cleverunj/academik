import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";
import Dashboard from "../dashboard/Dashboard";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AdministracionNew = () => {
  const navigate = useNavigate();
  const [modificar, setModificar] = useState(false);
  const { id } = useParams();

  const location = useLocation();
  const parts = location.pathname.split("/");
  const [modulo, setModulo] = useState(parts[parts.length - 2]);

  useEffect(() => {
    if (modulo === "edit") {
      setModulo(parts[parts.length - 3]);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (modulo !== "edit") {
      if (id) {
        getModulo(id);
        setModificar(true);
      }
    }
  }, [modulo]);

  const getModulo = async (id) => {
    console.log(modulo);
    let _datos = JSON.stringify({
      modulo: modulo,
      id: id,
    });
    await Axios.post(
      window.globales.url + "/administracion/modulo",
      _datos
    ).then((res) => {
      setFieldValue("id", res.data.items[0].id);
      setFieldValue("descripcion", res.data.items[0].descripcion);
    });
  };

  const guardar = async () => {
    let _datos = JSON.stringify({ data: values, modulo: "beca" });
    let url =
      window.globales.url +
      "/administracion/" +
      (modificar ? "modificar" : "guardar");

    await Axios.post(url, _datos)
      .then((res) => {
        if (res.data.rpta === "1") {
          Swal.fire({
            text: res.data.msg,
            icon: "info",
          }).then((result) => {
            if (result.isConfirmed) {
              //navigate("/adm/" + modulo);
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
    id: "",
    descripcion: "",
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
              <Card.Title>Becas</Card.Title>
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
                        placeholder="Descripción de la Beca"
                        maxLength={100}
                        style={{ textTransform: "uppercase" }}
                        isInvalid={!!errors.descripcion & touched.descripcion}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.descripcion}
                      </Form.Control.Feedback>
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

export default AdministracionNew;
