import React from "react";
import { createRoot } from 'react-dom/client';

import { App } from "./structure/app/App";

import "./index.css";

import "./styles/button.css";
import "./styles/card.css";
import "./styles/form.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);