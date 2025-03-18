// import { useState } from "react";
// import AuthForm from "./Authentication/AuthFrom";

// export default function Hero() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900 relative">
//       {/* Background Effect */}
//       <div 
//         className="absolute inset-0 opacity-40 bg-cover bg-fixed"
//         style={{
//           backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.9) 60%), url('your-image-url.jpg')`,
//         }}
//       />

//       {/* Auth Box */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg z-10 w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {isLogin ? "Login to Your Account" : "Create a New Account"}
//         </h2>

//         <AuthForm isLogin={isLogin} />

//         <p className="text-center text-gray-400 mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <button onClick={() => setIsLogin(!isLogin)} className="text-blue-400 ml-2">
//             {isLogin ? "Sign Up" : "Log In"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
