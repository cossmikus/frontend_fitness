"use client";
// GetClientsInfoPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface TrainerHelper {
  id: number;
  name: string;
  email: string;
}
const GetClientsInfoPage = () => {
  const [clientsInfo, setClientsInfo] = useState<TrainerHelper[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientsInfo = async () => {
      try {
        const response = await axios.get('https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/getClientsInfo');
        setClientsInfo(response.data);
      } catch (error) {
        console.error('Error fetching clients info:', error);
      }
    };

    fetchClientsInfo();
  }, []);
  const goToBack = () => {
    // Redirect to the trainer page
    window.location.href = '/client_page';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Clients Information</h1>
      
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">List of Clients:</h2>
          <ul>
            {clientsInfo.map(client => (
              <li>
                Client_ID: {client.id}, Name: {client.name}, Email: {client.email}
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

export default GetClientsInfoPage;
