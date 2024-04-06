
// pages/dino/page.tsx
"use client";
// pages/dino/page.tsx

// pages/dino/page.tsx
import { useEffect, useState } from 'react';

const adminPage = () => {
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

  const registerUser = () => {
    // Redirect to the getClientsInfo page
    window.location.href = '/admin_page/register';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Admins page</h1>

      <div className="mt-4">
        <button className="text-blue-500 hover:underline" onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>

      <div className="mt-4">
        <button className="text-green-500 hover:underline" onClick={registerUser}>
          Register any User
        </button>
      </div>

      

    </div>
  );
};

export default adminPage;
