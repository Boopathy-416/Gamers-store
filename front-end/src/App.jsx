import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ToastHandler from "./main/gateway/components/ToastHandler";
import Adminpanel from "./Admin/dashboard/AdminPanel";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
        </Routes>

        <ToastHandler />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
