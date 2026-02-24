"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    Database,
    Wrench,
    Monitor,
    Terminal,
    Globe,
    Zap
} from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: Terminal,
        skills: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Python", icon: "python" },
            { name: "Java", icon: "/java-icon.svg" },
            { name: "C / C++", icon: "cplusplus" }
        ]
    },
    {
        title: "Web Technologies",
        icon: Globe,
        skills: [
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Next.js", icon: "nextdotjs" },
            { name: "Flutter", icon: "flutter" },
            { name: "Tailwind", icon: "tailwindcss" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "REST APIs", icon: "postman" }
        ]
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "SQLite", icon: "sqlite" },
            { name: "Mongoose", icon: "mongoose" }
        ]
    },
    {
        title: "Tools & Ecosystem",
        icon: Wrench,
        skills: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Docker", icon: "docker" },
            { name: "Unity", icon: "unity" },
            { name: "Vercel", icon: "vercel" },
            { name: "VS Code", icon: "/vs-code-icon.svg" },
            { name: "Figma", icon: "figma" },
            { name: "WordPress", icon: "wordpress" }
        ]
    },
    {
        title: "Environments",
        icon: Monitor,
        skills: [
            { name: "Ubuntu", icon: "ubuntu" },
            { name: "Bash", icon: "gnubash" }
        ]
    }
];

export function Skills() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Helper to determine if an icon needs a color override for initial visibility
    const getIconUrl = (slug: string) => {
        if (slug.startsWith("/")) return slug;

        const blackLogos = ["nextdotjs", "vercel", "github", "visualstudiocode", "gnubash"];
        const isDark = mounted && resolvedTheme === "dark";

        return `https://cdn.simpleicons.org/${slug}${isDark && blackLogos.includes(slug) ? "/white" : ""}`;
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Optimized background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] -z-10 opacity-30 dark:opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[80px] -z-10 opacity-20 dark:opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-20 text-center md:text-left">
                    <div
                        className="flex items-center justify-center md:justify-start gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4"
                    >
                        <Zap className="h-4 w-4" />
                        System Core Specs
                    </div>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none text-foreground"
                    >
                        THE <span className="text-primary italic">ENGINE</span> <br /> ROOM.
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            className="relative group p-8 rounded-[2rem] border bg-card/90 hover:bg-card dark:bg-muted/80 dark:hover:bg-muted/95 transition-all duration-500 hover:border-primary/20 shadow-sm hover:shadow-xl dark:shadow-none backdrop-blur-md"
                        >
                            {/* Category Header */}
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight uppercase text-foreground">{category.title}</h3>
                            </div>

                            {/* Skills List - Dynamic Grid */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group/item shadow-sm dark:shadow-none"
                                    >
                                        <div className="h-6 w-6 relative flex items-center justify-center overflow-hidden">
                                            <img
                                                src={getIconUrl(skill.icon)}
                                                alt={skill.name}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover/item:scale-110"
                                            />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-tighter text-muted-foreground group-hover/item:text-foreground">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative corner indicator */}
                            <div className="absolute top-4 right-4 w-4 h-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
