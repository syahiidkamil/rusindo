const SocialProofBar = () => {
  const stats = [
    { icon: '📊', value: '1.200+', label: 'Siswa Aktif' },
    { icon: '⭐', value: '4.8/5', label: 'Rating Kepuasan' },
    { icon: '🎯', value: '95%', label: 'Tingkat Keberhasilan' },
    { icon: '🏆', value: '50+', label: 'Jam Konten' },
  ];

  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold font-heading text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;