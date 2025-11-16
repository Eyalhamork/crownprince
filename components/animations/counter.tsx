"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean;
}

export function Counter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  once = true,
}: CounterProps) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setHasAnimated(true);

          // Start animation after delay
          const timeout = setTimeout(() => {
            const startTime = performance.now();
            const range = end - start;

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function (ease-out cubic)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentCount = start + range * easeOut;

              setCount(currentCount);

              if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
              }
            };

            frameRef.current = requestAnimationFrame(animate);
          }, delay);

          return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(frameRef.current);
          };
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, start, duration, delay, once, hasAnimated]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.round(num).toLocaleString();
  };

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

// Percentage counter with circular progress
interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  className?: string;
  showValue?: boolean;
  color?: string;
  trackColor?: string;
}

export function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
  duration = 1500,
  className,
  showValue = true,
  color = "currentColor",
  trackColor = "#e5e7eb",
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progressRatio, 3);
            setProgress(value * easeOut);

            if (progressRatio < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration, hasAnimated]);

  return (
    <div className={cn("relative inline-flex", className)}>
      <svg ref={ref} width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{Math.round(progress)}%</span>
        </div>
      )}
    </div>
  );
}

// Progress bar with animation
interface ProgressBarProps {
  value: number;
  max?: number;
  duration?: number;
  className?: string;
  showValue?: boolean;
  color?: string;
  height?: number;
}

export function ProgressBar({
  value,
  max = 100,
  duration = 1000,
  className,
  showValue = false,
  color = "bg-primary",
  height = 8,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const percentage = (value / max) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progressRatio, 3);
            setProgress(percentage * easeOut);

            if (progressRatio < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [percentage, duration, hasAnimated]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={ref}
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showValue && (
        <span className="absolute right-0 top-0 -translate-y-6 text-sm font-medium">
          {Math.round(progress)}%
        </span>
      )}
    </div>
  );
}
