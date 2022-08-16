import { useEffect, useContext, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";

import { Navbar } from 'components'
import { Home } from 'components'
import { Inventory } from 'components'
import { Login } from 'components'
import { SignUp  } from 'components'
import { NotFound } from 'components'

function Layout() {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
    </div>
  );
}
function App() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/*" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
