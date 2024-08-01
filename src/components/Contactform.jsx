import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme kodu buraya gelecek (örn. form verilerini gönderme)
    console.log('Form verileri:', formData);
    // Formu temizleme
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='bg-gray-100 p-4 rounded-lg w-full flex items-center mx-auto justify-center py-12'>
        <div className='w-full lg:w-10/12 bg-white p-4 rounded-xl shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>İletişim Formu</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
                    İsim
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-lg'
                    required
                />
                </div>
                <div>
                <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
                    E-posta
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-lg'
                    required
                />
                </div>
                <div>
                <label htmlFor='subject' className='block text-gray-700 font-semibold mb-2'>
                    Konu
                </label>
                <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-lg'
                />
                </div>
                <div>
                <label htmlFor='message' className='block text-gray-700 font-semibold mb-2'>
                    Mesaj
                </label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='4'
                    className='w-full p-3 border border-gray-300 rounded-lg'
                    required
                ></textarea>
                </div>
                <button
                type='submit'
                className='w-40 bg-sky-400 text-white font-semibold p-2 rounded-lg hover:bg-sky-500 transition-colors duration-300'
                >
                Gönder
                </button>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;
