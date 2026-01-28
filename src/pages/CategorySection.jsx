import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nServices } from "../api";

const columnsMeta = [
  {
    name: "রাজনীতি",
    color: "text-red-700",
    slug: "politics",
  },
  {
    name: "খেলাধুলা",
    color: "text-green-700",
    slug: "sports",
  },
  {
    name: "বিনোদন",
    color: "text-purple-700",
    slug: "entertainment",
  },
];

const CategorySection = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    nServices
      .categoryNews()
      .then((data) => {
        setArticles(data);
      })
      .catch(() => {
        setArticles([]);
      });
  }, []);

  // Split fetched articles into 3 columns (each 4 items: 1 featured + 3 list)
  const columns = columnsMeta.map((meta, idx) => {
    const start = idx * 4;
    const slice = articles?.slice(start, start + 4) || [];
    const [featured, ...rest] = slice;
    return {
      ...meta,
      featured,
      list: rest,
    };
  });

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {!articles
          ? // Loader skeleton (keeps same layout/structure)
            columnsMeta.map((cat, i) => (
              <div key={i} className="w-full lg:w-1/3">
                <div
                  className={`inline-block mb-4 font-extrabold text-lg ${cat.color}`}
                >
                  {cat.name}
                </div>
                <div className="overflow-hidden mb-3">
                  <div className="w-full h-48 bg-gray-200" />
                </div>
                <div className="h-5 bg-gray-200 rounded w-11/12" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-10/12" />
                  <div className="h-4 bg-gray-200 rounded w-9/12" />
                </div>
              </div>
            ))
          : columns.map((cat, i) => (
              <div key={i} className="w-full lg:w-1/3">
                {/* Category title */}
                <Link
                  to={`/${cat.slug}`}
                  className={`inline-block mb-4 font-extrabold text-lg ${cat.color}`}
                >
                  {cat.name}
                </Link>

                {/* Featured */}
                {cat.featured && (
                  <Link to={`/news/${i}`} className="group block">
                    <div className="overflow-hidden mb-3">
                      <img
                        src={cat.featured.image_url}
                        alt={cat.featured.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-red-700 transition">
                      {cat.featured.title}
                    </h3>
                  </Link>
                )}

                {/* List */}
                <div className="mt-4 flex flex-col gap-2">
                  {cat.list.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/news/${idx}`}
                      className="text-sm font-medium text-gray-800 hover:text-red-700 transition"
                    >
                      • {item.title}
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
