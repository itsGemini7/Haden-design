import React from "react";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Phase {
  number: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  keywordsEn: string[];
  keywordsZh: string[];
}

const phases: Phase[] = [
  {
    number: "01",
    titleEn: "Problem Deconstruction",
    titleZh: "设计问题痛点精密解构",
    descriptionEn: "Breaking down ambiguous design challenges into users, contexts, tasks, constraints, and evaluation criteria.",
    descriptionZh: "将模糊复杂的软硬件设计命题，抽丝剥茧拆解为具体的用户群画像、工作环境工况、核心任务序列、物理边界局限以及精准可量化的易用性指标。",
    keywordsEn: ["Context", "User", "Task", "Constraint"],
    keywordsZh: ["使用工况", "特征人群", "核心任务", "边界局限"],
  },
  {
    number: "02",
    titleEn: "Cross-domain Analogy",
    titleZh: "跨领域深度心智类比",
    descriptionEn: "Mapping structural similarities across domains to generate deeper design insights beyond surface-level references.",
    descriptionZh: "打破行业孤岛，将高空驾驶、精密医疗和深海操纵等极致安全或高效领域的交互精髓，映射至数字智能触端，挖掘超越表象的原生跨界启示。",
    keywordsEn: ["Analogy", "Transfer", "Pattern", "Insight"],
    keywordsZh: ["跨界类比", "经验转译", "心智模型", "纵深洞察"],
  },
  {
    number: "03",
    titleEn: "System Modeling",
    titleZh: "系统关系与变量建模",
    descriptionEn: "Building relational models between design variables, user behavior, interface structure, and measurable outcomes.",
    descriptionZh: "在客观设计因子（如视距离、操作间距、字号视觉权重）、人因交互反馈和主观任务感知之间，构建严谨的逻辑关系网，杜绝凭空臆造设计决策。",
    keywordsEn: ["Variables", "Relationships", "Metrics", "System"],
    keywordsZh: ["关键变量", "多维关系", "评估指标", "系统集成"],
  },
  {
    number: "04",
    titleEn: "Abstraction-level Switching",
    titleZh: "多维度信息层级俯瞰",
    descriptionEn: "Moving between high-level strategy, mid-level information architecture, and low-level visual or interaction details.",
    descriptionZh: "确保设计视角的无缝穿梭：上一秒从商业模型俯视宏观架构，中观穿过严密的信息矩阵，下一秒立刻扎入对微至1像素投影与微动效的终极审视。",
    keywordsEn: ["Strategy", "Structure", "Detail", "Iteration"],
    keywordsZh: ["顶层战略", "中观结构", "像素微观", "纵深迭跃"],
  },
  {
    number: "05",
    titleEn: "Taste Filtering",
    titleZh: "主观品味与美德过滤",
    descriptionEn: "Using visual judgment, semantic consistency, and design intent to filter AI-generated or exploratory outputs.",
    descriptionZh: "海量生成时代更需要品味来定音。基于深厚的极简现代主义沉淀与高对比度控制力，严格过滤冗余噪点，确保形态传递克制、专业且富含意图性。",
    keywordsEn: ["Judgment", "Coherence", "Style", "Intent"],
    keywordsZh: ["视觉审视", "语意对齐", "克制美学", "设计纯度"],
  },
  {
    number: "06",
    titleEn: "AI Amplification",
    titleZh: "AI原生赋能全流程提速",
    descriptionEn: "Using AI tools to accelerate documentation, coding, prototyping, variation generation, and design iteration.",
    descriptionZh: "将智能对话与前沿编译工具深度植入设计师的工作流，敏捷推进原型开发、前端渲染、代码编写与成果物料交付，将纯思辨升华为工程落地。",
    keywordsEn: ["AI", "Codex", "Prototype", "Production"],
    keywordsZh: ["前沿共创", "Codex赋能", "高保真原型", "敏捷上市"],
  },
];

export default function MethodSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "strategic framework",
      titlePart1: "Research-driven,",
      titlePart2: "AI-Amplified",
      titlePart3: "Design Process",
      desc: "My design process connects research, systems thinking, visual judgment, and AI-assisted production. It is built to move from ambiguous problems to structured models, then from models to concrete design decisions and deliverable outputs.",
      inLabel: "INPUT: AMBIGUOUS PROBLEM",
      strucLabel: "STRUCTURE: RESEARCH + SYSTEM THINKING",
      midLabel: "HUMAN JUDGMENT + AI AMPLIFICATION",
      outLabel: "OUTPUT: DESIGN DECISION + DELIVERABLE"
    },
    zh: {
      badge: "科学推进框架",
      titlePart1: "实证研究驱动，",
      titlePart2: "AI赋能倍增的",
      titlePart3: "前沿设计范式",
      desc: "我将客观、量化的人因研究方法与系统化宏观框架融合，配以设计师的敏锐审美，辅以AI全流程高维提速。旨在推动复杂不确定课题由模糊转为精密系统模型，最终交付极具美学张力、体验可度量的实体产品及软硬件交互视窗。",
      inLabel: "输入端：模糊杂乱的问题痛点",
      strucLabel: "结构化：客观人因研究与系统思考",
      midLabel: "品质精滤：审美注意判定与AI敏捷伴侣",
      outLabel: "输出端：高确定性设计决策与生产级物料"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="method" className="py-24 px-6 md:px-12 lg:px-20 bg-hero-bg relative z-20 border-t border-border/25">
      {/* Background neon ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title & Methodology Abstract */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-primary tracking-[0.25em] font-semibold uppercase">{t.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 uppercase leading-[1.1]">
              {t.titlePart1} <br />
              <span className="text-primary font-bold">{t.titlePart2}</span> <br />
              {t.titlePart3}
            </h2>
            
            <p className="text-muted-foreground text-sm lg:text-base font-light mb-8 leading-relaxed">
              {t.desc}
            </p>

            {/* Graphic node schema pointing down/right to express progressive transformation */}
            <div className="hidden lg:flex flex-col gap-3 font-mono text-[10px] text-muted-foreground/40 border-l border-primary/20 pl-4 py-2 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <span>{t.inLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-2 text-primary/30" />
              <div className="flex items-center gap-2 pl-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>{t.strucLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-6 text-primary/30" />
              <div className="flex items-center gap-2 text-primary/70 font-semibold pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>{t.midLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-10 text-primary/30" />
              <div className="flex items-center gap-2 pl-12">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{t.outLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3x2 Grid of Phases */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {phases.map((phase) => {
                const keywords = language === "en" ? phase.keywordsEn : phase.keywordsZh;
                return (
                  <div
                    key={phase.number}
                    className="relative group bg-secondary/10 hover:bg-secondary/25 border-l-2 border-border hover:border-primary/60 p-6 md:p-8 transition-all duration-300 rounded-r-md flex flex-col justify-between"
                  >
                    <div>
                      {/* Index Number & Connecting Line Style */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">
                          [ {language === "en" ? `PHASE ${phase.number}` : `阶段 ${phase.number}`} ]
                        </span>
                        
                        {/* Flow feedback symbol */}
                        <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary/50 transition-colors font-medium">
                          {phase.number} / 06
                        </span>
                      </div>

                      {/* Phase Title */}
                      <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {language === "en" ? phase.titleEn : phase.titleZh}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs md:text-sm font-light mb-6 leading-relaxed">
                        {language === "en" ? phase.descriptionEn : phase.descriptionZh}
                      </p>
                    </div>

                    {/* Keywords Tags Footer */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-2 gap-y-1">
                      {keywords.map((kw, kwIdx) => (
                        <span key={kw} className="text-[10px] font-mono text-muted-foreground/50 flex items-center tracking-wider">
                          <span className="group-hover:text-white/75 transition-colors">{kw}</span>
                          {kwIdx < keywords.length - 1 && (
                            <span className="w-1 h-1 rounded-full bg-border/80 mx-1.5" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
