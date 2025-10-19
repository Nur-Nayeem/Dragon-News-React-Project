import React, { Suspense, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const LatestNewsheader = () => {
  const [bracking, setBracking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/news.json");
        const allNews = await res.json();
        const brackingNews = allNews.filter(
          (news) => news.others.is_today_pick === true
        );
        setBracking(brackingNews);
      } catch (error) {
        setErr(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className="flex items-center bg-base-200 p-3 gap-3">
      <p className="text-base-100 bg-secondary py-2 px-3">Letest</p>
      {loading ? (
        <p>{err ? "SomeThing Wrong.." : "Breaking News..."}</p>
      ) : (
        <Marquee className="flex gap-6" pauseOnHover={true} speed={80}>
          {bracking.map((news) => (
            <p key={news.id} className="font-semibold mr-5">
              {news.title}.
            </p>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default LatestNewsheader;
