import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import News from "../components/news/News";

function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover latest news, insightful articles, creative stories, and professional
            advice
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                className="w-full border-2 border-gray-300 rounded-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline transition-all duration-300"
                type="search"
                placeholder="Search news..."
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* News List */}
        <section>
          <News />
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16   bg-blue-200 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 text-gray-800">
              Subscribe to our newsletter to receive the latest news
              directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-gray-200 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
