import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";
import appLoginScreen from "@/assets/app-login-screen.png";
import dashboardScreen from "@/assets/dashboard-screen.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SliderItem {
  id: number;
  image: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────
const content = {
  ar: {
    title: "وثّق كل تسليم بذكاء",
    subtitle: "CapTured",
    desc: "تطبيق توثيق رسمي لتسليم الطلبات من الفروع، يعتمد على تصوير مباشر من الكاميرا مع إثبات الوقت والتاريخ والموقع تلقائياً داخل الصورة.",
    cta: "اكتشف المزيد",
    trial: "ابدأ تجربتك المجانية",
  },
  en: {
    title: "Document Every Delivery Smartly",
    subtitle: "CapTured",
    desc: "An official documentation app for branch order deliveries, relying on live camera capture with automatic time, date, and location proof embedded in every photo and video.",
    cta: "Learn More",
    trial: "Start Free Trial",
  },
};

// ─── iPhone Mockup ────────────────────────────────────────────────────────────
const IPhoneMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[70px] md:w-[100px] lg:w-[130px] flex-shrink-0">
    <div className="relative rounded-[18px] md:rounded-[24px] border-[2.5px] md:border-[3.5px] border-foreground/80 bg-foreground/90 overflow-hidden shadow-2xl">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 md:w-10 h-2 md:h-2.5 bg-foreground rounded-full z-10" />
      <div className="relative overflow-hidden" style={{ maxHeight: "calc(100% - 20px)" }}>
        <div className="overflow-hidden" style={{ marginBottom: "-20px" }}>
          {children}
        </div>
      </div>
      <div className="bg-foreground/95 flex justify-center py-1">
        <div className="w-8 md:w-10 h-0.5 rounded-full bg-muted/30" />
      </div>
    </div>
  </div>
);

// ─── Laptop Mockup ────────────────────────────────────────────────────────────
const LaptopMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[340px] md:w-[440px] lg:w-[560px] flex-shrink-0">
    <div className="relative rounded-t-xl border-[4px] md:border-[6px] border-foreground/80 bg-foreground/90 overflow-hidden shadow-2xl">
      <div className="bg-foreground/95 px-3 py-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-destructive/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-foreground/50 rounded-md h-4 max-w-[140px] mx-auto" />
        </div>
      </div>
      {children}
    </div>
    <div className="mx-auto w-[40%] h-3 bg-foreground/60 rounded-b-lg" />
    <div className="mx-auto w-[55%] h-1.5 bg-foreground/40 rounded-b-lg" />
  </div>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const isRtl = lang === "ar";
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [slides, setSlides] = useState<SliderItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // ─── Fetch Slides ───────────────────────────────────────────────────────────
  useEffect(() => {
    fetch("https://captured-sa.com/api/sliders")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && Array.isArray(data.data)) {
          const prepared: SliderItem[] = data.data.map((s: any, index: number) => ({
            id: s.id ?? index,
            image: s.image,
          }));
          setSlides(prepared);
          setCurrentSlide(0);
        } else {
          setSlides([]);
        }
      })
      .catch(() => setSlides([]));
  }, []);

  // ─── Autoplay ───────────────────────────────────────────────────────────────
  const resetTimer = (slideCount: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slideCount < 2) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
  };

  useEffect(() => {
    resetTimer(slides.length);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  const goTo = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    resetTimer(slides.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer(slides.length);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer(slides.length);
  };

  // ─── Slide variants ─────────────────────────────────────────────────────────
  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0">
        {slides.length > 0 ? (
          <>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={`bg-slide-${currentSlide}`}
                src={slides[currentSlide].image}
                alt=""
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ willChange: "transform, opacity" }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 gradient-hero opacity-75" />

            {/* Progress bar */}
            {slides.length > 1 && (
              <motion.div
                key={`progress-${currentSlide}`}
                className="absolute bottom-0 start-0 h-[3px] bg-primary z-30"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === currentSlide
                        ? "w-6 h-2 bg-white"
                        : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Prev / Next arrows */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute start-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute end-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <img
              src={heroImage}
              alt=""
              className="w-full h-[120%] object-cover opacity-20"
            />
            <div className="absolute inset-0 gradient-hero opacity-80" />
          </>
        )}
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div
          className={`flex flex-col ${
            isRtl ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-12 lg:gap-16`}
        >
          {/* Text */}
          <div
            className={`flex-1 ${isRtl ? "text-right" : "text-left"} text-center md:text-start`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/10 backdrop-blur-sm">
                {t.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-xl leading-relaxed"
            >
              {t.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-hero transition-opacity text-lg"
              >
                {t.trial}
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                {t.cta}
              </motion.a>
            </motion.div>
          </div>

          {/* Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-1 flex items-end justify-center mt-8 md:mt-0 relative"
          >
            <div>
              <LaptopMockup>
                <img src={dashboardScreen} alt="Dashboard" className="w-full h-auto block" />
              </LaptopMockup>
            </div>
            <div className="-ms-[60px] md:-ms-[65px] lg:-ms-[70px] relative z-10 self-end mb-[23px] md:mb-[25px]">
              <IPhoneMockup>
                <img src={appLoginScreen} alt="Mobile App" className="w-full h-auto block" />
              </IPhoneMockup>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
