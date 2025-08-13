const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "/api/v1" // Dev uses proxy
    : "https://news-scraper-news-portal.vercel.app/api/v1"; // Live backend

export default API_BASE_URL;
