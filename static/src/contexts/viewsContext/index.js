import React, { createContext, useReducer } from "react";
import storeReducer from "./storeReducer";
import compact from "utils/compact";

export const viewsContext = createContext();

let initialState = compact([
  "time.3",
  "network.1",
  "time.1",
  "time.2",
  "time.4",
  "time.5",
  "time.6"
]);
initialState = compact(["time.3", "network.1", "time.1"]);

export const ViewsContextProvider = ({ children }) => {
  const [grid, dispatch] = useReducer(storeReducer, initialState);
  return <viewsContext.Provider value={{ grid, dispatch }}>{children}</viewsContext.Provider>;
};
