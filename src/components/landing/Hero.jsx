import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kuasai Bahasa Rusia dengan Mudah dan Menyenangkan
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Platform pembelajaran bahasa Rusia terbaik untuk orang Indonesia. 
            Belajar dari dasar hingga mahir dengan metode yang teruji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Mulai Belajar Gratis
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Lihat Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;