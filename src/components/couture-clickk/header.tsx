'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Re-usable Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Custom Animated Hamburger Icon ---
const AnimatedHamburgerIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      path01Controls.start({ d: "M 3 2.5 L 17 16.5" });
      path02Controls.start({ d: "M 3 16.5 L 17 2.5" });
    } else {
      path01Controls.start({ d: "M 2 5 L 18 5" });
      path02Controls.start({ d: "M 2 15 L 18 15" });
    }
  }, [isOpen, path01Controls, path02Controls]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      aria-label="Toggle Menu"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" className="stroke-current">
        <motion.path
          strokeWidth="2"
          strokeLinecap="round"
          animate={path01Controls}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          strokeWidth="2"
          strokeLinecap="round"
          animate={path02Controls}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </svg>
    </Button>
  );
};


// --- Refined Logo Component ---
const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Link href="/" className="flex items-center group">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 transition-transform duration-500 group-hover:rotate-12">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" className="stroke-2 stroke-[#D4AF37] fill-[#D4AF37]/20 transition-all duration-500 group-hover:fill-[#D4AF37]/40" />
        <path d="M2 17L12 22L22 17" className="stroke-2 stroke-[#A47C34]" />
        <path d="M2 12L12 17L22 12" className="stroke-2 stroke-[#A47C34]" />
      </svg>
      <div className="flex flex-col">
        <span className="font-serif font-extrabold text-xl tracking-wider text-white">
          COUTURE
        </span>
        <span className="text-xs font-light tracking-[0.2em] text-[#A47C34] -mt-1">
          CLICK
        </span>
      </div>
    </Link>
  </motion.div>
);

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];


// --- The Main Header Component ---
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-[#08081f]/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent',
        !isScrolled && 'border-b-0 !border-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center"
          initial={{ height: '7rem' }}
          animate={{ height: isScrolled ? '4.5rem' : '6rem' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 relative" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-medium text-sm text-gray-300 hover:text-white transition-colors duration-300 relative z-10"
                onMouseEnter={() => setHoveredLink(link.href)}
              >
                {link.label}
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-[#D4AF37] z-50">
            <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#08081f] flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, clipPath: 'circle(10% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(10% at 90% 10%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav>
                <motion.ul 
                    className="flex flex-col items-center space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {navLinks.map((link) => (
                        <motion.li key={link.href} variants={staggerItem}>
                            <Link
                                href={link.href}
                                className="font-serif font-bold text-3xl text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
            <motion.div
              className="absolute bottom-8 text-center text-[#A47C34] text-xs font-serif tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              COUTURE CLICK &copy; 2025
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}