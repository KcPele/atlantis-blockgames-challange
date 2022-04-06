import "./App.css";
import CustomersAddressProvider  from "./components/contexts/CustomersAddressProvider";
import EtherProvider  from "./components/contexts/EtherProvider";
import DashBoard from "./components/DashBoard";

import Menu from "./components/Menu";

function App() {
  return (
    //dispatching the address from the excel file
    <EtherProvider>
    <CustomersAddressProvider>
    <div className="container">
     <DashBoard />
     <Menu />
    </div>
    </CustomersAddressProvider>
    </EtherProvider>
  );
}

export default App;
