"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

const shimmerTransition = {
  duration: 2.4,
  repeat: Infinity as const,
  ease: [0.65, 0, 0.35, 1] as const,
};

const floatTransition = {
  duration: 4.5,
  repeat: Infinity as const,
  repeatType: "mirror" as const,
  ease: [0.45, 0, 0.55, 1] as const,
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="uvani-loading"
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#08081f]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.45, 0, 0.55, 1] } }}
        >
          {/* Ambient gradients */}
          <motion.div
            className="absolute -top-1/4 -left-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(192,154,108,0.18)_0%,_transparent_65%)]"
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{ scale: 1.1, opacity: 0.75 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: [0.33, 1, 0.68, 1] }}
          />
          <motion.div
            className="absolute -bottom-1/3 -right-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(120,84,187,0.2)_0%,_transparent_70%)]"
            initial={{ scale: 1.1, opacity: 0.3 }}
            animate={{ scale: 0.95, opacity: 0.6 }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: [0.33, 1, 0.68, 1] }}
          />

          {/* Floating particles */}
          {[...Array(9)].map((_, idx) => (
            <motion.span
              key={idx}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#C09A6C]/70 shadow-[0_0_8px_rgba(192,154,108,0.6)]"
              style={{
                top: `${10 + idx * 9}%`,
                left: `${idx % 2 === 0 ? 20 + idx * 6 : 12 + idx * 5}%`,
              }}
              animate={{
                y: [0, idx % 2 === 0 ? -10 : 12, 0],
                opacity: [0.25, 0.85, 0.25],
              }}
              transition={{ duration: 5 + idx * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <motion.div
            className="relative z-10 flex w-full max-w-[420px] flex-col items-center gap-10 px-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
          >
            <motion.div
              className="relative flex flex-col items-center gap-6 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.45, 0, 0.55, 1] }}
            >
              <motion.div
                className="relative"
                animate={{ y: [-4, 4, -4] }}
                transition={floatTransition}
              >
                <Image
                  src="/logo/UVANI logo.png"
                  alt="Uvani logo"
                  width={220}
                  height={96}
                  priority
                  className="h-auto w-52 select-none drop-shadow-[0_10px_45px_rgba(192,154,108,0.28)]"
                />
              </motion.div>

              <motion.p
                className="font-serif text-xl tracking-[0.4em] uppercase text-[#C09A6C]/80"
                initial={{ letterSpacing: "0.1em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              >
                Tailoring Elegance
              </motion.p>
            </motion.div>

            <div className="relative flex w-full max-w-sm flex-col items-center gap-6">
              <div className="relative h-24 w-full overflow-visible">
                <motion.span
                  className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 origin-left bg-gradient-to-r from-transparent via-[#D4B483] to-transparent"
                  animate={{ scaleX: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
                  transition={shimmerTransition}
                />

                <motion.div
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#C09A6C] via-[#b9885a] to-[#8d623d] shadow-[0_6px_30px_rgba(192,154,108,0.45)]"
                  animate={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                >
                  <motion.div
                    className="relative h-6 w-1 rounded-full bg-white"
                    animate={{ y: [0, -2, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                  />
                  <motion.span
                    className="absolute bottom-1 h-2 w-2 rounded-full bg-[#4D2F1F]"
                    animate={{ x: [0, 1, -1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                  />
                </motion.div>

                <motion.span
                  className="absolute left-[12%] top-1/2 h-[2px] w-[76%] origin-left rounded-full bg-gradient-to-r from-[#C09A6C]/0 via-[#C09A6C] to-[#C09A6C]/20"
                  animate={{ scaleX: [0, 1, 0], opacity: [0.2, 1, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
                  style={{ transformOrigin: "left center" }}
                />

                <motion.div
                  className="absolute left-[12%] top-[30%] h-5 w-5 rounded-full border border-[#C09A6C]/60"
                  animate={{ x: [0, "76%"], y: [0, 6, -6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
                >
                  <motion.span
                    className="absolute left-1/2 top-full h-4 w-px -translate-x-1/2 origin-top bg-[#C09A6C]"
                    animate={{ scaleY: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror", ease: [0.45, 0, 0.55, 1] }}
                  />
                </motion.div>
              </div>

              <motion.div
                className="relative flex w-full max-w-xs items-center justify-between"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
              >
                <motion.span
                  className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C09A6C]/60 to-transparent"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={shimmerTransition}
                />
                <motion.span
                  className="font-sans text-sm uppercase tracking-[0.35em] text-[#f6e7d3]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
                >
                  tailoring in progress
                </motion.span>
                <motion.span
                  className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C09A6C]/60 to-transparent"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={shimmerTransition}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
