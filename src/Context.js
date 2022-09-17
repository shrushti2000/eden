import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const StateContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceURL: "",
      usage: "",
    },
    noOfStepsCompleted: 1,
    showToast: false,
    toastText: "",
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default Context;
