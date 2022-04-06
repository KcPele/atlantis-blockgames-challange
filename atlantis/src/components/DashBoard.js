import React, { useContext } from "react";
import { CustomersContext } from "./contexts/CustomersAddressProvider";

function DashBoard() {
  const { excelFile } = useContext(CustomersContext);
  const handleClick = () => {
    console.log(excelFile);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h4>DashBoard</h4>
        <button onClick={handleClick}>Get context</button>
      </div>
    </div>
  );
}

export default DashBoard;
