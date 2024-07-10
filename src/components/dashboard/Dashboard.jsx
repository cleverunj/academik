import * as React from "react";
import { useState } from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";

export const Dashboard = (props) => {
  const [show, setShow] = useState(false);
  const handleCloseOc = () => setShow(false);
  const handleShowNv = () => setShow(true);

  return (
    <div className="h-100">
      <main>
        <NavBar show={show} handleShowNv={handleShowNv} handleCloseOc={handleCloseOc} />
        <Container fluid className="p-0">
          <div class="d-flex mb-3">
            <div class="">
              <Sidebar
                show={show}
                handleShowNv={handleShowNv}
                handleCloseOc={handleCloseOc}
              />
            </div>
            <div className="p-4 flex-grow-1 ">{props.componente}body</div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
