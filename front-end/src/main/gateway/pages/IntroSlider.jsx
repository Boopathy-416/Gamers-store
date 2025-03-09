import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import {  ArrowDownCircle, DownloadCloud,  MoveLeftIcon, MoveRightIcon } from "lucide-react";

const slidesData = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    price: "4000",
    content: "Pre-order now and upgrade to deluxe to get early access",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg",
  },
  {
    id: 2,
    name: "Elden Ring",
    price: "4000",
    content: "Pre-order now and upgrade to deluxe to get early access",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg",
  },
  {
    id: 3,
    name: "GTA VI",
    price: "4000",
    content: "Pre-order now and upgrade to deluxe to get early access",
    image: "https://m.media-amazon.com/images/I/710NOoUlaYL.jpg",
  },
  {
    id: 4,
    name: "Call of Duty",
    price: "4000",
    content: "Pre-order now and upgrade to deluxe to get early access",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1938090/capsule_616x353.jpg",
  },
  {
    id: 5,
    name: "FIFA 24",
    price: "4000",
    content: "Pre-order now and upgrade to deluxe to get early access",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2412490/capsule_616x353.jpg",
  },
];

const Homeslider = () => {
  const slidesRef = useRef(null);
  const [index, setIndex] = useState(0);
  const slideCount = slidesData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    gsap.to(slidesRef.current, {
      x: `-${index * 20}%`,
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <main className="relative bg-black rounded-2xl w-full overflow-hidden sm:block hidden">
      {/* Slider Container */}
      <h1 className="text-xs px-10 py-2  text-amber-100 uppercase  text-end">Top-Rated Trending Games – Featured Paid Promotions</h1>
      <div className="relative w-full h-full px-5 py-4 overflow-hidden">
        <div
          ref={slidesRef}
          className="flex w-full h-full"
          style={{ width: `${slideCount * 20}%` }}
        >
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col  items-center justify-center w-full h-full p-10 text-white text-center"
              style={{ flex: "0 0 50%" }}
            >
             
              <img
                src={slide.image}
                alt={slide.name}
                className="w-[500px] h-[300px] px-4 py-2 object-cover rounded-lg shadow-lg"
              />
              
              <h2 className="text-4xl font-bold py-2 px-4">{slide.name}</h2>
              <p className="text-sm text-gray-500 ">₹<del>{slide.price}</del> <b className="text-red-400">₹999</b></p>
              <p className="text-md px-40">{slide.content}</p>
              <div className="mt-6 flex space-x-4">
                <button className="px-8 py-2 text-base bg-blue-600 text-white rounded-xs shadow-xl hover:bg-blue-700">
                 <ArrowDownCircle   />
                </button>
                <button className="px-6 py-2 text-base bg-green-600 text-white rounded-xs shadow-xl hover:bg-amber-700">
                  <DownloadCloud />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-yellow-500 scale-125 border-white border" : "bg-red-800 border-2 border-white"
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 px-3 py-3  text-white rounded-full opacity-55 bg-amber-700 hover:bg-gray-600 text-base"
      >
     <MoveLeftIcon />
   
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 px-3 py-3  text-white rounded-full opacity-55 bg-amber-700 hover:bg-gray-300 text-base"
      >
      <MoveRightIcon />
      </button>
    </main>
  );
};

export default Homeslider;
