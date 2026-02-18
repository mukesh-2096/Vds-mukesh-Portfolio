"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Clock, Calendar, CheckCircle2, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);

        // Securely using environment variable for the access key
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
        formData.append("access_key", accessKey);

        // Customize the email format
        formData.append("from_name", "Mukesh Portfolio");
        formData.append("subject", `New Message from ${formData.get("name")} - Portfolio`);
        formData.append("replyto", formData.get("email") as string);
        formData.append("template_id", "table"); // Uses a much cleaner table layout instead of plain text

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                (event.target as HTMLFormElement).reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Let's <span className="text-primary italic">Connect.</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8 text-center md:text-left">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <p className="text-muted-foreground">
                                I'm currently available for freelance work and full-time positions.
                                Let's build something amazing together!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-base sm:text-lg font-semibold break-all sm:break-normal">durgasaimukeshvantakula5764@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p className="text-base sm:text-lg font-semibold">Narsipatnam, Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-primary/10">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary/80">Social Channels</p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: Github, href: "https://github.com/mukesh-2096", name: "GitHub" },
                                    { icon: "/leetcode.svg", href: "https://leetcode.com/u/mukesh-sai/", name: "LeetCode", isCustom: true },
                                    { icon: Linkedin, href: "https://in.linkedin.com/in/mukesh-vantakula", name: "LinkedIn" },
                                    { icon: Twitter, href: "https://x.com/mukesh_2096", name: "Twitter" },
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        className="h-10 w-10 flex items-center justify-center rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all text-muted-foreground hover:text-primary overflow-hidden group"
                                    >
                                        {social.isCustom ? (
                                            <Image
                                                src={social.icon as string}
                                                alt={social.name}
                                                width={18}
                                                height={18}
                                                className="opacity-60 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
                                            />
                                        ) : (
                                            <social.icon className="h-5 w-5" />
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Response Time</p>
                                    <p className="text-sm font-semibold">Within 24 Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Availability</p>
                                    <p className="text-sm font-semibold">Mon - Fri, 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card/50 p-6 md:p-8 shadow-lg backdrop-blur-sm relative overflow-hidden">
                        {/* Success Message Overlay */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-background/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-6"
                            >
                                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground font-medium">Thanks for reaching out. I'll get back to you shortly.</p>
                                <Button
                                    variant="outline"
                                    className="mt-8 rounded-xl"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Send another message
                                </Button>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" name="subject" placeholder="Project Inquiry" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[150px]" required />
                            </div>
                            <Button disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
