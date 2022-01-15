import React from "react";
import { Footer } from "../Footer";

export const Phone = ({ ...phone }) => {
  const { TELEFONO, PANTALLA, CAMARA, DETALLES, BATERIA, MEMORIA, TOTAL } =
    phone;

  return (
    <div className="card">
      <h2>
        {TELEFONO} -- <span>${TOTAL}</span>
      </h2>
      <ul>
        {PANTALLA && <li> - Pantalla: {PANTALLA}</li>}
        {CAMARA && <li> - Camaras: {CAMARA}</li>}
        {BATERIA && <li>- Bateria de {BATERIA}</li>}
        {MEMORIA && <li>- Memoria: {MEMORIA}</li>}
        {DETALLES && <li>- {DETALLES}</li>}
      </ul>
      <Footer />
    </div>
  );
};
