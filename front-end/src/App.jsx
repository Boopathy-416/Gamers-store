import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ToastHandler from "./main/gateway/components/ToastHandler";
import Adminpanel from "./Admin/dashboard/AdminPanel";
import Gaming from "./website/Gaming";
import Apps from "./website/App";
import Download from "./website/Download";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
          <Route path="/gaming" element={<Gaming />} /> {/* Add Gaming route */}
          <Route path="/apps" element={<Apps />} /> {/* Add Gaming route */}
          <Route path="/download" element={<Download />} /> {/* Add Gaming route */}
        </Routes>

        <ToastHandler />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
