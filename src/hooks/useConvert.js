import { useState } from "react";

export const useConvert = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [phone, setPhone] = useState();

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
          setPhone(rowObject);
        });
      };
    }
  };

  const handleChange = (e) => setSelectedFile(e.target.files[0]);

  return { buttonClick, handleChange, phone };
};
