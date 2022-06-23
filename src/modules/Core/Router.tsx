import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@vie/pages/Home";
import { MapPage } from "@vie/pages/Map";
import { AboutPage } from "@vie/pages/About";
import { SantaGiuliaColla } from "../Hikes/santagiulia-colla";
import { Hikes } from "../Hikes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappa" element={<MapPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="sentieri" element={<Hikes />} />

        {/* Hikes routes */}
        <Route
          path="sentieri/santagiulia-colla"
          element={<SantaGiuliaColla />}
        />
      </Routes>
    </BrowserRouter>
  );
};
