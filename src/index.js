import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./component/ErrorBoundary";
import ReactPortal from "./pages/ReactPortal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reactPortal" element={<ReactPortal />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>
);
