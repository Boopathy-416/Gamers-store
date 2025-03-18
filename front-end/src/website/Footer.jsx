import React from "react";
import { GamepadIcon as GameController } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-amber-100 rounded-2xl border-t">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center space-x-2">
              <GameController className="h-6 w-6" />
              <span className="font-bold text-xl">Gamer's Store</span>
            </a>
          </div>

          {/* Games Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Games</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">New Releases</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Top Sellers</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Upcoming</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Deals & Specials</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Virtual Reality</a>
          </div>

          {/* Categories Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Categories</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Action</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Adventure</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">RPG</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Strategy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Sports & Racing</a>
          </div>

          {/* Company Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Company</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">News</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Partners</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
          </div>

          {/* Support Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Support</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Community</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Download</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">System Status</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Bug Report</a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-muted">
          <div className="flex flex-wrap gap-4 items-center justify-center text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Legal</a>
            <a href="#" className="hover:text-primary">Cookie Settings</a>
            <span>© {new Date().getFullYear()} GameStore. All rights reserved. Made from Bpy Creation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
