"use client";
import { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    user_role: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      setLoading(true);
      // Send a POST request to the register endpoint with the form data
      const response = await axios.post('https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        user_role: formData.user_role
      });

      // Log the response data
      console.log('User registered successfully:', response.data);
      setSuccessMessage('User registered successfully!');
      setLoading(false);
    } catch (error) {
      // Handle any errors
      console.error('Error registering user:', error);
      setErrorMessage('Error registering user');
      setLoading(false);
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
      <h1 className="text-2xl font-semibold mb-4">Register User</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="user_role">User Role:</label>
          <input type="text" id="user_role" name="user_role" value={formData.user_role} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>Register</button>
        {loading && <span>Loading...</span>}
        {successMessage && <span className="text-green-500">{successMessage}</span>}
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      </form>
        <div className="mt-4">
            <button className="text-blue-500 hover:underline" onClick={goToBack}>
            Go Back
            </button>
        </div>
    </div>
  );
};

export default RegisterPage;
