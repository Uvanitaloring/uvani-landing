'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Premium easing curves
const easeOutElastic = [0.5, 1.5, 0.5, 1] as const;
const easeInOutExpo = [0.87, 0, 0.13, 1] as const;
const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

// Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2,
      ease: easeInOutExpo
    },
  },
};

const floatInItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24, 
    filter: 'blur(8px)',
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easeOutElastic,
    },
  },
};

const underlineSweep = {
  initial: { 
    scaleX: 0, 
    opacity: 0, 
    originX: 0 as const 
  },
  hover: { 
    scaleX: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.45, 
      ease: easeInOutExpo 
    } 
  },
  exit: { 
    scaleX: 0, 
    opacity: 0, 
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' as any 
    } 
  },
};

// Premium Animated Hamburger Icon
const AnimatedHamburgerIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const topVariants: Variants = {
    closed: { 
      d: 'M 2 5 L 20 5',
      strokeWidth: 2,
      opacity: 1
    },
    open: { 
      d: 'M 4 16 L 16 4',
      strokeWidth: 2.5,
      opacity: 0.9
    },
  };
  const middleVariants: Variants = {
    closed: { 
      d: 'M 2 12 L 20 12',
      strokeWidth: 2,
      opacity: 1
    },
    open: { 
      d: 'M 10 10 L 10 10',
      strokeWidth: 0,
      opacity: 0
    },
  };
  const bottomVariants: Variants = {
    closed: { 
      d: 'M 2 19 L 20 19',
      strokeWidth: 2,
      opacity: 1
    },
    open: { 
      d: 'M 4 4 L 16 16',
      strokeWidth: 2.5,
      opacity: 0.9
    },
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
        className="stroke-current transition-transform duration-500 group-hover:scale-110"
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <defs>
          <filter id="luxuryGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F1E5AC" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <g filter="url(#luxuryGlow)">
          <motion.path
            variants={topVariants}
            transition={{ duration: 0.6, ease: easeOutBack }}
            className="stroke-[url(#goldGradient)]"
            strokeLinecap="round"
          />
          <motion.path
            variants={middleVariants}
            transition={{ duration: 0.4, ease: easeInOutExpo }}
            className="stroke-[url(#goldGradient)]"
            strokeLinecap="round"
          />
          <motion.path
            variants={bottomVariants}
            transition={{ duration: 0.6, ease: easeOutBack }}
            className="stroke-[url(#goldGradient)]"
            strokeLinecap="round"
          />
        </g>
      </motion.svg>
    </Button>
  );
};

// Premium Logo Component
const Logo = () => (
  <motion.div 
    variants={floatInItem}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href="/" className="flex items-center group relative">
      <div className="relative">
        <Image
          src="/logo/UVANI logo.png"
          alt="UVANI Logo"
          width={120}
          height={90}
          className="rounded-lg transition-all duration-700 group-hover:rotate-[5deg] group-hover:brightness-110"
          priority
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
        className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_15px_3px_rgba(212,175,55,0.7)]"
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
        'transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]',
        isScrolled ? 'h-20' : 'h-24'
      )}
      style={{
        background: isScrolled 
          ? 'rgba(8, 8, 31, 0.85)' 
          : 'none',
        backdropFilter: isScrolled 
          ? 'blur(12px) saturate(180%)' 
          : 'none',
        WebkitBackdropFilter: isScrolled 
          ? 'blur(12px) saturate(180%)' 
          : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(212,175,55,0.15)'
          : 'none',
        boxShadow: isScrolled 
          ? '0 15px 40px rgba(0,0,0,0.3)' 
          : 'none',
      }}
      initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: easeOutElastic }}
    >
      {/* Luxury gradient overlay */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, transparent 60%)'
          }}
          transition={{ duration: 1, ease: easeInOutExpo }}
        />
      )}

      {/* bottom glow for depth */}
      {isScrolled && (
        <motion.div
          className={cn(
            'pointer-events-none absolute inset-x-0 -bottom-px h-12',
            'bg-gradient-to-t from-[#08081f] to-transparent opacity-70'
          )}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.7 }}
        />
      )}

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Premium Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-1"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
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
                    'group relative px-4 py-2 text-sm font-medium tracking-wider',
                    'text-white/90 hover:text-[#FFD700] transition-all duration-500'
                  )}
                >
                  <span className="font-serif uppercase tracking-[0.1em]">
                    {link.label}
                  </span>

                  {/* Hover spotlight effect */}
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full opacity-0"
                    animate={{
                      opacity: hoveredItem === link.href ? 0.2 : 0,
                      background: 'radial-gradient(80% 80% at 50% 50%, rgba(212,175,55,0.4), transparent)'
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Animated underline */}
                  <motion.span
                    className="absolute left-4 right-4 -bottom-1 h-px origin-left bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    initial={underlineSweep.initial}
                    whileHover={underlineSweep.hover}
                    exit={underlineSweep.exit}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            variants={floatInItem}
          >
            <Button
              variant="outline"
              className={cn(
                'relative overflow-hidden border border-[#D4AF37]/30 bg-transparent',
                'text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/10',
                'font-serif uppercase tracking-wider text-xs px-6 py-4',
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

          {/* Mobile Menu Icon */}
          <motion.div 
            className="md:hidden z-50"
            variants={floatInItem}
          >
            <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </motion.div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 flex flex-col items-center justify-center"
            variants={{
              open: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.8, 
                  ease: easeOutElastic,
                },
              },
              closed: {
                y: '-100%',
                opacity: 0,
                filter: 'blur(12px)',
                transition: { 
                  duration: 0.6, 
                  ease: [0.64, 0, 0.78, 0] 
                },
              },
            }}
            style={{
              background:
                'linear-gradient(180deg, rgba(8,8,31,0.98) 0%, rgba(16,16,50,0.96) 100%)',
            }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Luxury overlay effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                background: 'radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.15) 0%, transparent 70%)',
              }}
            />
            
            {/* Subtle grid pattern */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <nav className="relative z-10 w-full px-8">
              <motion.ul
                className="flex flex-col items-center space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={floatInItem}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center w-full font-serif font-medium text-xl text-white/80 hover:text-white transition-colors duration-500 py-3 px-4 rounded-lg group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <motion.span
                        className="h-px flex-1 mx-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.7 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <motion.div
              className="absolute bottom-10 text-center text-[#D4AF37]/60 text-xs font-serif tracking-[0.35em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              UVANI © {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}