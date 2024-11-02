import React, { useState,useEffect } from 'react';

const Fertilizer = () => {
  // Expanded fertilizer data with more entries
  const fertilizerData = [
    {
      id: 1,
      name: 'Urea',
      image: 'https://img.icons8.com/emoji/96/000000/chemical-emoji.png',
      benefits: 'High nitrogen content promotes leaf growth.',
      applicationRate: '50 kg/acre',
      suitableCrops: ['Rice', 'Cotton'],
      description: 'Urea is a widely used nitrogen fertilizer that enhances vegetative growth. It is highly soluble and quickly available to plants.',
    },
    {
      id: 2,
      name: 'DAP (Diammonium Phosphate)',
      image: 'https://img.icons8.com/emoji/96/000000/chemistry-emoji.png',
      benefits: 'Balanced NPK ratio supports overall plant health.',
      applicationRate: '30 kg/acre',
      suitableCrops: ['Groundnut', 'Sugarcane'],
      description: 'DAP provides essential nutrients for both root and shoot development. It improves soil fertility and increases crop yield.',
    },
    {
      id: 3,
      name: 'Muriate of Potash',
      image: 'https://img.icons8.com/emoji/96/000000/crystal-ball.png',
      benefits: 'Enhances root development and fruit quality.',
      applicationRate: '40 kg/acre',
      suitableCrops: ['Millet', 'Sugarcane'],
      description: 'Potassium-rich fertilizer that improves crop resilience, strengthens stems, and enhances the quality of fruits and grains.',
    },
    {
      id: 4,
      name: 'Ammonium Sulfate',
      image: 'https://img.icons8.com/emoji/96/000000/scientist.png',
      benefits: 'Provides sulfur and nitrogen, essential for protein synthesis.',
      applicationRate: '45 kg/acre',
      suitableCrops: ['Wheat', 'Barley', 'Soybean'],
      description: 'Ammonium sulfate is a dual-purpose fertilizer supplying both nitrogen and sulfur, vital for plant growth and development.',
    },
    {
      id: 5,
      name: 'Calcium Nitrate',
      image: 'https://img.icons8.com/emoji/96/000000/laboratory.png',
      benefits: 'Improves plant vigor and root development.',
      applicationRate: '25 kg/acre',
      suitableCrops: ['Tomato', 'Pepper', 'Lettuce'],
      description: 'Calcium nitrate enhances plant growth by providing readily available calcium and nitrogen, promoting strong roots and healthy foliage.',
    },
    {
      id: 6,
      name: 'Magnesium Sulfate (Epsom Salt)',
      image: 'https://img.icons8.com/emoji/96/000000/leaf-flutter.png',
      benefits: 'Boosts chlorophyll production and nutrient uptake.',
      applicationRate: '15 kg/acre',
      suitableCrops: ['Spinach', 'Cabbage', 'Beets'],
      description: 'Magnesium sulfate is essential for chlorophyll formation and aids in the absorption of other vital nutrients, enhancing overall plant health.',
    },
    {
      id: 7,
      name: 'Zinc Sulfate',
      image: 'https://img.icons8.com/emoji/96/000000/zodiac-emoji.png',
      benefits: 'Prevents chlorosis and promotes enzyme function.',
      applicationRate: '10 kg/acre',
      suitableCrops: ['Corn', 'Rice', 'Soybean'],
      description: 'Zinc sulfate is crucial for preventing zinc deficiency in plants, which can lead to chlorosis and reduced growth rates.',
    },
    {
      id: 8,
      name: 'Borax',
      image: 'https://img.icons8.com/emoji/96/000000/crystal.png',
      benefits: 'Enhances cell wall formation and reproductive growth.',
      applicationRate: '5 kg/acre',
      suitableCrops: ['Tomato', 'Strawberry', 'Raspberry'],
      description: 'Borax supports cell wall integrity and improves the reproductive phases of plants, leading to better fruit set and yield.',
    },
    {
      id: 9,
      name: 'Iron Chelate',
      image: 'https://img.icons8.com/emoji/96/000000/feather.png',
      benefits: 'Prevents iron chlorosis and improves photosynthesis.',
      applicationRate: '8 kg/acre',
      suitableCrops: ['Peas', 'Cabbage', 'Blueberries'],
      description: 'Iron chelate ensures the availability of iron to plants, preventing chlorosis and enhancing photosynthetic efficiency.',
    },
    {
      id: 10,
      name: 'Sodium Molybdate',
      image: 'https://img.icons8.com/emoji/96/000000/sodium.png',
      benefits: 'Aids in nitrogen fixation and enzyme activation.',
      applicationRate: '3 kg/acre',
      suitableCrops: ['Legumes', 'Soybean', 'Peanut'],
      description: 'Sodium molybdate plays a vital role in nitrogen fixation and activates key enzymes necessary for plant metabolism.',
    },
    // Add more fertilizer objects as needed
  ];

  // State for selected crop filter
  const [filterCrop, setFilterCrop] = useState('all');

  // State for modal visibility and selected fertilizer
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);

  // Handler for filter change
  const handleFilterChange = (e) => {
    setFilterCrop(e.target.value);
  };

  // Handler to open modal with selected fertilizer
  const handleLearnMore = (fertilizer) => {
    setSelectedFertilizer(fertilizer);
    setIsModalOpen(true);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFertilizer(null);
  };

  // Filtered fertilizers based on selected crop
  const filteredFertilizers = fertilizerData.filter(fertilizer =>
    filterCrop === 'all' ? true : fertilizer.suitableCrops.includes(filterCrop)
  );
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="fertilizer-page">
      {/* Inline CSS Styling */}
      <style>{`
        :root {
          --primary-color: #3498db;
          --secondary-color: #2c3e50;
          --background-color: #f0f2f5;
          --card-bg-color: #ffffff;
          --text-color: #333;
          --subtext-color: #555;
          --hover-bg-color: #e9ecef;
          --button-bg-color: #16a085;
          --button-hover-bg-color: #138d75;
          --modal-overlay-bg: rgba(0, 0, 0, 0.5);
          --modal-content-bg: #fff;
          --modal-border-radius: 10px;
        }

        /* Page Container */
        .fertilizer-page {
          padding: 20px;
          background-color: var(--background-color);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Header */
        .fertilizer-page h1 {
          text-align: center;
          color: var(--secondary-color);
          margin-bottom: 10px;
          font-size: 2rem;
        }

        .fertilizer-page p.description {
          text-align: center;
          color: var(--subtext-color);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        /* Filters */
        .filters {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filters select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 1rem;
          background-color: var(--card-bg-color);
          cursor: pointer;
        }

        /* Recommendations Grid */
        .recommendations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 0 20px;
        }

        /* Fertilizer Card */
        .fertilizer-card {
          background-color: var(--card-bg-color);
          border: 2px solid var(--primary-color);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .fertilizer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .fertilizer-card img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 15px;
        }

        .fertilizer-card h3 {
          font-size: 1.4rem;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .fertilizer-card p {
          font-size: 1rem;
          color: var(--subtext-color);
          margin-bottom: 10px;
        }

        .fertilizer-card button {
          padding: 10px 15px;
          background-color: var(--button-bg-color);
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          margin-top: auto;
        }

        .fertilizer-card button:hover {
          background-color: var(--button-hover-bg-color);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--modal-overlay-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: var(--modal-content-bg);
          border-radius: var(--modal-border-radius);
          padding: 20px;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          animation: fadeIn 0.3s ease-in-out;
        }

        .modal-content h2 {
          margin-bottom: 10px;
          color: var(--secondary-color);
        }

        .modal-content img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 15px;
        }

        .modal-content p {
          font-size: 1rem;
          color: var(--subtext-color);
          margin-bottom: 10px;
        }

        .modal-close-button {
          position: absolute;
          top: 10px;
          right: 15px;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--subtext-color);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Responsive Adjustments */
        @media (max-width: 600px) {
          .fertilizer-page h1 {
            font-size: 1.5rem;
          }

          .fertilizer-page p.description {
            font-size: 1rem;
          }

          .filters select {
            width: 100%;
            max-width: 300px;
          }

          .fertilizer-card img {
            width: 60px;
            height: 60px;
          }

          .fertilizer-card h3 {
            font-size: 1.2rem;
          }

          .fertilizer-card button {
            font-size: 0.9rem;
            padding: 8px 12px;
          }

          .modal-content {
            padding: 15px;
          }

          .modal-content img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>

      {/* Page Header */}
      <h1>Fertilizer Recommendations</h1>
      <p className="description">
        Explore our expert fertilizer suggestions tailored to optimize your crop yield and soil health.
      </p>

      {/* Filters */}
      <div className="filters">
        <select value={filterCrop} onChange={handleFilterChange}>
          <option value="all">All Crops</option>
          <option value="Rice">Rice</option>
          <option value="Cotton">Cotton</option>
          <option value="Groundnut">Groundnut</option>
          <option value="Sugarcane">Sugarcane</option>
          <option value="Millet">Millet</option>
          <option value="Wheat">Wheat</option>
          <option value="Barley">Barley</option>
          <option value="Soybean">Soybean</option>
          <option value="Tomato">Tomato</option>
          <option value="Pepper">Pepper</option>
          <option value="Lettuce">Lettuce</option>
          <option value="Spinach">Spinach</option>
          <option value="Cabbage">Cabbage</option>
          <option value="Beets">Beets</option>
          <option value="Corn">Corn</option>
          <option value="Blueberries">Blueberries</option>
          <option value="Strawberry">Strawberry</option>
          <option value="Raspberry">Raspberry</option>
          <option value="Legumes">Legumes</option>
          <option value="Peanut">Peanut</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Recommendations Grid */}
      <div className="recommendations-grid">
        {filteredFertilizers.map(fertilizer => (
          <div key={fertilizer.id} className="fertilizer-card">
            <img src={fertilizer.image} alt={`${fertilizer.name} Icon`} />
            <h3>{fertilizer.name}</h3>
            <p><strong>Benefits:</strong> {fertilizer.benefits}</p>
            <p><strong>Application Rate:</strong> {fertilizer.applicationRate}</p>
            <p><strong>Suitable Crops:</strong> {fertilizer.suitableCrops.join(', ')}</p>
            <button onClick={() => handleLearnMore(fertilizer)}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {isModalOpen && selectedFertilizer && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
            <h2>{selectedFertilizer.name}</h2>
            <img src={selectedFertilizer.image} alt={`${selectedFertilizer.name} Icon`} />
            <p><strong>Benefits:</strong> {selectedFertilizer.benefits}</p>
            <p><strong>Application Rate:</strong> {selectedFertilizer.applicationRate}</p>
            <p><strong>Suitable Crops:</strong> {selectedFertilizer.suitableCrops.join(', ')}</p>
            <p><strong>Description:</strong> {selectedFertilizer.description}</p>
            {/* Add more detailed information as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fertilizer;


