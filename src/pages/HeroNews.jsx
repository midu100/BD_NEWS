import React from "react";
import { Link } from "react-router";
import HeroLeft from "../components/common/HeroLeft";
import HeroRight from "../components/common/HeroRight";

const HeroNews = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* LEFT MAIN NEWS */}
        <HeroLeft />

        {/* RIGHT SIDEBAR */}
        <HeroRight />
      </div>
    </section>
  );
};

export default HeroNews;
