"use client";
import { createContext, useContext, useReducer } from "react";

const initialState = {
  isOpen: false,
  view: null,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return { ...state, isOpen: true, view: "LOGIN" };
    case "OPEN_SIGNUP":
      return { ...state, isOpen: true, view: "SIGNUP" };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false, view: null };
    default:
      return state;
  }
};


const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }

  return context;
};
