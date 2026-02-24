"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "NoteNest",
        description: "A collaborative MERN stack application for seamless note organization with folder management and real-time synchronization.",
        image: "/note-nest.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
        github: "https://github.com/mukesh-2096/NoteNest.git",
        demo: "https://note-nest-one-ruddy.vercel.app/",
    },
    {
        title: "JeevanRakth",
        description: "An emergency blood donation platform built with Next.js that facilitates real-time donor matching and request management.",
        image: "/jeevan-rakth.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
        github: "https://github.com/mukesh-2096/Jeevan-Rakth.git",
        demo: "https://jeevan-rakth.vercel.app/",
    },
    {
        title: "Stunning AutoMobiles",
        description: "A high-fidelity 3D automobile showcase using Three.js and WebGL for interactive vehicle visualization and design exploring.",
        image: "/stunning-automobile.png",
        tags: ["Three.js", "WebGL", "JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/mukesh-2096/Stunning-automobile.git",
        demo: "https://stunning-automobile.vercel.app/",
    },
    {
        title: "iCuisine",
        description: "A cross-platform food delivery app connecting customers with local vendors through an intuitive dual-user interface with real-time order tracking.",
        image: "/icuisine.png",
        tags: ["Flutter", "Dart", "Firebase"],
        github: "YOUR_GITHUB_REPO_URL_HERE",
        demo: undefined,
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                        Latest Work
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl px-4">
                        A selection of my recent projects where I've applied my technical skills
                        to solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.title}>
                            <Card className="group overflow-hidden border-2 transition-all hover:border-primary/50 flex flex-col h-full bg-card/95 backdrop-blur-sm">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer" title="View Source Code">
                                            <Button size="icon" variant="secondary" className="rounded-full">
                                                <Github className="h-5 w-5" />
                                            </Button>
                                        </Link>
                                        {project.demo && (
                                            <Link href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Preview">
                                                <Button size="icon" variant="secondary" className="rounded-full">
                                                    <ExternalLink className="h-5 w-5" />
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="bg-primary/5">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 border-t">
                                    {project.demo ? (
                                        <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="ghost" className="w-full group/btn">
                                                View Project <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="ghost" className="w-full group/btn">
                                                View Repository <Github className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Button>
                                        </Link>
                                    )}
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Minimal Still More Text */}
                <div className="mt-16 text-center group cursor-default">
                    <p className="text-muted-foreground/40 group-hover:text-primary transition-all duration-500 font-medium italic tracking-[0.2em] uppercase text-xs">
                        {/* Dot indicator */}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary mr-3 animate-pulse transition-colors duration-500"></span>
                        Still More Projects In Development
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary ml-3 animate-pulse transition-colors duration-500"></span>
                    </p>
                </div>
            </div>
        </section>
    );
}
