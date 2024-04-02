import React from "react";
import biograms from "../biograms";
import BiogramCard from "src/components/BiogramCard/BiogramCard";

const BiogramList = () => {
  const biogramList = Object.entries(biograms);
  return (
    <div className="grid grid-flow-row md:grid-cols-5 sm:grid-cols-2 grid-cols-1 grid-rows gap-4">
      {biogramList.map((data) => {
        const [fullName, person] = data;
        return (
          <BiogramCard person={person} fullName={fullName} key={fullName} />
        );
      })}
    </div>
  );
};

export default BiogramList;
