import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
          Siap Memulai Perjalanan Bahasa Rusia Anda?
        </h2>
        
        <p className="text-xl text-white mb-8 opacity-90">
          Ribuan orang Indonesia sudah membuktikan bahwa bahasa Rusia bisa dipelajari dengan mudah dan menyenangkan!
        </p>
        
        <p className="text-lg text-white mb-8 opacity-90">
          Jangan tunggu lagi. Mulai hari ini dan rasakan bedanya belajar dengan metode yang tepat.
        </p>
        
        <button className="bg-white text-primary-red px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center mb-8">
          AMBIL TES PLACEMENT GRATIS
          <ArrowRight className="ml-2" size={24} />
        </button>
        
        <p className="text-white text-sm opacity-80 mb-8">
          Hanya butuh 15 menit • Tanpa kartu kredit • Langsung dapat hasil dan rekomendasi
        </p>
        
        <div className="border-t border-white/30 pt-8">
          <p className="text-white font-semibold mb-4">Atau hubungi kami:</p>
          <div className="text-white space-y-2">
            <p>📧 hello@rusindolearning.com</p>
            <p>📱 WhatsApp: +62 812-3456-7890</p>
            <p>🕐 Support: Senin-Jumat 09:00-18:00 WIB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;