import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, FileX, ImageOff, DatabaseZap, Search, HardDrive, FileText, Upload, Clock, ShieldCheck, LayoutDashboard } from "lucide-react";

const problemIcons = [FileX, ImageOff, DatabaseZap, Search, HardDrive];
const solutionIcons = [FileText, Upload, Clock, ShieldCheck, LayoutDashboard];

const content = {
  ar: {
    problemTitle: "المشكلة",
    problemSubtitle: "تحديات العمل الحالي",
    solutionTitle: "الحل",
    solutionSubtitle: "الحل مع CapTured",
    solutionDesc: "توثيق ذكي وموثوق بالكامل",
    problems: [
      "عدم وجود توثيق رسمي موحّد.",
      "إرسال صور قديمة بدل التصوير المباشر.",
      "اختلاف البيانات بين الفروع والإدارة.",
      "صعوبة البحث اليدوي في السجلات.",
      "استهلاك مساحة التخزين بملفات مبعثرة.",
    ],
    solutions: [
      "توثيق إلزامي ببيانات دقيقة ولحظية.",
      "دعم رفع وسائط متعددة بجودة عالية.",
      "علامة مائية تلقائية بالوقت و GPS.",
      "سجلات محمية وغير قابلة للتلاعب.",
      "لوحة تحكم ذكية للبحث والتقارير.",
    ],
  },
  en: {
    problemTitle: "The Problem",
    problemSubtitle: "Current Workflow Challenges",
    solutionTitle: "The Solution",
    solutionSubtitle: "The Solution with CapTured",
    solutionDesc: "Smart & fully reliable documentation",
    problems: [
      "No unified official documentation.",
      "Sending old photos instead of live capture.",
      "Data discrepancies between branches & management.",
      "Difficulty searching records manually.",
      "Storage consumed by scattered files.",
    ],
    solutions: [
      "Mandatory documentation with precise, real-time data.",
      "Support for multiple high-quality media uploads.",
      "Automatic watermark with time & GPS.",
      "Protected, tamper-proof records.",
      "Smart dashboard for search & reports.",
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const solutionCardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 15, delay: 0.2 },
  },
};

const ProblemSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 start-10 w-72 h-72 rounded-full bg-destructive/5 blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Problems Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-destructive font-semibold text-sm uppercase tracking-wider bg-destructive/10 px-4 py-1.5 rounded-full mb-4"
              >
                <AlertTriangle size={16} />
                {t.problemTitle}
              </motion.span>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-2">{t.problemSubtitle}</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-4"
            >
              {t.problems.map((problem, i) => {
                const Icon = problemIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{ x: lang === "ar" ? -6 : 6, transition: { duration: 0.2 } }}
                    className="group relative bg-card rounded-2xl p-5 ps-6 shadow-card border border-border hover:shadow-card-hover hover:border-destructive/30 transition-all duration-300 cursor-default overflow-hidden flex items-center gap-5"
                  >
                    {/* Red side accent bar */}
                    <div className="absolute top-0 bottom-0 start-0 w-1 bg-destructive/40 group-hover:bg-destructive group-hover:w-1.5 transition-all duration-300 rounded-full" />

                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-destructive/0 to-destructive/0 group-hover:from-destructive/[0.04] group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                    {/* Animated icon */}
                    <motion.div
                      variants={iconVariants}
                      className="relative z-10 w-12 h-12 min-w-[3rem] rounded-xl bg-destructive/10 group-hover:bg-destructive/20 flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon className="text-destructive" size={22} />
                    </motion.div>

                    <p className="relative z-10 text-foreground font-semibold leading-relaxed">{problem}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-500/10 px-4 py-1.5 rounded-full mb-4"
              >
                <CheckCircle2 size={16} />
                {t.solutionTitle}
              </motion.span>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-2">{t.solutionSubtitle}</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-4"
            >
              {t.solutions.map((solution, i) => {
                const Icon = solutionIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={solutionCardVariants}
                    whileHover={{ x: lang === "ar" ? 6 : -6, transition: { duration: 0.2 } }}
                    className="group relative bg-card rounded-2xl p-5 ps-6 shadow-card border border-border hover:shadow-card-hover hover:border-green-500/30 transition-all duration-300 cursor-default overflow-hidden flex items-center gap-5"
                  >
                    {/* Green side accent bar */}
                    <div className="absolute top-0 bottom-0 start-0 w-1 bg-green-500/40 group-hover:bg-green-500 group-hover:w-1.5 transition-all duration-300 rounded-full" />

                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/[0.04] group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                    {/* Animated icon */}
                    <motion.div
                      variants={iconVariants}
                      className="relative z-10 w-12 h-12 min-w-[3rem] rounded-xl bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon className="text-green-600" size={22} />
                    </motion.div>

                    <p className="relative z-10 text-foreground font-semibold leading-relaxed">{solution}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
