import React from "react";

export const Convert = ({ handleChange, buttonClick, phones }) => {
  // const { buttonClick, handleChange, phone } = useConvert();
  return (
    <div className="conatiner mt-5 ">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="file"
            id="input"
            accept=".xls,.xlsx"
            placeholder="EXCEL"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button onClick={buttonClick} className="btn btn-primary" id="button">
            Convert
          </button>
        </div>
      </div>
      <hr />
      {!phones && (
        <h1 className="title">
          Agregá un archivo <a href="!#">Excel</a>
        </h1>
      )}
      {phones && (
        <h1 className="title">
          <a href="!#">Excel</a> Convertido
        </h1>
      )}
    </div>
  );
};
