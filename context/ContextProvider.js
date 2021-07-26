import React, { useState } from "react";
import AppContext from ".";
const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const context = {
    setState,
    state,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
