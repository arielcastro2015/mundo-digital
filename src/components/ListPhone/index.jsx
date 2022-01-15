import React from "react";
import { Phone } from "../Phone";

export const ListPhone = ({ phones }) => {
  console.log("PHONESSSS: ", phones);
  return (
    // <div className="main">
    // </div>

    <div className="grid">
      {phones ? (
        phones.map((phone, i) => <Phone key={i} {...phone} />)
      ) : (
        <h1 className="title">
          Primero Ingresá un archivo <a href="!#">Excel</a>
        </h1>
      )}
    </div>
  );
};
