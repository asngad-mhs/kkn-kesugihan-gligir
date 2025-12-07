
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import AntiGravity from './AntiGravity';

interface GalleryProps {
  onImageClick: (item: GalleryItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Galeri Dokumentasi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Momen-momen berharga yang terekam selama pelaksanaan kegiatan KKN bersama masyarakat Desa Kesugihan Gligir.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <AntiGravity key={index}>
              <div 
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-w-1 aspect-h-1"
                onClick={() => onImageClick(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.description} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="text-sm font-semibold">{item.description}</p>
                </div>
              </div>
            </AntiGravity>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;