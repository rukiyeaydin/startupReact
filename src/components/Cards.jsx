import React from 'react'
import { Link } from 'react-router-dom'
import alci from "../images/cards/alci.jpg"
import parke from "../images/cards/parke.jpg"
import wallpp from "../images/cards/wallpp.jpg"
import boyama from "../images/cards/boyama.webp"

const Cards = () => {
    const items = [
        {
            id: 1,
            name: "Boya",
            src: boyama,
            linkto: '/boya',
        },
        {
            id: 2,
            name: "Alçı",
            src: alci,
            linkto: '/alci',
        },
        {
            id: 3,
            name: "Duvar Kağıdı",
            src: wallpp,
            linkto: '/duvar-kagidi',
        },
        {
            id: 4,
            name: "Parke",
            src: parke,
            linkto: '/parke',
        },

    ];


  return (
    <div className='p-4 mb-16 mt-8'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold font-mono mb-16'>HİZMETLERİMİZ</h1>
        <div className='w-full lg:w-10/12 mx-auto flex flex-col'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {items.map(({ id, name, src, linkto }) => (
                <Link key={id} to={linkto} target='_top' className='shadow-md shadow-gray-300 rounded-lg  overflow-hidden'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 ' />
                    <div className='flex items-center justify-center text-center'>
                        <h2 className='w-full px-6 py-3 m-4 font-bold'>{name}</h2>
                    </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards