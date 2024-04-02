import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import biograms from "../../biograms";
import { NavLink } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const biogramList = Object.entries(biograms);

  return (
    <MapContainer
      className="lg:h-screen h-[24rem]"
      center={[51.2861, 17.904209]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {biogramList.map((data) => {
        const [fullName, person] = data;
        const { imagePath, iconPath, birthdate, deathdate, role } = person;
        const lifeLabel = `[${birthdate}-${deathdate}]`;
        const myIcon = L.icon({
          iconUrl: iconPath,
          iconSize: [48, 48],
          iconAnchor: [16, 16],
        });
        return (
          <Marker
            position={person.location as LatLngExpression}
            key={fullName}
            icon={myIcon}
          >
            <Popup className=" cursor-pointer">
              <img
                src={imagePath}
                alt={fullName}
                className="lg:h-auto lg:max-h-60  max-h-32 w-100"
              />
              <p>
                <span className="font-black my-0">{fullName} </span>
                <br></br>
                <span className="text-sm">{lifeLabel}</span>
                <br></br>
                <span className="text-sm">{role}</span>
              </p>
              <NavLink to={`/biogram/${fullName}`}>
                <button className="text-white hover:bg-white bg-black uppercase border-2 hover:border-black px-4 py-2 hover:shadow-lg hover:text-black font-bold">
                  Dowiedz się więcej
                </button>
              </NavLink>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
