import React from 'react';
import ProblemList from "./ProblemList"

const Home = () => {
    const token = localStorage.getItem("token")

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-4xl font-bold text-center text-blue-600">Welcome to the Hackathon</h1>
                <p className="mb-6 text-lg text-gray-700">
                    Join us for an exciting hackathon where you can showcase your skills, collaborate with others, and create innovative solutions to real-world problems.
                </p>
                <h2 className="mb-2 text-2xl font-semibold text-gray-800">Event Details:</h2>
                <ul className="mb-4 list-disc list-inside">
                    <li className="text-gray-600">📅 Date: March 15-16, 2024</li>
                    <li className="text-gray-600">📍 Location: Online</li>
                    <li className="text-gray-600">💻 Registration Fee: Free</li>
                </ul>
                <h2 className="mb-2 text-2xl font-semibold text-gray-800">Why Participate?</h2>
                <p className="mb-4 text-gray-600">
                    - Network with industry professionals and fellow developers.<br />
                    - Win exciting prizes and recognition.<br />
                    - Gain hands-on experience and enhance your portfolio.
                </p>

                {
                    token ? <ProblemList /> : <a href="/register" className="inline-block px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
                        Register Now
                    </a>
                }
            </div>
        </div>
    );
};

export default Home;