import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";

// Get the root element
const rootElement = document.getElementById("root");

// Ensure root element exists
if (!rootElement) {
  throw new Error("Failed to find the root element. Make sure there is a DOM element with id 'root'");
}

// Create root and render app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Register service worker for PWA support if needed
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful");
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

// Error boundary for global error handling
window.addEventListener("error", (event) => {
  // Log errors to analytics or error tracking service
  console.error("Global error:", event.error);
});

// Performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const paintMetrics = performance.getEntriesByType("paint");
    if (paintMetrics) {
      paintMetrics.forEach((paintMetric) => {
        console.log(`${paintMetric.name}: ${Math.round(paintMetric.startTime)}ms`);
      });
    }
  }
});