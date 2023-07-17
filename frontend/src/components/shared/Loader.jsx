import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        style={{
          height: "150px",
          width: "150px",
          margin: "auto",
          display: "block",
          marginTop: "20%",
        }}
      >
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
};

export default Loader;
