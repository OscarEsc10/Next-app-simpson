import React from "react";
import { FaGithub, FaTwitter, FaDonate } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Characters", href: "#" },
    { name: "Episodes", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Quotes", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="group-hover:rotate-12 transition-transform" />,
      href: "https://github.com/OscarEsc10",
      label: "GitHub",
    },
    {
      icon: (
        <FaTwitter className="group-hover:rotate-12 transition-transform" />
      ),
      href: "https://twitter.com/TheSimpsons",
      label: "Twitter",
    },
    {
      icon: (
        <TbBrandDisney className="group-hover:rotate-12 transition-transform" />
      ),
      href: "https://www.disneyplus.com/es-419/browse/entity-21cdf36d-d3ba-49f6-9dc6-b9d4e2a8be85",
      label: "Watch on Disney+",
      className: "text-gray-600 hover:text-gray-800"
    },
  ];

  return (
    <footer className="relative bg-white py-6">
      {/* Subtle background texture */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900 font-simpson">
              The Simpsons
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {currentYear} Springfield, USA
            </p>
            <div className="mt-2 flex items-center justify-center lg:justify-start">
              <FaDonate className="text-yellow-500 mr-2" />
              <span className="text-xs text-gray-500">Powered by Duff Energy</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-6 lg:mb-0">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block px-3 py-1 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium transition-all duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${social.className || 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'}`}
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This is an unofficial fan site. The Simpsons © {currentYear} 20th Television
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Not affiliated with Fox or The Simpsons. All content is used under fair use.
          </p>
        </div>
      </div>
    </footer>
  );
}
