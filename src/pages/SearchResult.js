import { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { addressContext } from '../context/context'
import axios from 'axios'

import PaginationPage from '../components/pagination/pagination.js'

function SearchResult({ data, setData, productPerPage, paginate, currentPage }) {
    // const { dataProduct, setDataProduct } = React.useContext(addressContext)
    const [ products, setProducts ] = useState([]);
    const [ brands, setBrands ] = useState([]);
    const [ colors, setColors ] = useState([]);

    const [filterList, setFilterList] = useState({
        min: null,
        max: null,
        rating: '',
        brand: '',
        color: '',
        page: 1,

    });

    useEffect(() => {
        axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/products`)
            .then((response) => {
                setProducts(response.data.data.products);
                setBrands(response.data.data.brands);
                setColors(response.data.data.colors);
            })
            .catch((error) => {
                //wip: display error here
            });
    }, []);

    // const [check, setCheck] = React.useState()

    //Reset Semua Filter
    const resetButton = () => {
        // setData(dataProduct)
        setFilterList({
            min: null,
            max: null,
            brand: "",
            color: '',
        })

    }

    return (
        <>
            <div className='px-4 lg:px-16 flex flex-col items-center lg:flex-row lg:items-start py-5'>
                <div className='border-[1px] w-full lg:w-max border-blue-pale rounded-md'>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>Filter</h2>
                            <button onClick={resetButton} className='cursor-pointer text-[#FBC646]'>Reset</button>
                        </div>
                        <h2 className='mt-5'>Harga</h2>
                        <div className='flex items-center mt-3 gap-[5px]'>
                            <input value={filterList.min} id="price" name="min" onChange={() => {}} className="border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Minimum' />
                            <div>-</div>
                            <input value={filterList.max} id="price" name="max" onChange={() => {}} className="border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Maksimum' />
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col gap-[10px]'>
                        <h2 className='mb-5'>Rating</h2>
                        <div className='flex items-center gap-[10px]'>
                            <input onClick={e => {}} name="rating" className='border-[1px] border-light-blue-pale rounded-md' type="radio" />
                            <AiFillStar className='text-[#FBC646]' />
                            <label>4 Keatas</label>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input onClick={e => {}} name="rating" className='border-[1px] border-light-blue-pale rounded-md' type="radio" />
                            <AiFillStar className='text-[#FBC646]' />
                            <label>3 Keatas</label>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input  onClick={e => {}} name="rating" className='border-[1px] border-light-blue-pale rounded-md' type="radio" />
                            <AiFillStar className='text-[#FBC646]' />
                            <label>2 Keatas</label>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input onClick={e => {}} name="rating" className='border-[1px] border-light-blue-pale rounded-md' type="radio" />
                            <AiFillStar className='text-[#FBC646]' />
                            <label>1 Keatas</label>
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5'>
                        <h2>Brand</h2>
                        <div className='w-[100%] rounded-md my-3 flex items-center justify-between p-2 border-[1px] border-blue-pale'>
                            <input value={filterList.brand} name="brand" onChange={e => {}} placeholder='Input text' className='w-full outline-none border-none' />
                            <AiOutlineSearch />
                        </div>
                        <div className='py-5 max-h-[230px] overflow-y-auto flex flex-col gap-[10px] mt-5'>
                            {brands.map((brand) => (
                                <div className='flex gap-[20px] items-center' key={brand}>
                                    <input checked={filterList.vishal} name="brand" onClick={e => {}} type="radio" className="border-[1px] border-light-blue-pale rounded-md" />
                                    <h2>{brand}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col'>
                        <h2 className='mt-3'>Warna</h2>
                        <div className='flex mt-5 gap-[10px]'>
                            {colors.map((color) => (
                                <input key={color} checked={filterList.green} type="checkbox" onClick={e => {}} name="green" className="input-checkbox" style={{ backgroundColor: color }}></input>
                            ))}
                        </div>
                        <button onClick={() => {}} className='mt-[30px] p-2 font-semibold w-[85%] rounded-md mx-auto bg-[#FBC646]'>Terapkan</button>
                    </div>
                </div>
                <div className='p-5 h-full flex flex-col lg:p-0 lg:mx-5'>
                    <div className='flex items-center'>
                        <h3 className='font-bold'>Urutkan</h3>
                        <select onChange={e => () => {}} className='ml-5 outline-none p-3 rounded-md border-[1px] border-light-blue-pale'>
                            <option value="Terlaris">Produk Terlaris</option>
                            <option value="Terbaru">Produk Terbaru</option>
                            <option value="Termahal">Produk Termahal</option>
                            <option value="Termurah">Produk Termurah</option>
                        </select>
                    </div>
                    {/* {data.length > 0 */}
                        {/* ? */}
                        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-[0] xl:grid-cols-4 gap-[10px] md:gap-[20px] '>
                            {products.map(each => {
                                return (
                                    <div key={each.id} className='border-[1px] w-fit flex flex-col p-3 border-light-blue-pale rounded-md'>
                                        <Link className='flex w-full justify-center' to={`../product/${each.id}`}>
                                            <img className='max-w-[100px] lg:max-w-[150px]' src={each.productImages[0].image} alt={each.name}/>
                                        </Link>
                                        <h3 className='text-left'>{each.name}</h3>
                                        <div className='mt-auto'>
                                            <h3 className='font-bold mt-auto'>Rp {each.price}</h3>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex items-center gap-[5px]'>
                                                    <AiFillStar className='text-[#FBC646]' />
                                                    {each.ratingAverage}
                                                </div>
                                                <div>|</div>
                                                <p>Terjual {each.amountSold}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* :
                        <div className='mt-5'>
                            Produk tidak dapat ditemukan...
                        </div> */}
                    {/* } */}
                    <div className='w-full flex flex-wrap mt-5'>
                        {/* buat nampilin pagination pakai library aja */}
                        {/* <PaginationPage data={data} paginate={paginate} currentPage={currentPage} productPerPage={productPerPage} totalPosts={dataProduct.length} /> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default SearchResult;