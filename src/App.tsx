import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { AppProvider } from "./context";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/London" />} />
          <Route path="/:location" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/:id" element={<Main />} /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
