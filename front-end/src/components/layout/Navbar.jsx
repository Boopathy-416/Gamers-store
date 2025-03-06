
import React from "react";
import { Search, Menu } from "lucide-react";
import { Avatar, Input, Button } from './ui';

const Navbar = ({ toggleMenu, isMobile }) => {
  return (
    <header className="h-14 bg-[#2d2d2d] text-white flex items-center justify-around px-4 fixed top-0 left-0 right-0 z-30 w-full">
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button onClick={toggleMenu}>
            <Menu size={24} />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <img src="https://media.giphy.com/media/TTTOZ3zTEB23atB39U/giphy.gif?cid=ecf05e47yfbg9o40i5t5j76bb9nb89gxs7hrju6n502zbdey&ep=v1_gifs_search&rid=giphy.gif&ct=g"  alt="Bpy's Store" className="h-8 w-8 overflow-hidden border-2 border-amber-100 rounded-full" />
          <span className="font-thin uppercase backdrop-saturate-200 ">Gamer's Store</span>
        </div>
      </div>

      <div className="relative mx-4 flex-1 max-w-2xl">
        <div className="relative flex items-center">
          <Input type="text" placeholder="Search apps, games, movies, and more" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <Avatar src="/placeholder.svg?height=32&width=32" alt="User Avatar" fallback="MS" />
    </header>
  );
};

export default Navbar;
