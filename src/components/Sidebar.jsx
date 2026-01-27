import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  const popular = [
    {
      title: "বাংলাদেশ ক্রিকেট দলের নতুন কোচ নিয়োগ",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
    {
      title: "বিশ্ববাজারে তেলের দাম কমছে",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      title: "নতুন প্রযুক্তির স্মার্টফোন বাজারে",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
  ];

  return (
    <aside className="w-full lg:w-[320px]"> {/* sidebar fixed width in px */}
      <h3 className="text-lg font-extrabold mb-4">জনপ্রিয়</h3>

      <div className="flex flex-col gap-4">
        {popular.map((item, i) => (
          <Link key={i} to={`/news/${i}`} className="flex gap-3 group">
            <div className="w-[80px] h-[56px] overflow-hidden"> {/* image fixed size in px */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h4 className="text-sm font-semibold leading-snug group-hover:text-red-700 transition">
              {item.title}
            </h4>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
