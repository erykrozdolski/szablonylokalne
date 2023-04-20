import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ to, label, onClick }) => {
  const linkClasses = ({ isActive }) =>
    (isActive ? " text-green-400" : "") + "sm:px-2 lg:px-4 py-2 uppercase";
  return (
    <NavLink to={to} className={linkClasses} onClick={onClick}>
      {label}
    </NavLink>
  );
};

export default MenuLink;
