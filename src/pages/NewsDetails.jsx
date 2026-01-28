import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { nServices } from "../api";
import Sidebar from "../components/Sidebar";

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState(null); // for "আরও পড়ুন"
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    nServices
      .news()
      .then((data) => {
        setArticles(data);
        const idx = Number.parseInt(id, 10);
        const item = Array.isArray(data) ? data[idx] : null;
        setArticle(item || null);
        setNotFound(!item);
        setLoading(false);
      })
      .catch((e) => {
        // show "not found" card instead of demo content
        console.warn("NewsDetails load failed:", e);
        setArticles([]);
        setArticle(null);
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-red-700">
            হোম
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-semibold">বিস্তারিত</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main */}
          <article className="w-full lg:w-2/3">
            {loading ? (
              <div>
                <div className="h-10 bg-gray-200 rounded w-11/12" />
                <div className="mt-4 h-4 bg-gray-200 rounded w-48" />
                <div className="mt-6 w-full h-[380px] bg-gray-200 rounded-sm" />
                <div className="mt-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-11/12" />
                  <div className="h-4 bg-gray-200 rounded w-10/12" />
                </div>
              </div>
            ) : notFound ? (
              <div className="border rounded-sm p-6">
                <h2 className="text-xl font-extrabold text-gray-900">
                  নিউজ পাওয়া যায়নি
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  এই আইডির জন্য কোনো আর্টিকেল নেই।
                </p>
                <Link
                  to="/"
                  className="inline-block mt-4 bg-red-700 text-white px-4 py-2 text-sm font-bold rounded-sm hover:bg-red-800 transition"
                >
                  হোমে ফিরে যান
                </Link>
              </div>
            ) : (
              <>
                {/* Category badge */}
                <span className="inline-block mb-4 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase">
                  সংবাদ
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                  {article.title}
                </h1>

                {/* Meta */}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                  <span>
                    {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleString("bn-BD")
                      : "তারিখ পাওয়া যায়নি"}
                  </span>
                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-red-700 font-semibold"
                    >
                      সোর্স লিংক
                    </a>
                  ) : null}
                </div>

                {/* Image */}
                <div className="mt-6 overflow-hidden rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[380px] object-cover"
                  />
                </div>

                {/* Description / Body */}
                <div className="mt-6 text-gray-800 leading-relaxed space-y-4">
                  {article.description ? (
                    <p className="text-base md:text-lg">{article.description}</p>
                  ) : (
                    <p className="text-base md:text-lg text-gray-600">
                      বিস্তারিত লেখা পাওয়া যায়নি।
                    </p>
                  )}
                </div>

                {/* Related */}
                <div className="mt-10">
                  <h2 className="text-xl font-extrabold mb-4">
                    আরও পড়ুন
                  </h2>
                  <div className="flex flex-col gap-3">
                    {(articles || []).slice(0, 4).map((it, i) => (
                      <Link
                        key={i}
                        to={`/news/${i}`}
                        className="border-b pb-3 hover:text-red-700 transition font-semibold"
                      >
                        {it.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </article>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

