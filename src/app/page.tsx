"use client";
import { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  user_id: number;
  user_role: string;
}

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fitnessheroku-2b7e0fea23b9.herokuapp.com/users/login', {
        email,
        password,
      });

      // Assuming the response includes the token directly
      const { token } = response.data;
      // Decode the token and specify the type
      const decoded: TokenPayload = jwtDecode(token);

      // Store the token in local storage
      localStorage.setItem('access_token', token);

      // Store the user role in local storage
      localStorage.setItem('user_role', decoded.user_role);
      localStorage.setItem('user_id', decoded.user_id.toString());

      // Redirect user based on their role
      switch (decoded.user_role) {
        case 'trainer':
          window.location.href = '/trainer_page';
          break;
        case 'client':
          window.location.href = '/client_page';
          break;
        case 'admin':
          window.location.href = '/admin_page';
          break;
        default:
          window.location.href = '/maint_page';
          break;
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-4xl w-full items-center font-mono text-sm lg:flex lg:flex-col">
        <div className="text-center mb-8">
          <h1 className="text-lg font-semibold">Добро Пожаловать в приложение по управлению расписанием фитнес-тренеров.</h1>
          <p className="text-md mt-4">Готовые тестовые Логины для админа(email: admin@gmail.com, password: admin)</p>

          <p className="text-md mt-4">для тренера(email: trainer@gmail.com, password: trainer)</p>
          <p className="text-md mt-4">для клиента(email: client@gmail.com, password: client)</p>

        </div>
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Вход</h2>
          <input className="w-full px-4 py-2 mb-4 border rounded" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full px-4 py-2 mb-4 border rounded" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleLogin}>Войти</button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
    </main>
  );
};

export default Home;
