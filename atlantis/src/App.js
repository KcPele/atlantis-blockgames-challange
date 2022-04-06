import "./App.css";
import CustomersAddressProvider  from "./components/contexts/CustomersAddressProvider";
import DashBoard from "./components/DashBoard";

import Menu from "./components/Menu";

function App() {
  return (
    //dispatching the address from the excel file
    <CustomersAddressProvider>
    <div className="container">
     <DashBoard />
     <Menu />
    </div>
    </CustomersAddressProvider>
  );
}

export default App;
