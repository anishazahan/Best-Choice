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
import ProductsDetails from './Pages/Products/ProductsDetails';
import NotFound from './Pages/NotFound';
import NewProductsDetails from './Pages/Products/NewProductsDetails';
import Login from './Authentication/Login/Login';
import SignUp from './Authentication/Login/SignUp';
import RequireAuth from './Authentication/Login/RequireAuth';




function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="shipping" element={<ShippingAndReturns/>} />
        <Route path="products" element={<Products />} />
        <Route path="products/products-details/:id" element={<ProductsDetails />} />
        <Route path="products/products-details/:name" element={<NewProductsDetails />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={ <RequireAuth><About/></RequireAuth> } />
        <Route path="login" element={<Login/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="/blog-details/:id" element={<BlogDetails/>} />
        
        <Route path="*" element={<NotFound/>} />
       </Routes>
       <Footer></Footer>
     
    </div>
  );
}

export default App;
