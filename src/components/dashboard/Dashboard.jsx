import * as React from "react";
import { useState } from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";

export const Dashboard = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="h-100">
      <Sidebar show={show} handleShow={handleShow} handleClose={handleClose} />
      <main className={show ? "page" : "page2"}>
        <NavBar show={show} handleShow={handleShow} handleClose={handleClose} />
        <div
          className="h-100"
          style={{ "margin-top": "45px", padding: "40px" }}
        >
          {props.componente}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
