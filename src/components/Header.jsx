import React from "react";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Header = () => {
  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex flex-col border-b-4 border-red-700">

      {/* Top Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-sm text-gray-600">
          <p className="font-medium">{today}</p>

          <div className="flex items-center gap-3">
            <span className="hidden md:block font-semibold">অনুসরণ করুন:</span>
            <a className="hover:text-blue-600 transition" href="#">
              <FaFacebookF />
            </a>
            <a className="hover:text-red-600 transition" href="#">
              <FaYoutube />
            </a>
            <a className="hover:text-sky-500 transition" href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <Link to="/" className="text-center group">
            <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight">
              বাংলাদেশ{" "}
              <span className="text-red-700 group-hover:text-red-800 transition">
                সমাচার
              </span>
            </h1>
            <p className="mt-1 text-xs md:text-sm text-gray-500 tracking-widest">
              সত্যের সন্ধানে সারাক্ষণ
            </p>
          </Link>
        </div>
      </div>

      {/* Breaking News */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          <span className="breaking-news bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase">
            ব্রেকিং
          </span>

          <Marquee
            speed={45}
            gradient={false}
            className="text-sm font-semibold text-gray-800"
          >
            সরকার ও বিরোধী দলের সংলাপ সফল • দ্রব্যমূল্য নিয়ন্ত্রণে কঠোর পদক্ষেপ •
            বিশ্বকাপে বাংলাদেশের দুর্দান্ত জয় • আবহাওয়া পূর্বাভাস: কাল থেকে বৃষ্টি
            হতে পারে
          </Marquee>
        </div>
      </div>

    </header>
  );
};

export default Header;
