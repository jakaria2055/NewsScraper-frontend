import React from "react";
import NewsStore from "../../store/NewsStore";
import NewsSkeleton from "../../skeleton/NewsSkeleton";
import { Link } from "react-router-dom";

function NewsCard() {
  const { NewsList } = NewsStore();


  if (!NewsList) {
    return <NewsSkeleton />;
  }

  

  return (
    <>
      {NewsList.map((item) => (
        <div
          key={item["_id"]}
          className="card bg-base-100 w-72 shadow-sm"
        >
          <figure>
            <img
              src={item["image"]}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item["title"]}</h2>
            <div className="flex gap-2">
              <div className="badge text-sm badge-secondary">{item["category"]}</div>
              <div className="badge text-sm badge-secondary">
                {item.author || "Unknown"}
              </div>
            </div>
            <p>{item.content.slice(0, 80)}...</p>
            <div className="card-actions justify-end">
              <Link to={`/newsdetails/${item._id}`} className="badge badge-outline hover:text-blue-600 hover:-translate-y-1 transform duration-300">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewsCard;
