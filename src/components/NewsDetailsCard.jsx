import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsDetails }) => {
  return (
    <div className="p-0 sm:p-4 lg:p-8">
      <img className="w-full" src={newsDetails.thumbnail_url} alt="" />
      <h2 className="text-primary font-bold text-2xl my-5">
        {newsDetails.title}
      </h2>
      <p className="text-accent">{newsDetails.details}</p>
      <Link
        to={`/category/${newsDetails.category_id}`}
        className="my-5 btn btn-lg bg-secondary text-base-100 font-normal md:font-medium"
      >
        <BiLeftArrowAlt className="h-6 w-6" />
        <span className="text-sm md:text-[16px]">
          All news in this category
        </span>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
