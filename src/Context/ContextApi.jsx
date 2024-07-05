import React, { createContext, useReducer } from "react";
import { mails } from "../FakeFetch";

import { MailReducer } from "../Reducer/MailReducer";

const initialState = {
  inbox: mails,
  spam: [],
  trash: [],
};

export const MailProvider = createContext(initialState);

export const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(MailReducer, initialState);
  return (
    <MailProvider.Provider value={{ state, dispatch }}>
      {children}
    </MailProvider.Provider>
  );
};

export default ContextApi;
