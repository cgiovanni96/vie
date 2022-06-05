import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Map } from "./pages/Map/Map";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mappa" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};
