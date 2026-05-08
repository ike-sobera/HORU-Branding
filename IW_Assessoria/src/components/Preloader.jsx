import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500); // Mais tempo para caber a animação de traçado + preenchimento + pausa
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A1128]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* Efeito de Brilho ao fundo */}
            <motion.div
              className="absolute inset-[-50px] bg-accent/10 blur-3xl rounded-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
            />
            
            {/* Logo SVG Inline para animação de traçado */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="150" 
              height="90" 
              viewBox="0 0 49.0255 28.6426"
              className="relative w-auto h-24 md:h-32"
            >
              <g transform="translate(0, 0)">
                {/* Caminho maior (Letra W ou similar) */}
                <motion.path
                  transform="matrix(1,0,0,-1,46.9152,.25839997)"
                  d="M0 0H-.514-8.253V-3.992H-2.282L-10.662-22.896-20.848 0H-25.597L-20.955-10.418-26.498-22.859-36.646 0H-37.265-41.395-46.472V-3.992H-39.617L-29.002-27.835-28.871-28.126H-26.695L-19.865-12.864-13.073-28.126H-10.896L1.668 0Z"
                  stroke="#c7ad6c"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, fill: "rgba(199, 173, 108, 0)" }}
                  animate={{ 
                    pathLength: 1, 
                    fill: "rgba(199, 173, 108, 1)" 
                  }}
                  transition={{ 
                    pathLength: { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] },
                    fill: { delay: 1.8, duration: 0.8, ease: "easeInOut" }
                  }}
                />
                {/* Caminho menor (Letra I ou similar) */}
                <motion.path
                  transform="matrix(1,0,0,-1,0,28.6426)"
                  d="M.442 .258H4.94V20.719H.442Z"
                  stroke="#c7ad6c"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, fill: "rgba(199, 173, 108, 0)" }}
                  animate={{ 
                    pathLength: 1, 
                    fill: "rgba(199, 173, 108, 1)" 
                  }}
                  transition={{ 
                    pathLength: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3 },
                    fill: { delay: 1.8, duration: 0.8, ease: "easeInOut" }
                  }}
                />
              </g>
            </svg>
            
            {/* Subtexto sutil */}
            <motion.div
              className="mt-8 text-white/30 text-[10px] uppercase tracking-[0.5em] font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              Inteligência & Performance
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
