import React from "react";

// Import Component
import Hero from "./components/hero";
import Profile from "./components/profile";
import Product from "./components/product";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPass from "./pages/ForgetPass";

//React Router
import { Routes, Route } from "react-router-dom";
import { addressContext } from "./context/context";
import Header from "./components/header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import ComponentLayout from "./components/ComponentLayout";
import RiwayatPesanan from "./pages/RiwayatPesanan";
import Wishlist from "./components/Wishlist";

function App() {
  //React Context Data ( Fetch Data using Axios )
  const { dataProduct } = React.useContext(addressContext);

  // Put dataProduct to React State
  const [data, setData] = React.useState(dataProduct);
  React.useEffect(() => {
    setData(dataProduct);
  }, [dataProduct]);

  //Menu Handler for Mobile & Tablet
  const [menu, setMenu] = React.useState(false);

  // Search Function (Navigation)
  const searchHandler = (e) => {
    const lowerInput = e.target.value.toLowerCase();
    setData(dataProduct.filter((x) => x.name.toLowerCase().includes(lowerInput)));
  };

  //Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productPerPage, setProductPerPage] = React.useState(16);

  // *** Pagination Pattern
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;

  //DIBAWAH INI AKUCOMMENT
  // const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Pagination Function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //HEADER DAN FOOTER PINDAH KE COMPONENTLAYOUT.jsx di components

  return (
    <div>
      
        <Routes>
          <Route path="/" element={<ComponentLayout><Homepage/></ComponentLayout>} />
          <Route path="/search" element={<Hero  setData={setData} productPerPage={productPerPage} paginate={paginate} currentPage={currentPage} />} />
          <Route path="/product/:id" element={<ComponentLayout><Product /></ComponentLayout>} />
          <Route path="/profile" element={<ComponentLayout><Profile /></ComponentLayout>} />
          <Route path="/forgetpass" element={<ForgetPass />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<ComponentLayout><Cart/></ComponentLayout>}></Route>
          <Route path="/pesanan" element={<ComponentLayout><RiwayatPesanan/></ComponentLayout>}></Route>
          <Route path="/wishlist" element={<ComponentLayout><Wishlist/></ComponentLayout>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
