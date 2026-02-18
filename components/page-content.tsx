"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PageContent({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait a bit to ensure splash screen is shown first
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null; // Don't render content immediately
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
