import react, { createContext, useReducer } from "react";
import { customersReducer } from "../reducers/customersReducers";

export const CustomersContext = createContext();
function CustomersAddressProvider(props) {
  const [excelFile, dispatchExcel] = useReducer(customersReducer, {
    loading: true,
    data: [],
  });

  return (
    <CustomersContext.Provider value={{ excelFile, dispatchExcel }}>
      {props.children}
    </CustomersContext.Provider>
  );
}

export default CustomersAddressProvider;
