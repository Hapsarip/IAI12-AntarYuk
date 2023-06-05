import React from 'react';
import { useNavigate } from "react-router-dom";

export default function RegisterPage () {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="bg-gradient-to-br from-white via-slate-200 to-blue-800 flex justify-center items-center h-screen">
      <form class="relative  mx-auto w-[700px] max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 ">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Register</h1>
          <p class="mt-2 text-gray-500">Create your account</p>
        </div>
        <div className="mb-4 mt-10">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            rows="3"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={navigateToLogin}>
            Register
          </button>
        </div>
        <p class="text-center text-sm text-gray-500"> Already have an account? 
              <a href="/Login"
                class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                   Login
              </a>
            </p>
      </form>
    </div>
  )
}