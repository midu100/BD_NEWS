import React from "react";
import { Link } from "react-router";

const HeroNews = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT MAIN NEWS */}
        <div className="w-full lg:w-2/3">

          {/* Category */}
          <span className="inline-block mb-4 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase">
            রাজনীতি
          </span>

          {/* Headline */}
          <Link to="/news/1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 hover:text-red-700 transition">
              নির্বাচন কমিশনের নতুন পদক্ষেপে রাজনৈতিক অঙ্গনে তোলপাড়
            </h1>
          </Link>

          {/* Sub text */}
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            আসন্ন নির্বাচনকে সামনে রেখে নির্বাচন কমিশনের নতুন নীতিমালা ঘোষণা
            করেছে। এতে বিভিন্ন রাজনৈতিক দলের মধ্যে মিশ্র প্রতিক্রিয়া দেখা দিয়েছে।
          </p>

          {/* Meta */}
          <div className="mt-4 text-sm text-gray-500">
            ২৭ জানুয়ারি, ২০২৬
          </div>

          {/* Image */}
          <div className="mt-6 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
              alt="Politics"
              className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

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
