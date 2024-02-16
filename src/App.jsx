import './App.css';
import Navbar from './componets/navbar';
import Home from './pages/home';
import Maps from './pages/maps';
import Favorite from './pages/Favorito';
import CasaDetails from './pages/CasaDetalles';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
        <div>
          <BrowserRouter>
            <Favorite />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/maps' element={<Maps />} />
              <Route path='/casa/:id' element={<CasaDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
