import React from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginPage () {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='bg-gradient-to-br from-white via-slate-200 to-blue-800 flex w-full h-screen items-center justify-center'>
      <form>
        <div
          class="relative  mx-auto w-[700px] max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 ">
          <div class="w-full">
            <div class="text-center">
              <h1 class="text-3xl font-semibold text-gray-900">Login</h1>
              <p class="mt-2 text-gray-500">Login below to access your account</p>
            </div>
            <div class="max-w-md mx-auto mt-10">
              <form class="p-4">
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" class="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your email address"/>
                </div>
                <div class="mb-4">
                  <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                  <input type="password" id="password" name="password" class="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
                </div>
                <div class="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
                    onClick={navigateToHome}>
                      Login
                  </button>
                </div>
              </form>
            </div>
            <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet? 
              <a href="/Register"
                class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                   Register
              </a>
            </p>
          </div>
        </div> 
      </form>
    </div>
  )
}