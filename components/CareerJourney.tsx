"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";
import { SectionLabel } from "./SectionLabel";

type Experience = (typeof experiences)[number];

function CareerContent({ item }: { item: Experience }) {
  return <><p className="story-number">{item.number}</p><SectionLabel>{item.organization}</SectionLabel><h3>{item.title}</h3><p className="story-role">{item.role}</p><p className="story-copy">{item.copy}</p>{"proofPoints" in item ? <div className="career-proof">{item.proofPoints?.map(point=><span key={point}>{point}</span>)}</div>:null}{"details" in item ? <ul>{item.details?.map(detail=><li key={detail}>{detail}</li>)}</ul>:null}{"topics" in item ? <div className="topic-list">{item.topics?.map(topic=><span key={topic}>{topic}</span>)}</div>:null}</>;
}

export function CareerJourney() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = experiences[active];

  return <section id="story" className="journey" aria-labelledby="journey-title"><div className="section-intro journey-intro"><SectionLabel>The journey</SectionLabel><h2 id="journey-title">The path wasn&apos;t linear.<br /><em>The thread was.</em></h2><p>Care. Evidence. People.</p></div><div className="journey-desktop"><div className="journey-compact"><div className="milestone-nav" role="tablist" aria-label="Career milestones"><span className="timeline-track" aria-hidden="true"><motion.span animate={{height:`${((active+1)/experiences.length)*100}%`}}/></span>{experiences.map((item,index)=><button key={item.number} role="tab" aria-selected={index===active} aria-controls="career-panel" className={index===active?"is-active":""} onClick={()=>setActive(index)}><span>{item.number}</span>{item.title}</button>)}</div><AnimatePresence mode="wait"><motion.article id="career-panel" role="tabpanel" key={current.number} className="journey-story" initial={reduced?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-8}} transition={{duration:.35}}><CareerContent item={current}/></motion.article></AnimatePresence></div></div><div className="journey-mobile">{experiences.map((item,index)=>{const expanded=index===active;return <article key={item.number}><button className="career-accordion-trigger" aria-expanded={expanded} aria-controls={`career-mobile-${index}`} onClick={()=>setActive(index)}><span>{item.number}</span><span><strong>{item.title}</strong><small>{item.organization}</small></span><motion.i animate={{rotate:expanded?45:0}}><Plus aria-hidden="true"/></motion.i></button><AnimatePresence initial={false}>{expanded?<motion.div id={`career-mobile-${index}`} className="career-mobile-content" initial={reduced?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={reduced?undefined:{height:0,opacity:0}}><CareerContent item={item}/></motion.div>:null}</AnimatePresence></article>})}</div><div className="journey-transition"><SectionLabel>What the thread became</SectionLabel><p>Clinical medicine taught me to listen. Research taught me to question. Public health taught me to see systems. Communication is how I bring those worlds together.</p></div></section>;
}
