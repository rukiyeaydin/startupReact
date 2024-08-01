import React, { useState } from 'react';

const faqData = [
  {
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer: "Boyama, alçı, duvar kağıdı uygulaması ve parke döşeme gibi iç dekorasyon hizmetleri sunuyoruz. Ayrıca, özel projeler için kişiye özel çözümler de sağlıyoruz.",
  },
  {
    question: "Hizmetlerinizin fiyatlandırması nasıl?",
    answer: "Fiyatlandırmamız, hizmetin türüne, projenin boyutuna ve kullanılan malzemelere bağlı olarak değişir. Detaylı bilgi almak için ücretsiz keşif hizmetimizden yararlanabilir ve fiyat teklifi alabilirsiniz.",
  },
  {
    question: "Hizmetlerinizde kullanılan malzemeler nelerdir?",
    answer: "Kaliteli ve dayanıklı malzemeler kullanıyoruz. Boya, alçı, duvar kağıdı ve parke gibi tüm malzemelerimiz, yüksek kalite standartlarına uygun ve uzun ömürlüdür.",
  },
  {
    question: "Proje tamamlanma süresi ne kadar sürer?",
    answer: "Proje süresi, hizmetin türüne ve işin büyüklüğüne bağlıdır. Küçük projeler birkaç gün sürebilirken, daha büyük projeler birkaç hafta sürebilir. İşin başlangıcında tahmini bir süre veriyoruz.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer: "Ana hizmet bölgemiz Mersin/Mezitli,Yenişehir ve çevresidir. Ancak, özel talepler doğrultusunda daha uzak bölgelere de hizmet verebiliyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 my-20">
      <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg shadow-sm">
          <button
            onClick={() => toggleAnswer(index)}
            className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 text-left focus:outline-none rounded-t-lg"
          >
            <span className="font-semibold text-gray-700">{item.question}</span>
            <span className="text-gray-500">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-700 rounded-b-lg">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
