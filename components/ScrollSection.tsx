// "use client";
// import React, { useRef } from "react";
// import useIsVisible from "@/hooks/useIsVisible"; // Your custom visibility hook

// export default function ScrollSection() {
//   const ref1 = useRef<HTMLDivElement>(null);
//   const isVisible1 = useIsVisible(ref1);

//   const ref2 = useRef<HTMLDivElement>(null);
//   const isVisible2 = useIsVisible(ref2);

//   const ref3 = useRef<HTMLDivElement>(null);
//   const isVisible3 = useIsVisible(ref3);

//   return (
//     <div className="relative flex min-h-screen bg-transparent">
//       {/* Left Half - Text Boxes */}
//       <div className="w-1/2 flex flex-col justify-center gap-4 px-8">
//         {/* Reason 1 */}
//         <div
//           ref={ref1}
//           className={`p-4 bg-white rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] text-center transform transition duration-700 hover:scale-105 ${
//             isVisible1
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-16"
//           }`}
//         >
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             🎉 Membership Discounts
//           </h3>
//           <p className="text-sm text-gray-600">
//             Join a friendly and active community passionate about Japanese
//             culture and language.
//           </p>
//         </div>

//         {/* Reason 2 */}
//         <div
//           ref={ref2}
//           className={`p-4 bg-white rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] text-center transform transition duration-700 hover:scale-105 delay-200 ${
//             isVisible2
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-16"
//           }`}
//         >
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             🎊 Exclusive Events
//           </h3>
//           <p className="text-sm text-gray-600">
//             Access exclusive events, workshops, and cultural activities.
//           </p>
//         </div>

//         {/* Reason 3 */}
//         <div
//           ref={ref3}
//           className={`p-4 bg-white rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] text-center transform transition duration-700 hover:scale-105 delay-400 ${
//             isVisible3
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-16"
//           }`}
//         >
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             🚀 Valuable Resources
//           </h3>
//           <p className="text-sm text-gray-600">
//             Get access to language resources, study groups, and more!
//           </p>
//         </div>
//       </div>
//       {/* Right Half - Ball Image with Attached Arrow */}
//       <div className="w-1/2 flex items-center justify-center">
//         <a
//           href="https://clubs.msa.monash.edu/organisation/7786/" // Replace with your desired URL
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative flex items-center justify-center group"
//         >
//           {/* Container for Ball and Arrow */}
//           <div className="relative transition-transform duration-300 group-hover:scale-110">
//             {/* Ball Image */}
//             <img
//               src="/images/banner.png"
//               alt="Ball Image"
//               className="w-[400px] h-auto object-contain"
//               style={{
//                 boxShadow: "0 0 30px 10px rgba(255,255,255,0.7)", // White glow
//                 borderRadius: "10px", // Optional rounded edges
//               }}
//             />

//             {/* Arrow Image */}
//             <img
//               src="/images/whitearrow.png"
//               alt="Click Me Arrow"
//               className="absolute -top-[80px] -right-[79px] w-[150px] h-auto"
//             />
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }
