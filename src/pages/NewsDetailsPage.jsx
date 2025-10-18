import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetailsPage = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState("");
  const [notFoundError, setNotFoundError] = useState(null);

  useEffect(() => {
    const foundNews = news.find((ns) => ns.id === id);
    if (foundNews) {
      setNewsDetails(foundNews);
    } else {
      setNewsDetails("");
      setNotFoundError("News Not Found");
    }
  }, [news, id]);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5 text-primary">Dragon News </h2>
      <div className="border shadow-2xs border-base-200">
        {notFoundError ? (
          <span>{notFoundError}</span>
        ) : (
          <NewsDetailsCard newsDetails={newsDetails} />
        )}
      </div>
    </div>
  );
};

export default NewsDetailsPage;
