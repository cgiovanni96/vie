import { BrowserRouter, Routes, Route } from "react-router-dom";

// MAIN NAVIGATION
import { HomePage } from "@vie/pages/Home";
import { MapPage } from "@vie/pages/Map";
import { AboutPage } from "@vie/pages/About";
import { Hikes } from "@vie/pages/hikes";

// HIKES
import { SantaGiuliaColla } from "@vie/pages/hikes/santagiulia-colla";
import { LavagnaColla } from "@vie/pages/hikes/lavagna-colla";
import { SantannaColla } from "@vie/pages/hikes/santanna-colla";
import { LavagnaSelva } from "@vie/pages/hikes/lavagna-selva";
import { SentieroLiguria } from "@vie/pages/hikes/sentiero-liguria";
import { BasilicaSanGiacomo } from "@vie/pages/hikes/basilica-sangiacomo";
import { CaviSelva } from "@vie/pages/hikes/cavi-selva";

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

        <Route path="sentieri/lavagna-colla" element={<LavagnaColla />} />
        <Route path="sentieri/santanna-colla" element={<SantannaColla />} />
        <Route path="sentieri/lavagna-selva" element={<LavagnaSelva />} />
        <Route path="sentieri/sentiero-liguria" element={<SentieroLiguria />} />

        <Route path="sentieri/cavi-selva" element={<CaviSelva />} />

        <Route
          path="sentieri/basilica-sangiacomo"
          element={<BasilicaSanGiacomo />}
        />
      </Routes>
    </BrowserRouter>
  );
};
