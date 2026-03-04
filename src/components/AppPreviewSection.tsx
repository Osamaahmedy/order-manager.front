import { motion } from "framer-motion";
import { Eye, FilePlus, List, MapPin, Camera, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import appScreenOrders from "@/assets/app-screen-orders.png";
import appScreenForm from "@/assets/app-screen-form.png";

const content = {
  ar: {
    badge: "تطبيق الموبايل",
    title: "تجربة تطبيق ميدانية",
    titleHighlight: "سلسة وذكية",
    subtitle: "واجهة تطبيق بسيطة وسريعة لموظفي الميدان لرفع التوثيق في ثوانٍ معدودة",
    features: [
      {
        tag: "إدارة الطلبات",
        title: "عرض وإنشاء الطلبات",
        titleHighlight: "بسهولة تامة",
        desc: "يمكن للموظفين عرض الطلبات وإنشاء طلب جديد بسهولة مع تفاصيل واضحة لكل عملية",
        points: [
          { icon: Eye, label: "عرض قائمة الطلبات", tag: "فوري" },
          { icon: FilePlus, label: "إنشاء طلب بنقرة واحدة", tag: "سهل" },
          { icon: List, label: "تفاصيل شاملة", tag: "كامل" },
        ],
        cta: "اكتشف المزيد",
      },
      {
        tag: "التتبع المباشر",
        title: "متابعة وتتبع الطلبات",
        titleHighlight: "لحظياً",
        desc: "تتبع حالة الطلب حتى التسليم مع تحديث تلقائي وإضافة صور وملاحظات مباشرة",
        points: [
          { icon: RefreshCw, label: "تحديثات فورية", tag: "فعّال" },
          { icon: Camera, label: "صور توثيق مباشرة", tag: "مباشر" },
          { icon: MapPin, label: "تتبع GPS تلقائي", tag: "دقيق" },
        ],
        cta: "جرّب الآن",
      },
    ],
  },
  en: {
    badge: "Mobile App",
    title: "A Smooth & Smart",
    titleHighlight: "Field Experience",
    subtitle: "A simple, fast app interface for field employees to upload documentation in seconds",
    features: [
      {
        tag: "Order Management",
        title: "View & Create Orders",
        titleHighlight: "With Ease",
        desc: "Employees can view orders and create new ones easily with clear details for every operation",
        points: [
          { icon: Eye, label: "View order list", tag: "Instant" },
          { icon: FilePlus, label: "Create order in one tap", tag: "Easy" },
          { icon: List, label: "Comprehensive details", tag: "Complete" },
        ],
        cta: "Discover More",
      },
      {
        tag: "Live Tracking",
        title: "Track & Follow Orders",
        titleHighlight: "In Real-Time",
        desc: "Track order status until delivery with auto-updates and direct photo & note uploads",
        points: [
          { icon: RefreshCw, label: "Real-time updates", tag: "Active" },
          { icon: Camera, label: "Direct documentation photos", tag: "Live" },
          { icon: MapPin, label: "Auto GPS tracking", tag: "Precise" },
        ],
        cta: "Try Now",
      },
    ],
  },
};

const screens = [appScreenOrders, appScreenForm];

// ─── Phone Mockup — no infinite animations ────────────────────────────────────
const PhoneMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative mx-auto w-[270px] md:w-[320px]">
    {/* Static glow */}
    <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-2xl" />
    {/* Static shadow beneath phone */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-foreground/15 blur-2xl rounded-full" />
    {/* Phone frame */}
    <div
      className="relative rounded-[3rem] border-[8px] border-foreground/80 bg-foreground/80 overflow-hidden"
      style={{ boxShadow: "0 25px 60px -12px hsl(207 60% 10% / 0.45), 0 8px 20px -6px hsl(207 60% 10% / 0.3), inset 0 1px 0 0 hsl(0 0% 100% / 0.15)" }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-full z-10" />
      {/* Side buttons */}
      <div className="absolute top-24 -right-[11px] w-[3px] h-12 bg-foreground/70 rounded-r-sm" />
      <div className="absolute top-20 -left-[11px] w-[3px] h-6 bg-foreground/70 rounded-l-sm" />
      <div className="absolute top-32 -left-[11px] w-[3px] h-10 bg-foreground/70 rounded-l-sm" />
      <div className="absolute top-44 -left-[11px] w-[3px] h-10 bg-foreground/70 rounded-l-sm" />
      {/* Screen */}
      <div className="rounded-[2.2rem] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  </div>
);

const AppPreviewSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <section
      id="app-preview"
      className="py-24 bg-background relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Static decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 start-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 end-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
            <br />
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Feature Blocks */}
        {t.features.map((feature, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-12 md:gap-20 mb-28 last:mb-0`}
            >
              {/* Phone mockup */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 flex justify-center"
              >
                <PhoneMockup src={screens[idx]} alt={feature.title} />
              </motion.div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="flex-1"
              >
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full mb-4">
                  <ArrowLeft size={14} className={isRtl ? "" : "rotate-180"} />
                  {feature.tag}
                </span>

                <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight">
                  {feature.title}
                  <br />
                  <span className="text-gradient">{feature.titleHighlight}</span>
                </h3>

                <p className="text-muted-foreground mt-3 mb-6 max-w-md">{feature.desc}</p>

                {/* Points */}
                <div className="space-y-3 mb-8">
                  {feature.points.map((point, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + pIdx * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-card cursor-default hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <point.icon size={16} className="text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium flex-1">{point.label}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {point.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 }}
                >
                  <Button
                    asChild
                    className="gradient-primary text-primary-foreground rounded-full px-6 gap-2"
                  >
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      {feature.cta}
                      <ArrowLeft size={16} className={isRtl ? "" : "rotate-180"} />
                    </motion.button>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AppPreviewSection;
