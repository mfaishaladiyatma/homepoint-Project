import React from 'react'
import CompanyLogo from '../images/Logo aja Homepoint 2.svg'
import Heart from '../images/Heart.svg'
import Cart from '../images/ShoppingCart.svg'
import Bell from '../images/Bell.svg'
import UserLogo from '../images/UserCircle.svg'
import arrowDown from '../images/ChevronDown.svg'
import { HiCheck } from "react-icons/hi";

import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const category = [
    {
        // id: 1,
        name: 'Kursi',
    },
    {
        // id: 2,
        name: 'Meja',
    },
    {
        // id: 3,
        name: 'Lampu',
    },
    {
        // id: 4,
        name: 'Kipas',
    },
    {
        // id: 5,
        name: 'Kulkas',
    },
    {
        // id: 6,
        name: 'Lainnya',
    }
]

export default function Header() {
    const [selected, setSelected] = useState('')
    
    console.log(selected)
    return (
        <header>
            <nav className='bg-blue-pale  h-20 flex items-center justify-center font-Inter'>
                <div className='container px-3 flex items-center justify-between'>
                    <button>
                        <img src={CompanyLogo} alt="Homepoint" />
                    </button>
                    <div className='bg-white w-[750px] h-[60px] p-2 flex gap-x-3 rounded-[10px]'>

                        <Listbox value={selected} onChange={setSelected}>
                            <div className='relative h-full '>
                                <Listbox.Button className='font-[400] px-2 text-left w-44 h-full  flex items-center justify-between'>
                                    {selected ? <span>{selected}</span> : 'Kategori'}
                                    {/* <span>{selected}</span> */}
                                    <span><img src={arrowDown} alt="" /> </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave='transition ease-in duration-200'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                >
                                    <Listbox.Options className='w-44 rounded-[10px] border border-slate-400 absolute top-full mt-3 cursor-pointer z-10'>
                                        <Listbox.Option
                                            as={Fragment}
                                            value={'Kursi'}>
                                            {({ active, selected }) => (
                                                <li className={`flex items-center px-2 py-2 gap-x-3 rounded-[10px] ${active ? 'bg-blue-300 ' : 'bg-white text-black'} ${selected ? 'font-bold' : 'font-normal'}`}>
                                                    {selected ? (
                                                        <HiCheck className='w-7 h-7 text-blue-500' />
                                                    ) : null}
                                                    {'Kursi'}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                        <Listbox.Option
                                            as={Fragment}
                                            value={'Kursi 2'}>
                                            {({ active, selected }) => (
                                                <>
                                                <li className={`flex items-center px-2 py-2 gap-x-3 rounded-[10px] ${active ? 'bg-blue-300 ' : 'bg-white text-black'} ${selected ? 'font-bold' : 'font-normal'}`}>
                                                    {selected ? (
                                                        <HiCheck className='w-7 h-7 text-blue-500' />
                                                    ) : null}
                                                    {'Kursi 2'}
                                                </li>
                                                <Listbox.Options
                                                className={active ? 'block' : 'hidden'}>Test</Listbox.Options>
                                                </>
                                            )}
                                        </Listbox.Option>
                                        <Listbox.Option
                                            as={Fragment}
                                            value={'Kursi 3'}>
                                            {({ active, selected }) => (
                                                <li className={`flex items-center px-2 py-2 gap-x-3 rounded-[10px] ${active ? 'bg-blue-300 ' : 'bg-white text-black'} ${selected ? 'font-bold' : 'font-normal'}`}>
                                                    {selected ? (
                                                        <HiCheck className='w-7 h-7 text-blue-500' />
                                                    ) : null}
                                                    {'Kursi 3'}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                        
                                        {/* {category.map((item, index) => (
                                            <Listbox.Option
                                                key={index}
                                                value={item}
                                                as={Fragment}
                                            >
                                                {({ active, selected }) => (
                                                    <li className={`flex items-center px-2 py-2 gap-x-3 rounded-[10px] ${active ? 'bg-blue-300 ' : 'bg-white text-black'} ${selected ? 'font-bold' : 'font-normal'}`}>
                                                        {selected ? (
                                                            <HiCheck className='w-7 h-7 text-blue-500' />
                                                        ) : null}
                                                        {item.name}
                                                    </li>
                                                )} */}
                                        {/* className={({active}) =>
                                            `${active ? 'bg-blue-300 text-blue-800' : 'text-black'}`
                                            }>
                                                {({selected}) => (
                                                    <>
                                                    <div className={`${selected ? 'font-bold' : 'font-normal'}`}>
                                                        {item.name}
                                                    </div>
                                                    {selected ? (
                                                        <div>
                                                            <HiCheck className='text-blue-500' />
                                                        </div>
                                                    ) : null}
                                                    </>
                                                )} */}
                                        {/* </Listbox.Option>
                                        ))} */}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <div className='h-full w-1 rounded-full bg-black'></div>

                        <div className=' w-full'>
                            <input className='w-full h-full px-3' type="search" placeholder='Search' />
                        </div>
                    </div>
                    <button>
                        <img src={Heart} alt="Wishlist" />
                    </button>
                    <button>
                        <img src={Cart} alt="Cart" />
                    </button>
                    <button>
                        <img src={Bell} alt="Notification" />
                    </button>
                    <div className='flex items-center gap-x-4'>
                        <img src={UserLogo} alt="User" />
                        <button>
                            <p className='text-white font-[400]'>User</p>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
