import logo from "@/assets/captured-logo.png";

const FooterSection = ({ lang }: { lang: "ar" | "en" }) => {
  return (
    <footer className="bg-secondary py-8 border-t border-border" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="CapTured" className="h-8 w-8" />
          <span className="font-heading font-bold text-secondary-foreground">CapTured</span>
        </div>
        <p className="text-secondary-foreground/60 text-sm">
          © {new Date().getFullYear()} CapTured by iLogic. {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
