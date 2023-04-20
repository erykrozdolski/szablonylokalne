import React from "react";
import { NavLink, useParams } from "react-router-dom";
import biograms from "../biograms";
import parse from "html-react-parser";

const BiogramPage = () => {
  const { id } = useParams();
  const biogram = biograms[id];
  const { surname, name, imagePath, video } = biogram;
  const lifeLabel = `[${biogram.birthdate}-${biogram.deathdate}]`;
  return (
    <>
      <div className="relative z-10 mb-8">
        <div>
          <div className="bg-black absolute w-full h-full z-10 opacity-75"></div>
          <div className="flex absolute z-20 m-8">
            <div className="px-4 text-white text-4xl lg:text-8xl">
              <p className="font-light">{biogram.name} </p>
              <p className="font-black uppercase">{biogram.surname}</p>
              <p className="text-2xl lg:text-4xl">{lifeLabel}</p>
            </div>
          </div>
        </div>
        <video
          className="w-full relative h-90"
          src={`${video}`}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="flex mb-4">
        <NavLink to="/biogramList" className="underline font-bold">
          Biogramy
        </NavLink>
        <span className="px-2">/</span>
        <p>
          {biogram.name} <span className="uppercase">{biogram.surname}</span>
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-12 lg:col-span-3">
          <img
            className="border-2 border-white h-90"
            alt={surname + name}
            src={process.env.PUBLIC_URL + `${imagePath}`}
          />
          <p className=" text-2xl py-2">
            <span className="font-light">{biogram.name}</span>{" "}
            <span className="font-black uppercase">{biogram.surname}</span>
          </p>
          <p>{lifeLabel}</p>
        </div>
        <div className="col-start-1 lg:col-start-5 col-end-13">
          <p className="text-4xl lg:text-6xl mb-6">Życiorys</p>
          {biogram.desc.map((paragraph, i) => (
            <p key={i} className="text-lg pb-3 text-justify">
              {parse(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default BiogramPage;
