import "./App.css";
import { useState } from "react";
import Papa from "papaparse";
import Table from "./Pages/Table/Table";

function App() {
  const [tableData, setTableData] = useState([]);
  const changeHandler = (Data) => {
    Papa.parse(Data.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setTableData(results.data);
        console.log(results.data);
      },
    });
  };

  console.log(tableData);
  return (
    <div className="">
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
