import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Gratis',
      emoji: '🆓',
      subtitle: 'Selamanya',
      description: 'Cocok untuk: Mencoba dan eksplorasi',
      price: 'Rp 0',
      period: '/bulan',
      features: [
        'Tes placement lengkap',
        '5 lesson pertama Cyrillic alphabet',
        'Akses komunitas forum',
      ],
      cta: 'Mulai Gratis',
      highlighted: false,
    },
    {
      name: 'Basic',
      emoji: '⭐',
      subtitle: 'Paling Populer',
      description: 'Cocok untuk: Belajar serius dan konsisten',
      price: 'Rp 99.000',
      period: '/bulan',
      features: [
        'Semua fitur Gratis +',
        'Akses semua 200+ lesson',
        'Flashcard & speaking practice',
        'Progress tracking detail',
      ],
      discount: 'Hemat 20% jika bayar tahunan',
      cta: 'Pilih Basic',
      highlighted: true,
    },
    {
      name: 'Premium',
      emoji: '🚀',
      subtitle: '',
      description: 'Cocok untuk: Target spesifik (beasiswa, karir)',
      price: 'Rp 199.000',
      period: '/bulan',
      features: [
        'Semua fitur Basic +',
        '1-on-1 mentoring session (2x/bulan)',
        'TORFL exam preparation',
        'Certificate of completion',
        'Priority support',
      ],
      discount: 'Hemat 25% jika bayar tahunan',
      cta: 'Pilih Premium',
      highlighted: false,
    },
  ];

  return (
    <section id="harga" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Paket Pembelajaran yang Terjangkau
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-red-50 border-2 border-red-500 shadow-lg scale-105'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{plan.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                {plan.subtitle && (
                  <p className="text-sm text-red-600 font-semibold">{plan.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.discount && (
                <p className="text-sm text-green-600 text-center mb-4 italic">
                  {plan.discount}
                </p>
              )}
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;