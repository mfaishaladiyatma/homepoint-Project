import React from "react";

// Import Component
import ComponentLayout from "./components/ComponentLayout";

import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import SearchResult from "./pages/SearchResult";
import Profile from "./components/profile";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPass from "./pages/ForgetPass";

import RiwayatPesanan from "./pages/RiwayatPesanan";
import Checkout from "./pages/Checkout";

//React Router
import { Routes, Route } from "react-router-dom";
import { addressContext } from "./context/context";
// import Header from "./components/header";
// import Footer from "./pages/Footer";



function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<ComponentLayout><Homepage/></ComponentLayout>} />
          <Route path="/search" element={<ComponentLayout><SearchResult /></ComponentLayout>} />
          <Route path="/product/:id" element={<ComponentLayout><ProductDetail/></ComponentLayout>} />
          <Route path="/profile" element={<ComponentLayout><Profile /></ComponentLayout>} />
          <Route path="/forgetpass" element={<ForgetPass />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<ComponentLayout><Cart/></ComponentLayout>}></Route>
          <Route path="/pesanan" element={<ComponentLayout><RiwayatPesanan/></ComponentLayout>}></Route>
          <Route path="/wishlist-:id" element={<ComponentLayout><Wishlist/></ComponentLayout>}></Route>
          <Route path="/checkout" element={<ComponentLayout><Checkout/></ComponentLayout>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
