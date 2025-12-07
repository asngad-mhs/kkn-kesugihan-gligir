// FIX: Import React to provide types for React components and JSX.
import React from 'react';

export interface Activity {
  title: string;
  description: string;
  imageUrl: string;
  // Fix: Use React.FC for typing the icon component to avoid issues with JSX namespace resolution.
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface GalleryItem {
  src: string;
  description: string;
}