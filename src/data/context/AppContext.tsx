'use client'

import { createContext } from "react";




interface AppContextProps {
  name: string;
}



export const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({children}: {children: React.ReactNode}) {
  return (
    <AppContext.Provider value={{
        name: "dark"
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;