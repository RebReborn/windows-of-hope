import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Windows of Hope</h3>
          <p>Restoring dignity and creating opportunities for vulnerable communities in Malawi.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/programs" className="hover:underline">Programs</Link></li>
            <li><Link to="/donate" className="hover:underline">Donate</Link></li>
            <li><Link to="/volunteer" className="hover:underline">Volunteer</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <p>Email: <a href="mailto:info@windowshf.org" className="underline">info@windowshf.org</a></p>
          <p>Phone: +265 888 616 600</p>
          <p>Dowa, Malawi</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Windows of Hope Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
