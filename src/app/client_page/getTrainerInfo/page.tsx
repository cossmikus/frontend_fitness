// GetTrainerInfoPage page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTrainerInfoPage = () => {
  const [trainersInfo, setTrainersInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainersInfo = async () => {
      try {
        const token = localStorage.getItem('access_token');

        if (!token) {
          throw new Error('No token found');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/getTrainerInfo', config);
        setTrainersInfo(response.data);
      } catch (error) {
        setError('Error fetching trainers info');
      }
    };

    fetchTrainersInfo();
  }, []);
  const goToBack = () => {
    // Redirect to the trainer page
    window.location.href = '/client_page';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Trainers Information</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">List of Trainers:</h2>
          <ul>
            {trainersInfo.map(trainer => (
              <li>
                TrainerID: {trainer.trainer_id}, Name: {trainer.name}, Email: {trainer.email}
              </li>
            ))}
          </ul>
        </div>
        
      )}
      <div className="mt-4">
        <button className="text-blue-500 hover:underline" onClick={goToBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GetTrainerInfoPage;
