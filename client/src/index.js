import React from "react";
import { createRoot } from "react-dom/client"; // must use createRoot in React 18
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // correct React 18 root creation
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error("Root container missing in index.html");
}
