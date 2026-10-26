import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Cart from "./pages/Cart";
import Category from "./pages/category";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offer from "./pages/offer";
import Shop from "./pages/shop";
import Wishlist from "./pages/Wishlist";
import Navbar from "./Navbar/Navbar";
import Footer from "./pages/Fotter";
import Detail from "./pages/Detail";
import Parent from "./props/Parent";
import Localstorge from "./pages/Localstorge";
import Protectrouting from "./Protectrouting";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Protectrouting><Home /></Protectrouting> } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id/product" element={<Detail/>}/>\
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/local" element={<Localstorge/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;