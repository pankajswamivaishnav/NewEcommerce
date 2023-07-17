import React from "react";
import { Alert } from "react-bootstrap";
const Errormsg = ({ variant, message }) => {
  return (
    <div>
      <Alert variant={variant}>{message}</Alert>
    </div>
  );
};

export default Errormsg;
