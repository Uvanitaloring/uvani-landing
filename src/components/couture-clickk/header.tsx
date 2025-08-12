'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Easing curves and Variants ---
const easeOutElastic = [0.5, 1.5, 0.5, 1] as const;
const easeInOutExpo = [0.87, 0, 0.13, 1] as const;
const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      ease: easeInOutExpo,
    },
  },
};

const floatInItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOutBack,
    },
  },
};

const underlineSweep: Variants = {
  initial: {
    scaleX: 0,
    opacity: 0,
    originX: 0 as const,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: easeInOutExpo,
    },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn' as any,
    },
  },
};

// Variant for the dropdown container
const dropdownMenu: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5, 
            ease: [0.34, 1.3, 0.64, 1] // A bouncy ease
        },
    },
    closed: {
        opacity: 0,
        y: "-20%",
        transition: { 
            duration: 0.3, 
            ease: 'easeIn' 
        },
    },
};


// --- Sub-components ---
const AnimatedHamburgerIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void; }) => {
  const topVariants: Variants = {
    closed: { d: 'M 2 5 L 20 5', strokeWidth: 2, opacity: 1 },
    open: { d: 'M 4 16 L 16 4', strokeWidth: 2.5, opacity: 0.9 },
  };
  const middleVariants: Variants = {
    closed: { d: 'M 2 12 L 20 12', strokeWidth: 2, opacity: 1 },
    open: { d: 'M 10 10 L 10 10', strokeWidth: 0, opacity: 0 },
  };
  const bottomVariants: Variants = {
    closed: { d: 'M 2 19 L 20 19', strokeWidth: 2, opacity: 1 },
    open: { d: 'M 4 4 L 16 16', strokeWidth: 2.5, opacity: 0.9 },
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
        viewBox="0 0 24 24"
        className="stroke-current"
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
      >
        <motion.path
          variants={topVariants}
          transition={{ duration: 0.6, ease: easeOutBack }}
          className="stroke-[#D4AF37]"
          strokeLinecap="round"
        />
        <motion.path
          variants={middleVariants}
          transition={{ duration: 0.4, ease: easeInOutExpo }}
          className="stroke-[#D4AF37]"
          strokeLinecap="round"
        />
        <motion.path
          variants={bottomVariants}
          transition={{ duration: 0.6, ease: easeOutBack }}
          className="stroke-[#D4AF37]"
          strokeLinecap="round"
        />
      </motion.svg>
    </Button>
  );
};

const Logo = () => (
  <motion.div variants={floatInItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="/" className="flex items-center group relative">
      <div className="relative">
        <Image
          src="https://i.ibb.co/WvkYW6zV/UVANI-logo.png"
          alt="UVANI Logo"
          width={120}
          height={90}
          priority
          className="h-auto w-20 sm:w-24 lg:w-32 rounded-lg transition-all duration-700 group-hover:rotate-[5deg] group-hover:brightness-110"
        />
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(212,175,55,0.5) 0%, transparent 70%)',
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      <motion.span
        className="absolute -bottom-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#D4AF37] shadow-[0_0_15px_3px_rgba(212,175,55,0.7)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 500 }}
      />
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This effect is crucial and correctly locks body scroll. Keep it.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center',
        'transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]',
        isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'
      )}
      style={{
        background: isScrolled ? 'rgba(8, 8, 31, 0.85)' : 'none',
        backdropFilter: isScrolled ? 'blur(12px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.15)' : 'none',
        boxShadow: isScrolled ? '0 15px 40px rgba(0,0,0,0.3)' : 'none',
      }}
      initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: easeOutElastic }}
    >
      {isScrolled && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.15,
              background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, transparent 60%)'
            }}
            transition={{ duration: 1, ease: easeInOutExpo }}
          />
          <motion.div
            className={cn(
              'pointer-events-none absolute inset-x-0 -bottom-px h-12',
              'bg-gradient-to-t from-[#08081f] to-transparent opacity-70'
            )}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="flex justify-between items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Logo />

          <motion.nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                variants={floatInItem}
                onHoverStart={() => setHoveredItem(link.href)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'group relative px-3 py-2 md:px-4 text-xs md:text-sm font-medium tracking-wider',
                    'text-white/90 hover:text-[#FFD700] transition-all duration-500'
                  )}
                >
                  <span className="font-serif uppercase tracking-[0.1em]">{link.label}</span>
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full opacity-0"
                    animate={{
                      opacity: hoveredItem === link.href ? 0.2 : 0,
                      background: 'radial-gradient(80% 80% at 50% 50%, rgba(212,175,55,0.4), transparent)'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* FIXED UNDERLINE ANIMATION */}
                  <motion.span
                    className="absolute left-1/4 right-0 -bottom-1 h-px origin-left bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    initial="initial"
                    whileHover="hover"
                    exit="exit"
                    variants={underlineSweep}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div className="hidden lg:block" variants={floatInItem}>
            <Button
              variant="outline"
              className={cn(
                'relative overflow-hidden border border-[#D4AF37]/30 bg-transparent',
                'text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/10',
                'font-serif uppercase tracking-wider text-xs px-4 py-3 md:px-6 md:py-4',
                'transition-all duration-500 group'
              )}
            >
              <span className="relative z-10">Book Consultation</span>
              <motion.span
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: easeInOutExpo }}
              />
            </Button>
          </motion.div>

          <div className="lg:hidden z-50">
            <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </motion.div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-dropdown"
            variants={dropdownMenu}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full lg:hidden"
            style={{
                background: 'rgba(8, 8, 31, 0.95)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)'
            }}
          >
            <motion.div 
                className="container mx-auto px-4 sm:px-6 py-6"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <nav className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <motion.div key={link.href} variants={floatInItem} className="w-full">
                            <Link
                                href={link.href}
                                className="block w-full text-center font-serif text-lg text-white/90 hover:text-white hover:bg-[#D4AF37]/10 p-3 rounded-lg transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.div variants={floatInItem} className="w-full mt-6 pt-6 border-t border-[#D4AF37]/20">
                    <Button
                        variant="outline"
                        className={cn(
                            'w-full relative overflow-hidden border border-[#D4AF37]/50 bg-transparent',
                            'text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/20',
                            'font-serif uppercase tracking-wider text-sm py-4',
                            'transition-all duration-500'
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Book Consultation
                    </Button>
                </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}