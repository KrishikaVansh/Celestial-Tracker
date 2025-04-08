import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };
    return (
      <div className="  flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to the Celestial Event Tracker</h1>
        <p className="mt-4 text-lg text-gray-300">Track upcoming celestial events effortlessly!</p>
        <button onClick={handleClick}
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Explore Events
        </button>

        <button  className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg" >
          Login!
        </button>
      </div>
    );
  }
  