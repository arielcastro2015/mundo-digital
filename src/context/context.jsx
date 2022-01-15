import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [phones, setPhones] = useState();

  let data = [
    {
      name: "jayanth",
      data: "scd",
      abc: "sdef",
    },
  ];

  const buttonClick = () => {
    window.XLSX.utils.json_to_sheet(data, "out.xlsx");
    if (selectedFile) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = window.XLSX.read(data, { type: "binary" });
        // console.log(workbook);

        workbook.SheetNames.forEach((sheet) => {
          let rowObject = window.XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );

          const lowerCase = (string) =>
            string.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

          const products = rowObject.map((product) => {
            return { ...product, TELEFONO: lowerCase(product.TELEFONO) };
          });
          console.log("Products: ", products);

          setPhones(products);
        });
      };
    }
  };

  const handleChange = (e) => setSelectedFile(e.target.files[0]);

  return (
    <Context.Provider value={{ buttonClick, handleChange, phones }}>
      {children}
    </Context.Provider>
  );
};
