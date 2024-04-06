"use client";

import { useState } from 'react';
import axios from 'axios';

const AddSchedulePage = () => {
  const [formData, setFormData] = useState({
    trainer: '',
    client: '',
    date: '',
    time: '',
    description: ''
  });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      // Retrieve the trainer's ID from localStorage
      const trainerId = localStorage.getItem('user_id');

      // Send a POST request to the endpoint with the form data
      const response = await axios.post('https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/addSchedule', {
        trainer: trainerId,
        client: formData.client,
        date: formData.date,
        time: formData.time,
        description: formData.description
      });

      // Log the response data
      console.log('Schedule added successfully:', response.data);
    } catch (error) {
      // Handle any errors
      console.error('Error adding schedule:', error);
    }
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const goToBack = () => {
    // Redirect to the trainer page
    window.location.href = '/trainer_page';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Schedule</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="client">Client:</label>
          <input type="text" id="client" name="client" value={formData.client} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="date">Date:</label>
          <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="time">Time:</label>
          <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="mt-4">
        <button className="text-blue-500 hover:underline" onClick={goToBack}>
          Go Back
        </button>
      </div>
    </div>
    
  );
};

export default AddSchedulePage;
