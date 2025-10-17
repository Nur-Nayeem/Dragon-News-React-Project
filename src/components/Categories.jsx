import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromies = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromies);
  return (
    <div className="grid grid-cols-1 mt-5 gap-3">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          key={category.id}
          className={
            "btn border-0 text-accent bg-base-100 hover:bg-base-200 font-semibold"
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
