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
import { Link } from "react-router-dom";

const AdmCarrera = () => {
  const [columns, setColumns] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    get_columns();
    get_lista();
    // eslint-disable-next-line
  }, []);





  const paginationComponentOptions = {
    rowsPerPageText: "Filas",
    rangeSeparatorText: "de",
  };

  const get_lista = async () => {
    const res = await Axios.post(window.globales.url + "/admcarrera/lista");
    setRowdata(res.data.items);
  };

  const get_columns = () => {
    setColumns([
      {
        id: 1,
        name: "ID",
        selector: (row) => row.estructura,
        sortable: true,
        reorder: true,
        width: "4rem",
      },
      {
        id: 2,
        name: "Descripción",
        selector: (row) => row.descripcion,
        width: "20rem",
        sortable: true,
      },
      {
        id: 3,
        name: "Responsable",
        selector: (row) => row.responsable,
        sortable: true,
        wrap:true,
      },
      {
        id: 4,
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
                <Dropdown.Item as={Link} to={`edit/${row.estructura}`}>
                  <i className="bi bi-pencil-fill me-2"></i>Modificar
                </Dropdown.Item>
                <Dropdown.Item onClick={() => eliminar(row.estructura)}>
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
      title: '¿Confirmar Eliminación?',
      text: '¿Estás seguro de que deseas eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {

        Axios.post(window.globales.url + "/admcarrera/eliminar", _datos)
          .then((res) => {
            setRowdata((prevData) =>
              prevData.filter((row) => row.estructura !== id)
            );
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
  const filteredData = rowdata.filter((item) => {
    // const values = Object.values(item).join(" ").toLowerCase();
    // return values.includes(buscar.toLowerCase());
  });

  const componente = (
    <Container  className="" >
      <div className="d-flex justify-content-between mb-2">
        <Breadcrumb>
          <Breadcrumb.Item as={Link} href="/" to="/">
            Inicio
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => window.history.back()}>
            Adm. General
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Carreras profesionales</Breadcrumb.Item>
        </Breadcrumb>
        <Button
          as={Link}
          to="/adm/admcarreranuevo"
          variant="outline-primary"
          type="button"
        >
          <i className="bi bi-file-earmark-plus"></i> Nuevo
        </Button>
      </div>
      
      <Card >
     
        <DataTable
          columns={columns}
          data={rowdata}
          fixedHeader
          pagination
          paginationComponentOptions={paginationComponentOptions}
          noDataComponent={<span>No hay información por mostrar</span>}
          searchable
          striped
          customStyles={customStyles}
          responsive 
          scrooll
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

export default AdmCarrera;
