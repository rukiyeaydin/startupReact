import React from 'react'
import logo from "../images/Y.png"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [bar, setBar] = useState(0)

  return (
    <div className='flex flex-col'>
        <div className='items-center justify-around w-full bg-black p-3 text-white hidden lg:block lg:flex'>
            <p className='font-mono animate-pulse'>YENİDEN İNŞAAT</p>
            <p className='font-mono animate-pulse'>E-Posta: yeniden@gmail.com</p>
            <p className='font-mono animate-pulse'>Bizi Arayın: 0552 720 6952</p>
        </div>
        <div className='flex flex-col'>
            <div  className='p-4 w-full flex items-center justify-between shadow-md'>
                <Link to="/" target='_top'><img src={logo} alt="" className='w-8 h-8' /></Link>
                <p className='font-mono animate-pulse lg:hidden'>YENİDEN İNŞAAT</p>
                <div className='flex items-center'>
                    <div className="hidden lg:block">
                        <Link className='px-5 font-semibold font-mono hover:text-gray-400 duration-200'>HAKKIMIZDA</Link>
                        <Link className='px-5 font-semibold font-mono hover:text-gray-400 duration-200'>HİZMETLERİMİZ</Link>
                        <Link className='px-5 font-semibold font-mono hover:text-gray-400 duration-200'>İLETİŞİM</Link>
                    </div>
                    <div className='lg:hidden cursor-pointer' onClick={() => setBar(!bar)}>
                        {
                            bar == 0 ? 
                            <FaBars /> : 
                            <MdClose className='text-lg font-black' />
                        }
                    </div>
                </div>
            </div>
            {
                bar == 1 ? 
                <div className='flex flex-col p-4 items-start justify-center bg-white shadow-md lg:hidden absolute w-full top-16 border-t-2 border-gray-100 '>
                    <Link className='py-4 font-semibold font-mono hover:text-gray-400 duration-200'>HAKKIMIZDA</Link>
                    <Link className='py-4 font-semibold font-mono hover:text-gray-400 duration-200'>HİZMETLERİMİZ</Link>
                    <Link className='py-4 font-semibold font-mono hover:text-gray-400 duration-200'>İLETİŞİM</Link>
                </div>
                : 
                ""
            }
        </div>
    </div>
  )
}

export default Navbar