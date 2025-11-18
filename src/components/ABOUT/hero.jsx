// Hero.jsx
import heroBg from "../../assets/About.svg";
import playIcon from "../../assets/noto_play-button.svg";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex items-end justify-start h-full p-4 sm:p-6 md:p-10">
        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/book-Tristan"
            className="rounded-full bg-[#ffae00] text-white py-2.5 px-6 sm:py-3 sm:px-7 
             font-[Montserrat] font-bold text-[clamp(14px,3vw,17px)] 
             cursor-pointer transition-transform duration-200 ease-linear hover:scale-105 inline-block"
          >
            Unlock Your Purpose
          </a>

          <a
            href="https://vimeo.com/1099140601"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 sm:gap-[0.65rem] 
             bg-transparent text-[#f5c518] font-[Montserrat] font-medium 
             text-[clamp(14px,3vw,19px)] leading-[1] tracking-[0.4px] 
             py-2 sm:py-[0.55rem] px-4 sm:px-[1.4rem] border border-transparent 
             rounded-full cursor-pointer transition-colors duration-200 
             hover:underline shadow-none outline-none focus:outline-none focus:ring-0"
          >
            <img
              src={playIcon}
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
            <span>
              <strong>Watch&nbsp;Tristan&nbsp;In&nbsp;Action</strong>
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}




// import heroBg from "../../assets/About.svg";
// import playIcon from "../../assets/noto_play-button.svg";
// import { Heading } from "../Heading/heading";
// export default function CORPORATION() {
//   return (
//     <div>
//       <Heading imgSrc={heroBg} altText={"Text img"} />
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <div className="
//       relative w-full 
//       h-[50vh] sm:h-[80vh] lg:h-screen 
//       overflow-hidden
//     ">
      
//       {/* Background image */}
//       <img
//         src={heroBg}
//         alt="Background"
//         className="
//           absolute inset-0 w-full h-full z-0
//           object-contain lg:object-cover
//           bg-black lg:bg-transparent
//         "
//       />

//       {/* Foreground content */}
//       <div className="relative z-10 flex items-end justify-start h-full p-4 sm:p-6 md:p-10">
        
//         <div className="hidden lg:flex flex-row gap-3 sm:gap-4 w-full sm:w-auto">

//           {/* Unlock button */}
//           <a
//             href="/book-Tristan"
//             className="rounded-full bg-[#ffae00] text-white 
//             py-2.5 px-6 sm:py-3 sm:px-7 
//             font-[Montserrat] font-bold 
//             text-[clamp(14px,3vw,17px)]
//             cursor-pointer transition-transform hover:scale-105 
//             text-center w-full sm:w-auto"
//           >
//             Unlock Your Purpose
//           </a>

//           {/* Watch button */}
//           <a
//             href="https://vimeo.com/1099140601"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center justify-center gap-2 sm:gap-3 
//             text-[#f5c518] font-[Montserrat] font-medium 
//             text-[clamp(14px,3vw,19px)]
//             py-2 sm:py-2.5 px-4 sm:px-5 
//             rounded-full hover:underline 
//             w-full sm:w-auto"
//           >
//             <img
//               src={playIcon}
//               alt=""
//               className="w-5 h-5 sm:w-6 sm:h-6"
//             />
//             <strong>Watch Tristan In Action</strong>
//           </a>

//         </div>

//       </div>
//     </div>
//   );
// }
