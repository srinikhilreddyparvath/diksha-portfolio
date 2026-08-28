import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const groups = [
 ["Clinical Study Operations",["Clinical study coordination","Study execution","Study logistics","Protocol implementation","Participant recruitment","Eligibility screening","Informed consent","Clinical data collection"]],
 ["Clinical Research & Patient Care",["Participant-facing research","Patient monitoring","Clinical data collection","Patient education","Supportive care"]],
 ["Epidemiology & Biostatistics",["Epidemiology","Biostatistics","Statistical analysis","Experimental design","Survival analysis","Multivariable regression"]],
 ["Data",["R","SAS","SPSS","Python","Excel","REDCap","Data visualization","Data cleaning","Data interpretation"]],
 ["Regulatory & Ethics",["IRB protocol management","HIPAA","Good Clinical Practice","Regulatory documentation","Adverse-event documentation","Audit readiness"]],
 ["Communication & Collaboration",["Participant communication","Patient and caregiver education","Investigator coordination","Sponsor communication","Multidisciplinary collaboration"]],
] as const;
export function Expertise(){return <section className="expertise-section section-pad" aria-labelledby="expertise-title"><div className="wide-shell"><div className="section-intro"><SectionLabel>Expertise</SectionLabel><h2 id="expertise-title">Across the study lifecycle.</h2></div><div className="expertise-grid">{groups.map(([name,items],i)=><Reveal key={name} className="expertise-group"><span>0{i+1}</span><h3>{name}</h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></Reveal>)}</div></div></section>}
