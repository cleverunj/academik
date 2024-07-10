import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import logo from "../assets/imagen/logo150.png";

import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(props) {
  let navigate = useNavigate();
  const [nivel, setNivel] = useState("A");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    logueado();
    // eslint-disable-next-line
  }, []);

  const logueado = () => {
    const logged = window.localStorage.getItem("loggedNoteAppUser");
    if (logged) {
      const users = JSON.parse(logged);
      setNivel(users.nivel);
      setUsuario(users.usuario);
      setPassword(users.password);

      //setUser(users)
      //navigate("/home");
    }
  };

  const validateLoginForm = (e) => {
    //let errors = "";
  };

  const aceptar = (e) => {
    e.preventDefault();

    let errors = validateLoginForm();
    if (errors === true) {
      let data = JSON.stringify({
        nivel: nivel,
        usuario: usuario,
        password: password,
      });

      Axios.post("http://localhost/api-admision/login/validacion", data).then(
        (res) => {
          if (res.data.rpta === "false") {
            Swal.fire({
              text: res.data.msg,
              icon: res.data.icon,
            });
            return false;
          }

          localStorage.setItem("loggedNoteAppUser", data);
          localStorage.setItem("nivel", JSON.stringify(nivel));
          localStorage.setItem("usuario", JSON.stringify(usuario));
          localStorage.setItem("password", JSON.stringify(password));
          localStorage.setItem("token", JSON.stringify(res.data.token));

          if (nivel === "S") {
            navigate("/home");
          } else if (nivel === "I") {
            navigate("/ingresante/home");
          } else if (nivel === "P") {
            navigate("/postulante/home");
          }
        }
      );
    }
  };

  return (
  <Container fluid>
      <div class="full-height d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div class="text-center" style={{minWidth:"350px", width: "500px"}} >
          <Card className="border-0 shadow  p-3 rounded-3 my-5 ">
            <Card.Title className="text-center mt-5 fw-light fs-5">
              <img src={logo} alt="logo" />
            </Card.Title>
            <Card.Body className="p-4 p-sm-5">
              <Card.Title className="text-center mt-3 fw-light ">
                Inicio de sesión
              </Card.Title>
              <Form onSubmit={aceptar}>
                <Form.Select
                  onChange={(e) => setNivel(e.target.value)}
                  value={nivel}
                  name="nivel"
                  size="lg"
                  className="rounded-pill mb-2"
                >
                  <option value="I">Ingresante</option>
                  <option value="P">Postulante</option>
                  <option value="D">Supervisor</option>
                  <option value="S">Administrativo</option>
                </Form.Select>
                <Form.Group className="mb-2">
                  <Form.Control
                    onChange={(e) => setUsuario(e.target.value)}
                    value={usuario}
                    name="usuario"
                    className="rounded-pill"
                    size="lg"
                    type="text"
                    placeholder="Usuario"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    className="rounded-pill"
                    size="lg"
                    type="password"
                    placeholder="Contraseña"
                  />
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
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      </Container>
  );
}
export default Login;
