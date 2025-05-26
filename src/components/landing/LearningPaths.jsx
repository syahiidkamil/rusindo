const LearningPaths = () => {
  const paths = [
    {
      icon: '🎓',
      title: 'Beasiswa Kuliah',
      focus: 'Academic writing, TORFL preparation, formal conversation',
      duration: '8-12 bulan',
      target: 'Level B2-C1',
    },
    {
      icon: '💼',
      title: 'Karir Profesional',
      focus: 'Business Russian, presentation skills, email writing',
      duration: '6-9 bulan',
      target: 'Level B1-B2',
    },
    {
      icon: '🤝',
      title: 'Bisnis & Trading',
      focus: 'Negotiation, contract terms, business etiquette',
      duration: '4-6 bulan',
      target: 'Level A2-B1',
    },
    {
      icon: '✈️',
      title: 'Travel & Budaya',
      focus: 'Survival conversation, cultural understanding, practical phrases',
      duration: '3-4 bulan',
      target: 'Level A1-A2',
    },
    {
      icon: '💻',
      title: 'Freelance & Content',
      focus: 'Translation skills, content creation, client communication',
      duration: '6-8 bulan',
      target: 'Level B1-B2',
    },
    {
      icon: '❤️',
      title: 'Minat Pribadi',
      focus: 'General conversation, reading, cultural appreciation',
      duration: 'Fleksibel',
      target: 'Sesuai keinginan',
    },
  ];

  return (
    <section id="jalur" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Pilih Jalur Pembelajaran Sesuai Tujuan Anda
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{path.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Fokus:</span> {path.focus}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Durasi:</span> {path.duration}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Target:</span> {path.target}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;