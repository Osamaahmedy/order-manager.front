import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, MapPin, Clock, ShieldCheck, Search, FileText } from "lucide-react";
import { useRef } from "react";

const content = {
  ar: {
    title: "المميزات",
    subtitle: "كل ما تحتاجه لتوثيق احترافي",
    features: [
      { icon: Camera, title: "تصوير مباشر فقط", desc: "لا يمكن رفع صور من الاستوديو – التصوير حصراً من كاميرا التطبيق" },
      { icon: MapPin, title: "تحديد الموقع تلقائياً", desc: "GPS مدمج مع كشف المواقع الوهمية ورفضها تلقائياً" },
      { icon: Clock, title: "علامة مائية تلقائية", desc: "الوقت والتاريخ والموقع مطبوعة داخل كل صورة وفيديو" },
      { icon: ShieldCheck, title: "سجلات غير قابلة للتعديل", desc: "بعد الرفع، لا يمكن تعديل أو حذف أي سجل لضمان الموثوقية" },
      { icon: Search, title: "بحث متقدم", desc: "بحث حسب رقم العملية، التاريخ، المستخدم، وتطبيق التوصيل" },
      { icon: FileText, title: "تقارير PDF", desc: "تصدير السجلات والتقارير كملفات PDF للمتابعة والأرشفة" },
    ],
  },
  en: {
    title: "Features",
    subtitle: "Everything You Need for Professional Documentation",
    features: [
      { icon: Camera, title: "Live Capture Only", desc: "No gallery uploads – photos are taken exclusively from the app camera" },
      { icon: MapPin, title: "Auto GPS Location", desc: "Built-in GPS with fake location detection and automatic rejection" },
      { icon: Clock, title: "Auto Watermark", desc: "Time, date, and location printed inside every photo and video" },
      { icon: ShieldCheck, title: "Immutable Records", desc: "Once uploaded, records cannot be edited or deleted for integrity" },
      { icon: Search, title: "Advanced Search", desc: "Search by operation number, date, user, and delivery app" },
      { icon: FileText, title: "PDF Reports", desc: "Export records and reports as PDF files for tracking and archiving" },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const FeaturesSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-muted/50 relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Decorative parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 start-[10%] w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 end-[5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4"
          >
            {t.title}
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">
            {t.subtitle}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {t.features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-500 rounded-2xl" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300"
                >
                  <f.icon className="text-primary-foreground" size={26} />
                </motion.div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* Animated underline */}
                <div className="mt-5 h-1 w-0 group-hover:w-16 bg-primary/40 rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
