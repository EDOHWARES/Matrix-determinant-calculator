import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-3xl mb-4 font-bold text-red-600">Oops!</h2>
        <p className="text-xl mb-4">Something went wrong.</p>
        <p className="text-lg text-gray-700 mb-4">We're sorry, but it looks like there was an error.</p>
        <Link to='/' className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;