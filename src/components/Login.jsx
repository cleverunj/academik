import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Button, Form, Container, Col } from "react-bootstrap";
import logo from "../assets/imagen/logo150.png";

import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Notif from "./global/Notif";
import styles from "./login.module.css";

function Login(props) {
  let navigate = useNavigate();
  
  const [nivel, setNivel] = useState(null);
  const [persona, setPersona] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [sede, setSede] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [token, setToken] = useState(null);
  const [showNotif, setShowNotif] = useState(false);
  const [notification, setNotification] = useState([]);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/home");
      
    }
  }, [navigate]);

  // const logueado = () => {
  //   const storedPersona = localStorage.getItem("persona");
  //   const storedUsuario = localStorage.getItem("usuario");
  //   const storedNombre = localStorage.getItem("nombrecompleto");
  //   const storedSede = localStorage.getItem("sede");
  //   const storedPerfil = localStorage.getItem("perfil");
  //   const storedToken = localStorage.getItem("token");
  //   if (storedPersona !== null) {
  //     setPersona(JSON.parse(storedPersona));
  //     setUsuario(JSON.parse(storedUsuario));
  //     setNombre(JSON.parse(storedNombre));
  //     setSede(JSON.parse(storedSede));
  //     setPerfil(JSON.parse(storedPerfil));
  //     setToken(JSON.parse(storedToken));

  //     verifica(storedToken);
  //   }
  // };

  // const verifica = async (cad) => {
  //   let _datos = JSON.stringify({ token: cad });
  //   console.log(cad);
  //   await Axios.post(window.globales.url + "/auth/verifyToken", _datos)
  //     .then((res) => {
  //       if (res.data.rpta === "1") {
  //         navigate("/home");
  //       } else {
  //       }
  //     })
  //     .catch((error) => {
  //       Swal.fire({ text: "Algo pasó! " + error, icon: "error" });
  //     });
  // };

  const aceptar = async () => {
    let _datos = JSON.stringify(values);
    await Axios.post(window.globales.url + "/auth/auth", _datos)
      .then((res) => {
        if (res.data.rpta === "1") {
          setTouched({}, false);

          let nivel = res.data.data.nivel;
          let persona = res.data.data.persona;
          let usuario = res.data.data.usuario;
          let nombrecompleto = res.data.data.nombrecompleto;
          let nombre = res.data.data.nombre;
          let sede = res.data.data.sede;
          let perfil = res.data.data.perfil;
          let token = res.data.data.token;

          localStorage.setItem("nivel", JSON.stringify(nivel));
          localStorage.setItem("persona", JSON.stringify(persona));
          localStorage.setItem("usuario", JSON.stringify(usuario));
          localStorage.setItem(
            "nombrecompleto",
            JSON.stringify(nombrecompleto)
          );
          localStorage.setItem("nombre", JSON.stringify(nombre));
          localStorage.setItem("sede", JSON.stringify(sede));
          localStorage.setItem("perfil", JSON.stringify(perfil));
          localStorage.setItem("token", JSON.stringify(token));

          //console.log(JSON.stringify(token));

          setNotification([res.data.msg, "text-success"]);
          setShowNotif(true);

          setTimeout(() => {
            navigate("/home");
          }, 1000);
        } else {
          Swal.fire({ text: res.data.msg, icon: "warning" });
        }
      })
      .catch((error) => {
        Swal.fire({ text: "Algo pasó! " + error, icon: "error" });
      });
  };

  const initialValues = {
    nivel: "S",
    usuario: "11223344",
    password: "Abcd123456.*",
  };
  const validationSchema = Yup.object({
    usuario: Yup.string()
      .min(8, "Usuario incorrecto")
      .required("Por favor ingrese su nombre de usuario"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(35, "La contraseña no puede tener más de 35 caracteres")
      .required("Por favor ingrese su contraseña"),
  });

  const {
    values,
    errors,
    setTouched,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      aceptar(values, resetForm);

      //inputReffocus.current.focus();
    },
  });
  return (
    <Container fluid className={styles.page}>
      <Notif
        showToast={showNotif}
        setShowToast={setShowNotif}
        notification={notification}
      />
      <Col
        xl={12}
        lg={12}
        md={12}
        className="vh-100 d-flex align-items-center justify-content-center"
      >
        <div className="footer text-white ">
          <h1 className="text-white text-center">AcademiK</h1>
          <Form
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
            className={styles.formLogin}
          >
            <Card className="border-0   rounded-3 mt-4 bg-transparent ">
              <Card.Title className="text-center fw-light fs-5">
                <img src={logo} alt="logo" />
              </Card.Title>
              <Card.Body className="p-4 p-sm-5 ">
                <Card.Title className="text-center text-white mt-3 fw-light ">
                  Inicio de sesión
                </Card.Title>

                <Form.Select
                  name="nivel"
                  value={values.nivel}
                  onChange={handleChange}
                  size="lg"
                  className="rounded-pill mb-2"
                >
                  <option value="P01">Alumno</option>
                  <option value="P02">Docente</option>
                  <option value="S">Administrativo</option>
                </Form.Select>
                <Form.Group className="mb-2">
                  <Form.Control
                    name="usuario"
                    value={values.usuario}
                    onChange={handleChange}
                    className={`${styles.input} rounded-pill`}
                    size="lg"
                    type="text"
                    placeholder="Usuario"
                    isInvalid={!!errors.usuario & touched.usuario}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.usuario}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={`${styles.input} rounded-pill`}
                    size="lg"
                    type="password"
                    placeholder="Contraseña"
                    isInvalid={!!errors.password & touched.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    className="mt-2 "
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </Col>
    </Container>
  );
}
export default Login;
