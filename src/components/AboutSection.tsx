import React from "react";
import { User, GraduationCap, Target, Wrench, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "BIOGRAPHY & BACKGROUND",
      title: "ABOUT HAYDEN",
      tagline: "Industrial Design Graduate Student exploring product design, HMI, and AI-assisted design workflows.",
      p1: "I am Hayden, an Industrial Design Graduate Student from Singapore. My background combines mechatronics engineering and industrial design, allowing me to approach design from both technical systems and human-centered experience.",
      p2: "I received my undergraduate education in Mechatronics at Singapore Institute of Technology, and I am currently pursuing a master’s degree in Industrial Design at Ocean University of China. My current work focuses on industrial design, HMI, UI/UX, visual attention research, and AI-assisted design workflows.",
      p3: "I approach design as a process of deconstructing complex problems, building system-level models, and translating research insights into visual, interactive, and product-level decisions.",
      more: "More About Me",
      download: "Download Resume",
      role: "Industrial Design Graduate Student",
      subTitle: "Singapore · Industrial Design / HMI / UIUX",
      regIndex: "Graduate ID Index",
      profile: "Profile",
      pName: "Name",
      pIdent: "Identity",
      pNation: "Nationality",
      pNationVal: "Singaporean",
      edu: "Education Pathway",
      edu1Title: "B.Eng / Undergraduate",
      edu1Desc: "Mechatronics, Singapore Institute of Technology",
      edu2Title: "Master of Industrial Design",
      edu2Desc: "Industrial Design, Ocean University of China",
      focus: "Primary Focus",
      focusTags: ["Industrial Design", "HMI Design", "UI/UX Design", "Visual Attention", "AI Workflow"],
      tools: "Tools Stack"
    },
    zh: {
      badge: "人物简历与学科背景",
      title: "关于 HAYDEN",
      tagline: "工业设计在读研究生 · 致力于机电工程系统与人因设计的深度交融。",
      p1: "我是 Hayden，来自新加坡。我的学术路径横跨机电一体化工程（Mechatronics Engineering）与专业工业设计系统，使我能够同时从“底层技术逻辑”与“上层人本体验”构思产品与窗口层级。",
      p2: "本科毕业于新加坡理工大学（SIT）机电专业，现正于中国海洋大学攻读工业设计硕士研究生。当前核心课题涵盖特种载具HMI设计优化、智能装备形态推敲、红外眼动追踪验证以及AI辅助全闭环代码工作流。",
      p3: "我将设计视作解构模糊现实挑战的科学过程。通过搭建关系模型，将干涩的实证眼动物理指标翻译为富有感官弹性、高度易用的交互实物和图形设计决策。",
      more: "探索更多关于我",
      download: "下载设计简历",
      role: "工业设计专业研究生",
      subTitle: "新加坡 · 工业设计 / HMI / UIUX",
      regIndex: "中国海大 & 新加坡理工 索引",
      profile: "受众画像说明",
      pName: "姓名",
      pIdent: "专业身份",
      pNation: "国籍籍贯",
      pNationVal: "新加坡籍",
      edu: "学科教育路径",
      edu1Title: "工学学士 / SIT本科",
      edu1Desc: "机电一体化工程， 新加坡理工大学",
      edu2Title: "工业设计硕士 / OUC研究生",
      edu2Desc: "工业设计， 中国海洋大学",
      focus: "核心能力聚焦",
      focusTags: ["工业设计", "人机交互界面", "UI/UX交互", "人眼视觉注意力", "AI敏捷开发"],
      tools: "专业工具载体"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-background relative z-20 border-t border-border/20">
      {/* Background ambient glow matching the tech aesthetic */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/2 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section name */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story, Philosophy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
                {t.title}
              </h2>
              <p className="text-primary text-sm md:text-base font-mono tracking-wide uppercase font-semibold mb-6">
                {t.tagline}
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-sm md:text-base font-light leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-white text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer group"
              >
                <span>{t.more}</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary/25 hover:bg-secondary/40 border border-border/60 hover:border-white/20 text-white/90 hover:text-white text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer"
              >
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span>{t.download}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Structured Information Cards & Interactive Blueprint */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Profile Avatar Card */}
            <div className="relative w-full rounded-lg bg-secondary/15 hover:bg-secondary/25 border border-border/30 p-6 flex flex-col sm:flex-row items-center gap-6 overflow-hidden group transition-all duration-300">
              {/* Abstract Portrait Square Placeholder */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-xl bg-black/60 border border-primary/20 group-hover:border-primary/40 flex items-center justify-center overflow-hidden transition-colors">
                {/* Subtle blueprint grid in background of avatar */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {/* Interactive premium abstract portrait svg */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                  {/* Subtle radiating waves or coordinates to represent sensory & mechatronics background */}
                  <circle cx="50" cy="50" r="40" stroke="rgba(251, 146, 60, 0.08)" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="30" stroke="rgba(251, 146, 60, 0.12)" />
                  <circle cx="50" cy="50" r="20" stroke="rgba(251, 146, 60, 0.2)" strokeDasharray="5 5" />
                  
                  {/* Vertical & Horizontal Crosshairs */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  
                  {/* Abstract Face Portrait Silhouette / Monogram 'H' */}
                  <path d="M35 25V75" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <path d="M65 25V75" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <path d="M35 50H65" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

                  {/* Aesthetic pointer nodes */}
                  <circle cx="35" cy="25" r="2.5" fill="#FB923C" />
                  <circle cx="65" cy="75" r="2.5" fill="#FB923C" />
                  <circle cx="50" cy="50" r="3" fill="#FB923C" className="animate-pulse" />
                  <circle cx="50" cy="50" r="5" stroke="#FB923C" strokeWidth="0.5" opacity="0.5" />
                  
                  {/* Outer delicate coordinate numbers or design indicators */}
                  <text x="50" y="15" fill="rgba(255, 255, 255, 0.3)" fontSize="5" fontFamily="monospace" textAnchor="middle">ID: 83C-System</text>
                  <text x="50" y="88" fill="rgba(255, 255, 255, 0.3)" fontSize="5" fontFamily="monospace" textAnchor="middle">MECHATRONIC V1</text>
                </svg>
                
                {/* Active Indicator Pulse Ring */}
                <span className="absolute top-2.5 right-2.5 flex h-2 w-2 animate-pulse">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-3 relative z-10 text-center sm:text-left">
                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white uppercase font-sora">
                      Hayden
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-primary font-mono font-bold leading-relaxed">
                    {t.role}
                  </p>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground font-mono leading-relaxed">
                  <div className="text-white/80">{t.subTitle}</div>
                  <div className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">{t.regIndex}</div>
                </div>
              </div>

              {/* Background grid accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            </div>

            {/* Profile & Info Cards */}
            <div className="space-y-4 font-mono">
              
              {/* Card 1: Profile */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.profile}</span>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground pl-6.5">
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span>{t.pName}</span>
                    <span className="text-white font-medium">Hayden</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span>{t.pIdent}</span>
                    <span className="text-white font-medium">{language === "en" ? "Graduate ID Scholar" : "工业设计硕士"}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span>{t.pNation}</span>
                    <span className="text-white font-medium">{t.pNationVal}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Education */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.edu}</span>
                </div>
                <div className="space-y-3.5 text-xs text-muted-foreground pl-6.5">
                  <div className="space-y-1">
                    <div className="text-white font-medium text-xs md:text-sm">{t.edu1Title}</div>
                    <div className="font-sans font-light text-muted-foreground text-xs">
                      {t.edu1Desc}
                    </div>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-white/5">
                    <div className="text-white font-medium text-xs md:text-sm">{t.edu2Title}</div>
                    <div className="font-sans font-light text-muted-foreground text-xs">
                      {t.edu2Desc}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Focus & Core Modules */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.focus}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-6.5">
                  {t.focusTags.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] uppercase font-mono bg-primary/5 hover:bg-primary/10 border border-primary/25 text-primary tracking-wide px-2 py-0.5 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 4: Tools Stack */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <Wrench className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.tools}</span>
                </div>
                <div className="pl-6.5">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono leading-relaxed">
                    {[
                      "Figma",
                      "Rhino",
                      "Unreal Engine",
                      "MATLAB",
                      "Adobe Illustrator",
                      "Codex"
                    ].map((tool, idx, arr) => (
                      <span key={tool} className="flex items-center">
                        <span className="text-white hover:text-primary transition-colors">{tool}</span>
                        {idx < arr.length - 1 && <span className="text-primary/30 mx-2">&middot;</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
