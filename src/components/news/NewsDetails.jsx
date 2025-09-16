import React from "react";
import NewsStore from "../../store/NewsStore";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const { NewsList } = NewsStore();
  const { id } = useParams();

  console.log(NewsList);
  const newsItem = NewsList?.find((item) => item._id === id);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-64 md:h-80 object-cover"
      />

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {newsItem.title}
          </h1>
          <div className="badge badge-primary badge-lg px-4 py-2">
            {newsItem.category}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>By {newsItem.author || "Unknown"}</span>
          <span>•</span>
          <span>
            {newsItem.createdAt
              ? new Date(newsItem.createdAt).toLocaleDateString()
              : "No date"}
          </span>
        </div>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-4 text-base">{newsItem.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
