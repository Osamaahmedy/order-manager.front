import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2, User, Mail, Phone, Building2, MessageSquare, FileText } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: "ar" | "en";
  selectedPlan?: string;
}

const content = {
  ar: {
    title: "ابدأ تجربتك المجانية",
    subtitle: "أرسل طلبك وسيتواصل معك فريقنا خلال 24 ساعة",
    fields: {
      full_name:    { label: "الاسم الكامل",          placeholder: "أحمد محمد العتيبي",       icon: User },
      email:        { label: "البريد الإلكتروني",     placeholder: "ahmed@company.com",        icon: Mail },
      phone:        { label: "رقم الجوال",             placeholder: "+966 5x xxx xxxx",         icon: Phone },
      company_name: { label: "اسم الشركة / المؤسسة", placeholder: "شركة النجاح للتقنية",      icon: Building2 },
      subject:      { label: "الموضوع",       placeholder: "طلب تجربة مجانية",  icon: FileText },
      message:      { label: "تفاصيل إضافية",         placeholder: "أخبرنا عن احتياجاتك...",  icon: MessageSquare },
    },
    submit:  "إرسال الطلب",
    sending: "جارٍ الإرسال...",
    success: {
      title:    "تم إرسال طلبك بنجاح! 🎉",
      subtitle: "سيتواصل معك فريقنا خلال 24 ساعة",
      close:    "إغلاق",
    },
    error: "حدث خطأ، يرجى المحاولة مرة أخرى",
  },
  en: {
    title: "Start Your Free Trial",
    subtitle: "Submit your request and our team will contact you within 24 hours",
    fields: {
      full_name:    { label: "Full Name",          placeholder: "John Smith",                 icon: User },
      email:        { label: "Email Address",      placeholder: "john@company.com",           icon: Mail },
      phone:        { label: "Phone Number",       placeholder: "+1 xxx xxx xxxx",            icon: Phone },
      company_name: { label: "Company Name",       placeholder: "Tech Solutions Inc.",        icon: Building2 },
      subject:      { label: "Subject",            placeholder: "Free Trial Request",         icon: FileText },
      message:      { label: "Additional Details", placeholder: "Tell us about your needs...",icon: MessageSquare },
    },
    submit:  "Send Request",
    sending: "Sending...",
    success: {
      title:    "Request Sent Successfully! 🎉",
      subtitle: "Our team will contact you within 24 hours",
      close:    "Close",
    },
    error: "An error occurred, please try again",
  },
};

type FieldKey = "full_name" | "email" | "phone" | "company_name" | "subject" | "message";

const FreeTrialModal = ({ isOpen, onClose, lang, selectedPlan = "" }: Props) => {
  const t     = content[lang];
  const isRtl = lang === "ar";

  const [form, setForm] = useState<Record<FieldKey, string>>({
    full_name:    "",
    email:        "",
    phone:        "",
    company_name: "",
    subject:      selectedPlan,
    message:      "",
  });

  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const validate = (): boolean => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (!form.full_name.trim())             e.full_name = isRtl ? "الاسم مطلوب"           : "Name is required";
    if (!form.email.trim())                 e.email     = isRtl ? "البريد مطلوب"          : "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))  e.email     = isRtl ? "صيغة البريد غير صحيحة" : "Invalid email";
    if (!form.phone.trim())                 e.phone     = isRtl ? "رقم الجوال مطلوب"      : "Phone is required";
    if (!form.subject.trim())               e.subject   = isRtl ? "الباقة مطلوبة"         : "Plan is required";
    if (!form.message.trim())               e.message   = isRtl ? "التفاصيل مطلوبة"       : "Details are required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res  = await fetch("https://captured-sa.com/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrMsg(data.message ?? t.error);
        setStatus("error");
      }
    } catch {
      setErrMsg(t.error);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setErrors({});
      setErrMsg("");
      setForm({ full_name: "", email: "", phone: "", company_name: "", subject: selectedPlan, message: "" });
    }, 300);
  };

  const inputBase =
    "w-full bg-muted/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground " +
    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 " +
    "focus:border-primary transition-all duration-200";

  const fieldOrder: FieldKey[] = ["full_name", "email", "phone", "company_name", "subject", "message"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Overlay ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* ── Centered Modal ── */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.92, y: 24  }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              dir={isRtl ? "rtl" : "ltr"}
              className="relative w-full max-w-lg max-h-[90vh] bg-background rounded-3xl shadow-2xl
                         border border-border flex flex-col overflow-hidden"
            >
              {/* ── Header ── */}
              <div className="relative px-7 pt-8 pb-6 bg-gradient-to-b from-primary/8 to-transparent border-b border-border shrink-0">
                <button
                  onClick={handleClose}
                  className="absolute top-5 end-5 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>

                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-4">
                  <Send size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">{t.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
              </div>

              {/* ── Body ── */}
              <AnimatePresence mode="wait">

                {/* Success */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1   }}
                    className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center"
                    >
                      <CheckCircle size={40} className="text-emerald-500" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {t.success.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{t.success.subtitle}</p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="gradient-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      {t.success.close}
                    </button>
                  </motion.div>

                ) : (

                  /* Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto px-7 py-6 space-y-4"
                  >
                    {/* حقلان جنباً إلى جنب في الشاشات الكبيرة */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {fieldOrder.slice(0, 4).map((key) => {
                        const field      = t.fields[key];
                        const Icon       = field.icon;
                        return (
                          <div key={key}>
                            <label className="block text-sm font-semibold text-foreground mb-1.5">
                              {field.label}
                              {key !== "company_name" && <span className="text-red-400 ms-1">*</span>}
                            </label>
                            <div className="relative">
                              <div className={`absolute top-3.5 ${isRtl ? "right-3.5" : "left-3.5"} text-muted-foreground pointer-events-none`}>
                                <Icon size={16} />
                              </div>
                              <input
                                type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                                value={form[key]}
                                onChange={(e) => {
                                  setForm(p => ({ ...p, [key]: e.target.value }));
                                  if (errors[key]) setErrors(p => ({ ...p, [key]: "" }));
                                }}
                                placeholder={field.placeholder}
                                className={`${inputBase} ${isRtl ? "pr-9" : "pl-9"} ${errors[key] ? "border-red-400 focus:ring-red-400/30" : ""}`}
                              />
                            </div>
                            {errors[key] && (
                              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-red-400 mt-1.5">
                                {errors[key]}
                              </motion.p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* subject + message كامل العرض */}
                    {fieldOrder.slice(4).map((key) => {
                      const field      = t.fields[key];
                      const Icon       = field.icon;
                      const isTextarea = key === "message";
                      return (
                        <div key={key}>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            {field.label}
                            <span className="text-red-400 ms-1">*</span>
                          </label>
                          <div className="relative">
                            <div className={`absolute top-3.5 ${isRtl ? "right-3.5" : "left-3.5"} text-muted-foreground pointer-events-none`}>
                              <Icon size={16} />
                            </div>
                            {isTextarea ? (
                              <textarea
                                rows={3}
                                value={form[key]}
                                onChange={(e) => {
                                  setForm(p => ({ ...p, [key]: e.target.value }));
                                  if (errors[key]) setErrors(p => ({ ...p, [key]: "" }));
                                }}
                                placeholder={field.placeholder}
                                className={`${inputBase} resize-none ${isRtl ? "pr-9" : "pl-9"} ${errors[key] ? "border-red-400 focus:ring-red-400/30" : ""}`}
                              />
                            ) : (
                              <input
                                type="text"
                                value={form[key]}
                                onChange={(e) => {
                                  setForm(p => ({ ...p, [key]: e.target.value }));
                                  if (errors[key]) setErrors(p => ({ ...p, [key]: "" }));
                                }}
                                placeholder={field.placeholder}
                                className={`${inputBase} ${isRtl ? "pr-9" : "pl-9"} ${errors[key] ? "border-red-400 focus:ring-red-400/30" : ""}`}
                              />
                            )}
                          </div>
                          {errors[key] && (
                            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400 mt-1.5">
                              {errors[key]}
                            </motion.p>
                          )}
                        </div>
                      );
                    })}

                    {/* Error */}
                    {status === "error" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm text-center">
                        {errMsg}
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-xl
                        hover:opacity-90 active:scale-[0.98] transition-all duration-200
                        disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={18} className="animate-spin" />{t.sending}</>
                      ) : (
                        <><Send size={18} />{t.submit}</>
                      )}
                    </button>

                    <div className="h-2" />
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FreeTrialModal;
