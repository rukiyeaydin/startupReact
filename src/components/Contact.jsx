import React from 'react'
import { FaPhone } from "react-icons/fa";
import { IoMail, IoLocationSharp   } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Contact = () => {
    const mezitliCoords = [36.7955, 34.5496];

  return (
    <div className='bg-gray-100 text-center px-4 py-16'>
        <h1 className='font-bold font-mono text-3xl mb-8' id='contact'>İLETİŞİM</h1>
        <div className='flex flex-col lg:flex-row w-full lg:w-10/12 justify-center mx-auto'>
            <div className='flex flex-col bg-white rounded-xl p-6 mr-0 lg:mr-12 mb-8 lg:mb-0 shadow-md w-full text-start'>
                <h1 className='font-bold text-2xl mb-5'>İletişime Geçin</h1>
                <div className='flex items-center mb-4'>
                    <FaPhone className='text-5xl mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>Telefon: </span> 
                        <a href="tel:05527206952" className="hover:text-sky-400 hover:underline">
                        0552 720 6952
                        </a>
                    </p>
                </div>
                <div className='flex items-center mb-4'>
                    <IoMail className='text-5xl mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>E-Mail: </span> 
                        <a href="mailto:yeniden@gmail.com" className="hover:text-sky-400 hover:underline">
                        yeniden@gmail.com
                        </a>
                    </p>
                </div>
                <div className='flex items-center mb-4'>
                    <IoLocationSharp className='text-5xl mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>Adres:</span> Akdeniz mah. 39173 Sk. Mezitli/Mersin</p>
                </div>
            </div>
            <MapContainer center={mezitliCoords} zoom={13} className='w-full h-80' style={{zIndex:0}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mezitliCoords}>
                    <Popup>Mezitli, Mersin</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
  )
}

export default Contact
