// pages/dino/page.tsx
"use client";
// pages/dino/page.tsx

// pages/dino/page.tsx
import { useEffect, useState } from 'react';

const trainerPage = () => {
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const storedToken = localStorage.getItem('access_token');
    setJwtToken(storedToken);
  }, []);

  const goToHomePage = () => {
    // Redirect to the home page
    window.location.href = '/';
  };

  const getClientsInfoPage = () => {
    // Redirect to the getClientsInfo page
    window.location.href = '/trainer_page/getClientsInfo';
  };

  const getTrainerInfoPage = () => {
    // Redirect to the getTrainerInfo page
    window.location.href = '/trainer_page/getTrainerInfo';
  };

  const getScheduleTrainerPage = () => {
    // Redirect to the getScheduleTrainer page
    window.location.href = '/trainer_page/getScheduleTrainer';
  };

  const addSchedulePage = () => {
    // Redirect to the addSchedule page
    window.location.href = '/trainer_page/addSchedule';
  };

  const getAllSchedulesPage = () => {
    // Redirect to the addSchedule page
    window.location.href = '/trainer_page/getAllSchedules';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Trainers page</h1>


      <div className="mt-4">
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={addSchedulePage}>
          Add Schedule
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={getClientsInfoPage}>
          Get Clients Information
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={getTrainerInfoPage}>
          Get Trainer Information
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={getScheduleTrainerPage}>
          Get Schedule for specific Trainer
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={getAllSchedulesPage}>
          Get All Schedules
        </button>
      </div>

    </div>
  );
};

export default trainerPage;
