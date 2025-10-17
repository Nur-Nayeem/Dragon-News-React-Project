import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-px border border-gray-200 rounded-sm overflow-hidden">
      {/* --- Header (Author Info + Actions) --- */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-base-200">
        <div className="flex items-center gap-3 ">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* --- Title --- */}
      <h2 className="px-4 pt-3 text-lg font-bold leading-snug">{title}</h2>

      {/* --- Image --- */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </figure>

      {/* --- Details --- */}
      <div className="px-4 text-sm text-gray-600 mb-2">
        {details.slice(0, 180)}...
        <span className="text-primary font-medium cursor-pointer ml-1 hover:underline">
          Read More
        </span>
      </div>

      {/* --- Footer (Rating + Views) --- */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 text-sm">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
