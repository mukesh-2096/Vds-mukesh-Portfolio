"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const socialLinks = [
        { icon: Github, href: "https://github.com/mukesh-2096", name: "GitHub" },
        { icon: "/leetcode.svg", href: "https://leetcode.com/u/mukesh-sai/", name: "LeetCode", isCustom: true },
        { icon: Linkedin, href: "https://in.linkedin.com/in/mukesh-vantakula", name: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/mukesh_2096", name: "Twitter" },
    ];

    const navLinks = [
        { name: "About Me", href: "#about" },
        { name: "Expertise", href: "#skills" },
        { name: "Selected Works", href: "#projects" },
        { name: "Certifications", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="border-t bg-background/30 backdrop-blur-xl py-20 relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                                    Vds Mukesh
                                </span>
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
                                Crafting high-performance digital experiences with a focus on precision, speed, and exceptional design.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className="text-muted-foreground hover:text-primary transition-all transform hover:-translate-y-1 group"
                                >
                                    {social.isCustom ? (
                                        <Image
                                            src={social.icon as string}
                                            alt={social.name}
                                            width={24}
                                            height={24}
                                            className="opacity-60 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
                                        />
                                    ) : (
                                        <social.icon className="h-6 w-6" />
                                    )}
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1 transition-all font-medium group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">Get in touch</h4>
                        <div className="space-y-4">
                            <p className="text-muted-foreground font-medium">Have a project or just want to chat?</p>
                            <Link
                                href="mailto:durgasaimukeshvantakula5764@gmail.com"
                                className="text-2xl font-bold hover:text-primary transition-colors flex items-center gap-3 group"
                            >
                                <Mail className="h-6 w-6 text-primary" />
                                <span className="underline underline-offset-8 decoration-primary/30 group-hover:decoration-primary transition-all truncate">
                                    Say Hello
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-muted-foreground font-medium">
                        © {new Date().getFullYear()} Vds Mukesh. Built with precision and passion.
                    </div>
                    <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        <span className="hover:text-primary cursor-default transition-colors">Clean Code</span>
                        <span className="hover:text-primary cursor-default transition-colors">Modern UI</span>
                        <span className="hover:text-primary cursor-default transition-colors">High Performance</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
