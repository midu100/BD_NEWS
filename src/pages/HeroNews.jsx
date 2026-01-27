import React from "react";
import { Link } from "react-router";
import HeroLeft from "../components/common/HeroLeft";

const HeroNews = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT MAIN NEWS */}
        <HeroLeft />

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-1/3">

          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button className="bg-red-700 text-white text-sm font-bold px-4 py-2">
              সর্বশেষ
            </button>
            <button className="bg-gray-100 text-gray-700 text-sm font-bold px-4 py-2">
              জনপ্রিয়
            </button>
          </div>

          {/* News List */}
          <div className="flex flex-col divide-y">

            {[
              "বাংলাদেশ ক্রিকেট দলের নতুন কোচ নিয়োগ",
              "বিশ্ববাজারে তেলের দাম কমছে",
              "নতুন প্রযুক্তির স্মার্টফোন বাজারে",
              "চলচ্চিত্র উৎসবে পুরস্কৃত বাংলা সিনেমা",
            ].map((title, index) => (
              <Link
                key={index}
                to={`/news/${index + 2}`}
                className="flex gap-3 py-3 group"
              >
                <div className="w-20 h-14 overflow-hidden">
                  <img
                    src="https://source.unsplash.com/random/200x200?news"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-red-700 transition">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    ২৭ জানুয়ারি, ২০২৬
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* More Button */}
          <button className="mt-4 w-full border border-gray-300 py-2 text-sm font-semibold hover:bg-gray-100 transition">
            আরও খবর
          </button>
        </aside>

      </div>
    </section>
  );
};

export default HeroNews;
