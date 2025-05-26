import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Kurikulum Terstruktur',
      description: 'Materi pembelajaran yang disusun sistematis dari level pemula hingga mahir.'
    },
    {
      icon: '🎯',
      title: 'Pembelajaran Interaktif',
      description: 'Latihan interaktif, kuis, dan games yang membuat belajar lebih menyenangkan.'
    },
    {
      icon: '👥',
      title: 'Kelas Live Online',
      description: 'Sesi pembelajaran langsung dengan instruktur native speaker berpengalaman.'
    },
    {
      icon: '📱',
      title: 'Akses Multi-Platform',
      description: 'Belajar kapan saja, di mana saja melalui web, iOS, dan Android.'
    },
    {
      icon: '🏆',
      title: 'Sertifikat Resmi',
      description: 'Dapatkan sertifikat yang diakui setelah menyelesaikan setiap level.'
    },
    {
      icon: '💬',
      title: 'Komunitas Belajar',
      description: 'Bergabung dengan ribuan pembelajar lain untuk praktik dan diskusi.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Fitur Unggulan Rusindo
            </h2>
            <p className="text-xl text-gray-600">
              Semua yang Anda butuhkan untuk menguasai bahasa Rusia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;