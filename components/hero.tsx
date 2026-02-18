"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const [index, setIndex] = useState(0);
    const words = ["Professional Developer", "Creative Designer"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden pt-10 pb-12 md:pt-20 md:pb-24 flex items-center min-h-[90vh]">
            {/* Optimized background blobs for performance */}
            <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-orange-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="container relative mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="h-8 relative flex justify-center lg:justify-start">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={words[index]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium absolute"
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        {words[index]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                                I am <br />
                                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent italic">
                                    Vds Mukesh
                                </span>{" "}
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground md:text-xl">
                                Full-stack designer and developer dedicated to crafting seamless user interfaces
                                and high-performance applications that bridge the gap between aesthetics and functionality.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-2xl group cursor-pointer shadow-lg shadow-primary/20" title="View Resume">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf">
                                    View Resume
                                    <Eye className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                </a>
                            </Button>
                            <div className="flex items-center gap-3 md:gap-4">
                                {[
                                    { icon: Github, href: "https://github.com/mukesh-2096", name: "GitHub" },
                                    { icon: "/leetcode.svg", href: "https://leetcode.com/u/mukesh-sai/", name: "LeetCode", isCustom: true },
                                    { icon: Linkedin, href: "https://in.linkedin.com/in/mukesh-vantakula", name: "LinkedIn" },
                                    { icon: Twitter, href: "https://x.com/mukesh_2096", name: "Twitter" },
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        title={social.name}
                                        className="h-12 w-12 flex items-center justify-center rounded-2xl border bg-background hover:bg-primary/5 hover:border-primary/50 transition-all text-muted-foreground hover:text-primary overflow-hidden"
                                    >
                                        {social.isCustom ? (
                                            <Image
                                                src={social.icon as string}
                                                alt="social icon"
                                                width={20}
                                                height={20}
                                                className="opacity-60 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
                                            />
                                        ) : (
                                            <social.icon className="h-5 w-5" />
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:ml-auto order-1 lg:order-2 flex justify-center">
                        {/* Glowing ring around the image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>

                        <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] rounded-full border-4 md:border-8 border-primary/10 overflow-hidden bg-background shadow-2xl">
                            <Image
                                src="/my_image.jpg"
                                alt="Mukesh"
                                fill
                                className="object-cover scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
