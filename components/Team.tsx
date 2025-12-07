
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';
import AntiGravity from './AntiGravity';

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3v12" />
    </svg>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const handleShare = async () => {
    const shareData = {
      title: `Tim KKN: ${member.name}`,
      text: `${member.name} - ${member.role} dari Tim KKN Desa Kesugihan Gligir.`,
      url: window.location.href.split('#')[0] + '#tim',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing team member:', err);
      }
    } else {
      alert('Fitur berbagi tidak didukung di browser ini.');
    }
  };

  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="rounded-full w-full h-full object-cover shadow-lg border-4 border-white"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600">{member.role}</p>
      </div>
      {canShare && (
        <div className="mt-4 pt-4 border-t border-gray-200 w-full">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label={`Bagikan profil ${member.name}`}
          >
            <ShareIcon className="w-4 h-4 mr-2" />
            Bagikan
          </button>
        </div>
      )}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="tim" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Tim KKN Mahasiswa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim solid yang berkolaborasi dalam menyukseskan seluruh rangkaian program KKN.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <AntiGravity key={index}>
              <TeamMemberCard member={member} />
            </AntiGravity>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;