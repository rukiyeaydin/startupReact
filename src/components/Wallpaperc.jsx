import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { IoMail, IoLocationSharp   } from "react-icons/io5"
import wallpaper from '../images/cards/wallpp.jpg'

const Wallpaperc = () => {
  return (
    <div className='px-4 py-20 flex flex-col lg:flex-row w-full lg:w-10/12 mx-auto'>
        <div className='w-full lg:w-96 mr-8'>
            <div className='bg-gray-100 p-4 mb-12 w-full'>
                <h2 className='font-bold text-2xl mb-4'>Yeniden İnşaat Alçı Hizmeti</h2>
                <div>
                    <ul>
                        <li className='flex items-center mb-2'>
                            <IoMdCheckboxOutline className='mr-2 text-xl' />
                            <p>Yeniden İnşaat Yenileme</p>
                        </li>
                        <li className='flex items-center mb-2'>
                            <IoMdCheckboxOutline className='mr-2 text-xl' />
                            <p>Yeniden İnşaat Boyama</p>
                        </li>
                        <li className='flex items-center mb-2'>
                            <IoMdCheckboxOutline className='mr-2 text-xl' />
                            <p>Mersin Boya</p>
                        </li>
                        <li className='flex items-center mb-2'>
                            <IoMdCheckboxOutline className='mr-2 text-xl' />
                            <p>Mersin Boya Ustaları</p>
                        </li>
                        <li className='flex items-center mb-2'>
                            <IoMdCheckboxOutline className='mr-2 text-xl' />
                            <p>Mersin Dekorasyon</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col bg-gray-100 rounded-xl p-6 mr-0 lg:mr-12 mb-8 lg:mb-0 text-start w-full'>
                <h1 className='font-bold text-2xl mb-5'>İletişime Geçin</h1>
                <div className='flex items-center mb-4'>
                    <FaPhone className='w-10 h-10 flex-shrink-0  mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>Telefon: </span> 
                        <a href="tel:05555555555" className="hover:text-sky-400 hover:underline">
                        0555 555 5555
                        </a>
                    </p>
                </div>
                <div className='flex items-center mb-4'>
                    <IoMail className='w-10 h-10 flex-shrink-0  mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>E-Mail: </span> 
                        <a href="mailto:yeniden@gmail.com" className="hover:text-sky-400 hover:underline">
                        yeniden@gmail.com
                        </a>
                    </p>
                </div>
                <div className='flex items-center mb-4'>
                    <IoLocationSharp className='w-10 h-10 flex-shrink-0  mr-3 text-white bg-sky-400 p-2 rounded-full' />
                    <p><span className='font-semibold'>Adres:</span> Akdeniz mah. 39173 Sk. Mezitli/Mersin</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={wallpaper} alt="" className='w-full h-auto rounded-lg' />
            </div>
            <div className='my-8'>
                <h1 className='font-bold text-3xl mb-4'>Mersin Boyama Hizmetleri</h1>
                <p className='text-gray-500'>Mersin geneli laminat parke döşeme hizmeti vermekteyiz. Ev, işyeri, ofis tüm zemin kaplama zemin yenileme işlerinizde uzman ekibimiz tarafından Yerin keşfi edilerek müşteriyle karşılıklı görüşülür müşterinin istekleri dinlenir. Yapılacak iş müşteriye sunulur. müşteri onay verdikten sonra hazırlıklar yapılarak laminat parke döşemesi yapılacak alan parke döşemesine uygun hale getirilerek laminat parke döşemesine başlanır. müşteri istekleri dogrultusunda laminat parke uygulaması tamamlanır kontrolleri yapılarak müşteriye sunulur. müşteri onayı alındıktan sonra Temiz ve şık görünüme kavuşmuş olan yerin müşteriye teslim edilerek bırakılır.</p>
                <h2 className='mt-12 mb-6 font-bold text-2xl'>Mersin Boya Ustaları</h2>
                <p className='text-gray-500'>
                    Lorem, ipsum.
                    <br />Lorem, ipsum dolor.
                    <br />Lorem ipsum dolor sit.
                    <br />Lorem, ipsum.
                    <br />Lorem, ipsum dolor.
                    <br />Lorem ipsum dolor sit.
                    <br />Lorem, ipsum.
                    <br />Lorem, ipsum dolor.
                    <br />Lorem ipsum dolor sit.
                    <br />Lorem, ipsum.
                    <br />Lorem, ipsum dolor.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Wallpaperc
