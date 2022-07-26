import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import jwtDecode from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { checkout } from "../components/action";

import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";


export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token, name } = useSelector((state) => state)
  const idAkun = useSelector((state) => state.id)
  const cartToCheckout = useSelector((state) => state.cart)

  const [rekomendasiProduct, setRekomendasiProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [deleteBulk, setDeleteBulk] = useState([]);
  // const [stock, setStock] = useState([]);
  const [productWishlist, setProductWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // qty.forEach((item) => {
  //   console.log(item)
  // })

  const decode = token ? jwtDecode(token) : null;

  useEffect(() => {

    const fetchData = async () => {
      const respRecommendProduct = await axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/latest')
        .then((response) => {
          // console.log(response)
          setRekomendasiProduct(response.data.data)
          // console.log(rekomendasiProduct)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })

      if (decode) {

        const respProductInCart = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/${idAkun}`)
          .then((response) => {
            setCart(response.data.data);
            // setStock(response.data.data.map(item => item.products.stock))
            // console.log(response.data.data)
            // console.log(checkProduct)
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error)
            //wip: display error here
          })

        const respProductInWishlist = await
          axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/${idAkun}`)
            .then((response) => {
              setProductWishlist(response.data.data.wishlistItems);
              // console.log(response.data.data)
              // console.log(checkProduct)
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              console.log(error)
              //wip: display error here
            })
      }
    }

    fetchData()
  }, [])

  const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
  )

  const addToCheckout = () => {
    if (cartItems.length > 0) {
      dispatch(checkout(cartItems.map((item) => item), navigate))
      bulkDelete()
    } else {
      toast('Keranjang masih kosong 🙏', {
        icon: '⚠️',
      })
    }
  }

  const handleCheckboxItem = async (e, productId, cartItemsId) => {

    if (e) {
      axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${idAkun}/${productId}`)
        .then((response) => {
          setDeleteBulk((prevState) =>
          ([...prevState,
            cartItemsId])
          )

          if ((cartItems.filter(item => item.id === cartItemsId)).length === 0) {
            setCartItems((prevState) => ([
              ...prevState,
              response.data.data
            ]));
          } else {
            console.log('sudah ada bro')
          }
          // console.log(response.data.data)
          // console.log(response.data.data)
          // console.log(checkProduct)
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error)
          //wip: display error here
        })
    } else {
      setCartItems(cartItems.filter(item => item.id !== cartItemsId))
      setDeleteBulk(deleteBulk.filter(item => item !== cartItemsId))
    }

  }

  // const checkCartById = (productId) => {
  //   axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${idAkun}/${productId}`)
  //       .then((response) => {
  //         setCartItems((prevState) => ([
  //           ...prevState,
  //           response.data.data
  //         ]));
  //         console.log(response.data.data)
  //         // console.log(response.data.data)
  //         // console.log(checkProduct)
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setLoading(false);
  //         console.log(error)
  //         //wip: display error here
  //       })
  // }

  const bulkDelete = () => {
    if (deleteBulk.length > 0) {
      axios({
        method: "delete",
        url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items`,
        data: {
          "cartItemIds": deleteBulk,
        },
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((response) => {
        //handle success
        // console.log(response, "<<<Add To Wishlist>>>")
        // console.log(response, "<<< removed items")
        checkCart()
        checkWishlist()
        setCartItems(cartItems.filter(item => !deleteBulk.includes(item.id)))
        // setCheckProduct(true)
        toast.success("Item berhasil terhapus")
        // navigate(0)
      }).catch((error) => {
        //handle error
        console.log(error)
      })
    } else {
      toast.error("Tidak ada item yang dihapus")
    }
  }

  const checkCart = () => {
    axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/${idAkun}`)
      .then((response) => {
        setCart(response.data.data);
        // console.log(response.data.data)
        // console.log(checkProduct)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        //wip: display error here
      })
  }

  const checkWishlist = () => {
    axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/${idAkun}`)
      .then((response) => {
        setProductWishlist(response.data.data.wishlistItems);
        // console.log(response.data.data)
        // console.log(checkProduct)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        //wip: display error here
      })
  }

  const addToWishlist = (productId, cartItemsId) => {
    axios({
      method: "post",
      url: `https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/${idAkun}/${productId}`,
      data: {
        'productId': productId,
        'userId': idAkun
      },
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then((response) => {
      //handle success
      // console.log(response, "<<<Add To Wishlist>>>")
      checkCart()
      checkWishlist()
      setCartItems(cartItems.filter(item => item.id !== cartItemsId))
      // setCheckProduct(true)
      toast.success("Berhasil menambahkan ke wishlist")
      // navigate(0)
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }

  const addQty = (id, quantity, stock) => {

    if (quantity < stock) {
      const addPutQty = axios({
        method: "put",
        url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${id}`,
        data: (quantity + 1),
        headers: { "Content-Type": "application/json" }
      }).then((response) => {
        //handle success
        // console.log(response)
        checkCart()
        if (cartItems.length > 0) {
          cartItems.map(item => {
            if (item.id === id) {
              item.quantity = quantity + 1
            }
          }
          )
        }
      }).catch((error) => {
        //handle error
        console.log(error)
      })
    } else {
      toast('Mohon maaf jumlah item sudah melebihi stok kami 🙏', {
        icon: '⚠️',
      })
    }

  }

  const decQty = (id, quantity, stock) => {

    if (quantity > 1) {
      const addPutQty = axios({
        method: "put",
        url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${id}`,
        data: (quantity - 1),
        headers: { "Content-Type": "application/json" }
      }).then((response) => {
        //handle success
        // console.log(response)
        checkCart()
        if (cartItems.length > 0) {
          cartItems.map(item => {
            if (item.id === id) {
              item.quantity = quantity - 1
            }
          }
          )
        }
      }).catch((error) => {
        //handle error
        console.log(error)
      })
    } else {
      toast('Silahkan tekan icon tong sampah, jika ingin menghapus item', {
        icon: '⚠️',
      })
    }

  }

  const deleteCart = (id) => {
    axios({
      method: "delete",
      url: ('https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/' + id),
    }).then((response) => {
      //handle success
      // console.log(response)
      // window.location.reload()
      toast.success("Item berhasil dihapus")
      checkCart()
      setCartItems(cartItems.filter(item => item.id !== id))
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }

  const calcTotal = () => {

    const total = cartItems.map(item => item.products.discount == 0 ?
      (item.products.price * item.quantity)
      :
      ((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity)).reduce((a, b) => {
        return a + parseInt(b, 10)
      }, 0)
    return total
  }

  return (
    <div className='flex flex-col py-12 px-16 gap-y-10'>
      {/* <h2 className='font-bold text-[30px]'>Keranjang</h2> */}
      <div className='flex flex-col lg:flex-row gap-x-5 gap-y-20 md:gap-y-0 font-Inter'>

        {/* card untuk product yang dibeli */}
        <div className='flex flex-col w-full lg:w-[70%]  px-2 gap-y-8'>

          <Toaster
            position='bottom-right'
            reverseOrder={false}

            toastOptions={{
              duration: 5000,
              style: {
                backgroundColor: '#FBC646',
                color: '#22364A',
                fontWeight: 'bold',
              },

              success: {
                duration: 5000,
                theme: {
                  primary: 'blue',
                  secondary: 'yellow'
                }
              },

              error: {
                duration: 5000,
                theme: {
                  primary: 'red',
                  secondary: 'yellow'
                }
              }
            }}
          />

          <div className='flex justify-between items-center'>
            <div className='flex gap-x-2 items-center'>
              <h2 className='font-bold text-[30px]'>Keranjang</h2>
            </div>
            <div>
              <button onClick={() => bulkDelete()}>
                <p className='font-bold text-[14px] md:text-[16px] text-red-500'>Hapus</p>
              </button>
            </div>
          </div>


          <section>
            {cart && cart.sort((a, b) => a.id > b.id ? 1 : -1).map((item) => {
              return (
                <div key={item.id} className='flex flex-col gap-y-5'>
                  <div className='flex flex-row  items-center gap-x-5 md:gap-x-2'>
                    <input className='accent-[#FBC646] scale-[1.5] outline-none' onChange={(e) => handleCheckboxItem(e.target.checked, item.products.id, item.id)} type="checkbox" name='cartItems' />
                    <img className='w-[130px] md:w-[250px] rounded-[8px]' src={item.products.productImages[0].image} alt="" />
                    <div className='flex flex-col  w-full h-full gap-y-12'>
                      <div className='flex flex-col'>
                        <h4 className='text-[16px] md:text-[18px]'>{item.products.name}</h4>

                        <h4 className='font-bold text-[16px] md:text-[18px]'>{item.products.discount == 0 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price) : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price - (item.products.price * (item.products.discount / 100)))}</h4>

                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex items-center gap-x-2'>
                          <button onClick={() => addToWishlist(item.products.id, item.id)}>
                            <div className='text-[14px] md:text-[16px]'>
                              <BsHeart />
                            </div>
                          </button>
                          <p className='text-[14px] md:text-[16px]'>|</p>
                          <button onClick={() => deleteCart(item.id)}>
                            <div className='text-red-500 text-[14px] md:text-[16px]'>
                              <BsFillTrashFill />
                            </div>
                          </button>
                        </div>
                        <div className='flex justify-between items-center px-2 rounded-[10px] w-[80px] h-[25px] text-white bg-[#22364A]'>
                          <button className='text-[14px] md:text-[16px]' onClick={() => decQty(item.id, item.quantity, item.products.stock)}>
                            -
                          </button>
                          <p className='text-[14px] md:text-[16px]'>{item.quantity}</p>
                          <button className='text-[14px] md:text-[16px]' onClick={() => addQty(item.id, item.quantity, item.products.stock)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-[2px] rounded-full bg-slate-400 mt-5 mb-5'></div>

                </div>
              )
            })}


          </section>
        </div>

        {/* card untuk tab harga/bayar */}
        <section className=' flex flex-col gap-y-8 w-full lg:w-[30%] rounded-[8px] shadow-shadow-custom-2 px-5 md:px-3 py-7 md:py-5 h-fit'>
          {/* <div className='flex h-10 items-center justify-between  rounded-[8px] border-2 border-blue-300 px-3'>
            <div className='flex justify-center w-full'>
              <p className='font-semibold text-[#505050]'>Makin hemat dengan promo</p>
            </div>
            <div>
              <HiOutlineChevronRight />
            </div>
          </div> */}
          {/* <div className='h-[2px] w-full bg-blue-300'></div> */}
          {cartItems.length > 0
            ?
            <>
              <h3 className='font-bold text-[22px]'>Ringkasan Belanja</h3>
              <div className='flex flex-col gap-y-6'>
                {cartItems.map((item, index) => {
                  if (item.products.discount == 0) {
                    return (
                      <React.Fragment key={index}>
                        <div className='flex justify-between'>
                          <p className='text-[14px] md:text-[16px]'>Total harga ({item.quantity} barang)</p>
                          <p className='text-[14px] md:text-[16px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(

                            item.products.price * item.quantity

                          )}</p>
                        </div>
                      </React.Fragment>
                    )
                  } else {
                    return (
                      <React.Fragment key={index}>
                        <div className='flex justify-between'>
                          <p className='text-[14px] md:text-[16px]'>Total harga ({item.quantity} barang)</p>
                          <p className='text-[14px] md:text-[16px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(

                            (item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity

                          )}</p>
                        </div>
                      </React.Fragment>
                    )
                  }
                })}
                {/* <div className='flex justify-between'>
              <p>Total harga ( barang)</p>
              <p>Rp. 800.000</p>
            </div> */}
              </div>
            </>
            :
            <p className='font-bold text-[22px] '>Masih kosong 🥲</p>
          }

          <div className='h-[2px] w-full bg-blue-300'></div>

          {/* {cart.map((item, index) => {
            const totalAll = [((item.products.price * (item.products.discount / 100)) * item.quantity)]
            console.log(totalAll ? totalAll : 0)
          })} */}
          {/* {cart.map(item => item.products.price).reduce((a, b) => a + parseInt(b, 10), 0)} */}
          <div className='flex justify-between'>
            {/* <p className='font-bold text-[22px]'>Rp. 800.000</p> */}
            {cartItems.length > 0
              ?
              <>
                <p className='font-bold text-[20px] md:text-[22px]'>Total Harga</p>
                <p className='font-bold text-[20px] md:text-[22px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(

                  calcTotal()

                )}</p>
              </>
              :
              <p className='font-bold text-[22px] '></p>
            }
          </div>
          <button onClick={addToCheckout} className='font-bold text-[14px] md:text-[16px]'>
            <div className='rounded-[8px]  text-[#505050] bg-[#FBC646] h-20 md:h-12 flex justify-center items-center'>
              Beli ({cartItems.length})
            </div>
          </button>
        </section>
      </div>

      {/* card untuk product yang rekomendasi & card untuk wishlist*/}
      <div className='flex w-full lg:w-[70%] flex-col'>
        <section className='mb-20 flex flex-col '>
          <div className=' flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center'>
            <h4 className='text-[22px] md:text-[30px] font-medium'>Wishlist</h4>
            <button onClick={() => navigate('/wishlist')}>
              <p className='text-[#316093] text-[14px] md:text-[16px] font-[600]'>Lihat Selengkapnya &gt;</p>
            </button>
          </div>
          <div className={`${productWishlist.length > 0 ? 'grid grid-cols-2 xl:grid-cols-4' : 'flex justify-center min-h-[300px] items-center'}  h-full gap-4 mt-10 justify-items-center `}>

            {productWishlist.length > 0
              ?
              productWishlist.slice(0, 4).map((item) => (
                <button key={item.id} onClick={() => navigate('/product/' + item.products.id)}>
                  <div className='flex flex-col border-2 h-full w-full  max-w-[250px] lg:max-w-full p-3 justify-between gap-y-6 rounded-[10px] border-[#E1E1E1] shadow-shadow-custom-1 hover:-translate-y-3 ease-in-out duration-300 '>
                    <div className='flex flex-row items-center justify-center '>
                      <img className='rounded-[8px] w-[200px]' src={item.products.productImages[0].image} alt="" />
                    </div>
                    <p className='font-semibold text-left text-[16px]'>{item.products.name}</p>
                    <div className='flex flex-col gap-y-3'>

                      {item.products.discount === 0 ?

                        <h4 className='font-bold text-[18px] text-left mt-8'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price)}</h4>
                        :
                        <>
                          <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price)}</h4>

                          <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price - (item.products.price * (item.products.discount / 100)))}</h3>
                        </>
                      }

                      <div className='flex gap-x-2'>
                        <div className='flex items-center gap-x-2'>
                          <div className='text-yellow-400 text-[14px] md:text-[16px]'><AiFillStar /></div>
                          <p className='text-[16px]'>{item.products.ratingAverage}</p>
                        </div>
                        <div className='text-[14px] md:text-[16px]'>
                          |
                        </div>
                        <div className='flex items-center'>
                          <p className='text-[16px]'>Terjual {item.products.amountSold}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))
              :
              <p className='text-center text-[14px] md:text-[16px] bg-sky-300/20 p-5 h-fit rounded-[8px]'>Masih kosong 🥲</p>
            }

          </div>

          <div className='mt-12 flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center'>
            <h4 className='text-[22px] md:text-[30px] font-medium'>Rekomendasi Untukmu</h4>
            <button onClick={() => navigate('/search')}>
              <p className='text-[#316093] text-[14px] md:text-[16px] font-[600]'>Lihat Selengkapnya &gt;</p>
            </button>
          </div>
          <div className='grid grid-cols-2 xl:grid-cols-4 justify-items-center h-full  gap-4 mt-10'>

            {rekomendasiProduct.slice(0, 4).map((item) => (
              <button key={item.id} onClick={() => navigate('/product/' + item.id)}>
                <div className='flex flex-col h-full border-2  p-3 justify-between gap-y-6 rounded-[10px] border-[#E1E1E1] shadow-shadow-custom-1 hover:-translate-y-3 ease-in-out duration-300 max-w-[250px]'>
                  <div className='flex flex-row items-center justify-center '>
                    <img className='rounded-[8px]  w-[200px] ' src={item.productImages[0].image} alt="" />
                  </div>
                  <p className='font-semibold text-[16px] text-left '>{item.name}</p>
                  <div className='flex flex-col gap-y-3'>
                    {item.discount === 0 ?

                      <h4 className='font-bold text-[18px] text-left mt-8'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.price)}</h4>
                      :
                      <>
                        <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.price)}</h4>

                        <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.price - (item.price * (item.discount / 100)))}</h3>
                      </>
                    }

                    <div className='flex gap-x-2'>
                      <div className='flex items-center gap-x-2'>
                        <div className='text-yellow-400 text-[14px] md:text-[16px]'><AiFillStar /></div>
                        <p className='text-[16px]'>{item.ratingAverage}</p>
                      </div>
                      <div className='text-[14px] md:text-[16px]'>
                        |
                      </div>
                      <div className='flex items-center'>
                        <p className='text-[16px]'>Terjual {item.amountSold}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
