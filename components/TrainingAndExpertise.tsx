"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const education = [
  { school:"Boston University", degree:"Master of Public Health", focus:"Epidemiology & Biostatistics" },
  { school:"SVYASA University", degree:"Bachelor of Naturopathic Medicine and Yogic Sciences", focus:"Integrative Medicine" },
] as const;
const groups = [
  ["Clinical Study Operations",["Clinical study coordination","Study execution","Study logistics","Protocol implementation","Participant recruitment","Eligibility screening","Informed consent","Clinical data collection"]],
  ["Clinical Research & Patient Care",["Participant-facing research","Patient monitoring","Clinical data collection","Patient education","Supportive care"]],
  ["Epidemiology & Biostatistics",["Epidemiology","Biostatistics","Statistical analysis","Experimental design","Survival analysis","Multivariable regression"]],
  ["Data",["R","SAS","SPSS","Python","Excel","REDCap","Data visualization","Data cleaning","Data interpretation"]],
  ["Regulatory & Ethics",["IRB protocol management","HIPAA","Good Clinical Practice","Regulatory documentation","Adverse-event documentation","Audit readiness"]],
  ["Communication & Collaboration",["Participant communication","Patient and caregiver education","Investigator coordination","Sponsor communication","Multidisciplinary collaboration"]],
] as const;
const certifications=["Good Clinical Practice (GCP)","Human Subjects Research","HIPAA for Research","Statistical Data Analysis Certification","Data Visualization Certification","Microsoft Office Suite Certification"];

export function TrainingAndExpertise(){
  const [expanded,setExpanded]=useState(false);
  const reduced=useReducedMotion();
  return <section className="training-section section-pad" aria-labelledby="training-title"><div className="wide-shell"><div className="section-intro"><SectionLabel>Training &amp; expertise</SectionLabel><h2 id="training-title">Two disciplines.<br/><em>One perspective.</em></h2></div><div className="training-grid"><div className="training-education"><SectionLabel>Education</SectionLabel>{education.map((item,index)=><article key={item.school}><span>0{index+1}</span><h3>{item.school}</h3><p>{item.degree}</p><strong>{item.focus}</strong></article>)}</div><div className="training-core"><SectionLabel>Core expertise</SectionLabel><ol>{groups.map(([name],index)=><li key={name}><span>0{index+1}</span>{name}</li>)}</ol><button className="training-toggle" aria-expanded={expanded} aria-controls="full-expertise" onClick={()=>setExpanded(value=>!value)}>{expanded?"Close full expertise":"View full expertise"}<motion.span animate={{rotate:expanded?45:0}}><Plus aria-hidden="true"/></motion.span></button></div></div><AnimatePresence initial={false}>{expanded?<motion.div id="full-expertise" className="training-details" initial={reduced?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={reduced?undefined:{height:0,opacity:0}}><div className="training-skills">{groups.map(([name,items])=><article key={name}><h3>{name}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div><div className="training-certifications"><SectionLabel>Certifications</SectionLabel>{certifications.map(item=><span key={item}>{item}</span>)}</div></motion.div>:null}</AnimatePresence></div></section>;
}
