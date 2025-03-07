import React from 'react'

const Cards = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Cards container - 80vh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
        {/* Increase Card */}
        <div className="h-full bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-white mb-4">Increase</h2>
          <button className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-100 transition-colors">
            +
          </button>
        </div>

        {/* Count Card */}
        <div className="h-full bg-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-white mb-4">Count</h2>
          <span className="text-4xl font-bold text-white">0</span>
        </div>

        {/* Decrease Card */}
        <div className="h-full bg-red-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-white mb-4">Decrease</h2>
          <button className="bg-white text-red-500 px-6 py-2 rounded-full hover:bg-red-100 transition-colors">
            -
          </button>
        </div>
      </div>

      {/* Reset Button - 20vh and full width */}
      <div className="h-[15vh] w-full">
        <button className="w-full h-full bg-gray-800 text-white text-2xl font-bold rounded-lg hover:bg-gray-700 transition-colors">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Cards
