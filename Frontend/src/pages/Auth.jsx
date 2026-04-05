import React from "react";
import { SiProbot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

const Auth = () => {
    const handleGoogleAuth = async() => {
        try{
            const response = await signInWithPopup(auth,provider)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden flex flex-col font-sans text-slate-100 selection:bg-emerald-500/30">
      {/* Background Glow Effects (Emerald/Teal Theme) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-teal-600/20 blur-[120px] sm:blur-[150px] rounded-full opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-emerald-600/20 blur-[100px] sm:blur-[120px] rounded-full opacity-60 pointer-events-none" />

      {/* Subtle Starry/Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top Nav */}
      <nav className="relative z-10 w-full px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <SiProbot className="text-[28px] text-white" />
          <span className="text-xl font-bold tracking-tight text-white">
            PrepWise.ai
          </span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center mt-[-40px]">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md flex items-center gap-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Welcome to PrepWise ✦
          </span>
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-6"
        >
          Transform Your <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 pb-2">
            Interview Strategy
            {/* Hand-drawn style underline */}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-emerald-500 opacity-80"
              viewBox="0 0 200 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2.00035 7.15176C55.4243 2.12871 113.885 -0.662704 198.001 5.37682"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <br />
          <span className="font-light italic text-slate-200">
            with the Power of AI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto text-[15px] sm:text-[17px] mb-10 leading-relaxed"
        >
          Boost your confidence, increase success rates, and unlock data-driven
          insights with our advanced AI mock interviews and continuous feedback
          loop.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.button
            onClick={handleGoogleAuth}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 sm:px-10 py-4 rounded-full font-semibold shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)] transition-all duration-300"
          >
            <FcGoogle className="text-[26px] bg-white rounded-full p-[2px] text-slate-900" />
            <span className="text-[17px] tracking-wide">
              Continue with Google
            </span>
          </motion.button>
        </motion.div>

        {/* Footer info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-xs text-slate-500 font-medium"
        >
          By continuing, you agree to our Terms and Privacy Policy.
        </motion.p>
      </div>

      {/* Bottom Trust Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full py-6 sm:py-8 border-t border-white/5 bg-black/30 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[13px] text-slate-400 gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <strong className="text-white text-xl sm:text-2xl block font-bold tracking-tight">
              10,000+
            </strong>
            <span className="opacity-80">
              Students use us to prep for their dream jobs
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-40 grayscale pointer-events-none">
            <span className="font-bold text-xl tracking-tighter">Spotify</span>
            <span className="font-black text-xl italic tracking-tighter">
              Amazon
            </span>
            <span className="font-bold text-xl tracking-tight">Google</span>
            <span className="font-black text-xl tracking-tighter uppercase">
              Netflix
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
