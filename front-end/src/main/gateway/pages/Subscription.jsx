import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Bell, Mail } from "lucide-react";
import AppData from "./introUi/AppData";
import '../../../App.css';

const Subscription = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    gsap.to(leftRef.current, {
      x: "-100%",
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    gsap.to(rightRef.current, {
      x: "100%",
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  if (isSmallScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center p-6">
        <div>
          <h2 className="text-lg font-bold mb-4">
          This website is optimized for larger screens.
          </h2>
          <p className="text-sm animate-blink">We're working on the mobile version—stay tuned!</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full bg-black border-green-500 border-2 rounded-4xl border-b-8 text-white py-16 px-8">
      {/* Title */}
      <h2 className="text-lg font-semibold uppercase text-center pb-6 px-1">
        Latest & Upcoming Apps <Bell className="inline-block text-amber-300 ml-2" />
      </h2>

      {/* Dual Containers */}
      <div className="flex flex-col lg:flex-row border-amber-500 rounded-full overflow-hidden px-2 py-4 border-2 border-b-6 bg-black justify-center gap-6">
        {/* Left Container - Upcoming Apps */}
        <div className="relative w-full lg:w-2/4 px-0 py-4 rounded-full overflow-hidden">
          <div className="flex gap-4" ref={leftRef}>
            {AppData.slice(0, 8).map((app, index) => (
              <AppBox key={index} app={app} setSelectedApp={setSelectedApp} />
            ))}
          </div>
        </div>

        {/* Right Container - Gaming Updates */}
        <div className="relative w-full lg:w-2/4 px-0 py-4 rounded-full overflow-hidden">
          <div className="flex gap-1" ref={rightRef}>
            {AppData.slice(10, 18).map((app, index) => (
              <AppBox key={index} app={app} setSelectedApp={setSelectedApp} />
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Box */}
      <div id="subscription-section" className="py-10 text-center">
        <h3 className="text-sm font-medium py-4">Get Notified for Latest Updates</h3>
        <div className="relative max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full p-3 border-gray-600 rounded-sm border-b-3 border-1 text-green-400 focus:outline-gray-200 focus:outline-1 focus:border-green-400 focus:rounded-3xl"
          />
          <button className="absolute right-3 top-1/3 text-white transform -translate-y-1/3 p-1 border-green-400 rounded-4xl border-b-3">
            <Mail />
          </button>
        </div>
      </div>

      {/* Dialog Box for App Details */}
      {selectedApp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white py-6 px-10 rounded-lg text-black w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
            <img src={selectedApp.cover} alt={selectedApp.name} className="w-24 h-24 rounded-full shadow-md" />
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{selectedApp.name}</h3>
              <p className="mt-2 text-gray-600">{selectedApp.description}</p>
              <div className="flex gap-3 py-4">
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                  Download
                </a>
                <button
                  onClick={() => alert(`Share ${selectedApp.name}`)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                >
                  Share
                </button>
                <button
                  onClick={() =>
                    document.getElementById("subscription-section").scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-500 text-white px-2 py-1 rounded-lg flex items-center gap-2 hover:bg-yellow-600"
                >
                  Subscribe
                </button>
              </div>
              <button className="p-4 text-red-500 font-semibold hover:underline" onClick={() => setSelectedApp(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Individual App Box Component
const AppBox = ({ app, setSelectedApp }) => (
  <div
    className="relative w-40 h-18 shadow-amber-50 cursor-pointer overflow-hidden"
    style={{
      backgroundImage: `url(${app.cover})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    onClick={() => setSelectedApp(app)}
  ></div>
);

export default Subscription;
