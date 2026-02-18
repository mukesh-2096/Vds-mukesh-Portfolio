"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";

const achievements = [
    {
        title: "Kalvium AI Hackathon (Campus Level)",
        organization: "Tech Syndikate",
        date: "2024",
        description: "Selected in the Prototype Round among 368 participants across 88 teams, demonstrating strong innovation and technical execution.",
        icon: Trophy,
        category: "Competition",
        link: "https://drive.google.com/file/d/1FPwkgfppdT_3ioGBbhMyidyuytokPi7e/view?usp=sharing"
    },
    {
        title: "AI 4 Andhra Police Hackathon 2025",
        organization: "Andhra Pradesh Police // 4SightAI",
        date: "2025",
        description: "Participated in a state-level AI hackathon focused on law-enforcement use cases.",
        icon: Star,
        category: "Hackathon",
        link: "https://drive.google.com/file/d/1wSshaE68v6j2aRxOhQBohUGr6Nu3ZcZt/view?usp=sharing"
    },
    {
        title: "Diksuchi BuildExpo 1.0 (Mentor)",
        organization: "Campus Level Expo",
        date: "2026",
        description: "Mentored participants in the UI/UX Domain, guiding teams on user-centric design principles and project presentation.",
        icon: GraduationCap,
        category: "Mentorship",
        link: "https://drive.google.com/file/d/1alVNVh5kICNY0B3p7rMvfapD37Cw2hPj/view?usp=sharing"
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            {/* Optimized background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-4">
                        <div
                            className="text-primary font-bold tracking-[0.2em] uppercase text-xs text-center md:text-left"
                        >
                            Milestones & Recognition
                        </div>
                        <h2
                            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-center md:text-left"
                        >
                            Achievements & <br className="hidden sm:block" />
                            <span className="text-primary italic">Extracurriculars.</span>
                        </h2>
                    </div>
                    <p
                        className="max-w-md text-muted-foreground text-base sm:text-lg leading-relaxed font-medium text-center md:text-left"
                    >
                        A showcase of technical certifications, competitive wins, and specialized badges earned throughout my career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-[2.5rem] bg-card/40 border border-primary/10 hover:border-primary/30 transition-all backdrop-blur-md flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="h-7 w-7 text-primary" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10">
                                    {item.category}
                                </span>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <div>
                                    <p className="text-xs font-bold text-primary/60 uppercase tracking-widest">{item.organization} • {item.date}</p>
                                    <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors cursor-default">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
                                <span className="text-xs font-bold text-muted-foreground/50 uppercase tracking-widest group-hover:text-primary/50 transition-colors">Credential Verified</span>
                                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/5 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" title="View Certificate">
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>

                            {/* Decorative background number */}
                            <span className="absolute bottom-4 right-8 text-8xl font-black text-primary/5 -z-10 select-none group-hover:text-primary/10 transition-colors">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    ))}

                    {/* Minimal 'Still More' Card */}
                    <div className="group relative p-8 rounded-[2.5rem] bg-card/20 border border-primary/5 border-dashed hover:border-solid hover:border-primary/20 transition-all backdrop-blur-sm flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                        <div className="space-y-4">
                            <div className="h-16 w-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                                <Star className="h-8 w-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-muted-foreground/80 group-hover:text-primary transition-colors">Still More</h3>
                                <p className="text-xs text-muted-foreground/40 font-medium">New Milestones In Progress</p>
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
