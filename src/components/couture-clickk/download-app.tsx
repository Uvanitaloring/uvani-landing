"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react'; // Using lucide-react for a clean icon
import { useRouter } from 'next/navigation';

type Props = {
  title?: string;
  description?: string;
  downloadUrl?: string;
};

export default function DownloadApp({
  title = 'Experience UVANI',
  description = 'Download the official app to book tailoring services, track your orders, and receive exclusive updates.',
  downloadUrl = '#',
}: Props) {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3, // Let the text appear first
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="relative w-full px-4 py-24 sm:py-32"
    >
      {/* Background Glow Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#120f20] to-[#08081f]" />
        <div className="absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C09A6C]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        {/* Animated Text Content */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-lg text-lg leading-8 text-white/60"
        >
          {description}
        </motion.p>

        {/* Download Button (navigates to /download) */}
        <motion.button
          variants={buttonVariants}
          type="button"
          onClick={() => router.push('/download')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative mt-10 inline-flex items-center justify-center gap-x-2.5 rounded-full bg-gradient-to-b from-[#C9A67A] to-[#A8845A] px-7 py-4 text-base font-medium text-[#181108] shadow-[0_10px_30px_-10px_rgba(192,154,108,0.5)] transition-transform duration-300 ease-out hover:shadow-[0_12px_35px_-10px_rgba(192,154,108,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08081f]"
        >
          <ArrowDownToLine className="h-5 w-5 text-[#181108]/80" />
          Download The App

          {/* Shimmer Effect */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 w-full -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
}
