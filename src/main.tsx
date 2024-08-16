import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: (registration: any) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  },
});
