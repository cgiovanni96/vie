import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@vie/pages/Home";
import { MapPage } from "@vie/pages/Map";
import { AboutPage } from "@vie/pages/About";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappa" element={<MapPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
