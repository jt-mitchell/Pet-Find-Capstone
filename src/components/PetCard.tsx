import React from 'react';
import { Heart, MapPin, Calendar } from 'lucide-react';

interface PetCardProps {
  name: string;
  age: string;
  location: string;
  imageUrl: string;
  breed: string;
  type: string;
}

export default function PetCard({ name, age, location, imageUrl, breed, type }: PetCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-64">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{breed}</p>
        <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{age}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}