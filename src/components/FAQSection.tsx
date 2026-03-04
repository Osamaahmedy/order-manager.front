import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const content = {
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "كل ما تريد معرفته عن نظام CapTured",
    faqs: [
      { q: "هل يمكن تعديل السجل بعد الإرسال؟", a: "لا، بعد رفع السجل لا يمكن تعديله نهائياً لضمان الموثوقية." },
      { q: "هل يمكن رفع صور من الاستوديو؟", a: "لا، التصوير يكون من كاميرا التطبيق مباشرة فقط." },
      { q: "هل يدعم العمل بدون إنترنت؟", a: "نعم، عند ضعف الشبكة يتم الحفظ محلياً ويُرفع لاحقاً تلقائياً." },
      { q: "هل التطبيق يرفض المواقع الوهمية؟", a: "نعم، يتم كشف برامج المواقع الوهمية ورفض تسجيل العملية." },
      { q: "هل يمكن التحكم بالميديا المطلوبة؟", a: "نعم، مدير النظام يتحكم بالنوع (صور/فيديو) وعدد الملفات والحقول الإلزامية." },
    ],
  },
  en: {
    title: "FAQ",
    subtitle: "Everything you need to know about CapTured",
    faqs: [
      { q: "Can records be edited after submission?", a: "No, once uploaded, records cannot be modified to ensure reliability." },
      { q: "Can photos be uploaded from gallery?", a: "No, photos must be taken live from the app camera only." },
      { q: "Does it work offline?", a: "Yes, with weak network, data is saved locally and uploaded automatically later." },
      { q: "Does the app reject fake locations?", a: "Yes, fake GPS apps are detected and the operation is rejected." },
      { q: "Can required media be customized?", a: "Yes, admins control media type (photo/video), file count, and mandatory fields." },
    ],
  },
};

const FAQSection = ({ lang }: { lang: "ar" | "en" }) => {
  const t = content[lang];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-secondary/10" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">{t.title}</h2>
          <p className="text-muted-foreground mt-3">{t.subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-start"
              >
                <span className="font-heading font-semibold text-foreground flex-1">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {open === i ? <X size={16} /> : <Plus size={16} />}
                </div>
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 pb-5"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
