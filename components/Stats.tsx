"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Building, Calendar, Sparkles } from "lucide-react";

interface StatItemProps {
  end: number;
  duration?: number;
  suffix?: string;
  title: string;
  icon: React.ElementType;
}

function StatCounter({ end, duration = 2, suffix = "", title, icon: Icon }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const displayValue = useMotionValue("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      displayValue.set(Math.floor(latest).toLocaleString() + suffix);
    });
    return () => unsubscribe();
  }, [springValue, suffix, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700">
        <Icon className="w-8 h-8" />
      </div>
      <motion.div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {isInView ? (
          <motion.span>{displayValue}</motion.span>
        ) : (
          "0"
        )}
      </motion.div>
      <p className="text-gray-600 font-medium">{title}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { end: 285000, suffix: "+", title: "Population", icon: Users },
    { end: 20, suffix: "+", title: "Barangays", icon: Building },
    { end: 150, suffix: "+", title: "Annual Events", icon: Calendar },
    { end: 50, suffix: "+", title: "Years of Progress", icon: Sparkles },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              title={stat.title}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
