import React from 'react'
import logo from '../images/Y.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div>
        <div className='p-4 pt-8 w-full justify-center shadow-topShadow'>
            <div className='flex flex-col lg:flex-row w-full lg:w-10/12 justify-between mx-auto items-center lg:items-start'>
                <img src={logo} alt="logo" className='h-12 w-12' />
                <div className='flex flex-col text-center my-4 lg:my-0 '>
                    <h1 className='font-bold text-xl'>YENİDEN İNŞAAT AŞ.</h1>
                    <p className=''>Yeniden İnşaat; Boya, Duvar Kağıdı, Alçı, Parke A’dan Z’ye Anahtar Teslim Hizmetler.</p>
                </div>
            </div>
            <hr className='border border-gray-250 mt-6 w-full lg:w-10/12 mx-auto' />
            <p className='text-center mt-8 font-semibold'>&copy; {currentYear} Yeniden İnşaat AŞ. Tüm hakları saklıdır.</p>
        </div>
        <div className='h-2 w-full bg-sky-400'></div>
    </div>
  )
}

export default Footer
