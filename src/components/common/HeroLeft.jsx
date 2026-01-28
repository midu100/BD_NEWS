import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nServices } from '../../api';

const HeroLeft = () => {

     const [news, setNews] = useState(null);

  useEffect(() => {
    nServices.news().then((data) => {
      setNews(data[0]);
    });
  }, []);

  if (!news) {
    // Minimal loader (keeps structure intact)
    return (
      <div className="w-full lg:w-2/3">
        <div className="inline-block mb-4 bg-gray-200 text-transparent text-xs font-bold px-3 py-1 uppercase rounded">
          Loading
        </div>
        <div className="h-10 md:h-12 lg:h-14 bg-gray-200 rounded w-11/12" />
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-10/12" />
        </div>
        <div className="mt-4 h-4 bg-gray-200 rounded w-40" />
        <div className="mt-6 overflow-hidden rounded-sm">
          <div className="w-full h-[360px] bg-gray-200" />
        </div>
      </div>
    );
  }



  return (
    <>
       <div className="w-full lg:w-2/3">

          {/* Category */}
          <span className="inline-block mb-4 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase">
             {news.source?.name || 'সংবাদ'}
          </span>

          {/* Headline */}
          <Link to="/news/0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 hover:text-red-700 transition">
              {news.title}
            </h1>
          </Link>

          {/* Sub text */}
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            {news.description}
          </p>

          {/* Meta */}
          <div className="mt-4 text-sm text-gray-500">
            ২৭ জানুয়ারি, ২০২৬
          </div>

          {/* Image */}
          <div className="mt-6 overflow-hidden rounded-sm">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
    
    </>
  )
}

export default HeroLeft