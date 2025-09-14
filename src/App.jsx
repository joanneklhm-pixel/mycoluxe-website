export default function App() {
  return (
    <div className="font-sans bg-[#111111] text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-[#1a1a1a]">
        <h1 className="text-5xl md:text-7xl font-serif text-gold mb-4 tracking-wide">
          MycoLuxe Botanicals
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
          Nature’s Intelligence in Every Capsule
        </p>
        <a
          href="#shop"
          className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Shop Now
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-[#181818]" id="about">
        <h2 className="text-4xl font-serif text-gold mb-6">Our Philosophy</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At MycoLuxe Botanicals, we harness the purity and potency of medicinal mushrooms to
          support clarity, vitality, and balance. Each capsule is crafted with care, combining
          tradition and modern science to deliver natural intelligence to your wellness journey.
        </p>
      </section>

      {/* Product Highlight */}
      <section className="py-20 px-6 md:px-20 bg-[#111111]" id="shop">
        <h2 className="text-4xl font-serif text-gold mb-10 text-center">Featured Product</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://via.placeholder.com/400x500.png?text=Lion's+Mane+Capsules"
            alt="Lion's Mane Capsules"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-serif text-gold mb-4">Clarity – Lion’s Mane</h3>
            <p className="text-gray-300 mb-6">
              Unlock focus and cognitive support with our premium Lion’s Mane capsules. 100% fruiting
              body extract, designed for those who demand clarity in every step of life.
            </p>
            <a
              href="#"
              className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MycoLuxe Botanicals. All Rights Reserved.
      </footer>
    </div>
  );
}
