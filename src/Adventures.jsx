import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Adventures = () => {
 
  const { city } = useParams();

  
  const cityActivities = {
    'New Delhi': [
      { id: 1, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 12000 },
      { id: 2, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 15000 },
      { id: 3, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 18000 },
    ],
    'Mumbai': [
      { id: 4, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 11000 },
      { id: 5, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 13000 },
      { id: 6, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 16000 },
    ],
    'Bangalore': [
      { id: 7, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 14000 },
      { id: 8, name: 'Wildlife Safari', description: 'Discover exotic wildlife on an adventurous safari expedition.', price: 17000 },
    ],
    'Chennai': [
      { id: 9, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 12000 },
      { id: 10, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 15000 },
      { id: 11, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 18000 },
    ],
    'Kolkata': [
      { id: 12, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 13000 },
      { id: 13, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 16000 },
      { id: 14, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 19000 },
    ],
    'Hyderabad': [
      { id: 15, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 14000 },
      { id: 16, name: 'Wildlife Safari', description: 'Discover exotic wildlife on an adventurous safari expedition.', price: 17000 },
    ],
    'Pune': [
      { id: 17, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 14000 },
      { id: 18, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 17000 },
      { id: 19, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 20000 },
    ],
    'Ahmedabad': [
      { id: 20, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 11000 },
      { id: 21, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 14000 },
    ],
    'Jaipur': [
      { id: 22, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 13000 },
      { id: 23, name: 'Wildlife Safari', description: 'Discover exotic wildlife on an adventurous safari expedition.', price: 16000 },
      { id: 24, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 19000 },
    ],
    'Lucknow': [
      { id: 25, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 14000 },
      { id: 26, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 17000 },
      { id: 27, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 20000 },
    ],
    'Kanpur': [
      { id: 28, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 11000 },
      { id: 29, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 14000 },
    ],
    'Nagpur': [
      { id: 30, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 13000 },
      { id: 31, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 16000 },
    ],
    'Visakhapatnam': [
      { id: 32, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 12000 },
      { id: 33, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 15000 },
      { id: 34, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 18000 },
    ],
    'Indore': [
      { id: 35, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 13000 },
      { id: 36, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 16000 },
    ],
    'Thane': [
      { id: 37, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 12000 },
      { id: 38, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 15000 },
      { id: 39, name: 'Wildlife Safari', description: 'Discover exotic wildlife on an adventurous safari expedition.', price: 18000 },
    ],
    'Bhopal': [
      { id: 40, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 14000 },
      { id: 41, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 17000 },
      { id: 42, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 20000 },
    ],
    'Patna': [
      { id: 43, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 13000 },
      { id: 44, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 16000 },
    ],
    'Vadodara': [
      { id: 45, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 14000 },
      { id: 46, name: 'Wildlife Safari', description: 'Discover exotic wildlife on an adventurous safari expedition.', price: 17000 },
      { id: 47, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 20000 },
    ],
    'Ghaziabad': [
      { id: 48, name: 'Cultural Tour', description: 'Immerse yourself in the local culture with guided tours of historical sites.', price: 11000 },
      { id: 49, name: 'River Rafting', description: 'Navigate through exciting rapids on a thrilling river rafting trip.', price: 14000 },
      { id: 50, name: 'Hot Air Balloon Ride', description: 'Enjoy a peaceful hot air balloon ride with breathtaking views.', price: 17000 },
    ],
    'Ludhiana': [
      { id: 51, name: 'Trekking', description: 'Embark on a challenging trek to the top of a nearby mountain.', price: 13000 },
      { id: 52, name: 'Scuba Diving', description: 'Explore the vibrant marine life underwater with scuba diving.', price: 16000 },
      { id: 53, name: 'Paragliding', description: 'Soar high above the landscapes with thrilling paragliding adventures.', price: 19000 },
    ],
  };

  const [selectedActivities, setSelectedActivities] = useState([]);

  
  useEffect(() => {
    const activitiesForCity = cityActivities[city] || [];
   
    const activitiesWithAdults = activitiesForCity.map(activity => ({ ...activity, adults: 1 }));
    setSelectedActivities(activitiesWithAdults);
  }, [city]);

  
  const handleBookNow = (activityId) => {
    console.log(`Booking confirmed for activity with ID ${activityId}`);
    
    alert('Booking Confirmed!');
  };

 
  const handleIncrement = (activityId) => {
    setSelectedActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === activityId ? { ...activity, adults: (activity.adults || 1) + 1 } : activity
      )
    );
  };

 
  const handleDecrement = (activityId) => {
    setSelectedActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === activityId ? { ...activity, adults: Math.max((activity.adults || 1) - 1, 1) } : activity
      )
    );
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2">
          <span className="text-xl font-bold">Bookin.com</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">{city} Adventures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {selectedActivities.map((activity) => (
            <div key={activity.id} className="rounded-lg overflow-hidden shadow-lg bg-pink-200bg-pink-500 text-white px-6 py-4 transition duration-300 ease-in-out transform hover:bg-pink-300 hover:text-gray-900">
              <div className="bg-pink-500 text-white px-6 py-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-xl">{activity.name}</div>
                  <div className="text-sm text-gray-700">Price: ${activity.price}</div>
                </div>
                <p className="text-black text-base">{activity.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Adults</label>
                    <div className="flex items-center">
                      <button
                        className="text-black focus:outline-none focus:text-pink-600"
                        onClick={() => handleDecrement(activity.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input type="text" className="mx-2 w-8 text-center text-black" value={activity.adults || 1} readOnly />
                      <button
                        className="text-black focus:outline-none focus:text-pink-600"
                        onClick={() => handleIncrement(activity.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    onClick={() => handleBookNow(activity.id)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventures;
