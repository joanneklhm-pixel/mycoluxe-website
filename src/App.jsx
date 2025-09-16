import React from "react";
import "./index.css";

// Import images
import logo from "./assets/logo.png";
import product from "./assets/product.jpg";
import lionsmane from "./assets/lionsmane.jpg";
import showcase from "./assets/showcase.jpg";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="text-center py-12">
        <img
          src={logo}
          alt="MycoLuxe Botanicals Logo"
          className="mx-auto w-32 md:w-40"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 tracking-wide">
          MycoLuxe Botanicals
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2 italic">
          Nature’s Intelligence in Every Capsule
        </p>
        <a
          href="#product"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </header>

      {/* Product Section */}
      <section id="product" className="text-center py-12 px-6 max-w-2xl">
        <img
          src={product}
          alt="Lion's Mane Supplement"
          className="mx-auto w-48 md:w-56 drop-shadow-2xl"
        />
        <h2 className="text-3xl font-bold mt-6">Clarity – Lion’s Mane</h2>
        <p className="text-gray-300 mt-3 leading-relaxed">
          Unlock focus and cognitive support with our premium Lion’s Mane
          capsules. 100% fruiting body extract, crafted for those who demand
          clarity in every step of life.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Learn More
        </button>
      </section>

      {/* Lifestyle Showcase Section */}
      <section className="bg-gray-900 py-12 w-full">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <img
            src={showcase}
            alt="Lion's Mane Capsules Showcase"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Pure. Potent. Premium.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At MycoLuxe Botanicals, we preserve the natural power of medicinal
              mushrooms while applying modern science for maximum purity and
              potency. Our Lion’s Mane products are crafted to support clarity,
              vitality, and balance—designed for those who seek excellence in
              every capsule.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 w-full">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MycoLuxe Botanicals. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

