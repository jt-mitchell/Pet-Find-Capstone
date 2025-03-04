// Initialize Lucide icons
lucide.createIcons();

// Sample pet data
const pets = [
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

// Create pet card HTML
function createPetCard(pet) {
  return `
    <div class="pet-card">
      <div class="pet-image">
        <img src="${pet.imageUrl}" alt="${pet.name}">
        <button class="favorite-btn" onclick="toggleFavorite(${pet.id})">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="pet-info">
        <div class="pet-header">
          <h3 class="pet-name">${pet.name}</h3>
          <span class="pet-type">${pet.type}</span>
        </div>
        <p class="pet-breed">${pet.breed}</p>
        <div class="pet-details">
          <span class="pet-detail">
            <i data-lucide="calendar"></i>
            ${pet.age}
          </span>
          <span class="pet-detail">
            <i data-lucide="map-pin"></i>
            ${pet.location}
          </span>
        </div>
      </div>
    </div>
  `;
}

// Render pets to grid
function renderPets(petsToRender = pets) {
  const petsGrid = document.getElementById('petsGrid');
  petsGrid.innerHTML = petsToRender.map(createPetCard).join('');
  // Reinitialize icons for the new content
  lucide.createIcons();
}

// Filter pets
function filterPets() {
  const searchTerm = document.querySelector('.search-input input').value.toLowerCase();
  const petType = document.getElementById('petType').value.toLowerCase();
  
  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm) ||
                         pet.breed.toLowerCase().includes(searchTerm) ||
                         pet.location.toLowerCase().includes(searchTerm);
    const matchesType = !petType || pet.type.toLowerCase() === petType;
    return matchesSearch && matchesType;
  });
  
  renderPets(filteredPets);
}

// Toggle favorite status
function toggleFavorite(petId) {
  const btn = event.currentTarget;
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    btn.style.color = '#ef4444';
  } else {
    btn.style.color = 'inherit';
  }
}

// Event listeners
document.querySelector('.search-input input').addEventListener('input', filterPets);
document.getElementById('petType').addEventListener('change', filterPets);

// Initialize the page
renderPets();