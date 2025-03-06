import React from "react";
import { Home, Layers, Gamepad2, Sparkles, Download, Library } from "lucide-react";

const Sidebar = ({ isMobile, isMobileMenuOpen }) => {
  return (
    <aside
      className={`bg-[#2d2d2d] text-white w-16 fixed left-0 top-14 bottom-0 z-20 flex flex-col items-center py-4 transition-transform ${
        isMobile && !isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <NavItem icon={<Home />} label="Home" active />
      <NavItem icon={<Layers />} label="Apps" />
      <NavItem icon={<Gamepad2 />} label="Gaming" />
      <NavItem icon={<Sparkles />} label="What's New" />
      <NavItem icon={<Download />} label="Downloads" />
      <NavItem icon={<Library />} label="Library" />
    </aside>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-3 px-1 cursor-pointer">
      <div className={`p-2 rounded-md ${active ? "bg-[#0078d7] text-white" : "text-gray-300 hover:bg-gray-700"}`}>
        {icon}
      </div>
      <span className="text-xs mt-1 text-center">{label}</span>
    </div>
  );
};

export default Sidebar;
