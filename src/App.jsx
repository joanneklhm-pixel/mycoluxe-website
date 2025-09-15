import React from 'react';
import './index.css';

// Correct image imports (all lowercase filenames)
import logo from './assets/logo.png';
import product from './assets/product.jpg';
import lionsmane from './assets/lionsmane.jpg';

function App() {
  return (
    <div className="text-center bg-black min-h-screen text-white">
      {/* Logo at the top */}
      <img src={logo} alt="MycoLuxe Logo" className="mx-auto w-40 pt-8" />

      <h1 className="text-4xl font-bold mt-4">MycoLuxe Botanicals</h1>
      <p className="text-lg text-gray-300">
        Nature’s Intelligence in Every Capsule
      </p>

      {/* Product showcase */}
      <div className="mt-10">
        <img src={product} alt="Product Bottle" className="mx-auto w-48" />
        <p className="mt-4 text-xl font-semibold">Clarity – Lion’s Mane</p>
        <img src={lionsmane} alt="Lion’s Mane Mushroom" className="mx-auto w-64 mt-4" />
      </div>
    </div>
  );
}

export default App;
