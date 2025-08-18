import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

// Get the root container
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Create root only once and store it properly
let root: Root;

// Check if root already exists (for HMR)
if ("_reactRoot" in container && container._reactRoot) {
  root = container._reactRoot as Root;
} else {
  root = createRoot(container);
  (container as any)._reactRoot = root;
}

// Render the app
function renderApp() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

renderApp();

// Handle Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept("./App", () => {
    renderApp();
  });
}
