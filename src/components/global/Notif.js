import React from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

function ToastComponent({ showToast, setShowToast, notification }) {
    const [msg, color] = notification;

  return (
    <div>
      <ToastContainer className="p-4" position="top-end" style={{  zIndex: 1 , marginTop:"35px"}}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
        >
          <Toast.Body><i className={`bi bi-circle-fill px-2 ${color}`}></i> {msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ToastComponent;
