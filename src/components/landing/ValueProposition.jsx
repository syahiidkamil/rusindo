const ValueProposition = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Tes Level Awal Akurat',
      description: 'Dalam 15 menit, ketahui level kemampuan Rusia Anda dan dapatkan rekomendasi pembelajaran yang tepat sasaran.',
    },
    {
      icon: '📋',
      title: 'Rencana Belajar Personal',
      description: 'Kurikulum disesuaikan dengan tujuan Anda: beasiswa, karir, bisnis, traveling, atau minat pribadi.',
    },
    {
      icon: '🇮🇩',
      title: 'Metode Khusus Indonesia',
      description: 'Penjelasan dalam Bahasa Indonesia dengan perbandingan struktur bahasa yang mudah dipahami orang Indonesia.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gradient-card border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;