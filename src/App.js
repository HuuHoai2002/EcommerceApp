import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./layouts/header/index";
import { Footer } from "./layouts/footer/index";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default App;
