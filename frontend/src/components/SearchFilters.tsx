import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto mb-8">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name, breed, or location..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
      </div>
      <div className="flex gap-3">
        <select className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
          <option value="">Animal Type</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="other">Other</option>
        </select>
        <button className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}