import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { DayMenu } from "../DayMenu/DayMenu";
import { TempCard } from "../TempCard/TempCard";
import { Footer } from "../Footer/Footer";
import { TempGraphic } from "../TempGraphic/TempGraphic";
import { useParams } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";
import { Forecast } from "../../models/apiResponse.model";

export const Home = () => {
  const [data, setData] = useState<null | Forecast>(null);
  const { location } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.forecast({ location: location!, days: 3 });
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <nav>
          <Navbar data={data} />
        </nav>
        <DayMenu data={data} />
      </header>
      <main>
        <TempCard data={data} />
        <TempGraphic />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
