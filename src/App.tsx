import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Main />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
