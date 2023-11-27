import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Index";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />;
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
