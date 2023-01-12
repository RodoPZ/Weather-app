import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter basename="/Weather-app/">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate to="London" />} />
          <Route path="/:location" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/:id" element={<Main />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
