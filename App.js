import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Myroutes from './config/Myroutes';
import Home from './pages/Home';

function App() {



  return (
    <div className='App'>
     
      <Router>
        <Routes>
          <Route element={Header} />
          <Route element={Myroutes} />
          <Route element={Footer} />
          <Route path="/" element={Home} />
        </Routes> 

      </Router>

    </div>
  );
}


export default App;
