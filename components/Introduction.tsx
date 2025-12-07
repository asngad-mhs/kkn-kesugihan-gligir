
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="pendahuluan" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Pendahuluan</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Kuliah Kerja Nyata (KKN) merupakan salah satu bentuk pengabdian kepada masyarakat yang dilakukan oleh mahasiswa. Program KKN di Desa Kesugihan Gligir bertujuan untuk mengaplikasikan ilmu pengetahuan dan teknologi yang telah dipelajari di bangku kuliah untuk membantu memecahkan permasalahan yang ada di masyarakat serta mendorong pengembangan potensi lokal. Melalui berbagai program yang telah dirancang, kami berharap dapat memberikan kontribusi positif yang berkelanjutan bagi kemajuan Desa Kesugihan Gligir.
        </p>
      </div>
    </section>
  );
};

export default Introduction;