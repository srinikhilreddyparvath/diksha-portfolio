import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const education = [
  { school:"Boston University", degree:"Master of Public Health", focus:"Epidemiology & Biostatistics", topics:["Biostatistics","Epidemiology","Quantitative Methods of Public Health","SAS","SPSS"] },
  { school:"SVYASA University", degree:"Bachelor of Naturopathic Medicine and Yogic Sciences", focus:"Integrative Medicine", topics:["Anatomy","Physiology","Pathology","Community Medicine","Research Methodology","Nutrition","Gynecology","Acupuncture"] },
];
const certifications=["Good Clinical Practice (GCP)","Human Subjects Research","HIPAA for Research","Statistical Data Analysis Certification","Data Visualization Certification","Microsoft Office Suite Certification"];

export function Education() { return <section className="education-section section-pad" aria-labelledby="education-title"><div className="wide-shell"><div className="section-intro"><SectionLabel>Education</SectionLabel><h2 id="education-title">Two disciplines.<br /><em>One perspective.</em></h2></div><div className="education-grid">{education.map((item,i)=><Reveal key={item.school} className={`education-item education-${i+1}`}><p className="edu-number">0{i+1}</p><h3>{item.school}</h3><p className="degree">{item.degree}</p><p className="focus">{item.focus}</p><ul>{item.topics.map(t=><li key={t}>{t}</li>)}</ul></Reveal>)}</div><div className="certifications"><SectionLabel>Certifications</SectionLabel><div>{certifications.map(c=><span key={c}>{c}</span>)}</div></div></div></section>; }
