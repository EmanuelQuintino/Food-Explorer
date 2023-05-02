import { PropsWithChildren, createContext, useContext, useState, useEffect } from "react";
import { API } from "../services/api";
import { useSystem } from "./system";
import jwt_decode from "jwt-decode";

export type HandleLoginTypes = {
  email: string;
  password: string;
}

type AuthContextType = {
  handleLogin: (params: HandleLoginTypes) => void;
  userAuth: {token?: string};
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  const [ userAuth, setUserAuth ] = useState({});

  function handleLogin({email, password}: HandleLoginTypes) {
    if (!email || !password) return alert("Por favor preencha todos os campos");
    API.post("/login", {email, password})
    .then((res) => {
      if (res.data.token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        localStorage.setItem("@FoodExplorer:token", res.data.token);
        setUserAuth(res.data);
      }    
    })
    .catch((error) => alert(error.response.data.error));
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("@FoodExplorer:token");    
      if (token) {  
        const decodedToken = jwt_decode(token) as { exp: number };      
        const expirationTime = decodedToken.exp * 1000;

        if (Date.now() > expirationTime) return handleLogout();
      
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUserAuth({token});                    
      }
    } catch (error) {
      console.error(error);
      return handleLogout();
    }
  }, []);

  function handleLogout() {
      localStorage.removeItem("@FoodExplorer:token");
      setUserAuth({});
  };

  return (
    <AuthContext.Provider value={{handleLogin, userAuth, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  return useContext(AuthContext);
};