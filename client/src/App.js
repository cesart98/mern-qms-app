import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
