import React from 'react'
import insaatdeco from "../images/insaat-dekorasyon.jpg"

const About = () => {
  return (
    <div className='p-4 my-6 text-center'>
      <h1 className='font-mono font-bold text-3xl my-8'>HAKKIMIZDA</h1>
      <div className='flex flex-col lg:flex-row items-start lg:justify-center text-start'>
        <div className='flex flex-col lg:flex-row w-full lg:w-10/12 '>
          <div className='mr-4'>
            <h1 className='font-bold font-mono my-4 text-sky-400 text-xl' id="about">YENİDEN DEKORASYON & İNŞAAT</h1>
            <h1 className='font-bold mb-6 text-3xl'>Yılların Tecrübesi <span className='text-sky-400'>25 Yılı</span>  Aşkın süreyle Sektörde Hizmet Vermekteyiz</h1>
            <p>Faliyete başladığımız 1996 yılından bugüne kadar olduğu gibi, hedefimiz her zaman ihtiyaçları doğru bir şekil de değerlendirerek ekip çalıması ile hızlı ve etkin bir hizmet sunmak, sektörel yenilikleri yakından takip ederek en yüksek teknolojiyi kullanan firmamız, kaliteye verdiğimiz önemle tanınmaktadır.</p>
          </div>
          <img src={insaatdeco} alt="" className='w-full h-auto lg:w-80 lg:h-80 mt-4 lg:ml-4 rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default About