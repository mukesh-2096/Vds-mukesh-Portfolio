"use client";

import { motion } from "framer-motion";
import { Gamepad2, Trophy, Code2, Palette, Gauge, Wind, MousePointer2, ChevronRight } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10 opacity-30"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-12 md:mb-20 space-y-4 text-center md:text-left">
                        <div
                            className="flex items-center justify-center md:justify-start gap-3 text-primary font-semibold tracking-widest uppercase text-xs"
                        >
                            <span className="h-px w-12 bg-primary"></span>
                            Personality Profile
                        </div>
                        <h2
                            className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-foreground"
                        >
                            Progress is built on <br className="hidden sm:block" />
                            <span className="text-primary italic">failed attempts.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                        {/* The Professional Persona (LHS) */}
                        <div className="md:col-span-7 space-y-8">
                            <div className="prose prose-invert max-w-none text-center md:text-left">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-foreground/90">
                                    I am <span className="text-primary underline underline-offset-8 decoration-2">Vds Mukesh</span>—a digital architect who operates at the intersection of aesthetic beauty and rigorous logic.
                                </p>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4 md:mt-6">
                                    As a **Full Stack Web Developer**, I engineer the invisible engines that power the web. As a **Website Designer**, I sculpt the experiences that people feel.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="p-6 rounded-3xl bg-muted/60 dark:bg-muted/40 border border-white/10 hover:border-primary/20 transition-all group backdrop-blur-sm">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Code2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">The Developer</h4>
                                    <p className="text-sm text-muted-foreground">Architecting scalable backends and fluid frontends with Next.js and modern tech.</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/60 dark:bg-muted/40 border border-white/10 hover:border-primary/20 transition-all group backdrop-blur-sm">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Palette className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">The Designer</h4>
                                    <p className="text-sm text-muted-foreground">Crafting pixel-perfect visual identities that tell a compelling story through UX.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5 space-y-6">
                            <div className="relative p-8 rounded-[2.5rem] bg-muted/60 dark:bg-muted/40 border border-primary/20 overflow-hidden backdrop-blur-sm">
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Gauge className="h-7 w-7 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-2xl tracking-tight">The Momentum</h4>
                                            <p className="text-sm text-primary font-mono uppercase tracking-widest">Driven by Passions</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex gap-4 p-4 rounded-2xl bg-background/80 hover:bg-background/95 transition-colors border border-white/10">
                                            <div className="mt-1">
                                                <Wind className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-bold text-foreground">Racing Precision</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Racing teaches me to find the **optimal line**—choosing the most efficient path to deliver high-performance code.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 p-4 rounded-2xl bg-background/80 hover:bg-background/95 transition-colors border border-white/10">
                                            <div className="mt-1">
                                                <Gamepad2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-bold text-foreground">Strategic Gaming</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Gaming builds **strategic foresight**, helping me anticipate user needs and architect complex, intuitive systems.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 p-4 rounded-2xl bg-background/80 hover:bg-background/95 transition-colors border border-white/10">
                                            <div className="mt-1">
                                                <Trophy className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-bold text-foreground">Competitive Instincts</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    A drive to **win** means I don't just finish projects; I aim to exceed quality benchmarks and industry standards.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
