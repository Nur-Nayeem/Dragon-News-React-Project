import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredCategoryNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredCategoryNews);
      return;
    }
    const filteredCategoryNews = data.filter((news) => news.category_id == id);
    console.log(filteredCategoryNews);
    setCategoryNews(filteredCategoryNews);
  }, [data, id]);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5 text-primary">Dragon News </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
