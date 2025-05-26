const Footer = () => {
  const footerLinks = {
    'Tentang RusIndo': [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Tim Pengajar', href: '#' },
      { name: 'Metode Pembelajaran', href: '#' },
      { name: 'Karir', href: '#' },
    ],
    'Pembelajaran': [
      { name: 'Tes Placement', href: '#' },
      { name: 'Kurikulum', href: '#' },
      { name: 'Sertifikasi', href: '#' },
      { name: 'Community', href: '#' },
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Kontak', href: '#' },
      { name: 'WhatsApp Support', href: '#' },
      { name: 'Live Chat', href: '#' },
    ],
    'Legal': [
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 RusIndo Learning. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;