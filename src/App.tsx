import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { AppProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/:location" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/:id" element={<Main />} /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
