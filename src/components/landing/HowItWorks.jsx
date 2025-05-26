const HowItWorks = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Ikuti Tes Placement',
      time: 'Waktu: 15 menit',
      description: 'Tes kemampuan dasar huruf Cyrillic, kosakata, dan tata bahasa untuk menentukan level Anda.',
    },
    {
      number: '2️⃣',
      title: 'Pilih Tujuan Belajar',
      time: 'Pilihan tersedia:',
      description: 'Beasiswa • Karir Profesional • Bisnis • Traveling • Freelance • Minat Pribadi',
    },
    {
      number: '3️⃣',
      title: 'Dapatkan Learning Plan',
      time: 'Otomatis generated:',
      description: 'Timeline belajar • Prioritas materi • Target pencapaian • Jadwal harian',
    },
    {
      number: '4️⃣',
      title: 'Mulai Belajar Interaktif',
      time: 'Fitur lengkap:',
      description: 'Video lesson • Flashcard • Practice speaking • Progress tracking',
    },
  ];

  return (
    <section id="cara-kerja" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-900">
          Mulai Belajar Hanya dalam 4 Langkah Sederhana
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-4">{step.number}</div>
              <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">{step.title}</h3>
              <p className="text-sm text-primary-red font-medium mb-2">{step.time}</p>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;