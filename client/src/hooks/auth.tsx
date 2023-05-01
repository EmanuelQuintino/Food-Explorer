import { PropsWithChildren, createContext, useContext, useState, useEffect } from "react";
import { API } from "../services/api";
import { useSystem } from "./system";

export type HandleLoginTypes = {
  email: string;
  password: string;
}

type AuthContextType = {
  handleLogin: (params: HandleLoginTypes) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  const [ userAuth, setUserAuth ] = useState({});
  const { toggleMenu } = useSystem();

  function handleLogin({email, password}: HandleLoginTypes) {
    API.post("/login", {email, password})
    .then((res) => {
      if (res.data.token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        localStorage.setItem("@FoodExplorer:token", JSON.stringify(res.data.token));
        setUserAuth(res.data);
      }    
    })
    .catch((error) => alert(error.response.data.error));
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@FoodExplorer:token"));
    console.log(token);
    
    if (token) {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUserAuth({token});                    
    }
  }, [])

  function handleLogout() {
    const isConfirmLogout = confirm('Tem certeza que deseja sair da aplicação?');
    if (isConfirmLogout) {
      localStorage.removeItem("@FoodExplorer:token");
      setUserAuth({});
      toggleMenu();
    } 
  }

  return (
    <AuthContext.Provider value={{handleLogin, userAuth, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}