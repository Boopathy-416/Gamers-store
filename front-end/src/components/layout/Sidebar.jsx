import React from "react";
import { Home, Layers, Gamepad2, Download } from "lucide-react";
import AdminAuth from "../../main/gateway/components/AdminAuth";
import LoginAuth from "../../main/gateway/components/LoginAuth";
import SignupAuth from "../../main/gateway/components/SignupAuth";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isMobile, isMobileMenuOpen }) => {
  const location = useLocation(); // ✅ Fix undefined 'location'

  return (
    <aside
      className={`bg-black  opacity-90  text-white w-16 fixed left-0 top-18 bottom-0 z-20 flex flex-col items-center px-1 transition-transform ${
        isMobile && !isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <NavItem icon={<Home />} label="Home"   active={location.pathname === "/"} to="/" />
      <NavItem
        icon={<Layers />}
        label="Apps"
        to="/apps"
        active={location.pathname === "/apps"}
      />
      <NavItem
        icon={<Gamepad2 />}
        label="Gaming"
        to="/gaming"
        active={location.pathname === "/gaming"}
      />
      <NavItem
        icon={<Download />}
        label="Downloads"
        to="/download"
        active={location.pathname === "/download"}
      />

      <NavItem icon={<SignupAuth />} label="Create Account" />
      <NavItem icon={<LoginAuth />} label="Login" />
      <NavItem icon={<AdminAuth />} label="Admin" />
    </aside>
  );
};

const NavItem = ({ icon, label, active, to }) => {
  return (
    <Link
      to={to}
      className="w-full flex flex-col items-center justify-center py-3 px-2 cursor-pointer"
    >
      <div
        className={`p-2 text-sm rounded-md ${
          active
            ? "border-[#e2ac07] border-1 border-r-4   text-red-400"
            : "text-yellow-200 hover:border-gray-700 hover:border-2 hover:text-red-400 border-black border-2 "
        }`}
      >
        {icon}
      </div>
      <span className="text-xs pt-1 text-center">{label}</span>
    </Link>
  );
};

export default Sidebar;
