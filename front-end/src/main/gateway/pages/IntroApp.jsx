import { useEffect, useState } from "react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sample software data
const softwareList = [
  {
    id: 1,
    name: "Game Booster",
    desc: "Optimize your PC for gaming.",
    img: "https://img.freepik.com/free-vector/outer-space-mission-game-tablet-screen_1308-45981.jpg?t=st=1741618645~exp=1741622245~hmac=5cab3ad6a8d37f8b8ab6b6b172a6a8cde9abc386a1ca8540c08fce02af72a368&w=740",
  },
  {
    id: 2,
    name: "FPS Unlocker",
    desc: "Increase FPS for smooth gameplay.",
    img: "fps-unlocker.jpg",
  },
  {
    id: 3,
    name: "VR Enhancer",
    desc: "Enhance VR experiences.",
    img: "https://www.consultantsreview.com/newstransfer/upload/289jpXiaomi-VR.jpg",
  },
  {
    id: 4,
    name: "Shader Mod",
    desc: "Upgrade game graphics.",
    img: "https://shadersmods.com/wp-content/uploads/2022/06/astralex-shaders-928x522.png",
  },
  {
    id: 5,
    name: "Anti-Cheat Bypass",
    desc: "Play safely online.",
    img: "https://i.ytimg.com/vi/gNZ7fGl5CHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCocW3flBED_krF8IGrXnzK6xpfBA",
  },
  {
    id: 6,
    name: "Low Latency Mode",
    desc: "Reduce input lag.",
    img: "https://www.itechtics.com/wp-content/uploads/2023/02/NVIDIA-Low-Latency-Mode.jpg"
  },
  {
    id: 7,
    name: "Gaming VPN",
    desc: "Unblock gaming servers.",
    img: "https://blog.it-planet.com/wp-content/uploads/2023/09/vpn-sicherer-netzwerkzugriff-aus-der-ferne.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function IntroApp() {
  const [selectedSoftware, setSelectedSoftware] = useState(null);

  useEffect(() => {
    gsap.to(".box", {
      xPercent: -100 * (softwareList.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="flex flex-col mb-20  items-center justify-center h-screen p-8    bg-black  rounded-md  text-white">
        <h1 className="text-sm  pb-10  text-amber-800 uppercase   text-center ">Best Selling Trending Apps Featured Paid Promotions</h1>
      <div className="relative flex overflow-hidden w-4/5 h-[50vh]  rounded-md bg-gray-600  border-gray-600 border-12 ">
        {softwareList.map((software) => (
          <div
            key={software.id}
            className="box flex-shrink-0 w-1/3 h-full flex flex-col items-center justify-center p-4 bg-black mx-2 cursor-pointer hover:bg-gray-600 transition"
          >
            <img
              src={software.img}
              alt={software.name}
              className="w-[100%] h-[100%] object-contain  py-4 hover:scale-105  px-2   "
            />
            <h3 className="text-lg text-white p-2 font-bold">
              {software.name}
            </h3>
            <div className="flex py-4 text-xs font-bold px-2 gap-2">
              <button
                className="px-4 py-2 border border-white  hover:bg-amber-600 rounded-sm hover:rounded-xs"
                onClick={() => setSelectedSoftware(software)}
              >
                View Details
              </button>

              <button className="px-4 py-2 bg-green-600 hover:bg-orange-700 rounded-sm hover:rounded-xs">
                Download Free Source
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedSoftware && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-2">{selectedSoftware.name}</h2>
            <p className="mb-4">{selectedSoftware.desc}</p>
            <button
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
              onClick={() => setSelectedSoftware(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
