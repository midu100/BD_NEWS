import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">

        {/* Left Menu */}
        <ul className="flex items-center gap-6 text-sm font-semibold">
          <li>
            <Link className="hover:text-yellow-300 transition" to="/">
              সর্বশেষ
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/politics">
              রাজনীতি
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/country">
              দেশ
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/world">
              বিশ্ব
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/sports">
              খেলাধুলা
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/entertainment">
              বিনোদন
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-300 transition" to="/tech">
              প্রযুক্তি
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="text-xs hidden md:block">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-sm font-bold">
            LIVE
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
