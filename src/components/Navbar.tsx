import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { nameEn: "Projects", nameZh: "项目", slugEn: "Projects" },
    { nameEn: "Research", nameZh: "研究", slugEn: "Research" },
    { nameEn: "Method", nameZh: "方法", slugEn: "Method" },
    { nameEn: "About", nameZh: "关于", slugEn: "About" },
    { nameEn: "Contact", nameZh: "联系", slugEn: "Contact" },
  ];

  const getSlug = (slugEn: string) => {
    if (slugEn === "Research") return "#capabilities";
    if (slugEn === "Method") return "#method";
    return `#${slugEn.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 py-5 bg-background/80 backdrop-blur-md border-b border-border/10 pointer-events-none">
      {/* Left: Logo */}
      <div className="pointer-events-auto">
        <a href="#" className="text-foreground text-base md:text-lg font-semibold tracking-tight uppercase hover:opacity-80 transition-opacity">
          HAYDEN DESIGN
        </a>
      </div>

      {/* Center & Right Wrapper to look compact */}
      <div className="flex items-center gap-8 pointer-events-auto">
        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.slugEn}
              href={getSlug(link.slugEn)}
              className="text-[11px] text-muted-foreground hover:text-foreground transition-all uppercase tracking-widest font-medium"
            >
              {language === "en" ? link.nameEn : link.nameZh}
            </a>
          ))}
        </div>

        {/* Separator line on desktop */}
        <span className="hidden md:inline h-4 w-px bg-border/40" />

        {/* Right: Language switch switcher */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest select-none">
          <button
            onClick={() => setLanguage("en")}
            className={`transition-all duration-200 cursor-pointer uppercase ${
              language === "en"
                ? "text-primary font-bold scale-105"
                : "text-muted-foreground/50 hover:text-foreground font-normal"
            }`}
          >
            EN
          </button>
          <span className="text-muted-foreground/30 font-light">&middot;</span>
          <button
            onClick={() => setLanguage("zh")}
            className={`transition-all duration-200 cursor-pointer ${
              language === "zh"
                ? "text-primary font-bold scale-105"
                : "text-muted-foreground/50 hover:text-foreground font-normal"
            }`}
          >
            中
          </button>
        </div>
      </div>
    </nav>
  );
}
