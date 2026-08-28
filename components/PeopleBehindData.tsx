import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import Image from "next/image";

export function PeopleBehindData() {
  return <section className="people-section section-pad" aria-labelledby="people-title"><div className="wide-shell people-grid"><Reveal className="people-image"><Image src="/images/diksha-scrubs.png" alt="Dr. Diksha Venugopal in clinical attire" fill sizes="(max-width: 800px) 100vw, 44vw" /></Reveal><div className="people-copy"><Reveal><SectionLabel>The human side of research</SectionLabel><h2 id="people-title">The people behind the data.</h2><p>Clinical research begins with protocols and endpoints, but it happens through people. My clinical background shapes how I approach research, with attention to the participant experience, clear communication, and the realities behind every data point.</p></Reveal><Reveal className="people-quote"><blockquote>“Evidence matters.<br /><em>So does the person living inside it.</em>”</blockquote></Reveal></div></div></section>;
}
