"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { researchProjects } from "@/data/research";
import { SectionLabel } from "./SectionLabel";

export function ResearchProjects() {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return <section id="research" className="research-section section-pad" aria-labelledby="research-title"><div className="wide-shell">
    <div className="section-intro"><SectionLabel>Research</SectionLabel><h2 id="research-title">Questions worth asking.</h2><p>Selected research work across cardiovascular epidemiology, population health, and adolescent mental health.</p></div>
    <div className="research-list">{researchProjects.map((project,index) => { const expanded=open===index; return <article key={project.number} className={expanded ? "is-expanded" : ""}>
      <div className="project-number">{project.number}</div><div className="project-main"><SectionLabel>{project.category}</SectionLabel><h3>{project.title}</h3>{"subtitle" in project ? <p className="project-subtitle">{project.subtitle}</p>:null}<blockquote>{project.question}</blockquote><div className="method-line">{project.methods.map(m=><span key={m}>{m}</span>)}</div>
      <button className="expand-button" onClick={()=>setOpen(expanded?null:index)} aria-expanded={expanded} aria-controls={`project-${index}`}>{expanded?"Close study":"Explore study"}<motion.span animate={{ rotate:expanded?45:0 }} transition={{ duration:.22 }}><Plus aria-hidden="true"/></motion.span></button>
      <AnimatePresence initial={false}>{expanded?<motion.div id={`project-${index}`} className="project-details" initial={reduced?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={reduced?undefined:{height:0,opacity:0}}><div><h4>The question</h4><p>{project.question}</p></div><div><h4>The approach</h4><p>{project.description}</p></div><div><h4>What the analysis examined</h4><p>{project.examined}</p></div><div><h4>Why the question matters</h4><p>{project.matters}</p></div></motion.div>:null}</AnimatePresence></div>
    </article>;})}</div>
  </div></section>;
}
