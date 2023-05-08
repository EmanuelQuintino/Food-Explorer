import { PropsWithChildren, createContext, useContext, useState, useEffect } from "react";
import { API } from "../services/api";
import jwt_decode from "jwt-decode";

export type HandleLoginTypes = {
  email: string;
  password: string;
}

type AuthContextTypes = {
  handleLogin: (params: HandleLoginTypes) => void;
  userAuth: {id?: string};
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [ userAuth, setUserAuth ] = useState({});

  function handleLogin({email, password}: HandleLoginTypes) {
    if (!email || !password) return alert("Por favor preencha todos os campos");
    API.post("/login", {email, password})
    .then((res) => {
      if (res.data.token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        localStorage.setItem("@FoodExplorer:token", res.data.token);        
        localStorage.setItem("@FoodExplorer:user", JSON.stringify(res.data.user));        
        setUserAuth(res.data.user);
      }    
    })
    .catch((error) => alert(error.response.data.error));
  };

  function handleLogout() {
    localStorage.removeItem("@FoodExplorer:token");
    localStorage.removeItem("@FoodExplorer:user");
    setUserAuth({});  
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("@FoodExplorer:token");    
      const user = localStorage.getItem("@FoodExplorer:user");    
      
      if (token) {  
        const decodedToken = jwt_decode(token) as { exp: number };      
        const expirationTime = decodedToken.exp * 1000;        

        if (Date.now() > expirationTime) return handleLogout();
      
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUserAuth(JSON.parse(user as string));                    
      }
    } catch (error) {
      console.error(error);
      return handleLogout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{handleLogin, userAuth, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  return useContext(AuthContext);
};