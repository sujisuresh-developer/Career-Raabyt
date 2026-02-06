import { Link } from "react-router-dom";
import logo from "../src/assets/icon.png";

export default function Coming() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Background logo */}
      <img
        src={logo}
        alt="logo"
        className="
          absolute 
          w-[360px] sm:w-[400px] md:w-[500px] lg:w-[700px]
          opacity-40 sm:opacity-50 md:opacity-70
          blur md:blur
          mt-10
          
        "
      />

      {/* Bottom-left eclipse */}
      <div
        className="
          absolute 
          -left-[180px] -bottom-[180px]
          sm:-left-[220px] sm:-bottom-[220px]
          md:-left-[260px] md:-bottom-[260px]
          
          
          w-[300px] h-[300px]
          sm:w-[490px] sm:h-[380px]
          md:w-[490px] md:h-[400px]
          lg:w-[600px] lg:h-[600px]
          rounded-full 
         bg-[radial-gradient(circle_at_center,_#FF3EA5_0%,_#933FBB_70%)]
          opacity-80
          blur-[100px] sm:blur-[120px]
        "
      />

      {/* Top-right eclipse */}
      <div
        className="
          absolute 
          -right-[180px] -top-[180px]
          sm:-right-[220px] sm:-top-[220px]
          md:-right-[260px] md:-top-[260px]
          
          w-[300px] h-[300px]
          sm:w-[490px] sm:h-[380px]
          md:w-[400px] md:h-[00px]
          lg:w-[600px] lg:h-[600px]
          
          rounded-full 
         bg-[radial-gradient(circle_at_center,_#FF3EA5_0%,_#933FBB_70%)]
          opacity-80
          blur-[100px] sm:blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <Link to="/careers"
          className="
            px-8 sm:px-10 py-2.5 sm:py-3
            rounded-full 
            bg-white/10 
            border border-white/20
            backdrop-blur-md 
            text-white 
            tracking-widest 
            text-xs sm:text-sm
            hover:bg-white/20 transition
          "
        >
          CAREERS
        </Link>

        <p className="mt-4 sm:mt-5 text-[10px] sm:text-xs text-white/70 max-w-xs mx-auto font-bold">
          Love tech? Love impact? Join our crew and let’s create amazing things together!
        </p>
      </div>

    </section>
  );
}
