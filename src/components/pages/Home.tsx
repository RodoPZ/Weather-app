import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { DayMenu } from "../DayMenu/DayMenu";
import { TempCard } from "../TempCard/TempCard";
import { Footer } from "../Footer/Footer";
import { TempGraphic } from "../TempGraphic/TempGraphic";

export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
        <DayMenu />
      </header>
      <main>
        <TempCard />
        <TempGraphic />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
