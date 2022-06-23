import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/home'>CT</NavLink>
        <nav>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/inventory'>Inventory</NavLink>
          <NavLink to='/performance'>Performance</NavLink>
        </nav>
      </header>
      <main>
        
      </main>

      <Routes>
        <Route path='/home'></Route>
        <Route path='/inventory'></Route>
        <Route path='/performance'></Route>
      </Routes>
    </div>
  );
}

export default App;
