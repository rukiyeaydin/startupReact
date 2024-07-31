import React, { useState, useEffect } from 'react';
import logo from "../images/Y.png";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [bar, setBar] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop -80,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='items-center justify-around w-full bg-black p-3 text-white hidden lg:block lg:flex'>
                <p className='font-mono animate-pulse'>YENİDEN İNŞAAT</p>
                <p className='font-mono animate-pulse'>E-Posta: yeniden@gmail.com</p>
                <p className='font-mono animate-pulse'>Bizi Arayın: 0552 720 6952</p>
            </div>
            <div className={`flex flex-col w-full ${scrolling ? 'fixed top-0 left-0 z-10' : ''}`}>
                <div className='p-4 w-full flex items-center justify-between shadow-md bg-white'>
                    <Link to="/" target='_top'><img src={logo} alt="" className='w-8 h-8' /></Link>
                    <p className='font-mono animate-pulse lg:hidden'>YENİDEN İNŞAAT</p>
                    <div className='flex items-center'>
                        <div className="hidden lg:block">
                            <button onClick={() => scrollToSection('about')} className='px-5 font-semibold font-mono hover:text-sky-400 duration-200'>HAKKIMIZDA</button>
                            <button onClick={() => scrollToSection('services')} className='px-5 font-semibold font-mono hover:text-sky-400 duration-200'>HİZMETLERİMİZ</button>
                            <button onClick={() => scrollToSection('contact')} className='px-5 font-semibold font-mono hover:text-sky-400 duration-200'>İLETİŞİM</button>
                        </div>
                        <div className='lg:hidden cursor-pointer' onClick={() => setBar(!bar)}>
                            {
                                bar == 0 ?
                                <FaBars className='text-[20px]' /> :
                                <MdClose className='text-[20px] font-black' />
                            }
                        </div>
                    </div>
                </div>
                {bar == 1 && (
                    <div className='flex flex-col p-4 items-start justify-center bg-white shadow-md lg:hidden fixed top-14 left-0 w-full border-t-2 border-gray-100'>
                        <button onClick={() => { scrollToSection('about'); setBar(0); }} className='py-4 font-semibold font-mono hover:text-sky-400 duration-200'>HAKKIMIZDA</button>
                        <button onClick={() => { scrollToSection('services'); setBar(0); }} className='py-4 font-semibold font-mono hover:text-sky-400 duration-200'>HİZMETLERİMİZ</button>
                        <button onClick={() => { scrollToSection('contact'); setBar(0); }} className='py-4 font-semibold font-mono hover:text-sky-400 duration-200'>İLETİŞİM</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
