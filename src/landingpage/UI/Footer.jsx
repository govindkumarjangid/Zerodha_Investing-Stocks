import React from "react";
import { Link } from "react-router-dom";
import {
  BsTwitterX,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsWhatsapp,
  BsTelegram
} from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {

  const footerLinks = [
    {
      title: "Account",
      links: [
        "Open demat account", "Minor demat account", "NRI demat account",
        "HUF demat account", "Commodity", "Dematerialisation",
        "Fund transfer", "MTF"
      ],
    },
    {
      title: "Support",
      links: [
        "Contact us", "Support portal", "How to file a complaint?",
        "Status of your complaints", "Bulletin", "Circular",
        "Z-Connect blog", "Downloads"
      ],
    },
    {
      title: "Company",
      links: [
        "About", "Philosophy", "Press & media", "Careers",
        "Zerodha Cares (CSR)", "Zerodha.tech", "Open source", "Referral program"
      ],
    },
    {
      title: "Quick links",
      links: [
        "Upcoming IPOs", "Brokerage charges", "Market holidays",
        "Economic calendar", "Calculators", "Markets", "Sectors", "Gift Nifty"
      ],
    },
  ];

  return (
    <footer className="bg-light border-t border-gray-200 pt-12 pb-10 px-4 sm:px-6 lg:px-8 w-full mt-10">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">

        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-1">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 mb-4">
             <img src="./svg/logo.svg" alt="Zerodha Logo" className="h-5 w-auto" />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
            © 2010 - 2026, Zerodha Broking Ltd. <br /> All rights reserved.
          </p>

          {/* Social Icons Row 1 */}
          <div className="flex items-center gap-5 text-gray-600 text-xl mb-4 border-b border-gray-300 pb-5">
            <a href="#" className="hover:text-blue-600 transition-colors"><BsTwitterX /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><BsFacebook /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><BsInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><BsLinkedin /></a>
          </div>

          {/* Social Icons Row 2 */}
          <div className="flex items-center gap-5 text-gray-600 text-xl mb-6">
            <a href="#" className="hover:text-blue-600 transition-colors"><BsYoutube /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><BsWhatsapp /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><BsTelegram /></a>
          </div>

          {/* App Store / Play Store Buttons  */}
          <div className="flex flex-col xl:flex-row gap-3 mt-2">
            <button className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300">
             <img src="./svg/googlePlayBadge.svg" alt="play store" />
            </button>
            <button className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300">
             <img src="./svg/appstoreBadge.svg" alt="apple store" />
            </button>
          </div>
        </div>

        {/* Columns 2 to 5: Mapped Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-[17px] font-medium text-gray-800 mb-5">
              {section.title}
            </h3>
            <ul className="flex flex-col space-y-3">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-500 hover:text-primary font-medium transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </footer>
  );
};

export default Footer;