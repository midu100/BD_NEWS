import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nServices } from '../../api'

const HeroRight = () => {
    const [news,setNews] = useState(null)

    useEffect(()=>{
        nServices.news().then((data)=>{
            setNews(data.slice(1,5))
        })
    },[])


  return (
    <>
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

            {!news ? (
              <>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 py-3">
                    <div className="w-28 h-20 bg-gray-200 rounded-sm flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-24 mt-2" />
                    </div>
                  </div>
                ))}
              </>
            ) : news.map((item, index) => (
              <Link
                key={index}
                to={`/news/${index + 1}`}
                className="flex gap-3 py-3 group"
              >
                <div className="w-28 h-20 overflow-hidden rounded-sm flex-shrink-0">
              <img
                src={item.image}
                alt='img'
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

                <div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-red-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.publishedAt}
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


    </>
  )
}

export default HeroRight