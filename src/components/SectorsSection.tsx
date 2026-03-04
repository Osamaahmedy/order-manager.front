import { motion } from "framer-motion";
import { Truck, UtensilsCrossed, ShoppingCart, Package, Building2 } from "lucide-react";

const content = {
  ar: {
    title: "القطاعات المناسبة",
    subtitle: "لأي نشاط يحتاج إثبات تسليم رسمي",
    sectors: [
      { icon: Truck, name: "شركات التوصيل والخدمات اللوجستية" },
      { icon: UtensilsCrossed, name: "المطاعم متعددة الفروع" },
      { icon: ShoppingCart, name: "السوبرماركت والمتاجر" },
      { icon: Package, name: "شركات التوزيع والتوريد" },
      { icon: Building2, name: "أي جهة تعتمد على التسليم والمتابعة" },
    ],
  },
  en: {
    title: "Target Sectors",
    subtitle: "For Any Business Needing Official Delivery Proof",
    sectors: [
      { icon: Truck, name: "Delivery & Logistics Companies" },
      { icon: UtensilsCrossed, name: "Multi-branch Restaurants" },
      { icon: ShoppingCart, name: "Supermarkets & Retail" },
      { icon: Package, name: "Distribution & Supply Companies" },
      { icon: Building2, name: "Any Entity Relying on Delivery Tracking" },
    ],
  },
};

const SectorsSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  return (
    <section id="sectors" className="py-20 gradient-hero" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.title}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            {t.subtitle}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {t.sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 hover:bg-primary-foreground/20 transition-colors"
            >
              <s.icon className="text-primary" size={24} />
              <span className="text-primary-foreground font-medium">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
