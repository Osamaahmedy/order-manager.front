import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/captured-logo.png";

const navItems = {
  ar: ["المميزات", "كيف يعمل", "القطاعات", "الباقات", "الأسئلة الشائعة", "تواصل معنا"],
  en: ["Features", "How it Works", "Sectors", "Pricing", "FAQ", "Contact"],
};

const sectionIds = ["features", "how-it-works", "sectors", "pricing", "faq", "contact"];

interface NavbarProps {
  lang: "ar" | "en";
  onToggleLang: () => void;
}

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = navItems[lang];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="CapTured" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold text-foreground">CapTured</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={`#${sectionIds[i]}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={onToggleLang}
            className="text-sm font-semibold text-primary border border-primary rounded-md px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={`#${sectionIds[i]}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={onToggleLang}
                className="text-sm font-semibold text-primary border border-primary rounded-md px-3 py-2 w-fit"
              >
                {lang === "ar" ? "EN" : "عربي"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
