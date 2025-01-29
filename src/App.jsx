import { Outlet } from 'react-router-dom';
import Nav from './components/Navtab';
import Footer from './components/Footer';
import './App.css';

function App() {
  return(
    <>
    <Nav /> 
    <main> 
      <Outlet />
    </main>
    <Footer />
    </>
  );
};

export default App;
// add className="mx-3" in <main>???

