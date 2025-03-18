import React from "react";
import { HomeSlider, IntroApp, Subscription, Footer } from "../Introduction";

function Hero({ children }) {
  return (
    <main className="flex-1 pt-14 overflow-auto pl-16">
      <div className="container mx-auto px-4 py-6">
        <HomeSlider />
        <IntroApp />
        <Subscription />
        <Footer />
        {children}
      </div>
    </main>
  );
}

export default Hero;
