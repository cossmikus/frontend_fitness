"use client";

// GetScheduleTrainerPage.jsx

import React, { useEffect, useState } from 'react';

const GetScheduleTrainerPage = () => {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // Retrieve the trainer ID from localStorage
        const trainerId = localStorage.getItem('user_id');

        if (!trainerId) {
          throw new Error('Trainer ID not found in localStorage');
        }

        // Fetch schedule for the specified trainer
        const response = await fetch(`https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/getScheduleTrainer/${trainerId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch schedule');
        }

        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        setError('Error fetching schedule');
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);
  const goToBack = () => {
    // Redirect to the trainer page
    window.location.href = '/trainer_page';
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Schedule for Trainer</h1>
      
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">Trainer's Schedule:</h2>
          <ul>
            {schedules.map(schedule => (
              <li key={schedule.id}>
                Date: {schedule.date}, Time: {schedule.time}, Description: {schedule.description}
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

export default GetScheduleTrainerPage;
