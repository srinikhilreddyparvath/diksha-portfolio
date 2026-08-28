"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const stages = [
  ["Protocol","Translating protocol requirements into operational study workflows and coordinated study execution."],
  ["Regulatory","Maintaining organized study documentation aligned with IRB, GCP, HIPAA, FDA, and institutional requirements."],
  ["Screening","Supporting participant recruitment and protocol-based screening workflows."],
  ["Eligibility","Coordinating eligibility review so enrollment remains aligned with protocol requirements."],
  ["Consent","Supporting informed-consent conversations and helping participants understand study participation clearly."],
  ["Enrollment","Coordinating participant activities and study logistics after eligibility and consent."],
  ["Clinical Data","Collecting, entering, reviewing, and reconciling clinical research data and source documentation."],
  ["Safety","Managing adverse-event and serious-adverse-event documentation and timely reporting workflows."],
  ["Monitoring","Preparing essential documentation for sponsor monitoring, audits, internal review, and inspection-ready study records."],
] as const;

export function ResearchPractice() {
  const [active,setActive]=useState(0);
  const reduced=useReducedMotion();
  const onKeyDown=(event:React.KeyboardEvent<HTMLDivElement>)=>{if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(event.key))return;event.preventDefault();const direction=["ArrowRight","ArrowDown"].includes(event.key)?1:-1;setActive((active+direction+stages.length)%stages.length);};

  return <section id="practice" className="practice-section section-pad" aria-labelledby="practice-title"><div className="wide-shell"><div className="section-intro"><SectionLabel>Clinical research</SectionLabel><h2 id="practice-title">Research doesn&apos;t stop when the protocol is written.</h2><p>The scientific question matters. So does every operational decision that determines whether the study can answer it.</p></div><div className="lifecycle" role="tablist" aria-label="Clinical study lifecycle" onKeyDown={onKeyDown}>{stages.map(([name],index)=><button key={name} role="tab" aria-selected={active===index} aria-controls="stage-detail" className={active===index?"is-active":""} onClick={()=>setActive(index)}><span>{String(index+1).padStart(2,"0")}</span>{name}</button>)}</div><div className="lifecycle-detail"><span className="detail-index">{String(active+1).padStart(2,"0")}</span><AnimatePresence mode="wait"><motion.div key={active} id="stage-detail" role="tabpanel" initial={reduced?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-8}}><h3>{stages[active][0]}</h3><p>{stages[active][1]}</p></motion.div></AnimatePresence></div><div className="fact-strip"><span><strong>8+</strong> active NCI-funded trials</span><span>Oncology research</span><span>Participant-facing operations</span><span>Regulatory coordination</span></div><div className="practice-human"><div className="practice-human-image"><Image src="/images/diksha-scrubs.png" alt="Dr. Diksha Venugopal in clinical attire" fill sizes="(max-width: 800px) 100vw, 44vw" /></div><div className="practice-human-copy"><SectionLabel>The human side of research</SectionLabel><h3>The people behind the data.</h3><p>Clinical research begins with protocols and endpoints, but it happens through people. My clinical background shapes how I approach research, with attention to the participant experience, clear communication, and the realities behind every data point.</p><blockquote>“Evidence matters.<br /><em>So does the person living inside it.</em>”</blockquote></div></div></div></section>;
}
