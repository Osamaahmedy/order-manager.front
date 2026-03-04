import { motion } from "framer-motion";
import dashboard1 from "@/assets/dashboard-1.png";
import dashboard2 from "@/assets/dashboard-2.png";
import {
  BarChart3, GitCompare, TrendingUp, PieChart,
  ClipboardList, Clock, Download, ArrowLeft,
  LayoutDashboard, Smartphone,
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
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const DashboardSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <section className="relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>

      {/* ── Dashboard Section ── */}
      <div className="py-24 bg-background relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 start-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              <LayoutDashboard size={16} />
              {t.badge}
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {/* Feature blocks */}
          {t.features.map((feature, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-20 mb-28 last:mb-0`}
              >
                {/* Dashboard image — static, no float */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 flex justify-center w-full max-w-lg"
                >
                  <img
                    src={idx === 0 ? dashboard1 : dashboard2}
                    alt={feature.title}
                    className="w-full rounded-xl shadow-lg"
                  />
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex-1"
                >
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full mb-4">
                    <ArrowLeft size={14} className={isRtl ? "" : "rotate-180"} />
                    {feature.tag}
                  </span>

                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 max-w-md">{feature.desc}</p>

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
                        className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-card cursor-default hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                          <point.icon size={16} className="text-primary-foreground" />
                        </div>
                        <span className="text-foreground font-medium">{point.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
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
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mt-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-5 py-2 rounded-full">
              <LayoutDashboard size={16} />
              {t.tryNow}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="bg-foreground py-14 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 start-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 end-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
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
