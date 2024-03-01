import React from "react";
import Navbar from "./stores/components/Navbar";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

import MobilePage from "./Pages/MobilePage";
import MensPage from "./Pages/MensPage";
import WomensPage from "./Pages/WomensPage";
import WatchPage from "./Pages/WatchPage";
import FurniturePage from "./Pages/FurniturePage";
import AcsPage from "./Pages/AcsPage";
import TvPage from "./Pages/TvPage";
import KitchenPage from "./Pages/KitchenPage";
import BookPage from "./Pages/BookPage";
import FridgePage from "./Pages/FridgePage";
import SpeakerPage from "./Pages/SpeakerPage";
import ComputerPage from "./Pages/ComputerPage";

import SingleMobile from "./singles/SingleMobile";
import UserCart from "./singles/UserCart";
import SingleComputer from "./singles/SingleComputer";
import SingleAcs from "./singles/SingleAcs";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />

        <Route path="/computers" element={<ComputerPage />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/watches" element={<WatchPage />} />
        <Route path="/furnitures" element={<FurniturePage />} />
        <Route path="/acs" element={<AcsPage />} />
        <Route path="/tvs" element={<TvPage />} />
        <Route path="/kitchens" element={<KitchenPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/fridges" element={<FridgePage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/mobiles/:id" element={<SingleMobile />} />
        <Route path="/computers/:id" element={<SingleComputer />} />
        <Route path="/acs/:id" element={<SingleAcs />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
