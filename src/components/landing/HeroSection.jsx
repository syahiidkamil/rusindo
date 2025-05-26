import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Kuasai Bahasa Rusia dari Nol hingga Mahir
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 font-heading">
              Platform pembelajaran bahasa Rusia pertama di Indonesia dengan metode yang disesuaikan khusus untuk orang Indonesia
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Belajar huruf Cyrillic, tata bahasa, dan percakapan Rusia dengan mudah. Dipandu oleh kurikulum yang memahami cara belajar orang Indonesia.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                MULAI TES GRATIS
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-all">
                LIHAT DEMO BELAJAR
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-1" />
                <span>1.200+ Pelajar Indonesia</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-1" />
                <span>Sertifikat Resmi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-1" />
                <span>Garansi 30 Hari</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-white text-center">
                  <p className="text-6xl font-bold mb-2 font-heading">АБВГ</p>
                  <p className="text-xl">→ A B V G</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;