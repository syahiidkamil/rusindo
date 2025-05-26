import { X, Check } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    'Huruf Cyrillic yang asing',
    'Sistem kasus yang rumit',
    'Materi pembelajaran yang tidak kontekstual',
    'Tidak tahu harus mulai dari mana',
  ];

  const solutions = [
    'Metode bertahap khusus huruf Cyrillic',
    'Penjelasan tata bahasa dalam Bahasa Indonesia',
    'Contoh-contoh yang familiar untuk orang Indonesia',
    'Tes placement untuk menentukan level yang tepat',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Mengapa Bahasa Rusia Sulit untuk Orang Indonesia?
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start">
                  <X className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              RusIndo Learning Menyelesaikan Semua Itu!
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;