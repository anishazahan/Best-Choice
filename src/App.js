import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Shared/Footer/Footer';




function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<About />} />
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
