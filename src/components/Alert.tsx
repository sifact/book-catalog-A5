import React from "react";

import { AlertProps } from "../pages/Login";

const Alert: React.FC<AlertProps> = ({ msg, type }) => {
  return <p className={`m-0 alert-custom alert-custom-${type}`}>{msg}</p>;
};

export default Alert;
