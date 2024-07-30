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
          link: 'link here',
        },
        {
          id: 2,
          name: "Alçı",
          src: alci,
          link: 'link here',
        },
        {
            id: 3,
            name: "Duvar Kağıdı",
            src: wallpp,
            link: 'link here',
        },
        {
            id: 4,
            name: "Parke",
            src: parke,
            link: 'link here',
        },

    ];


  return (
    <div className='p-4 my-16'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold font-mono mb-12'>HİZMETLERİMİZ</h1>
        <div className='w-full lg:w-10/12 mx-auto flex flex-col'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {items.map(({ id, name, src, link }) => (
            <Link>
                <div key={id} className='shadow-md shadow-gray-300 rounded-lg  overflow-hidden'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 ' />
                    <div className='flex items-center justify-center text-center'>
                        <p className='w-full px-6 py-3 m-4'>{name}</p>
                    </div>
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
