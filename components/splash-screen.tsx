"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Hide body overflow and content while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    let fontsLoaded = false;
    let pageLoaded = false;
    let minTimeElapsed = false;
    let shouldHide = false;

    const updateProgress = () => {
      let progress = 0;
      if (fontsLoaded) progress += 33;
      if (pageLoaded) progress += 34;
      if (minTimeElapsed) progress += 33;
      setLoadingProgress(Math.min(progress, 100));
    };

    const checkAllLoaded = () => {
      updateProgress();
      if (fontsLoaded && pageLoaded && minTimeElapsed && !shouldHide) {
        shouldHide = true;
        // Add a small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    };

    // Wait for fonts to load
    const loadFonts = async () => {
      try {
        if (document.fonts) {
          await document.fonts.ready;
        }
        fontsLoaded = true;
        checkAllLoaded();
      } catch {
        // Font loading check failed, continuing anyway
        fontsLoaded = true;
        checkAllLoaded();
      }
    };

    // Wait for page to fully load
    const handlePageLoad = () => {
      pageLoaded = true;
      checkAllLoaded();
    };

    // Minimum loading time (1 second for smooth UX without feeling stuck)
    setTimeout(() => {
      minTimeElapsed = true;
      checkAllLoaded();
    }, 1000);

    // Failsafe: Force hide after 4 seconds no matter what
    const failsafe = setTimeout(() => {
      if (isLoading) {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, 4000);

    // Start font loading immediately
    loadFonts();

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
      clearTimeout(failsafe);
      document.body.style.overflow = ""; // Restore overflow on cleanup
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo/Initial Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="relative h-24 w-24">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
                />
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-primary">VM</span>
                </div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-sm font-medium text-muted-foreground">
                Loading Portfolio
              </p>
              
              {/* Progress bar */}
              <div className="w-48 h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              
              {/* Progress percentage */}
              <p className="text-xs text-muted-foreground/70">
                {loadingProgress}%
              </p>
              
              {/* Loading dots animation */}
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="h-2 w-2 rounded-full bg-primary"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
