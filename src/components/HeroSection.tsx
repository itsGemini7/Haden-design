import React, { Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Industrial Design · HMI · AI-assisted Design",
      subheading: "I design intelligent products and interfaces through human factors, visual attention, and system-level thinking.",
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      footerNote: "Selected works in industrial design, maritime HMI, AI-assisted UI, and product visualization."
    },
    zh: {
      tagline: "工业设计 · 人机交互 (HMI) · AI辅助设计",
      subheading: "我结合人因工程、人眼视觉注意力和系统化思维，为精细化决策场景设计智能产品形态与高效率交互界面。",
      viewProjects: "查看精选项目",
      downloadResume: "下载设计简历",
      footerNote: "涵盖工业硬件设计、船舶人机交互(HMI)、AI辅助UI设计及高保真产品视觉化作品。"
    }
  };

  const t = language === "en" ? content.en : content.zh;

  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ filter: "hue-rotate(259deg) saturate(1.8) contrast(1.05)" }}>
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg animate-pulse" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-16 pt-32 select-none">
        
        {/* Heading */}
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-1 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          HAYDEN <span className="text-primary font-bold">DESIGN</span>
        </h1>

        {/* Industrial Design · HMI · AI-assisted Design Label */}
        <p
          className="text-primary text-xs md:text-sm tracking-[0.15em] font-medium uppercase mb-3 md:mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t.tagline}
        </p>

        {/* Subheading */}
        <p
          className="text-foreground/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-light leading-relaxed mb-4 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {t.subheading}
        </p>

        {/* Two CTA buttons */}
        <div
          className="flex flex-wrap gap-3 font-semibold mb-6 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-110 active:scale-[0.97] transition-all pointer-events-auto uppercase tracking-wider shadow-[0_4px_20px_rgba(235,92,32,0.15)]"
          >
            {t.viewProjects}
          </a>
          <a
            href="#contact"
            className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-90 active:scale-[0.97] transition-all pointer-events-auto uppercase tracking-wider text-center"
          >
            {t.downloadResume}
          </a>
        </div>

        {/* Trust line */}
        <p
          className="text-muted-foreground/60 text-xs md:text-sm font-light mt-4 md:mt-6 opacity-0 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.75s" }}
        >
          {t.footerNote}
        </p>
      </div>
    </section>
  );
}
