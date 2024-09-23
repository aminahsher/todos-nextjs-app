 // pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">

            <h1 className="text-3xl font-bold text-gray-800">ToDo APP</h1>

            <h3 className="text-lg text-gray-600">Created via Next.js</h3>

            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
                {/* Add input field and Todo list here */}
                 
            </div>
        </div>
    );
};

export default Home;
