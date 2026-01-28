import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "সর্বশেষ" },
    { to: "/politics", label: "রাজনীতি" },
    { to: "/country", label: "দেশ" },
    { to: "/world", label: "বিশ্ব" },
    { to: "/sports", label: "খেলাধুলা" },
    { to: "/entertainment", label: "বিনোদন" },
    { to: "/tech", label: "প্রযুক্তি" },
  ];

  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Mobile: hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm hover:bg-red-800 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          <span className="relative w-6 h-5 block">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-300",
                open ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform duration-300",
                open ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navItems.map((it) => (
            <li key={it.to}>
              <Link className="hover:text-yellow-300 transition" to={it.to}>
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="text-xs hidden md:block">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-sm font-bold">
            LIVE
          </span>
        </div>

      </div>

      {/* Mobile dropdown (smooth open/close) */}
      <div
        className={[
          "md:hidden overflow-hidden bg-red-800 transition-all duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm font-semibold">
          {navItems.map((it) => (
            <li key={it.to}>
              <Link
                to={it.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-sm hover:bg-red-700 transition"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
