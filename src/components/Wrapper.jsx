import React from 'react'

const Wrapper = () => {
  return (
    <div className='p-4 w-full flex items-center justify-center bg-gray-100 py-20'>
      <div className='flex flex-col items-start justify-between lg:flex-row my-4 w-full lg:w-10/12'>
        <div className='w-full mb-8 lg:mb-0'>
          <p className='text-8xl font-mono font-bold mb-[-35px] text-sky-200'>01</p>
          <h1 className='text-3xl font-bold mb-4'>Ücretsiz Keşif</h1>
          <p>İlk aşamada ücretsiz ve keşif fiyatlandırma hizmeti veriyoruz, gerekli ölçü ve malzemelerin seçim ve fiyatlandırmasını yapıyoruz bu adımda.</p>
        </div>
        <div className='w-full mb-8 lg:mb-0 flex flex-col lg:items-center lg:justify-center lg:text-center lg:mx-12'>
          <p className='text-8xl font-mono font-bold mb-[-35px] text-sky-200'>02</p>
          <h1 className='text-3xl font-bold mb-4'>Ekonomik</h1>
          <p>Güncel malzemelerin yanında rekabetçi fiyat politikamız gereği mümkün olan en minimum fiyatlarla projelerinizi hayata geçirmekteyiz.</p>
        </div>
        <div className='w-full mb-8 lg:mb-0 flex flex-col lg:items-end lg:justify-end lg:text-end'>
          <p className='text-8xl font-mono font-bold mb-[-35px] text-sky-200'>03</p>
          <h1 className='text-3xl font-bold mb-4'>Profesyonel</h1>
          <p>Alanında uzman usta kadromuz, tüm işleri profesyonel bir şekilde tamamlamaktadır. Zaman herkes için önemlidir ve zamanında iş teslim prensibimizdir.</p>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
