import React from 'react'

function IntroApp() {
  return (
    <div className='h-screen bg-black rounded-2xl'>
      <h1>
        welcome to App store
      </h1>
    </div>
  )
}

export default IntroApp

// import { useEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// // import { X } from "lucide-react"
// // import { Card , Input , Alret , Button } from "./introUi/index"

// // Best selling apps data
// const bestSellingApps = [
//   {
//     id: "pdf-x",
//     name: "PDF X: PDF Editor & PDF Reader",
//     category: "Business",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "A powerful PDF editor and reader with all the features you need to work with PDF files.",
//   },
//   {
//     id: "wps-office",
//     name: "WPS Office UWP",
//     category: "Productivity",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description:
//       "Complete office suite compatible with Microsoft Office, featuring Writer, Presentation, and Spreadsheet.",
//   },
//   {
//     id: "movie-maker-pro",
//     name: "Movie Maker - Video Editor PRO",
//     category: "Photo & video",
//     price: 1099.0,
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Professional video editing software with advanced features for creating stunning videos.",
//   },
//   {
//     id: "movie-maker",
//     name: "Movie Maker: Video Editor",
//     category: "Photo & video",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Easy-to-use video editor for creating and editing videos with basic effects and transitions.",
//   },
//   {
//     id: "hevc-extensions",
//     name: "HEVC Video Extensions",
//     category: "Utilities & tools",
//     price: 54.0,
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Play High Efficiency Video Coding (HEVC) videos on your device with this extension.",
//   },
//   {
//     id: "sketchbook-pro",
//     name: "Sketchbook Pro",
//     category: "Multimedia design",
//     price: 1349.0,
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Professional-grade drawing and painting application with advanced tools for artists and designers.",
//   },
//   {
//     id: "screen-recorder",
//     name: "Screen recorder - Screen record & Screen capture",
//     category: "Multimedia design",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Capture your screen with high quality and various options for recording and screenshots.",
//   },
//   {
//     id: "gst-doctor",
//     name: "GST Doctor ITC Matching Software Pro",
//     category: "Government & policy",
//     price: 4999.0,
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Professional software for GST compliance and input tax credit matching for businesses.",
//   },
// ]

// // Top free apps data
// const topFreeApps = [
//   {
//     id: "instagram",
//     name: "Instagram",
//     category: "Social",
//     price: "Owned",
//     icon: "/placeholder.svg?height=80&width=80",
//     description:
//       "Share photos and videos, message friends, watch content from creators, and discover accounts to follow.",
//   },
//   {
//     id: "telegram",
//     name: "Telegram Desktop",
//     category: "Social",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Fast and secure messaging app with cloud storage, large group chats, and channels.",
//   },
//   {
//     id: "vlc",
//     name: "VLC",
//     category: "Photo & video",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Free and open source cross-platform multimedia player that plays most multimedia files.",
//   },
//   {
//     id: "netflix",
//     name: "Netflix",
//     category: "Entertainment",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Watch TV shows, movies, documentaries, and more on thousands of internet-connected devices.",
//   },
//   {
//     id: "chatgpt",
//     name: "ChatGPT",
//     category: "Productivity",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "AI-powered chatbot that can assist with various tasks, answer questions, and generate content.",
//   },
//   {
//     id: "spotify",
//     name: "Spotify - Music and Podcasts",
//     category: "Music",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "Digital music service that gives you access to millions of songs, podcasts and videos.",
//   },
//   {
//     id: "lively-wallpaper",
//     name: "Lively Wallpaper",
//     category: "Personalization",
//     price: "Owned",
//     icon: "/placeholder.svg?height=80&width=80",
//     description:
//       "Free and open-source application that allows users to set animated and interactive desktop wallpapers.",
//   },
//   {
//     id: "adobe-reader",
//     name: "Adobe Acrobat Reader DC",
//     category: "Productivity",
//     price: "Free",
//     icon: "/placeholder.svg?height=80&width=80",
//     description: "The global standard for reliably viewing, printing, signing, and commenting on PDF documents.",
//   },
// ]

// export default function AppStore() {
//   const [selectedApp, setSelectedApp] = useState(null)
//   const [modalOpen, setModalOpen] = useState(false)
//   const modalRef = useRef(null)
//   const appRefs = useRef({})
// }

// // Initialize GSAP animations
// useEffect(() => {
//     // Set initial state for all app cards
//     gsap.set(".app-card", {
//       scale: 1,
//       opacity: 1,
//       boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//     })
//   }, [])
  
//   // Handle app hover
//   const handleAppHover = (app) => {
//     const appElement = appRefs.current[app.id]
  
//     if (appElement) {
//       // Animate the hovered app card
//       gsap.to(appElement, {
//         scale: 1.05,
//         boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//         duration: 0.3,
//         ease: "power2.out",
//       })
//     }
//   }
  
//   // Handle app hover out
//   const handleAppHoverOut = (app) => {
//     const appElement = appRefs.current[app.id]
  
//     if (appElement) {
//       // Animate back to normal state
//       gsap.to(appElement, {
//         scale: 1,
//         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//         duration: 0.3,
//         ease: "power2.out",
//       })
//     }
//   }
  
//   // Handle app click to open modal
//   const handleAppClick = (app) => {
//     setSelectedApp(app)
//     setModalOpen(true)
  
//     // Animate modal opening
//     if (modalRef.current) {
//       gsap.fromTo(modalRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" })
//     }
//   }
  
//   // Handle modal close
//   const handleCloseModal = () => {
//     if (modalRef.current) {
//       gsap.to(modalRef.current, {
//         opacity: 0,
//         y: 20,
//         duration: 0.3,
//         ease: "power3.in",
//         onComplete: () => setModalOpen(false),
//       })
//     }
//   }
  
//   // Format price display
//   const formatPrice = (price) => {
//     if (typeof price === "number") {
//       return `₹${price.toFixed(2)}`
//     }
//     return price
//   }
  
//   // Render app card
//   const renderAppCard = (app) => (
//     <div
//       key={app.id}
//       ref={(el) => (appRefs.current[app.id] = el)}
//       className="app-card bg-gray-800 rounded-lg p-4 transition-all cursor-pointer"
//       onMouseEnter={() => handleAppHover(app)}
//       onMouseLeave={() => handleAppHoverOut(app)}
//       onClick={() => handleAppClick(app)}
//     >
//       <div className="flex items-start space-x-4">
//         <div className="flex-shrink-0">
//           <img
//             src={app.icon || "/placeholder.svg"}
//             alt={`${app.name} icon`}
//             className="w-16 h-16 rounded-md object-cover"
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-white font-medium text-sm">{app.name}</h3>
//           <p className="text-gray-400 text-xs mt-1">{app.category}</p>
//         </div>
//         <div className="text-right">
//           <span className={`text-xs font-medium ${app.price === "Free" ? "text-gray-400" : "text-white"}`}>
//             {formatPrice(app.price)}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* App Store Container */}
//       <div className="max-w-6xl mx-auto">
//         {/* Best Selling Apps Section */}
//         <div className="mb-10">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold flex items-center">
//               Best selling apps <span className="ml-2">›</span>
//             </h2>
//             <div className="flex space-x-2">
//               <button className="p-2 bg-gray-800 rounded-full">
//                 <span className="sr-only">Previous</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="p-2 bg-gray-800 rounded-full">
//                 <span className="sr-only">Next</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {bestSellingApps.map(renderAppCard)}
//           </div>
//         </div>
  
//         {/* Top Free Apps Section */}
//         <div>
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold flex items-center">
//               Top free apps <span className="ml-2">›</span>
//             </h2>
//             <div className="flex space-x-2">
//               <button className="p-2 bg-gray-800 rounded-full">
//                 <span className="sr-only">Previous</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="p-2 bg-gray-800 rounded-full">
//                 <span className="sr-only">Next</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {topFreeApps.map(renderAppCard)}
//           </div>
//         </div>
//       </div>
  
//       {/* App Detail Modal */}
//       {modalOpen && selectedApp && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
//           <div ref={modalRef} className="bg-gray-800 rounded-xl max-w-md w-full overflow-hidden shadow-xl">
//             <div className="relative p-6">
//               <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//                 <X className="w-6 h-6" />
//               </button>
  
//               <div className="flex items-start space-x-4 mb-6">
//                 <img
//                   src={selectedApp.icon || "/placeholder.svg"}
//                   alt={`${selectedApp.name} icon`}
//                   className="w-20 h-20 rounded-xl object-cover"
//                 />
//                 <div>
//                   <h2 className="text-xl font-bold text-white">{selectedApp.name}</h2>
//                   <p className="text-gray-400 text-sm">{selectedApp.category}</p>
//                   <div className="mt-2">
//                     <span
//                       className={`text-sm font-medium ${selectedApp.price === "Free" ? "text-green-500" : "text-white"}`}
//                     >
//                       {formatPrice(selectedApp.price)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
  
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2">About</h3>
//                 <p className="text-gray-300 text-sm">{selectedApp.description}</p>
//               </div>
  
//               <div className="flex justify-center">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
//                   {selectedApp.price === "Owned" ? "Open" : selectedApp.price === "Free" ? "Get" : "Buy"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )