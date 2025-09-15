import React from "react";
import "./index.css";

// Import your images from src/assets
import logo from "./assets/logo.png";       // Change filename if needed
import product from "./assets/product.jpg"; // Change filename if needed

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-8">
        <img
          src={logo}
          alt="MycoLuxe Logo"
          className="mx-auto w-32 h-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-yellow-300">
          MycoLuxe Botanicals
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Nature’s Intelligence in Every Capsule
        </p>
        <a
          href="#shop"
          className="inline-block mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Shop Now
        </a>
      </header>

      {/* About Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
          Our Philosophy
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          At MycoLuxe Botanicals, we harness the purity and potency of medicinal
          mushrooms to support clarity, vitality, and balance. Each capsule is
          crafted with care, combining tradition and modern science to deliver
          natural intelligence to your wellness journey.
        </p>
      </section>

      {/* Featured Product */}
      <section id="shop" className="text-center py-12 px-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-6">
          Featured Product
        </h2>
        <img
          src={product}
          alt="Lion’s Mane Capsules"
          className="mx-auto w-48 h-auto shadow-lg rounded-lg"
        />
        <h3 className="text-xl font-bold mt-4">Clarity – Lion’s Mane</h3>
        <p className="text-gray-300 max-w-md mx-auto mt-2">
          Unlock focus and cognitive support with our premium Lion’s Mane
          capsules. 100% fruiting body extract, designed for those who demand
          clarity in every step of life.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 text-sm">
        © {new Date().getFullYear()} MycoLuxe Botanicals. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
