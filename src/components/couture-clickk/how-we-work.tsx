"use client";
import { Bookmark, Calendar, Car, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Bookmark,
    step: 'Step 1',
    title: 'Book on our website',
    description:
      'Visit our website and fill out the booking form with your details and service requirements.',
  },
  {
    icon: Calendar,
    step: 'Step 2',
    title: 'Choose your time slots',
    description:
      'Select a convenient time for our team to visit you for measurements and consultation.',
  },
  {
    icon: Scissors,
    step: 'Step 3',
    title: 'Pickup & Tailoring',
    description:
      'Our experts will pick up your garments and perform alterations with precision and care.',
  },
  {
    icon: Car,
    step: 'Step 4',
    title: 'Delivery at door',
    description:
      'Receive your perfectly altered clothing delivered back to your doorstep, ready to wear.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    rotate: 10,
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

export function HowWeWork() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-28 md:py-40 bg-gradient-to-br from-[#0e0718] via-[#1c0e29] to-[#0e0718]">
      {/* Elegant Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      {/* Refined Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700/15 via-transparent to-transparent rounded-full blur-[90px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 font-medium text-amber-400 tracking-wider">PREMIUM PROCESS</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300">We Work</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            A seamless process for your convenience and perfect results every time.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2">
            <svg
              width="100%"
              height="12"
              className="overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 6 C200 6, 200 12, 400 6 S600 0, 800 6 S1000 12, 1200 6"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8, 8"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center relative px-4 group"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#2d183a]/80 via-[#1a1026]/80 to-[#23143a]/80 border-2 border-purple-900/40 shadow-xl mb-6 z-10 overflow-hidden backdrop-blur-xl"
                  variants={iconVariants}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-transparent z-10">
                    <step.icon className="w-10 h-10 text-amber-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <motion.span 
                    className="absolute -bottom-2 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    {step.step}
                  </motion.span>
                </motion.div>

                <motion.h3 
                  className="font-headline text-xl font-semibold mb-3 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="font-body text-purple-200/80 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  {step.description}
                </motion.p>

                {/* Animated indicator */}
                <motion.div 
                  className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 rounded-full -translate-x-1/2 -translate-y-2 z-20 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.3 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
