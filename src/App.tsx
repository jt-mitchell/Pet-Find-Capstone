import React from 'react';
import { Heart, PawPrint, Users } from 'lucide-react';
import PetCard from './components/PetCard';
import SearchFilters from './components/SearchFilters';

const SAMPLE_PETS = [
  {
    id: 1,
    name: "Luna",
    age: "2 years",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    breed: "German Shepherd",
    type: "Dog"
  },
  {
    id: 2,
    name: "Oliver",
    age: "6 months",
    location: "Los Angeles, CA",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    breed: "Siamese",
    type: "Cat"
  },
  {
    id: 3,
    name: "Max",
    age: "1 year",
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    breed: "Golden Retriever",
    type: "Dog"
  },
  {
    id: 4,
    name: "Bella",
    age: "3 years",
    location: "Portland, OR",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    breed: "Maine Coon",
    type: "Cat"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <PawPrint className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PetFinds</h1>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Favorites</span>
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Companion</h2>
          <p className="text-blue-100 text-lg mb-8">Connect with local shelters and give a loving home to pets in need</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">2,500+</span>
              <span className="text-blue-100">Pets Available</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">150+</span>
              <span className="text-blue-100">Partner Shelters</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">1,000+</span>
              <span className="text-blue-100">Happy Adoptions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <SearchFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SAMPLE_PETS.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <Users className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Are you a shelter?</h3>
          <p className="text-gray-600 mb-6">Join our network and help more pets find their forever homes</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Partner with Us
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6 text-blue-500" />
              <span className="text-white font-bold">PetFinds</span>
            </div>
            <p>Connecting hearts and homes with furry friends in need.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with new pets and adoption stories.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;