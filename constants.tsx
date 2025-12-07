
import React from 'react';
import { Activity, TeamMember, GalleryItem } from './types';

const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13.489a5.975 5.975 0 013 2.304M15 21a6 6 0 01-5.93-4.512" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

export const ACTIVITIES: Activity[] = [
  {
    title: "Pendidikan & Pengajaran",
    description: "Program bimbingan belajar untuk anak-anak sekolah dasar di Desa Kesugihan Gligir untuk meningkatkan minat baca dan kemampuan berhitung.",
    imageUrl: "https://picsum.photos/seed/education/600/400",
    icon: BookOpenIcon,
  },
  {
    title: "Sosialisasi & Pemberdayaan Masyarakat",
    description: "Mengadakan penyuluhan tentang pentingnya pengelolaan sampah organik dan non-organik serta pelatihan pembuatan kompos.",
    imageUrl: "https://picsum.photos/seed/community/600/400",
    icon: UsersIcon,
  },
  {
    title: "Kesehatan & Lingkungan",
    description: "Kerja bakti membersihkan lingkungan desa dan sosialisasi Perilaku Hidup Bersih dan Sehat (PHBS) kepada warga.",
    imageUrl: "https://picsum.photos/seed/health/600/400",
    icon: HeartIcon,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "M.Asngad",
    role: "Ketua Kelompok",
    imageUrl: "https://picsum.photos/seed/male-student-1/400/400",
  },
  {
    name: "Fatkhatunnida",
    role: "Sekretaris",
    imageUrl: "https://picsum.photos/seed/female-student-1/400/400",
  },
  {
    name: "Hasim Musa Ahmad",
    role: "Bendahara",
    imageUrl: "https://picsum.photos/seed/male-student-2/400/400",
  },
  {
    name: "Andi Sarwono",
    role: "Koordinator Acara",
    imageUrl: "https://picsum.photos/seed/male-student-3/400/400",
  },
   {
    name: "Frandika",
    role: "Anggota",
    imageUrl: "https://picsum.photos/seed/male-student-4/400/400",
  },
   {
    name: "Andri Gunawan",
    role: "Anggota",
    imageUrl: "https://picsum.photos/seed/male-student-5/400/400",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    {
      src: "https://picsum.photos/seed/gallery1/800/600",
      description: "Pembukaan program KKN bersama perangkat desa.",
    },
    {
      src: "https://picsum.photos/seed/gallery2/800/600",
      description: "Kegiatan bimbingan belajar untuk anak-anak sekolah dasar.",
    },
    {
      src: "https://picsum.photos/seed/gallery3/800/600",
      description: "Penyuluhan tentang pentingnya kebersihan lingkungan.",
    },
    {
      src: "https://picsum.photos/seed/gallery4/800/600",
      description: "Kerja bakti membersihkan area fasilitas umum desa.",
    },
    {
      src: "https://picsum.photos/seed/gallery5/800/600",
      description: "Pelatihan pembuatan kerajinan tangan dari bahan bekas.",
    },
    {
      src: "https://picsum.photos/seed/gallery6/800/600",
      description: "Suasana akrab saat acara perlombaan 17 Agustus.",
    },
    {
      src: "https://picsum.photos/seed/gallery7/800/600",
      description: "Gotong royong memperbaiki saluran irigasi.",
    },
    {
      src: "https://picsum.photos/seed/gallery8/800/600",
      description: "Acara perpisahan dan penutupan KKN bersama warga.",
    },
];