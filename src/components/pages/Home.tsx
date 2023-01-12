import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { DayMenu } from "../DayMenu/DayMenu";
import { TempCard } from "../TempCard/TempCard";
import { Footer } from "../Footer/Footer";
import { TempGraphic } from "../TempGraphic/TempGraphic";
import { useParams } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";
import { LocationNotFound } from "../LocationNotFound/LocationNotFound";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../features/dataFromApi/dataFromApiSlice";
import { RootState } from "../../store";

export const Home = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: RootState) => state.dataFromApi.loaded);
  const { location } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.forecast({
        location: location!,
        days: 3,
      });
      if (response.error != null) {
        if (response.error.code === 1006) {
          setError(true);
        }
      } else {
        dispatch(changeData(response));
      }
    };
    fetchData();
  }, [location, loaded]);

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
