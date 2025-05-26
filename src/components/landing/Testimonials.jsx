import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Dalam 8 bulan belajar di RusIndo, saya berhasil lulus tes TORFL B2 dan sekarang kuliah S2 di Moscow State University. Metode pembelajaran yang step-by-step sangat membantu!',
      name: 'Sari Dewi Putri',
      role: 'Mahasiswa S2 Linguistics, MSU',
      rating: 5,
    },
    {
      text: 'Sebagai pengusaha yang sering berbisnis dengan Rusia, RusIndo Learning membantu saya berkomunikasi langsung dengan partner tanpa translator. ROI yang luar biasa!',
      name: 'Budi Santoso',
      role: 'CEO, Indo-Rus Trading',
      rating: 5,
    },
    {
      text: 'Dulu saya kira bahasa Rusia mustahil dipelajari. Ternyata dengan metode yang tepat dan penjelasan dalam Bahasa Indonesia, semuanya jadi mudah!',
      name: 'Maya Salsabila',
      role: 'Content Creator & Translator',
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-900">
          Apa Kata Mereka yang Sudah Berhasil?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="mb-4">
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-secondary-gold-dark fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;