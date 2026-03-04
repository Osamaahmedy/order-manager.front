import { motion } from "framer-motion";
import { CheckCircle, Layers, Zap, ShieldCheck, Star } from "lucide-react";

const content = {
  ar: {
    badge: "باقات مرنة",
    title: "خطط بسيطة وشفافة",
    subtitle: "اختر الباقة التي تناسب حجم أعمالك مع خصومات على الدفع السنوي",
    monthly: "شهرياً",
    yearly: "سنوياً",
    popular: "الأكثر طلباً",
    currency: "ر.س",
    perMonth: "/ شهرياً",
    orText: "أو",
    discountNote: "(خصم شهرين)",
    cta: "ابدأ الآن",
    ctaPopular: "ابدأ تجربة مجانية",
    ctaEnterprise: "تواصل معنا",
    addons_title: "خدمات وإضافات اختيارية",
    addons: [
      { label: "مستخدم إضافي", price: "25 ر.س" },
      { label: "فرع إضافي", price: "80 ر.س" },
      { label: "تخزين 50GB", price: "120 ر.س" },
      { label: "تقارير POWER BI", price: "500 - 1500 ر.س" },
    ],
    plans: [
      {
        name: "الأساسية (Starter)",
        price: "299",
        yearlyPrice: "2,990",
        icon: Layers,
        features: [
          "توثيق الصور + الموقع + الوقت",
          "لوحة تحكم أساسية",
          "بحث بسيط (رقم طلب / تاريخ)",
          "حتى 3 مستخدمين",
          "فرع واحد فقط",
          "تخزين 10GB",
        ],
      },
      {
        name: "الأعمال (Business)",
        price: "699",
        yearlyPrice: "6,990",
        icon: Zap,
        features: [
          "كل مميزات الباقة الأساسية +",
          "بحث متقدم + فلترة كاملة",
          "تقارير احترافية",
          "التحكم بالحقول الإلزامية والميديا",
          "حتى 15 مستخدم و 5 فروع",
          "تخزين 50GB",
        ],
      },
      {
        name: "المؤسسات (Enterprise)",
        price: "1499",
        yearlyPrice: "14,990",
        icon: ShieldCheck,
        features: [
          "إدارة كاملة للصلاحيات و Logs",
          "إعداد نماذج مخصصة لكل فرع",
          "دعم فني سريع + مدير حساب",
          "حتى 50 مستخدم و 20 فرع",
          "تخزين 200GB",
        ],
      },
    ],
  },
  en: {
    badge: "Flexible Plans",
    title: "Simple & Transparent Pricing",
    subtitle: "Choose the plan that fits your business with annual payment discounts",
    monthly: "Monthly",
    yearly: "Yearly",
    popular: "Most Popular",
    currency: "SAR",
    perMonth: "/ monthly",
    orText: "or",
    discountNote: "(2 months free)",
    cta: "Get Started",
    ctaPopular: "Start Free Trial",
    ctaEnterprise: "Contact Us",
    addons_title: "Optional Services & Add-ons",
    addons: [
      { label: "Additional User", price: "25 SAR" },
      { label: "Additional Branch", price: "80 SAR" },
      { label: "50GB Storage", price: "120 SAR" },
      { label: "POWER BI Reports", price: "500 - 1,500 SAR" },
    ],
    plans: [
      {
        name: "Starter",
        price: "299",
        yearlyPrice: "2,990",
        icon: Layers,
        features: [
          "Photo + Location + Time documentation",
          "Basic dashboard",
          "Simple search (order # / date)",
          "Up to 3 users",
          "1 branch only",
          "10GB storage",
        ],
      },
      {
        name: "Business",
        price: "699",
        yearlyPrice: "6,990",
        icon: Zap,
        features: [
          "Everything in Starter +",
          "Advanced search + full filtering",
          "Professional reports",
          "Custom mandatory fields & media",
          "Up to 15 users & 5 branches",
          "50GB storage",
        ],
      },
      {
        name: "Enterprise",
        price: "1,499",
        yearlyPrice: "14,990",
        icon: ShieldCheck,
        features: [
          "Full permission management & Logs",
          "Custom forms per branch",
          "Priority support + account manager",
          "Up to 50 users & 20 branches",
          "200GB storage",
        ],
      },
    ],
  },
};

const PricingSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <section id="pricing" className="py-24 bg-background" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <Star size={14} />
            {t.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">{t.title}</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            const isEnterprise = i === 2;
            const Icon = plan.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  isPopular
                    ? "bg-foreground text-background shadow-2xl md:scale-105 md:-my-4 z-10"
                    : "bg-card border border-border shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-5 start-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 gradient-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                      <Star size={14} className="fill-current" />
                      {t.popular}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  isPopular ? "bg-primary/20" : "bg-muted"
                }`}>
                  <Icon size={24} className={isPopular ? "text-primary" : "text-foreground"} />
                </div>

                {/* Plan name */}
                <h3 className={`font-heading text-xl font-bold mb-5 ${
                  isPopular ? "text-primary" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-5xl font-extrabold tracking-tight ${
                    isPopular ? "text-background" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <div className={`text-sm ${isPopular ? "text-background/60" : "text-muted-foreground"}`}>
                    <div>{t.currency}</div>
                    <div>{t.perMonth}</div>
                  </div>
                </div>

                {/* Yearly price */}
                <p className="text-sm font-medium mb-8 text-primary">
                  {t.orText} {plan.yearlyPrice} {t.currency} / {t.yearly} {t.discountNote}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span className={`text-sm ${
                        isPopular ? "text-background/80" : "text-foreground"
                      }`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — CSS hover only */}
                <a
                  href="#contact"
                  className={`block text-center font-bold py-4 rounded-xl transition-all duration-200 text-base active:scale-95 ${
                    isPopular
                      ? "gradient-primary text-primary-foreground shadow-lg hover:opacity-90"
                      : "border-2 border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {isPopular ? t.ctaPopular : isEnterprise ? t.ctaEnterprise : t.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="border border-border rounded-2xl p-8 bg-card">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              {t.addons_title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.addons.map((addon, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">{addon.label}</p>
                  <p className="font-heading text-xl font-bold text-foreground">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
