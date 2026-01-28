import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom ঠিক
import Sidebar from "../components/Sidebar"; // সঠিক relative path
import { nServices } from "../api";

const LatestNews = () => {
  const [latest,setLatest] = useState(null)

  useEffect(()=>{
        nServices.news().then((data)=>{
            setLatest(data.slice(5,8))
        })
    },[])

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-2xl font-extrabold mb-6">
          সর্বশেষ খবর
        </h2>

        {/* Flex container: news list + sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* News List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {!latest ? (
              <>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-36 h-24 flex-shrink-0 bg-gray-200" />
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-11/12" />
                      <div className="h-4 bg-gray-200 rounded w-24 mt-3" />
                    </div>
                  </div>
                ))}
              </>
            ) : latest.map((item, index) => (
              <Link
                key={index}
                to={`/news/${index + 5}`}
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
                    {item.time ?? item.publishedAt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
