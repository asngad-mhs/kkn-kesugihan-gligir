
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ReportSummary from './components/ReportSummary';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { GalleryItem } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <ReportSummary />
        <Activities />
        <Gallery onImageClick={openModal} />
        <Team />
      </main>
      <Footer />
      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage.src} 
          description={selectedImage.description}
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;