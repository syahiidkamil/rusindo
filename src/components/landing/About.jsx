import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mengapa Belajar Bahasa Rusia?
            </h2>
            <p className="text-xl text-gray-600">
              Bahasa Rusia membuka pintu peluang tak terbatas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tentang Rusindo</h3>
              <p className="text-gray-600 mb-4">
                Rusindo adalah platform pembelajaran bahasa Rusia yang dirancang khusus 
                untuk penutur bahasa Indonesia. Kami memahami tantangan unik yang dihadapi 
                orang Indonesia saat belajar bahasa Rusia.
              </p>
              <p className="text-gray-600 mb-4">
                Dengan metode pembelajaran yang telah teruji, materi yang disesuaikan, 
                dan dukungan dari instruktur berpengalaman, kami memastikan perjalanan 
                belajar Anda efektif dan menyenangkan.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Lebih dari 10,000 siswa aktif</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Tingkat kepuasan 95%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Kurikulum tersertifikasi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600">10K+</div>
                  <div className="text-gray-600">Siswa Aktif</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Video Pelajaran</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600">Tingkat Kepuasan</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Dukungan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;