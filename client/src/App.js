import { Routes, Route, Outlet } from "react-router-dom";

import { Navbar } from 'components'
import { Home } from 'components'
import { Inventory } from 'components'
import { Login } from 'components'
import { SignUp  } from 'components'
import { NotFound } from 'components'

import { AuthProvider, RequireAuth } from "./utils/auth.js"

function Layout() {
  return (
    <div className="drawer bg-lime-600">
      <div className="drawer-content flex flex-col">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
          }/>
          <Route path="/inventory/*" element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
