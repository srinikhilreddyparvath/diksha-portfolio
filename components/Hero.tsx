"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, MapPin, Play } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { siteConfig } from "@/data/site";

const textContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 20 });
  const imageX = useTransform(springX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-4, 4]);
  const imageY = useTransform(springY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-3, 3]);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const resetPointer = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-shell">
        <motion.div className="hero-copy" variants={reduceMotion ? undefined : textContainer} initial={reduceMotion ? false : "hidden"} animate="visible">
          <motion.p className="eyebrow" variants={reduceMotion ? undefined : textItem}>Physician <span>·</span> Public Health <span>·</span> Clinical Research</motion.p>
          <motion.h1 id="hero-title" variants={reduceMotion ? undefined : textItem}>Dr. Diksha<span>Venugopal</span></motion.h1>
          <motion.p className="roles" variants={reduceMotion ? undefined : textItem}>Physician · Public Health Researcher · Clinical Research Professional · Educator</motion.p>
          <motion.p className="statement" variants={reduceMotion ? undefined : textItem}>I work where clinical medicine, population health, and research meet, turning evidence into better care, clearer understanding, and meaningful change.</motion.p>
          <motion.aside className="current-role" variants={reduceMotion ? undefined : textItem} aria-label="Current role"><span>Currently</span><p>Cancer Research Coordinator · Contra Costa Health</p><small>Coordinating 8+ active NCI-funded oncology clinical trials.</small></motion.aside>
          <motion.div className="hero-actions" variants={reduceMotion ? undefined : textItem}>
            <a className="primary-action" href="#story">Explore my work <ArrowDownRight aria-hidden="true" /></a>
            <a className="secondary-action" href="#commencement"><Play aria-hidden="true" /> Watch commencement</a>
          </motion.div>
          <motion.div className="hero-notes" variants={reduceMotion ? undefined : textItem}><p className="location"><MapPin aria-hidden="true" /> {siteConfig.location}</p><p className="availability"><span aria-hidden="true" /> Available for research · teaching · collaboration</p></motion.div>
        </motion.div>

        <motion.div className="portrait-stage" initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }} onMouseMove={handlePointerMove} onMouseLeave={resetPointer}>
          <div className="portrait-olive" aria-hidden="true" />
          <div className="portrait-frame" aria-hidden="true" />
          <div className="portrait-rule portrait-rule-top" aria-hidden="true" />
          <div className="portrait-rule portrait-rule-bottom" aria-hidden="true" />
          <motion.div className="portrait-image" style={{ x: imageX, y: imageY }}>
            <Image src="/images/diksha-hero.png" alt={siteConfig.name} fill preload sizes="(max-width: 767px) 88vw, (max-width: 1100px) 43vw, 520px" />
          </motion.div>
          <p className="portrait-caption">Medicine · inquiry · impact</p>
        </motion.div>
      </div>
    </section>
  );
}
