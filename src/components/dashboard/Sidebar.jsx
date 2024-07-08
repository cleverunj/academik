import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap-icons/font/bootstrap-icons.css";
//import '../../App.css';
import { Link, useLocation } from "react-router-dom";
import { CloseButton, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/imagen/logo64-white.png";

const Sidebar = ({ show, handleClose, handleShow }) => {
  const location = useLocation();
  const sections = location.pathname.split("/");
  const [openDropdown, setOpenDropdown] = useState(sections[1]);

  const handleDropdownToggle = (dropdownId) => {
    console.log(dropdownId);
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <>
      <Navbar key="lg" expand={false} className="p-0">
        <Container fluid>
        sidebar
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
