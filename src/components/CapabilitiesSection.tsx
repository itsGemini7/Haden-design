import React, { ComponentType } from "react";
import { Cpu, Eye, Layout, PenTool } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Capability {
  id: string;
  number: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  keywordsEn: string[];
  keywordsZh: string[];
  icon: ComponentType<{ className?: string }>;
}

const capabilities: Capability[] = [
  {
    id: "cap-01",
    number: "01",
    titleEn: "Industrial Design",
    titleZh: "工业产品与形体设计",
    descriptionEn: "Product form development, scenario-based design, CMF exploration, and product visualization for intelligent devices and physical interfaces.",
    descriptionZh: "结合严谨的人本尺度、形态美学、CMF (色彩、材质与工艺) 规则和精细三维物理渲染，定义下一代智能硬件与实体交互载体的本源形态。",
    keywordsEn: ["Product Form", "CMF", "Scenario", "Visualization"],
    keywordsZh: ["产品形态", "色彩工艺", "真机工况", "高拟真视觉"],
    icon: PenTool,
  },
  {
    id: "cap-02",
    number: "02",
    titleEn: "HMI / Interface Design",
    titleZh: "高决策HMI与复杂界面系统",
    descriptionEn: "Interface layout, information hierarchy, dashboard systems, maritime HMI, and interaction logic for complex decision-making contexts.",
    descriptionZh: "专攻大型载具、精密指控中心和高决策负荷终端的超大仪表界面，重组多维空间数据，提供高实时性、高对比度的布局方案。",
    keywordsEn: ["HMI", "Information Hierarchy", "Dashboard", "Interaction Logic"],
    keywordsZh: ["人机界面", "高精信息层级", "数字仪表系统", "视效决策反馈"],
    icon: Layout,
  },
  {
    id: "cap-03",
    number: "03",
    titleEn: "Research & Evaluation",
    titleZh: "定量人因研究与眼动验证",
    descriptionEn: "Eye-tracking experiments, task analysis, AOI definition, visual attention metrics, and evidence-based design evaluation.",
    descriptionZh: "主张证据支撑的研究。通过红外高速眼动捕捉、AOI 视觉焦点分配模型与操作路径时间测定，在主观设计之余提供可靠的数据回溯机制。",
    keywordsEn: ["Eye-tracking", "AOI", "Task Analysis", "Attention Metrics"],
    keywordsZh: ["眼动追踪生理学", "感官焦点锁定", "复杂路径分析", "实证数据评估"],
    icon: Eye,
  },
  {
    id: "cap-04",
    number: "04",
    titleEn: "AI-assisted Workflow",
    titleZh: "AI增幅与全链路敏捷交付",
    descriptionEn: "Using Codex, Figma, structured documentation, and AI tools to support design exploration, prototyping, iteration, and portfolio production.",
    descriptionZh: "引入智能编辑器与大生命周期模型，重构经典设计工程化链路。实现从纸面研究至自适应多端页面、前端交互组件的爆发式生成。",
    keywordsEn: ["Codex", "Figma", "Documentation", "Iteration"],
    keywordsZh: ["智能编程", "智能设计系统", "结构化文档", "爆发式迭代"],
    icon: Cpu,
  },
];

export default function CapabilitiesSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "Expertise Blueprint",
      title: "Capabilities",
      subtitle: "A cross-disciplinary skill set connecting product form, interface systems, research validation, and AI-assisted design production."
    },
    zh: {
      badge: "核心专业领地",
      title: "核心能力",
      subtitle: "贯穿工业硬件形态、高负荷人机仪表网、高精度生理心理学检测、以及前沿智能化代码生成的全链路跨界设计矩阵。"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 lg:px-20 bg-background/95 relative z-20 border-t border-border/20">
      {/* Subtle background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-primary/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title + Subtitle */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-6 bg-primary/60" />
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const keywords = language === "en" ? cap.keywordsEn : cap.keywordsZh;
            return (
              <div
                key={cap.id}
                className="group relative flex flex-col justify-between bg-transparent hover:bg-secondary/15 rounded-md p-6 md:p-8 border border-border/30 hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Number & Subtle Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-primary/70 font-bold bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-xs">
                      CAP &middot; {cap.number}
                    </span>
                    <Icon className="w-5 h-5 text-muted-foreground/45 group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                    {language === "en" ? cap.titleEn : cap.titleZh}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground/80 text-xs md:text-sm font-light mb-6 leading-relaxed">
                    {language === "en" ? cap.descriptionEn : cap.descriptionZh}
                  </p>
                </div>

                {/* Keywords footer for the capability card */}
                <div className="pt-4 border-t border-border/20">
                  <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-[11px] font-mono text-muted-foreground/50">
                    {keywords.map((kw, idx) => (
                      <span key={kw} className="flex items-center">
                        <span className="group-hover:text-white/80 transition-colors uppercase tracking-wider text-[10px]">{kw}</span>
                        {idx < keywords.length - 1 && (
                          <span className="text-primary/30 mx-1.5">&middot;</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
