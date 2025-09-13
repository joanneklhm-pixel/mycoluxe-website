import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MycoLuxeHomepage from "./components/MycoLuxeHomepage";
import LionManeProductPage from "./components/LionManeProductPage";
import EducationHub from "./components/EducationHub";
import CheckoutFlow from "./components/CheckoutFlow";
import AboutUsPage from "./components/AboutUsPage";
import ContactSupportPage from "./components/ContactSupportPage";

export default function MycoLuxeApp() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <header className="bg-black border-b border-gold sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <Link to="/" className="text-2xl font-serif text-gold">MycoLuxe</Link>
            <nav className="space-x-6 hidden md:block">
              <Link to="/" className="hover:text-gold">Home</Link>
              <Link to="/shop" className="hover:text-gold">Shop</Link>
              <Link to="/education" className="hover:text-gold">Education</Link>
              <Link to="/about" className="hover:text-gold">About</Link>
              <Link to="/contact" className="hover:text-gold">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/checkout" className="hover:text-gold">Cart 🛒</Link>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MycoLuxeHomepage />} />
            <Route path="/shop" element={<LionManeProductPage />} />
            <Route path="/education" element={<EducationHub />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactSupportPage />} />
            <Route path="/checkout" element={<CheckoutFlow />} />
          </Routes>
        </main>

        <footer className="bg-black py-10 text-center text-gray-400 text-sm border-t border-neutral-800">
          <p>© {new Date().getFullYear()} MycoLuxe Botanicals. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}
