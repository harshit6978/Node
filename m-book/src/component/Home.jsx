import React from 'react'

const Home = () => {
  return (
    <>
  <div className="flex flex-wrap justify-between">
      {/* First card */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="px-4 py-2">
          <h2 className="text-gray-800 text-lg font-semibold">Product Name</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h3 className="text-gray-200 font-semibold">$19.99</h3>
          <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded uppercase hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
        </div>
      </div>

      {/* Second card */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="px-4 py-2">
          <h2 className="text-gray-800 text-lg font-semibold">Product Name</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h3 className="text-gray-200 font-semibold">$19.99</h3>
          <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded uppercase hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
        </div>
      </div>

      {/* Third card */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="px-4 py-2">
          <h2 className="text-gray-800 text-lg font-semibold">Product Name</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h3 className="text-gray-200 font-semibold">$19.99</h3>
          <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded uppercase hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
        </div>
      </div>

      {/* Last card (aligned to the bottom) */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden self-end">
        <div className="px-4 py-2">
          <h2 className="text-gray-800 text-lg font-semibold">Special Offer</h2>
          <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h3 className="text-gray-200 font-semibold">$9.99</h3>
          <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded uppercase hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Home