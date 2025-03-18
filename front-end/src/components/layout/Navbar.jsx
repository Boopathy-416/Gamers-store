import React, { useState } from "react";
import { Search, Menu, UserCheck2Icon } from "lucide-react";
import { Avatar, Input, Button } from "./ui";

const Navbar = ({ toggleMenu, isMobile, user }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="h-18 bg-black opacity-90 text-white flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-30 w-full">
      {/* Left - Logo & Store Name */}
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button onClick={toggleMenu} className="md:hidden">
            <Menu size={24} />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <img
            src="https://media.giphy.com/media/TTTOZ3zTEB23atB39U/giphy.gif"
            alt="Gamer's Store"
            className="h-8 w-8 overflow-hidden border-2 border-amber-100 rounded-full"
          />
          <span className="font-thin uppercase hidden sm:block">
            Gamer's Store
          </span>
        </div>
      </div>

      {/* Center - Search Bar */}
      <div
        className={`relative mx-4 flex-1 max-w-2xl transition-all duration-300 ${
          isSearchActive ? "w-full max-w-[60%]" : "w-72 md:w-96"
        }`}
      >
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Search apps, games, movies, and more"
            className={`transition-all duration-300 w-full ${
              isSearchActive ? "w-full px-4 py-2" : "md:w-full"
            }`}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Right - User Avatar & Username */}
      <div className="flex items-center gap-2">
        <UserCheck2Icon />
        {user ? (
          <span className="hidden sm:block">{user.name}</span> // ✅ Show username if logged in
        ) : (
          <span className="hidden sm:block">Guest</span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
