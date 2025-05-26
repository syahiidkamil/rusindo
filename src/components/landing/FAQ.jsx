import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Apakah cocok untuk pemula total?',
      answer: 'Sangat cocok! Kami mulai dari pengenalan huruf Cyrillic dari nol. Tes placement akan menentukan starting point yang tepat untuk Anda.',
    },
    {
      question: 'Berapa lama bisa lancar bahasa Rusia?',
      answer: 'Tergantung target dan intensitas belajar. Untuk conversation basic: 3-4 bulan. Untuk level intermediate: 6-9 bulan. Untuk advanced: 12+ bulan.',
    },
    {
      question: 'Apakah ada sertifikat?',
      answer: 'Ya! Kami memberikan sertifikat digital untuk setiap level yang diselesaikan. Premium member juga mendapat persiapan sertifikasi TORFL internasional.',
    },
    {
      question: 'Bagaimana jika tidak puas?',
      answer: 'Kami berikan garansi uang kembali 100% dalam 30 hari pertama jika Anda tidak puas dengan pembelajaran.',
    },
    {
      question: 'Apakah bisa akses selamanya?',
      answer: 'Untuk paket Basic dan Premium, selama berlangganan aktif. Materi yang sudah diunduh bisa diakses offline.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Pertanyaan yang Sering Diajukan
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">❓ {faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;