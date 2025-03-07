import React, { useState, useEffect } from "react";
import { Sidebar, Navbar } from "./index";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user

  useEffect(() => {
    // Load user from localStorage on page load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d2136]">
      <Navbar toggleMenu={toggleMobileMenu} isMobile={isMobile} user={user} />
      <Sidebar isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen} />
      <main
        className={`flex-1 pt-14 overflow-auto ${!isMobile ? "pl-16" : ""}`}
      >
        <div className="container  mx-auto px-4 py-6">
          {/* <h1 className="text-3xl font-bold text-white mb-6">Home</h1> */}

          {children}
        </div>
      </main>

      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
