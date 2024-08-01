import React, { useState, useEffect } from 'react';
import logo from "../images/Y.png";
import { Link,useLocation  } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [bar, setBar] = useState(0);
    const [scrolling, setScrolling] = useState(false)
    const location = useLocation();

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

    const isActive = (path) => {
        return location.pathname === path;
    };

    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     if (section) {
    //         window.scrollTo({
    //             top: section.offsetTop -80,
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    return (
        <div className='flex flex-col'>
            <div className='items-center justify-around w-full bg-black p-3 text-white hidden lg:block lg:flex'>
                <p className='font-mono animate-pulse'>YENİDEN İNŞAAT</p>
                <p className='font-mono animate-pulse'>E-Posta: yeniden@gmail.com</p>
                <p className='font-mono animate-pulse'>Bizi Arayın: 0552 720 6952</p>
            </div>
            <div className={`flex flex-col w-full ${scrolling ? 'fixed top-0 left-0 z-10' : ''}`}>
                <div className='p-4 w-full flex items-center justify-between shadow-md bg-white'>
                    <Link to="/" target='_top' className='flex items-center'>
                        <img src={logo} alt="" className='w-8 h-8' />
                        <h1 className='font-bold font-mono text-sky-400 text-lg' id="about">YENİDEN İNŞAAT AŞ</h1>
                    </Link>
                    <div className='flex items-center'>
                        <div className="hidden lg:block">
                            <Link to="/" target='_top' className={`px-5 font-semibold font-mono duration-200 ${isActive("/") ? "text-sky-400" : "hover:text-sky-400"}`}>ANASAYFA</Link>
                            <Link to="/hakkimizda" target='_top' className={`px-5 font-semibold font-mono duration-200 ${isActive("/hakkimizda") ? "text-sky-400" : "hover:text-sky-400"}`}>HAKKIMIZDA</Link>
                            <Link to="/hizmetlerimiz" target='_top' className={`px-5 font-semibold font-mono duration-200 ${isActive("/hizmetlerimiz") ? "text-sky-400" : "hover:text-sky-400"}`}>HİZMETLERİMİZ</Link>
                            <Link to="/iletisim" target='_top' className={`px-5 font-semibold font-mono duration-200 ${isActive("/iletisim") ? "text-sky-400" : "hover:text-sky-400"}`}>İLETİŞİM</Link>
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
                        <Link to="/" target='_top' className={`py-4 font-semibold font-mono duration-200 ${isActive("/") ? "text-sky-400" : "hover:text-sky-400"}`}>ANASAYFA</Link>
                        <Link to="/hakkimizda" target='_top' className={`py-4 font-semibold font-mono duration-200 ${isActive("/hakkimizda") ? "text-sky-400" : "hover:text-sky-400"}`}>HAKKIMIZDA</Link>
                        <Link to="/hizmetlerimiz" target='_top' className={`py-4 font-semibold font-mono duration-200 ${isActive("/hizmetlerimiz") ? "text-sky-400" : "hover:text-sky-400"}`}>HİZMETLERİMİZ</Link>
                        <Link to="/iletisim" target='_top' className={`py-4 font-semibold font-mono duration-200 ${isActive("/iletisim") ? "text-sky-400" : "hover:text-sky-400"}`}>İLETİŞİM</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
