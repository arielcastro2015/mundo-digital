import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ListItem } from "../ListItem";

export const List = ({ phones }) => {
  console.log("PHONE de LIST: ", phones);

  return (
    <div
    //  className="main"
    >
      {phones ? (
        <div className="main">
          <Header />
          <br />
          <ListItem phone={phones} />
          <br />
          <Footer />
        </div>
      ) : (
        <h1 className="title">
          Primero Ingresá un archivo <span>Excel</span>
        </h1>
      )}
    </div>
  );
};

// const [text, setText] = useState("");

// {/* <form>
//   <input
//     type="text"
//     value={text}
//     onChange={(e) => setText(e.target.value)}
//   />
//   <button>Send</button>
// </form> */}
