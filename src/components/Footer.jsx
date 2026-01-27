const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-12">

        {/* Brand */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            বাংলাদেশ <span className="text-red-600">সমাচার</span>
          </h2>
          <p className="text-sm leading-relaxed">
            সত্য ও ন্যায়ের পথে অবিচল থেকে নির্ভরযোগ্য সংবাদ পরিবেশনই আমাদের অঙ্গীকার।
          </p>
        </div>

        {/* Categories */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-white font-bold mb-4">বিভাগসমূহ</h3>
          <ul className="space-y-2 text-sm">
            <li>সর্বশেষ</li>
            <li>জাতীয়</li>
            <li>রাজনীতি</li>
            <li>অর্থনীতি</li>
            <li>আন্তর্জাতিক</li>
          </ul>
        </div>

        {/* More */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-white font-bold mb-4">আরও</h3>
          <ul className="space-y-2 text-sm">
            <li>খেলাধুলা</li>
            <li>বিনোদন</li>
            <li>প্রযুক্তি</li>
            <li>শিক্ষা</li>
          </ul>
        </div>

        {/* Important */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-white font-bold mb-4">গুরুত্বপূর্ণ</h3>
          <ul className="space-y-2 text-sm">
            <li>আমাদের কথা</li>
            <li>গোপনীয়তা নীতি</li>
            <li>শর্তাবলী</li>
            <li>যোগাযোগ</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} বাংলাদেশ সমাচার | সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
};

export default Footer;
