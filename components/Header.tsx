
import React, { useState, useEffect } from 'react';

// Declare jsPDF on window for TypeScript
declare global {
  interface Window {
    jspdf: any;
  }
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#pendahuluan', label: 'Pendahuluan' },
    { href: '#ringkasan', label: 'Ringkasan' },
    { href: '#kegiatan', label: 'Kegiatan' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#tim', label: 'Tim' },
    { href: '#kontak', label: 'Kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownload = () => {
    if (window.jspdf) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("Laporan KKN - Desa Kesugihan Gligir", 14, 22);
      
      doc.setFontSize(12);
      doc.text("Ini adalah dokumen placeholder.", 14, 32);
      doc.text("File laporan yang sebenarnya sedang dalam proses finalisasi.", 14, 40);
      doc.text("Halaman ini dibuat secara dinamis untuk memastikan fitur unduhan berfungsi.", 14, 48);
      doc.text("Silakan hubungi ketua kelompok untuk versi terbaru.", 14, 56);
      
      doc.save("Laporan KKN Desa Kesugihan Gligir 2027.pdf");
    } else {
      alert("Gagal membuat PDF. Pustaka PDF tidak dapat dimuat.");
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-800">
            KKN KESUGIHAN GLIGIR
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Laporan PDF
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;