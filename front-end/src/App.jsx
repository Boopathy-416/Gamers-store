
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ToastHandler from "./main/gateway/components/ToastHandler";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Secure />} /> */}
           
          </Routes>
          <ToastHandler />
        </Layout>
      </Router>
      
    </QueryClientProvider>
  );
}

export default App;
