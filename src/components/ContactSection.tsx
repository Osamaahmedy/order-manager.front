import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const content = {
  ar: {
    title: "تواصل معنا",
    subtitle: "جاهزين نجهز لك نسخة تجريبية وتخصيصها حسب نشاطك",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    location: "الموقع",
    locationValue: "الرياض – المملكة العربية السعودية",
  },
  en: {
    title: "Contact Us",
    subtitle: "We're ready to set up a trial version customized for your business",
    email: "Email",
    whatsapp: "WhatsApp",
    location: "Location",
    locationValue: "Riyadh – Saudi Arabia",
  },
};

const ContactSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  return (
    <section id="contact" className="py-20 gradient-hero" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.title}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">{t.subtitle}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <motion.a
            href="mailto:info@ilogic.com.sa"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-8 py-6 hover:bg-primary-foreground/20 transition-colors"
          >
            <Mail className="text-primary" size={28} />
            <div>
              <p className="text-primary-foreground/70 text-sm">{t.email}</p>
              <p className="text-primary-foreground font-semibold">info@ilogic.com.sa</p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/966558986036"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-8 py-6 hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="text-primary" size={28} />
            <div>
              <p className="text-primary-foreground/70 text-sm">{t.whatsapp}</p>
              <p className="text-primary-foreground font-semibold" dir="ltr">+966 558 986 036</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-8 py-6"
          >
            <MapPin className="text-primary" size={28} />
            <div>
              <p className="text-primary-foreground/70 text-sm">{t.location}</p>
              <p className="text-primary-foreground font-semibold">{t.locationValue}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
