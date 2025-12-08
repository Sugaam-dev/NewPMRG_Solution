import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="      bg-gradient-to-br from-[#0b1f6b] via-[#050f39] to-[#0b1b47] text-slate-100">
      {/* Make footer taller */}
      <div className="min-h-[260px] flex flex-col justify-between">
        {/* Top row: logo + nav */}
        <div className="px-10 lg:px-24 pt-12 pb-10 flex flex-col md:flex-row md:items-start md:justify-around gap-10">
          {/* Logo area with image */}
          <Link
            to="/"
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <div className="w-60 h-60 ">
              <img
                src="/PMRGlogo.png"   // put your logo file in public/logo.png or adjust path
                alt="PMRG Solution logo"
              
              />
            </div>
           
          </Link>

          {/* Right navigation */}
          <nav className="text-sm text-center md:text-right">
            <p className="uppercase tracking-[0.25em] text-slate-400 mb-4">
              Navigate
            </p>

            <ul className="space-y-2">
               <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 cursor-pointer"
                >
           Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="pmrg-crew/our-team"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="px-10 lg:px-24 pb-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="flex items-center gap-1 text-center md:text-left">
            Tech innovation from Eindhoven
            <span className="w-3 h-3 rounded-full border border-blue-500" />
          </p>

          <Link
            to="/privacy"
            className="hover:text-blue-400 transition-colors"
          >
            Privacy statement
          </Link>

          <p className="text-center md:text-right">© 2025 PMRG Solution</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
