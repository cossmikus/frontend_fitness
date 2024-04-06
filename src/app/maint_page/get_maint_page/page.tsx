// pages/GetUserDataPage.jsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const goToHomePage = () => {
  // Redirect to the home page
  window.location.href = '/';
};

const goToMainttPage = () => {
  // Redirect to the driver page
  window.location.href = '/maint_page';
};

const GetUserDataPage = () => {
  const [userData, setUserData] = useState(null);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://swebackendmars.onrender.com/api/three_users/get', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (jwtToken) {
      fetchUserData();
    }
  }, [jwtToken]);

  return (
    <div>
      <div>
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>
      <div>
        <button className="text-blue-500 hover:underline" onClick={goToMainttPage}>
          Go to Maintenance Person Page
        </button>
      </div>

      <h1>User Data</h1>
      {userData ? (
        <div>
          <p>User ID: {userData.user_id}</p>
          <p>User Role: {userData.user_role}</p>
          <p>Given Name: {userData.givenname}</p>
          <p>Surname: {userData.surname}</p>
          <p>Middle Name: {userData.middle_name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          <p>Password: {userData.the_password}</p>
          <p>Username: {userData.username}</p>
          <p>Salt: {userData.salt}</p>
          <p>Government ID: {userData.government_id}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default GetUserDataPage;
