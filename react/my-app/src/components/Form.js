// src/components/Form.js
import React from 'react';

const Form = () => {
    return (
        <form className="w-full p-7  dark:bg-slate-800  dark:text-white">
            <div className="mb-4 max-w-lg mx-auto">
                <label className="block text-gray-700  dark:text-white text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3    dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="mb-6 max-w-lg mx-auto">
                <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                />
            </div>
            <div className="flex items-center max-w-lg mx-auto justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Sign In
                </button>
            </div>
        </form>
    );
};

export default Form;
