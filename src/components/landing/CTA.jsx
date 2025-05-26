import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mulai Perjalanan Bahasa Rusia Anda Hari Ini
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Bergabunglah dengan ribuan pembelajar yang telah berhasil menguasai bahasa Rusia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Daftar Sekarang - Gratis
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Konsultasi Gratis
            </button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Tidak perlu kartu kredit • Akses instant • Batal kapan saja
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;