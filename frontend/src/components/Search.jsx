import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/events/search', { date, location });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Search for Celestial Events</h2>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Enter Location:</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
          Search
        </button>
      </form>

      {/* Event Results */}
      <div className="mt-8 w-full max-w-md">
        {events.length > 0 ? (
          <ul className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {events.map((event, index) => (
              <li key={index} className="p-2 border-b border-gray-600 last:border-none">
                <span className="font-semibold text-blue-400">{event.name}</span> - {event.date}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mt-4">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
