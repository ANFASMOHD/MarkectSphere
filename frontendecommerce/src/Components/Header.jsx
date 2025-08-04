import React, { useState } from 'react';
import logo from '../assets/image-removebg-preview.png';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gray-400 shadow-md sticky top-0 z-50 p-5">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo and Title */}
        <div className="flex items-center ">
     
          <h1 className="text-xl font-bold text-gray-700">MarketSphere</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium  ">
          <a href="/" className="hover:text-amber-500">Home</a>
          <a href="/products" className="hover:text-amber-500">Products</a>
          <a href="/about" className="hover:text-amber-500">About</a>
          <a href="/contact" className="hover:text-amber-500">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium hover:text-amber-500">Login/Register</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm">Get Started</button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block text-sm hover:text-amber-500">Home</a>
          <a href="/products" className="block text-sm hover:text-amber-500">Products</a>
          <a href="/about" className="block text-sm hover:text-amber-500">About</a>
          <a href="/contact" className="block text-sm hover:text-amber-500">Contact</a>
          <div className="mt-2 space-y-2">
            <button className="block w-full text-left text-sm hover:text-amber-500">Login/Register</button>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
