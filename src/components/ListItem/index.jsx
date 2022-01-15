import React from "react";

export const ListItem = ({ phone }) => {
  return (
    <ul>
      {phone.map(({ TELEFONO, TOTAL }, i) => (
        <li key={i}>
          • {TELEFONO} <span style={{ marginLeft: "20px" }}>$ {TOTAL}</span>
        </li>
      ))}
    </ul>
  );
};
