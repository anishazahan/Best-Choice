
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Shared/Footer/Footer';
import ShippingAndReturns from './Pages/ShippingAndReturns/ShippingAndReturns';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/BlogDetails';
import Products from './Pages/Products2/Products';

import NotFound from './Pages/NotFound';

import Login from './Authentication/Login/Login';
import SignUp from './Authentication/Login/SignUp';
import RequireAuth from './Authentication/Login/RequireAuth';
import Contact from './Pages/Contact/Contact';
import Admin from './Shared/Dashbord/Admin';
import SingleProduct from './Pages/Products2/SingleProduct';




function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="shipping" element={<ShippingAndReturns/>} />
        <Route path="products" element={<Products/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={ <RequireAuth><About/></RequireAuth> } />
        <Route path="login" element={<Login/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="/blog-details/:id" element={<BlogDetails/>} />
      
        <Route path="*" element={<NotFound/>} />
       </Routes>
       <Footer></Footer>
     
    </div>
  );
}

export default App;
