import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation } from "react-router-dom";
import { Accordion, ListGroup, Nav, Offcanvas } from "react-bootstrap";
import "./styles.css";
import Axios from "axios";

const Sidebar = (props) => {
  const [listaMenu, setListaMenu] = useState([]);
  const [listaMenuOpcion, setListaMenuOpcion] = useState([]);

  useEffect(() => {
    lista_menu();
    // eslint-disable-next-line
  }, []);

  const lista_menu = async () => {
    const res = await Axios.post(window.globales.url + "/home/lista_menu");
    setListaMenu(res.data.items);
    setListaMenuOpcion(res.data.items_opcion);
  };


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
                {listaMenu.map((data, index) => {
                  const menuOptions = listaMenuOpcion.filter(
                    (d) => d.menu === data.menu
                  );

                  // Solo renderizar el Accordion.Item si hay opciones del menú
                  if (menuOptions.length > 0) {
                    return (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                        <i class="bi bi-stop-fill mx-2 text-secondary"></i>
                          <strong>{data.desc_menu}</strong>
                        </Accordion.Header>
                        <Accordion.Body className="p-0">
                          {listaMenuOpcion.map((d, i) => {
                            if (data.menu === d.menu) {
                              return (
                                <ListGroup className="list-group-flush" key={i}>
                                  <ListGroup.Item
                                    action
                                    variant="light"
                                    href={`/${d.url}`}
                                    style={{ paddingLeft: "45px" }}
                                  >
                                    {d.desc_opcion}
                                  </ListGroup.Item>
                                </ListGroup>
                              );
                            }
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  }
                })}
              </Accordion>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
