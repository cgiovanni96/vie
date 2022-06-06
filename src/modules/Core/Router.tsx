import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@vie/pages/Home";
import { MapPage } from "@vie/pages/Map";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappa" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};
