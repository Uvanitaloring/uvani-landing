'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- SVG Icons ---
const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <motion.path 
            d="M5 13l4 4L19 7" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        />
    </svg>
);

const OpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 8V6C14 4.89543 13.1046 4 12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12C13.1046 20 14 19.1046 14 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Main Download Page Component ---
export default function DownloadPage() {
    const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
    const [progress, setProgress] = useState(0);
    const [objectUrl, setObjectUrl] = useState<string | null>(null);
    const abortRef = React.useRef<AbortController | null>(null);

    const handleDownload = async () => {
        if (downloadState !== 'idle') return;
        // Guard: only run in browser
        if (typeof window === 'undefined') return;

    setDownloadState('downloading');
    setProgress(0);

    // Kick off a small visible progress animation so users see activity even on fast networks
    animateProgressTo(8, 400).catch(() => {});

        const controller = new AbortController();
        abortRef.current = controller;

        try {
            const res = await fetch('/Uvani.apk', { signal: controller.signal });
            if (!res.ok) throw new Error('Network response was not ok');

            const contentLengthHeader = res.headers.get('Content-Length') || res.headers.get('content-length');
            const total = contentLengthHeader ? parseInt(contentLengthHeader, 10) : NaN;

            const reader = res.body?.getReader();
            if (!reader) throw new Error('ReadableStream not supported');

            const chunks: Uint8Array[] = [];
            let received = 0;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                if (value) {
                    chunks.push(value);
                    received += value.length;
                    if (!Number.isNaN(total) && total > 0) {
                        setProgress(Math.min(100, Math.round((received / total) * 100)));
                    } else {
                        // Fallback pseudo-progress when Content-Length missing
                        setProgress(prev => Math.min(99, prev + 2));
                    }
                }
            }

            // Concatenate chunks into single Uint8Array
            const blobData = new Uint8Array(chunks.reduce((acc, c) => acc + c.length, 0));
            let offset = 0;
            for (const c of chunks) {
                blobData.set(c, offset);
                offset += c.length;
            }

            const blob = new Blob([blobData], { type: 'application/vnd.android.package-archive' });
            const url = URL.createObjectURL(blob);
            setObjectUrl(url);

            // Programmatically trigger download (user will see Save dialog on most browsers)
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Uvani.apk';
            document.body.appendChild(a);
            a.click();
            a.remove();

            // Smoothly animate to 100% so the progress bar is visible even for fast downloads
            await animateProgressTo(100, 700);
            setDownloadState('completed');
        } catch (err) {
            console.error('Download failed', err);
            setDownloadState('idle');
            setProgress(0);
        } finally {
            abortRef.current = null;
        }
    };

    const handleOpenFile = () => {
        // Navigate the current tab to the server-hosted APK — performing same-tab navigation
        // often leads mobile browsers to hand the file to the platform installer.
        try {
            window.location.href = '/Uvani.apk';
        } catch (err) {
            // Fallback to opening the blob URL in a new tab if needed
            if (objectUrl) window.open(objectUrl, '_blank');
        }
    };

    // Cleanup object URL on unmount
    useEffect(() => {
        return () => {
            if (abortRef.current) abortRef.current.abort();
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [objectUrl]);

    // Smoothly animate progress value to a target over a duration. Returns a Promise that resolves when done.
    function animateProgressTo(target: number, duration = 600) {
        return new Promise<void>((resolve) => {
            const start = performance.now();
            const from = progress;

            function frame(now: number) {
                const t = Math.min(1, (now - start) / duration);
                const eased = t; // linear ease; could replace with easeOut if desired
                const value = Math.round(from + (target - from) * eased);
                setProgress(value);
                if (t < 1) {
                    requestAnimationFrame(frame);
                } else {
                    setProgress(target);
                    resolve();
                }
            }

            requestAnimationFrame(frame);
        });
    }

    const buttonText = {
        idle: 'Download APK',
        downloading: `Downloading... ${progress}%`,
        completed: 'Open File'
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#050517] text-white p-4 font-sans overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-20%] w-[50vw] h-[50vh] bg-[#C09A6C] rounded-full opacity-10 blur-[150px] animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[40vw] h-[40vh] bg-[#08081f] rounded-full opacity-20 blur-[120px] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite_2s]"></div>

            <motion.div 
                className="max-w-lg w-full bg-gradient-to-br from-[#0c0c22]/80 to-[#09091f]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl shadow-black/40 border border-white/10 z-10"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="text-center">
                    <motion.div 
                        className="inline-block p-4 bg-white/5 rounded-full mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                    >
                         <img src="https://i.ibb.co/WvkYW6zV/UVANI-logo.png" alt="UVANI Logo" className="w-16 h-auto"/>
                    </motion.div>
                    <h1 className="text-3xl font-bold mb-3 font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4B483]">
                        Get the UVANI App
                    </h1>
                    <p className="text-base text-white/60 mb-8 max-w-sm mx-auto">
                        Experience elegance and efficiency on the go. Download the official Android application.
                    </p>
                </div>

                <div className="relative h-14 w-full">
                    <AnimatePresence>
                        <motion.button
                            key={downloadState}
                            onClick={handleDownload}
                            className={cn(
                                "w-full h-full rounded-full font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050517]",
                                {
                                    'bg-[#C09A6C] text-neutral-900 hover:bg-[#D4B483] hover:scale-105 active:scale-100 shadow-lg shadow-[#C09A6C]/20 focus-visible:ring-[#D4B483]': downloadState === 'idle',
                                    'bg-white/10 text-white/80 cursor-wait': downloadState === 'downloading',
                                    'bg-green-500 text-white hover:bg-green-400 hover:scale-105 active:scale-100 shadow-lg shadow-green-500/20 focus-visible:ring-green-400': downloadState === 'completed'
                                }
                            )}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {/* --- Button Content --- */}
                             <AnimatePresence mode="popLayout">
                                {downloadState === 'idle' && (
                                    <motion.span key="idle-span" className='flex items-center gap-3' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                                        <DownloadIcon className="w-5 h-5" /> {buttonText.idle}
                                    </motion.span>
                                )}
                                {downloadState === 'downloading' && (
                                    <motion.span key="downloading-span" className='flex items-center gap-3' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                                         {buttonText.downloading}
                                    </motion.span>
                                )}
                                {downloadState === 'completed' && (
                                    <motion.span key="completed-span" className='flex items-center gap-3' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                                        <OpenIcon className="w-5 h-5" /> {buttonText.completed}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </AnimatePresence>
                    
                    {/* Progress Bar */}
                    {downloadState === 'downloading' && (
                         <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C09A6C] to-[#FFD700] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                        />
                    )}
                </div>

                <div className="mt-8 text-center">
                    <a href="/" className="text-sm text-white/50 underline-offset-4 hover:text-white hover:underline transition-colors">
                        Back to Home
                    </a>
                </div>

                <div className="mt-8 text-xs text-white/40 text-center border-t border-white/10 pt-6">
                    <strong>Installation Tip:</strong> Enable 'Install from unknown sources' in your device settings if prompted during installation.
                </div>
            </motion.div>
        </div>
    );
}
