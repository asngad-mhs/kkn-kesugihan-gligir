
import React from 'react';
import { ACTIVITIES } from '../constants';
import { Activity } from '../types';
import AntiGravity from './AntiGravity';

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3v12" />
    </svg>
);

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const Icon = activity.icon;

  const handleShare = async () => {
    const shareData = {
      title: `Kegiatan KKN: ${activity.title}`,
      text: activity.description,
      url: window.location.href.split('#')[0] + '#kegiatan',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing activity:', err);
      }
    } else {
      alert('Fitur berbagi tidak didukung di browser ini.');
    }
  };

  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <AntiGravity>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed flex-grow">{activity.description}</p>
          {canShare && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                  <button 
                      onClick={handleShare}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      aria-label={`Bagikan kegiatan: ${activity.title}`}
                  >
                      <ShareIcon className="w-5 h-5 mr-2" />
                      Bagikan
                  </button>
              </div>
          )}
        </div>
      </div>
    </AntiGravity>
  );
};

const Activities: React.FC = () => {
  return (
    <section id="kegiatan" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Program & Kegiatan Unggulan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berikut adalah rangkuman dari beberapa program utama yang telah kami laksanakan selama periode KKN di Desa Kesugihan Gligir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;