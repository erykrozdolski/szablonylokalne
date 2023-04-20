import React from "react";
import Map from "../components/Map/Map";
import { NavLink } from "react-router-dom";

const MapPage = () => {
  return (
    <div>
      <Map />
      <p className="text-5xl my-4">Mapa Szablonów</p>
      <p className="text-xl my-4">
        Spoglądając na mapę wszystkich murali, łatwo jest zaplanować sobie trasę
        spacerową lub rowerową, w której możemy zobaczyć wszystkie szablony.
      </p>
      <p className="text-xl my-4">
        Lokalizacja wielu z nich jest nieprzypadkowa.{" "}
        <NavLink to={`/biogram/Hanys Rybark`}>
          <span className=" underline"> Hanys Rybark</span>
        </NavLink>{" "}
        z zadumą spogląda na swój dom rodzinny na ulicy 3 maja,
        <NavLink to={`/biogram/Melchior Grossek`}>
          <span className=" underline"> Melchior Grossek</span>
        </NavLink>{" "}
        również znajduje się niedaleko swojego domu na Wrocławskiej, a jego brat
        <NavLink to={`/biogram/Stanisław Grossek`}>
          <span className=" underline"> Stanisław</span>
        </NavLink>{" "}
        patrzy w kierunku ulicy Braci Grossków
      </p>
      <p className="text-xl my-4">
        Spacery polecam rozpocząć od "starego" Bralina i Hanysa Rybarka, czyli
        ulicy 3-maja, później zobaczyć obrazy Melchiora na budynku starej
        bralińskiej gospody. Następnie ulicą Krętą (Kutzner) i Spokojną przejść
        na ulicę Ogrodową (ks. Wojciechowski), skręcić na Nową (Antoni Gabriel),
        odbić jeszcze na Kalinową (Przywara), żeby potem przejść Lipową
        (Stanisław Grossek, Jan Nowak, Ignacy Majchrzak) aż do Kościelnej na
        końcu której czeka Tomasz Gabriel. Kończąc spacer, jesteśmy niedaleko
        Pomnika Ofiar, Represji i Walki o Wolność, oryginalne wzniesiony po I
        wś., bralińskiego cmentarza, ale też placu zabaw obok starego kościoła
        ewangelickiego.
      </p>
    </div>
  );
};

export default MapPage;
