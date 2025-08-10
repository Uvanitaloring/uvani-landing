"use client";
import { Bookmark, Calendar, Car, Scissors, ArrowRight } from 'lucide-react';
// Assuming you have a Button component, if not, replace with a standard button
// import { Button } from '@/components/ui/button';
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);
import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useRef } from 'react';

// Data for the steps
const steps = [
  {
    icon: Bookmark,
    step: 'Step 1',
    title: 'Book Your Appointment',
    description: 'Schedule your tailoring service through our seamless online booking system.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Calendar,
    step: 'Step 2',
    title: 'Personal Consultation',
    description: 'Our master tailor visits you at your preferred time for measurements.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Scissors,
    step: 'Step 3',
    title: 'Precision Tailoring',
    description: 'Expert craftsmanship with attention to every detail of your garments.',
    color: 'from-rose-500 to-rose-600'
  },
  {
    icon: Car,
    step: 'Step 4',
    title: 'Convenient Delivery',
    description: 'Your perfectly tailored clothing delivered to your doorstep.',
    color: 'from-indigo-500 to-indigo-500'
  },
];

// Framer Motion variants for animations
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150
    }
  },
  hover: {
    rotate: 5,
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export default function HowWeWork() {
  // Ref to the SVG path element to calculate its length
  const pathRef = useRef<SVGPathElement>(null);
  // State to track if the main animation has run to prevent re-triggering
  const [hasAnimated, setHasAnimated] = useState(false);
  // State to manage the visibility of each step card
  const [stepVisible, setStepVisible] = useState(Array(steps.length).fill(false));
  // State to control hover effects only after the initial animation is complete
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Motion values for the animated line and needle
  const pathLength = useMotionValue(0);
  const needleX = useMotionValue(0);
  const needleY = useMotionValue(0);
  const needleRotate = useMotionValue(0);

  // Trigger points for each step to appear (as a percentage of the path length)
  const stepTriggerPoints = [0.12, 0.37, 0.62, 0.87];

  // This effect runs when the component enters the viewport
  const handleViewportEnter = () => {
    if (hasAnimated || !pathRef.current) return;
    setHasAnimated(true); // Ensure animation runs only once

    // Start the line-drawing animation using framer-motion's animate function
    const lineAnimation = animate(pathLength, 1, {
      duration: 3,
      ease: "easeInOut",
    });

    // This function will be called for every frame of the animation
    const unsubscribe = pathLength.on("change", (latest) => {
      if (pathRef.current) {
        // Get the total length of the SVG path
        const totalLength = pathRef.current.getTotalLength();
        // Calculate the current point on the path based on the animation progress
        const point = pathRef.current.getPointAtLength(latest * totalLength);
        // Calculate a previous point to determine the angle for the needle
        const prevPoint = pathRef.current.getPointAtLength(Math.max(0, latest * totalLength - 1));
        
        // Calculate angle from the difference in points and convert to degrees
        const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x) * (180 / Math.PI);

        // Update needle's position and rotation motion values
        needleX.set(point.x);
        needleY.set(point.y);
        needleRotate.set(angle);

        // Check if any step's trigger point has been passed, and if so, make it visible
        stepTriggerPoints.forEach((triggerPoint, index) => {
            if (latest >= triggerPoint && !stepVisible[index]) {
                setStepVisible(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
            }
        });
      }
    });

    // Cleanup function to stop the animation and unsubscribe on component unmount
    return () => {
      lineAnimation.stop();
      unsubscribe();
    };
  };

  return (
    // Assuming a dark background, added bg-gray-900 and text-white for standalone visibility
  <section id="how-it-works" className="relative overflow-hidden pt-8 pb-24 md:pt-10 md:pb-36 bg-none  text-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {/* Placeholder for background pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stitched-wool.png')] bg-repeat opacity-5" />
      </div>
      
      {/* Refined gradient accents */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="mx-4 text-xs font-sans font-medium tracking-widest text-[#C09A6C] uppercase">Tailoring Process</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] leading-tight font-medium text-neutral-100 mb-6">
            The <span className="text-[#C09A6C]">Uvani</span> Experience
          </h2>
          
          <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Our meticulous four-step process ensures perfection in every stitch and complete convenience for you.
          </p>
        </motion.div>

        {/* Process Steps Container */}
        <motion.div 
          className="relative"
          onViewportEnter={handleViewportEnter} // This triggers the animation
          viewport={{ once: true, margin: "-200px" }}
        >
          {/* Animated connector line and needle - NOW FULLY RESPONSIVE */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1152 100" 
              preserveAspectRatio="none"
              style={{ height: '120px' }} // Fixed height for consistent alignment
            >
              <defs>
                <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                  <stop offset="10%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="90%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* The SVG path that the needle will follow. Coordinates are relative to the viewBox */}
              <motion.path
                ref={pathRef}
                d="M0 50 C192 50, 192 60, 384 50 S576 40, 768 50 S960 60, 1152 50"
                stroke="url(#process-line-gradient)"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke" // Keeps stroke width consistent on scaling
                // Animate the pathLength style property to "draw" the line
                style={{ pathLength }}
              />
            </svg>
            {/* The needle element that moves along the path */}
            <motion.div
              className="absolute top-0 left-0"
              // Bind needle's style to motion values. The transform origin is adjusted for better rotation.
              style={{ x: needleX, y: needleY, rotate: needleRotate, transformOrigin: '25% 50%' }}
            >
              {/* Using an inline SVG for the needle for better control and no external asset dependency */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "translate(-50%, -50%)"}}>
                <path d="M16.9982 2.83993C16.588 2.2223 15.756 2.09526 15.1384 2.50548C14.5208 2.9157 14.3937 3.74768 14.804 4.36531L23.444 16.9982L2.99902 20.9982C2.2834 21.1033 1.83838 21.7984 1.9435 22.514C2.04861 23.2296 2.74373 23.6747 3.45935 23.5695L24.554 19.434L16.9982 2.83993Z" fill="#C09A6C"/>
                <path d="M26.9982 22.9982L17.9982 12.9982L28.9982 24.9982L26.9982 22.9982Z" fill="#FBBF24"/>
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-0 md:gap-x-8 relative pt-16 md:pt-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center relative px-4 group"
                variants={itemVariants}
                // Animate based on the stepVisible state
                animate={stepVisible[index] ? 'visible' : 'hidden'}
                initial="hidden"
                whileHover={hasAnimated ? "hover" : undefined}
                onHoverStart={() => hasAnimated && setHoveredStep(index)}
                onHoverEnd={() => hasAnimated && setHoveredStep(null)}
              >
                {/* Step Indicator Dot - Animates with the step */}
                <motion.div 
                  className="absolute -top-3 left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 -translate-x-1/2 z-20 shadow-lg"
                  variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                {/* Icon Container */}
                <motion.div 
                  className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e102d] to-[#23143a] border border-[#C09A6C]/20 shadow-lg mb-6 z-10 overflow-hidden backdrop-blur-sm"
                  variants={iconVariants}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <step.icon className="w-10 h-10 text-[#C09A6C] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </motion.div>

                {/* Step Content */}
                <div className="relative z-10">
                  <span className="inline-block mb-3 text-xs font-sans font-medium tracking-widest text-[#C09A6C] uppercase">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-medium text-neutral-100 font-serif mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 font-sans text-sm mb-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-neutral-300 mb-8 max-w-2xl mx-auto">
            Ready to experience bespoke tailoring at its finest?
          </p>
          
          <Button 
            size="lg"
            className="group relative overflow-hidden px-6 py-3 bg-[#C09A6C] text-neutral-900 hover:bg-[#D4B483] hover:text-neutral-900
            rounded-lg font-sans font-semibold text-base tracking-wide
            transition-all duration-300 ease-out
            focus-visible:ring-2 focus-visible:ring-[#C09A6C]/50 focus-visible:ring-offset-2
            shadow-lg shadow-[#C09A6C]/20 hover:shadow-[#D4B483]/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#C09A6C] to-[#D4B483] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex flex-row items-center justify-center">
              Begin Your Tailoring Journey
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}