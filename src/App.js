import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Shared/Footer/Footer';
import ShippingAndReturns from './Pages/ShippingAndReturns/ShippingAndReturns';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/BlogDetails';
import Products from './Pages/Products/Products';




function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="shipping" element={<ShippingAndReturns/>} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog/>} />
        <Route path="/blog-details/:id" element={<BlogDetails/>} />
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
