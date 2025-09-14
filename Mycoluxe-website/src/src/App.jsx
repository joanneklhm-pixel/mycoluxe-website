import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center">
      <div>
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          MycoLuxe Botanicals
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Nature’s Intelligence in Every Capsule
        </p>
        <a
          href="/shop"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default App;
