import React from 'react'
import Header from './header.js'
import Footer from '../pages/Footer.jsx'
import { addressContext } from "../context/context";

export default function ComponentLayout(props) {
  const [menu, setMenu] = React.useState(false);

   //React Context Data ( Fetch Data using Axios )
   const { dataProduct } = React.useContext(addressContext);

   // Put dataProduct to React State
   const [data, setData] = React.useState(dataProduct);
   React.useEffect(() => {
     setData(dataProduct);
   }, [dataProduct]);

  // Search Function (Navigation)
  const searchHandler = (e) => {
    const lowerInput = e.target.value.toLowerCase();
    setData(dataProduct.filter((x) => x.name.toLowerCase().includes(lowerInput)));
  };

  //{<Hero data={currentPosts} setData={setData} productPerPage={productPerPage} paginate={paginate} currentPage={currentPage} />}
  return (
    <>
      <Header menu={menu} setMenu={setMenu} searchHandler={searchHandler} />
      {props.children}
      <Footer />
    </>
  )
}
