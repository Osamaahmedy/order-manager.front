import { motion } from "framer-motion";
import { LogIn, ScanBarcode, MapPin, Camera, MessageSquare, CheckCircle, Upload } from "lucide-react";
import capturedLogo from "@/assets/captured-logo.png";

const content = {
  ar: {
    title: "كيف يعمل؟",
    subtitle: "خطوات بسيطة لتوثيق موثوق",
    steps: [
      { icon: LogIn, title: "تسجيل الدخول", desc: "بحساب المستخدم المرتبط بفرعه" },
      { icon: ScanBarcode, title: "إدخال رقم الطلب", desc: "يدوياً أو مسح الباركود" },
      { icon: MapPin, title: "تحديد تلقائي", desc: "التاريخ والوقت والموقع الجغرافي" },
      { icon: Camera, title: "التصوير المباشر", desc: "صور وفيديو من كاميرا التطبيق" },
      { icon: MessageSquare, title: "إضافة ملاحظات", desc: "حسب الصلاحيات المحددة" },
      { icon: CheckCircle, title: "تأكيد الإرسال", desc: "مراجعة قبل الاعتماد النهائي" },
      { icon: Upload, title: "الحفظ الرسمي", desc: "السجل يصبح غير قابل للتعديل" },
    ],
  },
  en: {
    title: "How It Works",
    subtitle: "Simple Steps for Reliable Documentation",
    steps: [
      { icon: LogIn, title: "Login", desc: "With user account linked to branch" },
      { icon: ScanBarcode, title: "Enter Order #", desc: "Manually or scan barcode" },
      { icon: MapPin, title: "Auto Detection", desc: "Date, time, and GPS location" },
      { icon: Camera, title: "Live Capture", desc: "Photos & video from app camera" },
      { icon: MessageSquare, title: "Add Notes", desc: "Based on permission settings" },
      { icon: CheckCircle, title: "Confirm", desc: "Review before final submission" },
      { icon: Upload, title: "Official Save", desc: "Record becomes immutable" },
    ],
  },
};

const stepVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const mobileStepVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const HowItWorksSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 start-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 end-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.img
            src={capturedLogo}
            alt="CapTured Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 object-contain"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            {t.title}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">{t.subtitle}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 start-1/2 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 -translate-x-1/2" />

          {t.steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative mb-6 last:mb-0">
                {/* Desktop layout */}
                <motion.div
                  custom={isRtl ? (isLeft ? 1 : 0) : i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className={`hidden md:flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content side */}
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? "text-end" : "text-start"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-block bg-card rounded-2xl p-5 shadow-card border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
                    >
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="mx-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg ring-4 ring-background"
                    >
                      <step.icon className="text-primary-foreground" size={22} />
                    </motion.div>
                    {/* Step number */}
                    <span className="absolute -bottom-1 -end-1 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Empty side */}
                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>

                {/* Mobile layout */}
                <motion.div
                  variants={mobileStepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:hidden flex items-start gap-4"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                      <step.icon className="text-primary-foreground" size={18} />
                    </div>
                    <span className="absolute -bottom-1 -end-1 w-5 h-5 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {/* Connecting line for mobile */}
                    {i < t.steps.length - 1 && (
                      <div className="absolute top-14 start-1/2 -translate-x-1/2 w-px h-8 bg-primary/20" />
                    )}
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-card border border-border flex-1">
                    <h3 className="font-heading font-bold text-foreground mb-0.5">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
