import React from "react";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";

const CommonLatest = () => {
  const latest = [
    {
      title: "সরকারি চাকরিতে নতুন নিয়োগ বিজ্ঞপ্তি প্রকাশ",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      time: "২ ঘণ্টা আগে",
    },
    {
      title: "ডলারের বিপরীতে টাকার মান কিছুটা স্থিতিশীল",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      time: "৩ ঘণ্টা আগে",
    },
    {
      title: "মেট্রোরেল চলাচলে নতুন সময়সূচি ঘোষণা",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      time: "আজ সকাল",
    },
    {
      title: "বিশ্ববাজারে স্বর্ণের দামে বড় পরিবর্তন",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82",
      time: "আজ",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-2xl font-extrabold mb-6">
          সর্বশেষ খবর
        </h2>

        {/* News List */}
        <div className="flex flex-col gap-6">
          {latest.map((item, index) => (
            <Link
              key={index}
              to={`/news/${index}`}
              className="flex gap-4 group"
            >
              {/* Image */}
              <div className="w-36 h-24 flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold leading-snug group-hover:text-red-700 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.time}
                </p>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CommonLatest;
