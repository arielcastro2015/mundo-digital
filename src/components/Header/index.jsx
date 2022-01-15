import React from "react";
import { date } from "../../hooks/date";

export const Header = () => {
  return (
    <ul>
      <li>🎀¡Teléfonos nuevos, liberados y con garantía!!!🎀</li>
      <li>
        🔵Por la compra de cualquier llévate un vidrio protector de regalo
      </li>
      <li>🔴Fecha de la publicación: {date()}</li>
    </ul>
  );
};
