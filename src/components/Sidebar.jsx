import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nServices } from "../api";

const Sidebar = () => {
  const [popular,setPopular]= useState(null)
  useEffect(()=>{
        nServices.news().then((data)=>{
            setPopular(data.slice(8,10))
        })
    },[])

  return (
    <aside className="w-full lg:w-[320px]"> {/* sidebar fixed width in px */}
      <h3 className="text-lg font-extrabold mb-4">জনপ্রিয়</h3>

      <div className="flex flex-col gap-4">
        {!popular ? (
          <>
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[80px] h-[56px] bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-20 mt-2" />
                </div>
              </div>
            ))}
          </>
        ) : popular.map((item, i) => (
          <Link key={i} to={`/news/${i + 8}`} className="flex gap-3 group">
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
