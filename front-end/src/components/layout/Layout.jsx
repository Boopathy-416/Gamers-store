import React, { useState, useEffect } from "react";
import { Sidebar, Navbar } from "./index";
import logout from "../../../public/Assets/icons/loGout.gif";
import Hero from "./Hero"; // ✅ Import Hero

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user

  useEffect(() => {
    try {
      // ✅ Safely get user from localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // ✅ Parse only if data exists
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user"); // Remove corrupted data
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Refresh the page after logout
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#C4C1C6] bg-fixed bg-center bg-no-repeat">
      <Navbar toggleMenu={toggleMobileMenu} isMobile={isMobile} user={user} />
      <Sidebar isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen} />

      {/* Logout Button (Top Right) */}
      {user && (
        <div className="fixed bottom-4 right-4 z-50 p-1 rounded-full shadow-md transition">
          <img
            src={logout}
            className="cursor-pointer hover:scale-125"
            onClick={handleLogout}
            alt="Logout"
            width="80px"
            height="70px"
          />
        </div>
      )}

      {/* ✅ Use Hero component */}
      <Hero />

      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Layout;
