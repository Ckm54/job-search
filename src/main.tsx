import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import JobsProvider from "./context/jobsContext";
import "./index.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JobsProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </JobsProvider>
  </React.StrictMode>
);
