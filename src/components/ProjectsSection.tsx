import { ArrowUpRight, Cpu, Layers, Waves, Sparkles, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  id: string;
  number: string;
  titleEn: string;
  titleZh: string;
  tagsEn: string[];
  tagsZh: string[];
  descriptionEn: string;
  descriptionZh: string;
  methods: string[];
  visualPreset: "radar" | "maritime" | "pet" | "ai";
}

const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    titleEn: "Maritime Conning Display Redesign",
    titleZh: "航海Conning主信息交互界面优化设计",
    tagsEn: ["HMI", "Research", "Eye-tracking"],
    tagsZh: ["人机交互", "学术研究", "眼动测试"],
    descriptionEn: "A research-driven HMI project that uses visual attention, eye-tracking data, and task scenarios to optimize ship bridge display layouts.",
    descriptionZh: "通过定量眼动生理追踪实验、定性多维空间视线注意力散点分析与复杂特种驾驶工况，高度精简和归纳大型远洋轮驾驶舱关键参数布局。",
    methods: ["Eye-tracking", "AOI Analysis", "MATLAB", "Figma"],
    visualPreset: "maritime",
  },
  {
    id: "project-02",
    number: "02",
    titleEn: "Pet Emotion Companion App",
    titleZh: "AI多维宠物情感陪伴与智能监护交互系统",
    tagsEn: ["App UI", "AI Interaction", "UX"],
    tagsZh: ["移动端UI", "AI多重感知", "体验设计"],
    descriptionEn: "An AI-powered companion app that interprets pet emotions through facial expression and sound, helping owners understand and respond to their pets.",
    descriptionZh: "基于深度神经网络算法分析爱宠表情与不同频段声音特征，将其映射至多变拟人化界面，提供更直观温情的跨物种智慧伴侣体验。",
    methods: ["UX Flow", "UI Design", "AI Scenario", "Figma"],
    visualPreset: "pet",
  },
  {
    id: "project-03",
    number: "03",
    titleEn: "Water Level Radar Product Design",
    titleZh: "极端海况高精度波浪潮位环境雷达设计",
    tagsEn: ["Industrial Design", "Product Visualization"],
    tagsZh: ["工业设计", "高拟真视觉"],
    descriptionEn: "A marine sensing device concept focused on modular structure, installation scenarios, and product visualization for water-level and wave monitoring.",
    descriptionZh: "具有严苛盐雾、风阻优化能力的专业海洋感知测定设备，从整机工业堆叠机构设计到实地部署，实现对近海浪高的实时高可靠性记录。",
    methods: ["Product Design", "Scenario Rendering", "CMF", "3D Visualization"],
    visualPreset: "radar",
  },
  {
    id: "project-04",
    number: "04",
    titleEn: "AI-assisted Portfolio System",
    titleZh: "AI增幅设计管线与线上作品体系集",
    tagsEn: ["AI Workflow", "Codex", "Design System"],
    tagsZh: ["AI工作流", "Codex组件", "设计系统"],
    descriptionEn: "A self-built design workflow using Codex, Figma, and structured documentation to turn design ideas into websites, UI systems, and case-study pages.",
    descriptionZh: "打通前沿人工智能大模型、模块化设计文档及全栈前端编译环境，赋能设计师无缝生成产品工程级的案例落地页和自适应高精度网站。",
    methods: ["Codex", "Figma", "Markdown Docs", "Vibe Coding"],
    visualPreset: "ai",
  },
];

export default function ProjectsSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      sectionBadge: "portfolio index",
      sectionTitle: "Selected Projects",
      sectionDesc: "A curated set of works across HMI research, product design, AI interaction, and AI-assisted design workflows.",
      methods: "Methods:",
      viewCase: "View Case →",
      activeCase: "ACTIVE CASE"
    },
    zh: {
      sectionBadge: "设计名录索引",
      sectionTitle: "精选设计项目",
      sectionDesc: "涵盖大型航海人机交互(HMI)研究、工业装备硬件形体、AI沉浸式伴侣应用及前沿AI辅助代码/UI全栈等领域案例。",
      methods: "工具与方法论：",
      viewCase: "查看项目详情 →",
      activeCase: "代表案例"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 bg-background relative z-20 border-t border-border/30">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/3 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title + Subtitle */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.sectionBadge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            {t.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-light leading-relaxed">
            {t.sectionDesc}
          </p>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between bg-secondary/30 rounded-lg p-6 md:p-10 border border-border/40 hover:border-primary/40 hover:bg-secondary/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Thin warm glow overlay */}
              <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Visual Header / Elegant Cover Placeholder */}
                <div className="relative w-full h-48 md:h-64 rounded-sm bg-hero-bg overflow-hidden border border-border/30 mb-8 flex items-center justify-center">
                  {/* Dynamic Abstract Tech Background Patterns based on preset */}
                  {project.visualPreset === "maritime" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      {/* Interactive Radar Ring HUD */}
                      <div className="w-32 h-32 rounded-full border border-dashed border-primary/20 flex items-center justify-center animate-[spin_40s_linear_infinite]" />
                      <div className="absolute w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full animate-ping" />
                      <div className="mt-4 font-mono text-[9px] text-primary/60 tracking-widest uppercase">CONNING SIMULATOR V1</div>
                    </div>
                  )}

                  {project.visualPreset === "pet" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      {/* Pulse Waveform Visualizer */}
                      <div className="flex items-end gap-1.5 h-16 w-40">
                        <div className="w-1 bg-primary/40 h-10 group-hover:h-12 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/60 h-4 group-hover:h-8 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary h-14 group-hover:h-16 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/80 h-8 group-hover:h-10 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/30 h-16 group-hover:h-12 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/50 h-6 group-hover:h-14 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary h-12 group-hover:h-6 transition-all duration-300 rounded-full" />
                      </div>
                      <div className="mt-3 font-mono text-[9px] text-primary/60 tracking-widest uppercase">SPEECH EMOTION GRAPH</div>
                    </div>
                  )}

                  {project.visualPreset === "radar" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      {/* Marine Sensing Radar waves illustration */}
                      <div className="relative w-40 h-32 flex items-center justify-center">
                        <div className="absolute inset-x-0 bottom-4 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="absolute w-12 h-12 rounded-full border-2 border-primary/40 rotate-45 transform skew-x-12 translate-y-2 group-hover:-translate-y-1 transition-transform duration-500" />
                        <div className="absolute w-20 h-20 rounded-full border border-white/10 rotate-12" />
                        <Waves className="w-8 h-8 text-primary/40 absolute -bottom-2 animate-pulse" />
                      </div>
                      <div className="mt-2 font-mono text-[9px] text-primary/60 tracking-widest uppercase">RADAR SENSING RIG</div>
                    </div>
                  )}

                  {project.visualPreset === "ai" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      {/* Code and system boxes */}
                      <div className="grid grid-cols-4 gap-2 w-48 h-20 opacity-40 font-mono text-[8px] text-white/60 p-2 border border-white/5 rounded-xs bg-black/40">
                        <div className="col-span-2 border border-primary/30 p-1 rounded-xs">{"{ hayden.design }"}</div>
                        <div className="border border-white/10 p-1 flex items-center justify-center">V1</div>
                        <div className="border border-white/10 p-1 flex items-center justify-center">AI</div>
                        <div className="col-span-4 bg-primary/10 text-primary border border-primary/20 p-1 rounded-xs flex items-center justify-between">
                          <span>SYSTEM_ACTIVE</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        </div>
                      </div>
                      <div className="mt-4 font-mono text-[9px] text-primary/60 tracking-widest uppercase font-semibold">CODEX DEPLOYED SYSTEM</div>
                    </div>
                  )}

                  {/* Masking overlay label hover glow */}
                  <div className="absolute top-4 right-4 bg-background/90 border border-border/60 text-[10px] font-mono tracking-widest px-3 py-1 uppercase text-white/80 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                    {t.activeCase}
                  </div>
                </div>

                {/* Tags and ID */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {(language === "en" ? project.tagsEn : project.tagsZh).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider text-primary/95 bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-mono text-muted-foreground/60 group-hover:text-primary transition-colors font-semibold">
                    NO. {project.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                  {language === "en" ? project.titleEn : project.titleZh}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground/90 text-sm md:text-base font-light mb-6 leading-relaxed">
                  {language === "en" ? project.descriptionEn : project.descriptionZh}
                </p>
              </div>

              {/* Methods and Call-to-action */}
              <div className="mt-auto pt-6 border-t border-border/30">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  {/* Methods */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground/80 font-mono">
                    <span className="text-white/40 uppercase text-[9px] tracking-widest font-semibold">{t.methods}</span>
                    {project.methods.map((method, idx) => (
                      <span key={method} className="flex items-center">
                        <span className="hover:text-white transition-colors">{method}</span>
                        {idx < project.methods.length - 1 && (
                          <span className="text-primary/40 mx-1.5">&middot;</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors hover:underline underline-offset-4 cursor-pointer self-end sm:self-auto"
                  >
                    <span>{t.viewCase}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
