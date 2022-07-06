import React from "react";

// Import Component
import SearchResult from "./pages/SearchResult";
import Profile from "./components/profile";
import ProductDetail from "./pages/ProductDetail";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPass from "./pages/ForgetPass";

//React Router
import { Routes, Route } from "react-router-dom";
import { addressContext } from "./context/context";
// import Header from "./components/header";
// import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import ComponentLayout from "./components/ComponentLayout";

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
        </Routes>
      
    </div>
  );
}

export default App;
