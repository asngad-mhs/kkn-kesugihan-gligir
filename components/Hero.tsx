
import React from 'react';
import AntiGravity from './AntiGravity';
import FloatingNav from './FloatingNav';

// Declare jsPDF on window for TypeScript
declare global {
  interface Window {
    jspdf: any;
  }
}

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const Hero: React.FC = () => {

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
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/village/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <AntiGravity>
        <div className="relative z-10 text-center px-4 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Laporan Akhir Kuliah Kerja Nyata (KKN)
          </h1>
          <p className="text-lg md:text-2xl font-light mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
            Pemberdayaan Masyarakat Desa Kesugihan Gligir Melalui Program Berbasis Potensi Lokal
          </p>
          <p className="text-md md:text-xl font-semibold text-blue-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
            Universitas Nahdlatul Ulama Al Ghazali Cilacap | Periode 2026 - 2027
          </p>
          <div className="mt-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 mr-3" />
              Unduh Laporan Lengkap
            </button>
          </div>
        </div>
      </AntiGravity>
      <FloatingNav />
    </section>
  );
};

export default Hero;