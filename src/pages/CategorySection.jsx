import React from "react";
import { Link } from "react-router";

const CategorySection = () => {
  const categories = [
    {
      name: "রাজনীতি",
      color: "text-red-700",
      slug: "politics",
      featured: {
        title: "নির্বাচন ইস্যুতে রাজনৈতিক অচলাবস্থা",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      },
      list: [
        "সংসদ অধিবেশনে উত্তপ্ত বিতর্ক",
        "রাজনৈতিক দলগুলোর জরুরি বৈঠক",
      ],
    },
    {
      name: "খেলাধুলা",
      color: "text-green-700",
      slug: "sports",
      featured: {
        title: "বিশ্বকাপে বাংলাদেশের দুর্দান্ত জয়",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      },
      list: [
        "ফাইনালের আগে বড় দুশ্চিন্তা",
        "দলে ফিরছেন অভিজ্ঞ ক্রিকেটার",
      ],
    },
    {
      name: "বিনোদন",
      color: "text-purple-700",
      slug: "entertainment",
      featured: {
        title: "চলচ্চিত্র উৎসবে প্রশংসিত বাংলা সিনেমা",
        image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      },
      list: [
        "নতুন সিনেমায় চমকপ্রদ গল্প",
        "ওটিটিতে আসছে আলোচিত সিরিজ",
      ],
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {categories.map((cat, i) => (
          <div key={i} className="w-full lg:w-1/3">

            {/* Category title */}
            <Link
              to={`/${cat.slug}`}
              className={`inline-block mb-4 font-extrabold text-lg ${cat.color}`}
            >
              {cat.name}
            </Link>

            {/* Featured */}
            <Link to={`/news/${i}`} className="group block">
              <div className="overflow-hidden mb-3">
                <img
                  src={cat.featured.image}
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-bold leading-snug group-hover:text-red-700 transition">
                {cat.featured.title}
              </h3>
            </Link>

            {/* List */}
            <div className="mt-4 flex flex-col gap-2">
              {cat.list.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/news/${idx}`}
                  className="text-sm font-medium text-gray-800 hover:text-red-700 transition"
                >
                  • {item}
                </Link>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default CategorySection;
