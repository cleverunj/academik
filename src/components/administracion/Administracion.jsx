import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";
import Dashboard from "../dashboard/Dashboard";
import DataTable from "react-data-table-component";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";

const Administracion = () => {
  const [columns, setColumns] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [moduloTitulo, setModuloTitulo] = useState([]);

  const location = useLocation();
  const parts = location.pathname.split("/");
  const modulo = parts[parts.length - 1];

  useEffect(() => {
    if (modulo == "beca") {
      setModuloTitulo("Becas");
    }
    if (modulo == "depaca") {
      setModuloTitulo("Departamento Académico");
    }
    if (modulo == "catdocente") {
      setModuloTitulo("Categoria Docente");
    }
    if (modulo == "condocente") {
      setModuloTitulo("Condicion Docente");
    }
    if (modulo == "conalumno") {
      setModuloTitulo("Condicion Alumno");
    }
    if (modulo == "gradoacademico") {
      setModuloTitulo("Grado Académico");
    }
    if (modulo == "modingreso") {
      setModuloTitulo("Modalidad de Ingreso");
    }

    getColumns();
    getLista();
    // eslint-disable-next-line
  }, []);

  const paginationComponentOptions = {
    rowsPerPageText: "Filas",
    rangeSeparatorText: "de",
  };

  const getLista = async () => {
    let _datos = JSON.stringify({
      modulo: modulo,
    });
    const res = await Axios.post(
      window.globales.url + "/administracion/lista",
      _datos
    );
    setRowdata(res.data.items);
  };

  const getColumns = () => {
    setColumns([
      {
        id: 1,
        name: "ID",
        selector: (row) => row.id,
        sortable: true,
        reorder: true,
        width: "4rem",
      },
      {
        id: 2,
        name: "Descripción",
        selector: (row) => row.descripcion,
        sortable: true,
      },
      {
        id: 3,
        name: "Opciones ",
        button: true,
        ignoreRowClick: true,
        allowOverflow: true,
        cell: (row) => (
          <>
            <Dropdown className="hide-split-after remove-arrow">
              <Dropdown.Toggle
                className="rounded-circle"
                size="sm"
                variant="outline-secondary"
              >
                <span>
                  <i className="bi bi-three-dots-vertical"></i>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="remove-arrow">
                <Dropdown.Item as={Link} to={`edit/${row.id}`}>
                  <i className="bi bi-pencil-fill me-2"></i>Modificar
                </Dropdown.Item>
                <Dropdown.Item onClick={() => eliminar(row.id)}>
                  <i className="bi bi bi-trash-fill me-2"></i>Eliminar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ),
      },
    ]);
  };

  const eliminar = async (id) => {
    let _datos = JSON.stringify({ id: id });
    Swal.fire({
      title: "¿Confirmar Eliminación?",
      text: "¿Estás seguro de que deseas eliminar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.post(window.globales.url + "/" + modulo + "/eliminar", _datos)
          .then((res) => {
            setRowdata((prevData) => prevData.filter((row) => row.beca !== id));
          })
          .catch((error) => {
            Swal.fire({ text: "Algo pasó! " + error, icon: "error" });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#cfe2ff",
      },
    },
  };

  const componente = (
    <Container className="">
      <div className="d-flex justify-content-between mb-2">
        <Breadcrumb>
          <Breadcrumb.Item as={Link} href="/" to="/">
            Inicio
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => window.history.back()}>
            Adm. General
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{moduloTitulo}</Breadcrumb.Item>
        </Breadcrumb>
        <Button as={Link} to={`new`} variant="outline-primary" type="button">
          <i className="bi bi-file-earmark-plus"></i> Nuevo
        </Button>
      </div>

      <Card>
        <DataTable
          columns={columns}
          data={rowdata}
          fixedHeader
          pagination
          paginationPerPage={50}
          paginationComponentOptions={paginationComponentOptions}
          noDataComponent={<span>No hay información por mostrar</span>}
          searchable
          striped
          customStyles={customStyles}
        />
      </Card>
    </Container>
  );

  return (
    <>
      <Dashboard componente={componente} />
    </>
  );
};

export default Administracion;
