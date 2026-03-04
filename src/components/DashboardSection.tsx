import { motion } from "framer-motion";
import dashboard1 from "@/assets/dashboard-1.png";
import dashboard2 from "@/assets/dashboard-2.png";
import {
  BarChart3,
  GitCompare,
  TrendingUp,
  PieChart,
  ClipboardList,
  Clock,
  Users,
  Download,
  ArrowLeft,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
  ar: {
    ctaBadge: "جاهز للبدء؟",
    ctaDesc: "حمّل التطبيق وابدأ التوثيق بدقة GPS",
    ctaGoogle: "Google Play",
    ctaApple: "App Store",
    badge: "لوحة التحكم",
    title: "لوحة تحكم غنية بالبيانات",
    subtitle: "راقب الأداء وتتبع العمليات واستخرج التقارير من لوحة واحدة",
    features: [
      {
        tag: "إحصائيات",
        title: "مراجعة نسب الفروع",
        desc: "نظرة شاملة لأداء الفروع مع مقارنة الإنجاز والوقت عبر مخططات تفاعلية",
        points: [
          { icon: BarChart3, label: "مخططات تفاعلية متقدمة" },
          { icon: GitCompare, label: "مقارنة الأداء بين الفروع" },
          { icon: TrendingUp, label: "تحليل لحظي للإنجاز" },
        ],
        cta1: "شاهد الديمو",
        cta2: "تحميل تقرير",
      },
      {
        tag: "تحليلات",
        title: "نسب الطلبات والإحصائيات",
        desc: "تتبع نسب الطلبات المختلفة وقيد التنفيذ بمخططات واضحة وتحليل زمني",
        points: [
          { icon: PieChart, label: "مخططات دائرية لتوزيع الطلبات" },
          { icon: ClipboardList, label: "إحصائيات شاملة لكل حالة" },
          { icon: Clock, label: "تحليل الاتجاهات عبر الزمن" },
        ],
        cta1: "اكتشف التحليلات",
        cta2: "إدارة الفريق",
      },
    ],
    tryNow: "جرب الآن",
  },
  en: {
    ctaBadge: "Ready to Start?",
    ctaDesc: "Download the app and start documenting with GPS precision",
    ctaGoogle: "Google Play",
    ctaApple: "App Store",
    badge: "Dashboard",
    title: "A Data-Rich Dashboard",
    subtitle: "Monitor performance, track operations, and generate reports from one place",
    features: [
      {
        tag: "Statistics",
        title: "Branch Performance Review",
        desc: "A comprehensive view of branch performance with interactive comparison charts",
        points: [
          { icon: BarChart3, label: "Advanced interactive charts" },
          { icon: GitCompare, label: "Compare performance across branches" },
          { icon: TrendingUp, label: "Real-time achievement analysis" },
        ],
        cta1: "Watch Demo",
        cta2: "Download Report",
      },
      {
        tag: "Analytics",
        title: "Order Ratios & Statistics",
        desc: "Track different order ratios and progress with clear charts and time-based analysis",
        points: [
          { icon: PieChart, label: "Pie charts for order distribution" },
          { icon: ClipboardList, label: "Comprehensive stats per status" },
          { icon: Clock, label: "Trend analysis over time" },
        ],
        cta1: "Explore Analytics",
        cta2: "Team Management",
      },
    ],
    tryNow: "Try Now",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Mockup component for laptop/tablet screens
const LaptopMockup = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <motion.div
      className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 blur-2xl"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="relative rounded-2xl border-[6px] border-foreground/80 bg-foreground/90 overflow-hidden shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Top bar */}
      <div className="bg-foreground/95 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-foreground/50 rounded-md h-5 max-w-[200px] mx-auto" />
        </div>
      </div>
      {children}
    </motion.div>
    {/* Stand */}
    <div className="mx-auto w-[40%] h-4 bg-foreground/60 rounded-b-lg" />
    <div className="mx-auto w-[55%] h-2 bg-foreground/40 rounded-b-lg" />
  </div>
);

// Dashboard chart mockups
const DashboardChartBar = () => (
  <div className="bg-card p-4 rounded-xl">
    <div className="flex items-end gap-2 h-32 justify-center">
      {[60, 85, 45, 70, 90, 55, 75].map((h, i) => (
        <motion.div
          key={i}
          className="w-6 rounded-t-md bg-primary/70"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
    <div className="flex justify-between mt-2">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <span key={i} className="text-[10px] text-muted-foreground w-6 text-center">{d}</span>
      ))}
    </div>
  </div>
);

const DashboardChartPie = () => (
  <div className="bg-card p-4 rounded-xl flex items-center justify-center">
    <div className="relative w-28 h-28">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
        <motion.circle
          cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="12"
          strokeDasharray="251.2" initial={{ strokeDashoffset: 251.2 }}
          whileInView={{ strokeDashoffset: 80 }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          strokeLinecap="round"
        />
        <motion.circle
          cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="12"
          strokeDasharray="251.2" initial={{ strokeDashoffset: 251.2 }}
          whileInView={{ strokeDashoffset: 160 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-foreground font-bold text-lg">68%</span>
      </div>
    </div>
  </div>
);

const DashboardSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <section className="relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Dashboard Section */}
      <div className="py-24 bg-background relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 start-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4"
            >
              <LayoutDashboard size={16} />
              {t.badge}
            </motion.span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {/* Feature blocks */}
          {t.features.map((feature, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20 mb-28 last:mb-0`}
              >
                {/* Chart mockup */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 60 : -60, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 flex justify-center w-full max-w-lg"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className="w-full"
                  >
                    <img
                      src={idx === 0 ? dashboard1 : dashboard2}
                      alt={feature.title}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </motion.div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1"
                >
                  <motion.span
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full mb-4"
                  >
                    <ArrowLeft size={14} className={isRtl ? "" : "rotate-180"} />
                    {feature.tag}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight mb-3"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground mb-6 max-w-md"
                  >
                    {feature.desc}
                  </motion.p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3 mb-8"
                  >
                    {feature.points.map((point, pIdx) => (
                      <motion.div
                        key={pIdx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, x: isRtl ? -5 : 5 }}
                        className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-card cursor-default transition-shadow hover:shadow-md"
                      >
                        <motion.div
                          className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <point.icon size={16} className="text-primary-foreground" />
                        </motion.div>
                        <span className="text-foreground font-medium">{point.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-3"
                  >
                    <Button className="gradient-primary text-primary-foreground rounded-full px-6 gap-2">
                      {feature.cta1}
                      <ArrowLeft size={16} className={isRtl ? "" : "rotate-180"} />
                    </Button>
                    <Button variant="outline" className="rounded-full px-6 gap-2">
                      <Download size={16} />
                      {feature.cta2}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Try Now Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center mt-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-5 py-2 rounded-full">
              <LayoutDashboard size={16} />
              {t.tryNow}
            </span>
          </motion.div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-foreground py-14 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 start-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 end-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4"
          >
            <Smartphone className="text-primary" size={24} />
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-background mb-2">{t.ctaBadge}</h3>
          <p className="text-background/60 mb-6">{t.ctaDesc}</p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" className="rounded-full border-background bg-background text-foreground hover:bg-background/90 gap-2 font-semibold px-6">
              {t.ctaGoogle} ▶
            </Button>
            <Button variant="outline" className="rounded-full border-background bg-background text-foreground hover:bg-background/90 gap-2 font-semibold px-6">
               {t.ctaApple}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
