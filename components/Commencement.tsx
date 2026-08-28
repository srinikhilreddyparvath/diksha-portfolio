"use client";

import { ExternalLink, Mail, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionLabel } from "./SectionLabel";

export function Commencement() {
  const [playing, setPlaying] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="commencement" className="commencement section-pad" aria-labelledby="commencement-title">
      <div className="cinema-shell">
        <SectionLabel light>Voice · Leadership · Communication</SectionLabel>
        <h2 id="commencement-title">Some lessons are meant for more than one classroom.</h2>
        <p className="commencement-subtitle"><strong>Boston University School of Public Health</strong><span>Commencement Address</span></p>
        <div className="video-frame">
          {playing ? (
            <iframe src={`https://www.youtube.com/embed/${siteConfig.commencementVideoId}?autoplay=1`} title={`${siteConfig.fullName}: Boston University School of Public Health Commencement Address`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          ) : (
            <button className={`video-poster${imageFailed ? " no-image" : ""}`} onClick={() => setPlaying(true)} aria-label="Play the commencement address">
              {!imageFailed ? <Image src={`https://i.ytimg.com/vi/${siteConfig.commencementVideoId}/maxresdefault.jpg`} alt={`${siteConfig.name} speaking at commencement`} fill sizes="(max-width: 1100px) 92vw, 1100px" onError={() => setImageFailed(true)} /> : null}
              <span className="video-overlay" /><span className="play-circle"><Play aria-hidden="true" /></span><strong>Watch the commencement address</strong>
            </button>
          )}
        </div>
        <div className="video-meta"><div><strong>Boston University School of Public Health</strong><span>{siteConfig.name} · Commencement Address</span></div><div><a href={siteConfig.commencementUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <ExternalLink aria-hidden="true" /></a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink aria-hidden="true" /></a><a href={siteConfig.emailHref}>Email Dr. Diksha Venugopal <Mail aria-hidden="true" /></a></div></div>
      </div>
    </section>
  );
}
