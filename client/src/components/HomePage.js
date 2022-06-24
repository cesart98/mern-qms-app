import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';

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
