import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ biogram }) => {
  return (
    <div className="flex mb-4">
      <NavLink to="/biogramList" className="underline font-bold text-green-400">
        Biogramy
      </NavLink>
      <span className="px-2">/</span>
      <p>
        {biogram.name} <span className="uppercase">{biogram.surname}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
