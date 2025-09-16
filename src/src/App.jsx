import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import lionsmane from './assets/lionsmane.jpg';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header with logo */}
      <header className="p-6 flex items-center justify-between bg-white shadow">
        <img src={logo} alt="MycoLuxe Logo" className="h-16" />
        <h1 className="text-2xl font-bold">MycoLuxe Botanicals</h1>
      </header>

      {/* Hero section */}
      <section className="text-center py-16 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl font-extrabold mb-4">
          Nature’s Intelligence in Every Capsule
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          Premium medicinal mushroom supplements crafted for clarity, vitality, and balance.
        </p>
        <a
          href="#shop"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Shop Now
        </a>
      </section>

      {/* Featured product */}
      <section id="shop" className="max-w-5xl mx-auto p-8">
        <h3 className="text-3xl font-semibold mb-6">Clarity – Lion’s Mane</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={lionsmane}
            alt="Lion’s Mane Product"
            className="rounded-lg shadow-lg"
          />
          <p className="text-lg text-gray-700">
            Unlock focus and cognitive support with our premium Lion’s Mane capsules. 
            100% fruiting body extract, designed for those who demand clarity in every step of life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white mt-10">
        © {new Date().getFullYear()} MycoLuxe Botanicals. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
