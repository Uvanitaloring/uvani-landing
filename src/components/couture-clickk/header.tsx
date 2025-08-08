'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Easing
const easeOutSoft = [0.22, 1, 0.36, 1] as const;

// Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const floatInItem: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

const underlineSweep = {
  initial: { scaleX: 0, opacity: 0.85, originX: 0 as const },
  hover: { scaleX: 1, opacity: 1, transition: { duration: 0.35, ease: easeOutSoft } },
  exit: { scaleX: 0, opacity: 0.85, transition: { duration: 0.25, ease: 'easeIn' } },
};

// Animated Hamburger
const AnimatedHamburgerIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const topVariants: Variants = {
    closed: { d: 'M 2 5 L 18 5' },
    open: { d: 'M 3 16.5 L 17 2.5' },
  };
  const bottomVariants: Variants = {
    closed: { d: 'M 2 15 L 18 15' },
    open: { d: 'M 3 2.5 L 17 16.5' },
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="group hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      aria-label="Toggle Menu"
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        className="stroke-current stroke-2 transition-transform duration-300 group-hover:scale-110"
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#softGlow)">
          <motion.path
            variants={topVariants}
            transition={{ duration: 0.45, ease: easeOutSoft }}
            className="stroke-[#D4AF37] rounded"
          />
          <motion.path
            variants={bottomVariants}
            transition={{ duration: 0.45, ease: easeOutSoft }}
            className="stroke-[#D4AF37] rounded"
          />
        </g>
      </motion.svg>
    </Button>
  );
};

// Logo
const Logo = () => (
  <motion.div variants={floatInItem}>
    <Link href="/" className="flex items-center group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-3 transition-transform duration-700 group-hover:rotate-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1E4B3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A47C34" />
          </linearGradient>
        </defs>
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#goldGrad)" opacity="0.25" />
        <path d="M2 17L12 22L22 17" stroke="#A47C34" strokeWidth="2" />
        <path d="M2 12L12 17L22 12" stroke="#A47C34" strokeWidth="2" />
      </svg>
      <div className="flex flex-col">
        <span className="font-serif font-extrabold text-xl tracking-wider text-white">
          UVANI
        </span>
        <span className="text-xs font-light tracking-[0.25em] text-[#D4AF37]/90 -mt-1">
          COUTURE
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = prev || 'auto';
    };
  }, [isOpen]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center',
        'transition-[height,opacity,background-color,backdrop-filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isScrolled ? 'h-20' : 'h-24'
      )}
      style={{
        background: isScrolled ? 'rgba(8, 8, 31, 0.55)' : 'rgba(8, 8, 31, 0.0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255,255,255,0.10)'
          : '1px solid rgba(255,255,255,0)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.25)' : '0 0 0 rgba(0,0,0,0)',
      }}
      initial={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: easeOutSoft }}
    >
      {/* bottom gradient fade for contrast */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 -bottom-px h-8 opacity-0 transition-opacity duration-700',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background: 'linear-gradient(to bottom, rgba(8,8,31,0.25), rgba(8,8,31,0))',
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-1"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={floatInItem}>
                <Link
                  href={link.href}
                  className={cn(
                    'group relative px-4 py-2 text-sm font-medium tracking-wide',
                    'text-gray-300 hover:text-white transition-all duration-300'
                  )}
                >
                  <span className="relative inline-flex items-center gap-2">
                    <span className="font-serif">{link.label}</span>
                    <motion.span
                      className="h-1 w-1 rounded-full bg-[#D4AF37]/70 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  </span>

                  {/* Golden aura */}
                  <span
                    className={cn(
                      'absolute inset-0 -z-10 rounded-full opacity-0',
                      'bg-[radial-gradient(120%_120%_at_50%_0%,rgba(212,175,55,0.18),transparent_60%)]',
                      'transition-opacity duration-300 group-hover:opacity-100'
                    )}
                  />

                  {/* Underline sweep */}
                  <motion.span
                    className="absolute left-4 right-4 -bottom-[2px] h-[2px] origin-left bg-gradient-to-r from-[#F1E4B3] via-[#D4AF37] to-[#A47C34]"
                    initial={underlineSweep.initial}
                    whileHover={underlineSweep.hover}
                    exit={underlineSweep.exit}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Icon */}
          <motion.div className="md:hidden text-[#D4AF37] z-50" variants={floatInItem}>
            <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 flex flex-col items-center justify-center"
            variants={{
              open: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.6, ease: easeOutSoft },
              },
              closed: {
                y: '-100%',
                opacity: 0,
                filter: 'blur(6px)',
                transition: { duration: 0.45, ease: [0.64, 0, 0.78, 0] },
              },
            }}
            style={{
              background:
                'linear-gradient(180deg, rgba(8,8,31,1) 0%, rgba(16,16,50,0.95) 60%, rgba(16,16,50,0.85) 100%)',
            }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* shimmer overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: easeOutSoft }}
              style={{
                background:
                  'radial-gradient(100% 80% at 50% 0%, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 60%)',
              }}
            />

            <nav className="relative z-10">
              <motion.ul
                className="flex flex-col items-center space-y-3"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={floatInItem}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif font-semibold text-2xl text-gray-100 hover:text-white transition-colors duration-300 py-2 relative"
                      onClick={() => setIsOpen(false)}
                    >
                      <span
                        className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            'radial-gradient(40% 40% at 50% 50%, rgba(212,175,55,0.18), transparent)',
                        }}
                      />
                      {link.label}
                      <motion.span
                        className="block mt-1 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                        initial={{ scaleX: 0, opacity: 0.6 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: easeOutSoft }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <motion.div
              className="absolute bottom-10 text-center text-[#A47C34] text-xs font-serif tracking-[0.35em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              COUTURE CLICK © 2025
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
