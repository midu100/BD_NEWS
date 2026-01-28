import axios from "axios";

const gnews = axios.create({ baseURL: "https://gnews.io/api/v4" });
const newsdata = axios.create({ baseURL: "https://newsdata.io/api/1" });

const GNEWS_TOKEN = "136e08ded777ffed50adf267c3ff0fa2";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=60";
// Minimal in-memory cache so multiple components don't spam the API
let cachedNewsPromise = null;
let cachedArticles = null;

// Fallback articles (used when API fails / quota exceeded)
const fallbackArticles = [
  {
    title: "ডেমো নিউজ: আজকের প্রধান শিরোনাম",
    description: "GNews API quota/limit থাকলে এই ডেমো কনটেন্ট দেখাবে যাতে UI ব্ল্যাঙ্ক না থাকে।",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: অর্থনীতি ও বাজার আপডেট",
    description: "API লিমিট থাকলে এই সেকশনগুলো লোডিং/ফলব্যাক দেখাবে।",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: প্রযুক্তি",
    description: "Later you can replace token or upgrade plan to get live data.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: খেলাধুলা",
    description: "This is a safe UI fallback; structure stays same.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: বিশ্ব",
    description: "API restore হলে আবার লাইভ আর্টিকেল দেখাবে।",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: লাইফস্টাইল",
    description: "Fallback content for quota exceeded.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: শিক্ষা",
    description: "Fallback content for UI.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: পরিবেশ",
    description: "Fallback content for UI.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: ভ্রমণ",
    description: "Fallback content for UI.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
  {
    title: "ডেমো নিউজ: বিনোদন",
    description: "Fallback content for UI.",
    image: DEFAULT_IMAGE,
    publishedAt: new Date().toISOString(),
    source: { name: "ডেমো" },
  },
];


const nServices = {
  news: async () => {
    if (cachedArticles) return cachedArticles;
    if (cachedNewsPromise) return cachedNewsPromise;

    cachedNewsPromise = gnews
      .get("/top-headlines", {
        params: {
          country: "bd",
          lang: "bn",
          token: GNEWS_TOKEN,
        },
      })
      .then((res) => {
        cachedArticles = (res && res.data && res.data.articles) || [];
        return cachedArticles;
      })
      .catch((err) => {
        // Quota exceeded (and other failures) shouldn't break UI
        console.warn(
          "GNews API failed, using fallback data.",
          err && err.response && err.response.status
        );
        cachedArticles = fallbackArticles;
        return cachedArticles;
      })
      .finally(() => {
        // Allow retries later if needed; keep cachedArticles as source of truth
        cachedNewsPromise = null;
      });

    return cachedNewsPromise;
  },
  categoryNews: async () => {
    // Easy Bangla news (no GNews): newsdata.io (needs API key)
    // .env -> VITE_NEWSDATA_API_KEY=YOUR_KEY
    const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
    if (!apiKey) {
      return fallbackArticles.map((a) => ({
        title: a.title,
        url: "",
        publishedAt: a.publishedAt,
        image_url: a.image,
      }));
    }

    const res = await newsdata.get("/latest", {
      params: { apikey: apiKey, country: "bd", language: "bn", size: 12 },
    });

    const results = (res && res.data && res.data.results) || [];
    return results.map((r) => ({
      title: r.title,
      url: r.link,
      publishedAt: r.pubDate,
      image_url: r.image_url || DEFAULT_IMAGE,
    }));
  },
};



export { nServices };
