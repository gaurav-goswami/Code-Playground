import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

// pages import
const Home = lazy(() => import("./Pages/Home"));
const Error = lazy(() => import("./Pages/Error"));
const Playground = lazy(() => import("./Pages/Playground"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
