import React, { useContext, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { DayMenu } from "../DayMenu/DayMenu";
import { TempCard } from "../TempCard/TempCard";
import { Footer } from "../Footer/Footer";
import { TempGraphic } from "../TempGraphic/TempGraphic";
import { AppContext } from "../../context";
import { useParams } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";

export const Home = () => {
  const context = useContext(AppContext);
  const { location } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      context.changeLoaded(false);
      const response = await api.forecast({ location: location!, days: 3 });
      context.changeData(response);
      context.changeLoaded(true);
    };
    fetchData();
  }, [location]);

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
