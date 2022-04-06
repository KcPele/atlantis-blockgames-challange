import React, { useContext, useEffect, useState } from "react";
import { CustomersContext } from "./contexts/CustomersAddressProvider";
import { etherContext } from "./contexts/EtherProvider";

function DashBoard() {
  const { excelFile } = useContext(CustomersContext);
  const { provider, requestAccount } = useContext(etherContext);
  

  const handleClick = () => {

    //looping to get all the address of the customers fromthe excel file
   const cusAddress = excelFile.data.map(val => {
     let addr = []
     for(let i = 0; i < val.length; i++){
      addr.push(val[i].address)
    }
     return addr
   })
   console.log(cusAddress)
    
  };
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h4>DashBoard</h4>
        <button onClick={handleClick}>Testing/ Send</button>

      </div>
    </div>
  );
}

export default DashBoard;
