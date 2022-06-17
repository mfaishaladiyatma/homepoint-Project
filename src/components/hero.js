import React from 'react'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { addressContext } from '../context/context'

import PaginationPage from './pagination/pagination.js'

function Hero({ data, setData, productPerPage, paginate, currentPage }) {

    const { dataProduct, setDataProduct } = React.useContext(addressContext)
    const [filterList, setFilterList] = React.useState({
        min: null,
        max: null,

        //rating
        rating4: false,
        rating3: false,
        rating2: false,
        rating1: false,

        //brand
        brand: "",
        vishal: false,
        bolde: false,
        diamond: false,
        onyx: false,
        evrierch: false,
        oxone: false,

        //color
        green: false,
        gray: false,
        violet: false,
        blue: false,
        red: false,
        yellow: false
    })

    const [check, setCheck] = React.useState()

    //Reset Semua Filter
    const resetButton = () => {
        setData(dataProduct)
        setFilterList({
            min: "",
            max: null,
            //Rating
            rating4: false,
            rating3: false,
            rating2: false,
            rating1: false,
            vishal: false,

            //Brand
            brand: "",
            bolde: false,
            diamond: false,
            onyx: false,
            evrierch: false,
            oxone: false,
            unggulGroup: false,

            //Color
            green: false,
            gray: false,
            violet: false,
            blue: false,
            red: false,
            yellow: false
        })

    }


    //Filter Untuk Harga Minimum - Maksimum
    const priceChanger = e => {
        setFilterList(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    // Filter untuk Fungsi Urutkan
    const sortFilter = (e) => {

        if (e.target.value === "Terlaris") {
            const sorted = [...data].sort((a, b) => b.amountSold - a.amountSold)
            setData(sorted)
        }
        if (e.target.value === "Terbaru") {
            const sortedNew = [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            setData(sortedNew)
        }
        if (e.target.value === "Termahal") {
            const sortedExpensive = [...data].sort((a, b) => b.price - a.price)
            setData(sortedExpensive)
        }
        if (e.target.value === "Termurah") {
            const sortedCheap = [...data].sort((a, b) => a.price - b.price)
            setData(sortedCheap)
        }
    }

    // Filter Untuk Pencarian Product dengan nama Brand 
    const searchFilterBrand = (e) => {
        const value = e.target.value.toLowerCase()
        setFilterList(prevState => {
            return {
                ...prevState,
                [e.target.name]: value
            }
        })
        setData(dataProduct.filter(x => x.brand.toLowerCase().includes(value)))
    }

    // Filter Untuk Brand & Rating CheckBox
    const brandChecker = (e) => {
        setFilterList(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.checked
            }
        })
    }

    // Filter Color
    const colorHandler = (e) => {
        console.log(e.target.checked)
        setFilterList(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.checked
            }
        })
    }


    // Filter Keseluruhan 
    const advancedFiltering = () => {
        let updatedData = dataProduct

        // Filter Harga 
        if (filterList.min) {
            updatedData = updatedData.filter(x => x.price >= Number(filterList.min))
        }
        if (filterList.max) {
            updatedData = updatedData.filter(x => x.price <= filterList.max)
        }

        // Filter Rating 
        if (filterList.rating1) {
            updatedData = updatedData.filter(x => x.ratingAverage > 1)
        }
        if (filterList.rating2) {
            updatedData = updatedData.filter(x => x.ratingAverage >= 2)
        }
        if (filterList.rating3) {
            updatedData = updatedData.filter(x => x.ratingAverage >= 3)
        }
        if (filterList.rating4) {
            updatedData = updatedData.filter(x => x.ratingAverage >= 4)
        }
        if (filterList.vishal) {
            updatedData = updatedData.filter(x => x.brand === "vishal")
        }
        if (filterList.bolde) {
            updatedData = updatedData.filter(x => x.brand === "bolde")
        }
        if (filterList.diamond) {
            updatedData = updatedData.filter(x => x.brand === "diamond")
        }
        if (filterList.onyx) {
            updatedData = updatedData.filter(x => x.brand === "onyx")
        }
        if (filterList.evrierch) {
            updatedData = updatedData.filter(x => x.brand === "evrierch")
        }
        if (filterList.oxone) {
            updatedData = updatedData.filter(x => x.brand === "oxone")
        }
        if (filterList.unggulGroup) {
            updatedData = updatedData.filter(x => x.brand === "Unggul Group")
        }

        //Color Filter
        if (filterList.green) {
            updatedData = updatedData.filter(x => x.color === "green")
        }
        if (filterList.gray) {
            updatedData = updatedData.filter(x => x.color === "gray")
        }
        if (filterList.violet) {
            updatedData = updatedData.filter(x => x.color === "violet")
        }
        if (filterList.blue) {
            updatedData = updatedData.filter(x => x.color === "blue")
        }
        if (filterList.yellow) {
            updatedData = updatedData.filter(x => x.color === "yellow")
        }
        if (filterList.red) {
            updatedData = updatedData.filter(x => x.color === "red")
        }

        setData(updatedData)
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
                            <input value={filterList.min} id="price" name="min" onChange={e => priceChanger(e)} className="border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Minimum' />
                            <div>-</div>
                            <input value={filterList.max} id="price" name="max" onChange={e => priceChanger(e)} className="border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Maksimum' />
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col gap-[10px]'>
                        <h2 className='mb-5'>Rating</h2>
                        <div className='flex items-center gap-[10px]'>
                            <input checked={filterList.rating4} onClick={e => brandChecker(e)} name="rating4" className='border-[1px] border-light-blue-pale rounded-md' type="checkbox" />
                            <AiFillStar className='text-[#FBC646]' />
                            <h3>4 Keatas</h3>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input checked={filterList.rating3} onClick={e => brandChecker(e)} name="rating3" className='border-[1px] border-light-blue-pale rounded-md' type="checkbox" />
                            <AiFillStar className='text-[#FBC646]' />
                            <h3>3 Keatas</h3>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input checked={filterList.rating2} onClick={e => brandChecker(e)} name="rating2" className='border-[1px] border-light-blue-pale rounded-md' type="checkbox" />
                            <AiFillStar className='text-[#FBC646]' />
                            <h3>2 Keatas</h3>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input checked={filterList.rating1} onClick={e => brandChecker(e)} name="rating1" className='border-[1px] border-light-blue-pale rounded-md' type="checkbox" />
                            <AiFillStar className='text-[#FBC646]' />
                            <h3>1 Keatas</h3>
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5'>
                        <h2>Brand</h2>
                        <div className='w-[100%] rounded-md my-3 flex items-center justify-between p-2 border-[1px] border-blue-pale'>
                            <input value={filterList.brand} name="brand" onChange={e => searchFilterBrand(e)} placeholder='Input text' className='w-full outline-none border-none' />
                            <AiOutlineSearch />
                        </div>
                        <div className='py-5 max-h-[230px] overflow-y-auto flex flex-col gap-[10px] mt-5'>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.vishal} name="vishal" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>VISHAL</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.bolde} name="bolde" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>BOLDe</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.diamond} name="diamond" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>Diamond</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.onyx} name="onyx" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>Onyx</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.evrierch} name="evrierch" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>EVRIERCH</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.oxone} name="oxone" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>Oxone</h2>
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <input checked={filterList.unggulGroup} name="unggulGroup" onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                <h2>Unggul Group</h2>
                            </div>
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col'>
                        <h2 className='mt-3'>Warna</h2>
                        <div className='flex mt-5 gap-[10px]'>
                            <input checked={filterList.green} type="checkbox" onClick={e => colorHandler(e)} name="green" className='input-checkbox bg-green-500'></input>
                            <input checked={filterList.gray} type="checkbox" onClick={e => colorHandler(e)} name="gray" className='input-checkbox bg-gray-500'></input>
                            <input checked={filterList.violet} type="checkbox" onClick={e => colorHandler(e)} name="violet" className='input-checkbox bg-purple-500'></input>
                            <input checked={filterList.blue} type="checkbox" onClick={e => colorHandler(e)} name="blue" className='input-checkbox bg-blue-500'></input>
                            <input checked={filterList.yellow} type="checkbox" onClick={e => colorHandler(e)} name="yellow" className='input-checkbox bg-yellow-500'></input>
                            <input checked={filterList.red} type="checkbox" onClick={e => colorHandler(e)} name="red" className='input-checkbox bg-red-500'></input>
                        </div>
                        <button onClick={advancedFiltering} className='mt-[30px] p-2 font-semibold w-[85%] rounded-md mx-auto bg-[#FBC646]'>Terapkan</button>
                    </div>
                </div>
                <div className='p-5 h-full flex flex-col lg:p-0 lg:mx-5'>
                    <div className='flex items-center'>
                        <h3 className='font-bold'>Urutkan</h3>
                        <select onChange={e => sortFilter(e)} className='ml-5 outline-none p-3 rounded-md border-[1px] border-light-blue-pale'>
                            <option value="Terlaris">Produk Terlaris</option>
                            <option value="Terbaru">Produk Terbaru</option>
                            <option value="Termahal">Produk Termahal</option>
                            <option value="Termurah">Produk Termurah</option>
                        </select>
                    </div>
                    {data.length > 0
                        ?
                        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-[0] xl:grid-cols-4 gap-[10px] md:gap-[20px] '>
                            {data.map(each => {
                                return (
                                    <div key={each.id} className='border-[1px] w-fit p-3 border-light-blue-pale rounded-md'>
                                        <Link className='flex w-full justify-center' to={`product/${each.id}`}>
                                            <img className='max-w-[100px] lg:max-w-[150px]' src={each.productImages[0].image} />
                                        </Link>
                                        <h3>{each.name}</h3>
                                        <h3 className='font-bold'>Rp {each.price}</h3>
                                        <div className='flex gap-[10px] items-center'>
                                            <div className='flex items-center gap-[5px]'>
                                                <AiFillStar className='text-[#FBC646]' />
                                                {each.ratingAverage}
                                            </div>
                                            <div>|</div>
                                            <p>Terjual 100</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='mt-5'>
                            Produk tidak dapat ditemukan...
                        </div>
                    }
                    <div className='w-full mt-5'>
                        <PaginationPage data={data} paginate={paginate} currentPage={currentPage} productPerPage={productPerPage} totalPosts={dataProduct.length} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero