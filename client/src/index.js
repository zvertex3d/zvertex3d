import React from "react";
import { createRoot } from "react-dom/client"; // fixed import
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // correct usage for React 18
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
