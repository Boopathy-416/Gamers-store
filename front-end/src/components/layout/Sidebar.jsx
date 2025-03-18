import React from "react";
import {
  Home,
  Layers,
  Gamepad2,
  Download,
} from "lucide-react";
import AdminAuth from "../../main/gateway/components/AdminAuth";
import LoginAuth from "../../main/gateway/components/LoginAuth";
import SignupAuth from "../../main/gateway/components/SignupAuth";

const Sidebar = ({ isMobile, isMobileMenuOpen }) => {
  return (
    <aside
      className={`bg-black  opacity-90  text-white w-16 fixed left-0 top-14 bottom-0 z-20 flex flex-col items-center py-2 transition-transform ${
        isMobile && !isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <NavItem icon={<Home />} label="Home" active />
      <NavItem icon={<Layers />} label="Apps" />
      <NavItem icon={<Gamepad2 />} label="Gaming" />
      <NavItem icon={<Download />} label="Downloads" />
      <NavItem icon={<SignupAuth />} label="Create Account" />
      <NavItem icon={<LoginAuth />} label="Login" />
      <NavItem icon={<AdminAuth />} label="Admin" />
    </aside>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-3 px-1 cursor-pointer">
      <div
        className={`p-2 rounded-md ${
          active  ? "border-[#0078d7] border-1 border-r-4   text-red-400" : "text-yellow-200 hover:border-gray-700 hover:border-2 hover:text-red-400 border-black border-2 "
        }`}
      >
        {icon}
      </div>
      <span className="text-xs mt-1 text-center">{label}</span>
    </div>
  );
};

export default Sidebar;
