import { PropsWithChildren, createContext, useContext, useState } from "react";

type authContextType = {

}

const AuthContext = createContext<authContextType>({} as authContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={{ 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}