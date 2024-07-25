// src/components/Toggle.js
import React, { useState, useEffect } from 'react';

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <label className="inline-flex relative items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={darkMode}
                    onChange={handleToggle}
                />
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
            </label>
        </div>
    );
};

export default Toggle;
