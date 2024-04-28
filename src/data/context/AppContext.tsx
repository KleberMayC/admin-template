import React, { createContext, ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext({});

export function AppProvider(props: AppProviderProps) {
  return (
    <AppContext.Provider
      value={{
        nome: 'Texte Conext API'
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;