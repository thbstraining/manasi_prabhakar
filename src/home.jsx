import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const [cities, setCities] = useState([
    "New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
    "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane",
    "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana"
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 6; 
  useEffect(() => {
   
    const sortedCities = [...cities].sort((a, b) => a.localeCompare(b));
    setCities(sortedCities);
  }, []);

  
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cities.length / citiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2">
          <span className="text-xl font-bold">Bookin.com</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">Cities of India</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentCities.map((city, index) => (
            <Link key={index} to={`/adventures/${encodeURIComponent(city)}`}>
              <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer border border-pink-500">
                <div className="bg-pink-500 text-white px-6 py-4 transition duration-300 ease-in-out transform hover:bg-pink-300 hover:text-gray-900">
                  <div className="font-bold text-xl mb-2">{city}</div>
                  <p className="text-gray-100 text-base">Click to explore adventures in {city}.</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-4 py-2 rounded-lg text-white ${currentPage === number ? 'bg-blue-500' : 'bg-gray-700 hover:bg-blue-500'}`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
