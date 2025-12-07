
import React, { useState } from 'react';
import AntiGravity from './AntiGravity';

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

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);


const reportSections = [
  {
    title: "BAB I: Pendahuluan",
    description: "Mengupas tuntas alasan pemilihan, analisis masalah, serta tujuan dan manfaat program KKN.",
    icon: "1",
    fullText: "Bagian ini adalah fondasi dari seluruh laporan. Di sini, kami menjabarkan secara rinci latar belakang yang mendorong pelaksanaan KKN di Desa Kesugihan Gligir, termasuk identifikasi masalah-masalah prioritas yang dihadapi oleh masyarakat melalui observasi awal dan dialog. Kami juga merumuskan tujuan program secara spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu (SMART), serta menguraikan manfaat yang diharapkan tidak hanya bagi warga desa tetapi juga bagi pengembangan kompetensi kami sebagai mahasiswa."
  },
  {
    title: "BAB II: Tinjauan Pustaka & Gambaran Umum",
    description: "Landasan teoretis dan potret kompreprehensif kondisi Desa Kesugihan Gligir.",
    icon: "2",
    fullText: "Bab ini menyajikan dua pilar utama: landasan konseptual dan konteks faktual. Pertama, kami mengulas berbagai teori relevan mengenai pemberdayaan masyarakat, pembangunan pedesaan, dan pendekatan partisipatif yang menjadi acuan metodologi kami. Kedua, kami menyajikan profil lengkap Desa Kesugihan Gligir, mulai dari aspek geografis, demografi penduduk, kondisi sosial-ekonomi, hingga potensi sumber daya alam dan kearifan lokal yang ada. Gambaran umum ini krusial untuk memastikan program yang kami rancang benar-benar sesuai dengan kebutuhan dan karakteristik unik desa."
  },
  {
    title: "BAB III: Metodologi Pelaksanaan",
    description: "Detail pendekatan dan tahapan kerja tim dari observasi hingga evaluasi.",
    icon: "3",
    fullText: "Di sini, kami memaparkan 'bagaimana' program KKN ini dijalankan. Metodologi yang digunakan adalah Participatory Action Research (PAR), yang menekankan keterlibatan aktif masyarakat dalam setiap tahapan. Bab ini merinci proses kerja tim secara sistematis: mulai dari teknik observasi dan pengumpulan data, lokakarya perencanaan program bersama warga, strategi implementasi setiap kegiatan, hingga metode monitoring dan evaluasi yang kami gunakan untuk mengukur tingkat keberhasilan dan dampak dari program yang telah dilaksanakan."
  },
  {
    title: "BAB IV: Hasil dan Pembahasan",
    description: "Inti laporan: pemaparan rinci pelaksanaan program, analisis hasil, dan dampak nyata bagi warga.",
    icon: "4",
    fullText: "Ini adalah jantung dari laporan kami. Setiap program unggulan—di bidang Pendidikan, Pemberdayaan Ekonomi, dan Kesehatan Lingkungan—dijelaskan secara mendalam, mulai dari persiapan, pelaksanaan, hingga hasil yang dicapai. Kami menyajikan data kuantitatif (misalnya, jumlah peserta, peningkatan hasil) dan data kualitatif (studi kasus, testimoni warga) untuk memberikan gambaran yang holistik. Pembahasan difokuskan pada analisis dampak positif program, tantangan yang dihadapi selama implementasi, dan bagaimana kami mengatasinya."
  },
  {
    title: "BAB V: Penutup",
    description: "Sintesis pencapaian, pelajaran berharga, dan rekomendasi strategis untuk keberlanjutan.",
    icon: "5",
    fullText: "Sebagai penutup, bab ini merangkum seluruh esensi dari kegiatan KKN. Kami menarik kesimpulan utama berdasarkan hasil dan pembahasan pada bab sebelumnya, menyoroti pencapaian paling signifikan. Lebih dari itu, kami juga merefleksikan pelajaran berharga (lessons learned) yang didapat selama proses. Bagian terpenting adalah rekomendasi strategis yang kami tujukan kepada pemerintah desa, tokoh masyarakat, dan mahasiswa KKN selanjutnya untuk memastikan program yang telah kami rintis dapat terus berlanjut dan memberikan manfaat jangka panjang."
  },
  {
    title: "Lampiran",
    description: "Kumpulan bukti otentik kegiatan, termasuk foto, data, daftar hadir, dan surat-surat.",
    icon: "📎",
    fullText: "Untuk menjamin transparansi dan validitas laporan, bagian ini berisi kumpulan bukti pendukung yang otentik. Di dalamnya terdapat dokumentasi visual berupa foto-foto kegiatan dari awal hingga akhir, data mentah hasil survei atau wawancara, salinan daftar hadir dari setiap acara penyuluhan atau pelatihan, serta fotokopi surat-surat resmi terkait perizinan dan koordinasi dengan pihak-pihak terkait. Lampiran ini berfungsi sebagai bukti konkret dari semua yang telah kami paparkan di bab-bab sebelumnya."
  },
];


const ReportSummary: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section id="ringkasan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Ringkasan Isi Laporan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi setiap bab dari laporan akhir KKN kami untuk mendapatkan pemahaman mendalam sebelum mengunduh versi lengkapnya.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {reportSections.map((section, index) => (
              <AntiGravity key={index}>
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl">
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                          <p className="text-gray-600 mt-1">{section.description}</p>
                        </div>
                      </div>
                       <ChevronDownIcon className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    <div className="p-6 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{section.fullText}</p>
                    </div>
                  </div>
                </div>
              </AntiGravity>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 mr-3" />
              Unduh Laporan Lengkap (.pdf)
            </button>
        </div>
      </div>
    </section>
  );
};

export default ReportSummary;