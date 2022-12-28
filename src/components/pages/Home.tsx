import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { DayMenu } from "../DayMenu/DayMenu";
import { TempCard } from "../TempCard/TempCard";
import { Footer } from "../Footer/Footer";
import { TempGraphic } from "../TempGraphic/TempGraphic";
import { AppContext } from "../../context";
import { useParams } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";
import { LocationNotFound } from "../LocationNotFound/LocationNotFound";

export const Home = () => {
  const context = useContext(AppContext);
  const { location } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      context.changeLoaded(false);
      const response = await api.forecast({
        location: location!,
        days: 3,
      });
      if (response.error != null) {
        if (response.error.code === 1006) {
          setError(true);
        }
      } else {
        context.changeData(response);
        context.changeLoaded(true);
      }
    };
    fetchData();
  }, [location]);

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
        {!error && <DayMenu />}
      </header>
      <main>
        {!error && <TempCard />}
        {!error && <TempGraphic />}
        {error && <LocationNotFound />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
