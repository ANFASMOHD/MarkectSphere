import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              We are committed to providing the best products and services.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <p className="text-sm">
              Stay connected with us on social media.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-sm">
              Email: <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
            </p>
            <p className="text-sm mt-1">
              Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Developed by @ Anfas Mohd.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
