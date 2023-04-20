import React from "react";
import { NavLink } from "react-router-dom";

const BiogramCard = ({ fullName, person }) => {
  const { surname, name, imagePath } = person;
  return (
    <NavLink to={`/biogram/${fullName}`}>
      <div className="bg-black border-2 border-white shadow-xl justify-center flex hover:lg:shadow-lg hover:lg:scale-150 transition-all relative hover:lg:z-50">
        <img
          alt={surname + name}
          src={process.env.PUBLIC_URL + `${imagePath}`}
          className="object-cover h-64"
        />
        <div className="absolute bottom-0 bg-black px-4 py-2 w-full">
          {person.name}
          <span className="uppercase font-black"> {person.surname}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default BiogramCard;
