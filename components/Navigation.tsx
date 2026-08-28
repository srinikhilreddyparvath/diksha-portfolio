"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const links = [
  { label: "Story", href: "#story" }, { label: "Research", href: "#research" },
  { label: "Practice", href: "#practice" }, { label: "Teaching", href: "#teaching" },
  { label: "Speaking", href: "#commencement" },
];
const contactLink = { label: "Contact", href: "#contact" };

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [...links, contactLink].map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin:"-25% 0px -60%", threshold:[0,.15,.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <div className="brand-block"><a className="wordmark" href="#top" aria-label={`${siteConfig.shortName}, home`}>{siteConfig.shortName}</a><div className="header-contact" aria-label="Contact information"><a href={siteConfig.emailHref}>{siteConfig.email}</a><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
        <div className="desktop-nav">
          {links.map((link) => <a key={link.href} href={link.href} className={active===link.href ? "is-active" : ""} aria-current={active===link.href ? "location" : undefined}>{link.label}</a>)}
          <a className="resume-link" href={siteConfig.cv} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href={contactLink.href} className={active===contactLink.href ? "is-active" : ""} aria-current={active===contactLink.href ? "location" : undefined}>Contact</a>
          <a className="nav-schedule" href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">Schedule a conversation</a>
        </div>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-hidden={!open}>
        {links.map((link) => <a key={link.href} href={link.href} className={active===link.href ? "is-active" : ""} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{link.label}</a>)}
        <a className="resume-link" href={siteConfig.cv} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Resume</a>
        <a href={contactLink.href} className={active===contactLink.href ? "is-active" : ""} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Contact</a>
        <a className="nav-schedule" href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Schedule a conversation</a>
        <div className="mobile-contact" aria-label="Contact information"><a href={siteConfig.emailHref} tabIndex={open ? 0 : -1}>{siteConfig.email}</a><a href={siteConfig.phoneHref} tabIndex={open ? 0 : -1}>{siteConfig.phoneDisplay}</a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>LinkedIn</a></div>
      </div>
    </header>
  );
}
