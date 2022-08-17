import { useContext, useState, createContext } from "react";
import { useLocation, Navigate } from "react-router-dom";

let AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  let [user, setUser] = useState(true);
  let value = { user };
 return (
   <AuthContext.Provider value={value}>
     {props.children}
   </AuthContext.Provider>
 );
}

function RequireAuth(props) {
  let auth = useAuth();
  let location = useLocation();

  if(!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}

export { useAuth, AuthProvider, RequireAuth };