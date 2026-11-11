// import { useState, type FormEvent } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   Phone,
//   Mail,
//   Clock3,
//   MapPin,
//   Navigation,
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   MessageCircle,
//   Copy,
// } from "lucide-react";

// const PHONE = "920011240";
// const EMAIL = "i.altayeb@yaamur.org.sa";
// const MAP_LINK = "https://maps.app.goo.gl/sgEdXPt6in6Xqcg58?g_st=ic";
// const MAP_EMBED =
//   "https://www.google.com/maps?q=" +
//   encodeURIComponent("جمعية يعمر للعناية بالمساجد، الروضة، الدمام 32256") +
//   "&output=embed";
// const FORM_ENDPOINT =
//   "https://formsubmit.co/ajax/44dab40f3514485eb72be897e0cf27d0";

// export default function ContactPage() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [website, setWebsite] = useState(""); // Honeypot ضد الرسائل الآلية
//   const [sending, setSending] = useState(false);
//   const [result, setResult] = useState<"idle" | "success" | "error">("idle");
//   const [copied, setCopied] = useState<"phone" | "email" | null>(null);

//   async function copyContact(value: string, field: "phone" | "email") {
//     try {
//       await navigator.clipboard.writeText(value);
//       setCopied(field);
//     } catch {
//       // Fallback for browsers that do not support the Clipboard API.
//       const input = document.createElement("textarea");
//       input.value = value;
//       input.style.position = "fixed";
//       input.style.opacity = "0";
//       document.body.appendChild(input);
//       input.select();
//       const successful = document.execCommand("copy");
//       document.body.removeChild(input);
//       if (successful) setCopied(field);
//       else window.prompt("انسخ البيانات التالية:", value);
//     }
//   }

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (sending) return;
//     setResult("idle");

//     const cleanPhone = phone.replace(/[\s()-]/g, "");
//     if (
//       !name.trim() ||
//       !subject.trim() ||
//       !message.trim() ||
//       !/^\+?\d{8,15}$/.test(cleanPhone) ||
//       (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
//     ) {
//       setResult("error");
//       return;
//     }
//     if (website.trim()) return;

//     setSending(true);
//     try {
//       const response = await fetch(FORM_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           _subject: `تواصل معنا - ${subject.trim()} - موقع يعمر`,
//           _template: "table",
//           _captcha: "false",
//           _honey: website,
//           "نوع الرسالة": "استفسار عام - تواصل معنا",
//           "الاسم": name.trim(),
//           "رقم الجوال": cleanPhone,
//           "البريد الإلكتروني": email.trim() || "غير مذكور",
//           "الموضوع": subject.trim(),
//           "الرسالة": message.trim(),
//         }),
//       });

//       const data: { success?: boolean | string } = await response.json();
//       if (!response.ok || data.success === false || data.success === "false") {
//         throw new Error("Submission failed");
//       }

//       setResult("success");
//       setName("");
//       setPhone("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     } catch {
//       setResult("error");
//     } finally {
//       setSending(false);
//     }
//   }

//   const fieldStyle =
//     "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15";

//   return (
//     <>
//       <Head>
//         <title>تواصل معنا | جمعية يعمر للعناية بالمساجد</title>
//         <meta
//           name="description"
//           content="تواصل مع جمعية يعمر للعناية بالمساجد في حي الروضة بالدمام، وأرسل استفسارك مباشرة من الموقع."
//         />
//       </Head>

//       <main dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-6xl">
//           <header className="mb-10 text-center">
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#08704C]/10 bg-white px-5 py-2 text-sm font-bold text-[#08704C]">
//               <MessageCircle className="h-4 w-4" /> نحن قريبون منك
//             </span>
//             <h1 className="mb-4 text-4xl font-black text-[#205939] sm:text-5xl">
//               تواصل معنا
//             </h1>
//             <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
//               يسعدنا استقبال استفساراتكم ورسائلكم، ونسعد بالتواصل معكم فيما يخدم بيوت الله.
//             </p>
//           </header>

//           <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="group rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
//               <Phone className="mb-3 h-7 w-7 text-[#08704C]" />
//               <h2 className="mb-1 font-extrabold text-[#205939]">اتصل بنا</h2>
//               <p dir="ltr" className="mb-3 text-right text-sm text-gray-600">{PHONE}</p>
//               <div className="flex flex-wrap gap-2">
//                 <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 rounded-lg bg-[#08704C] px-3 py-2 text-xs font-bold text-white hover:bg-[#07583C]">
//                   <Phone className="h-3.5 w-3.5" /> اتصال
//                 </a>
//                 <button type="button" onClick={() => copyContact(PHONE, "phone")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#08704C]/20 px-3 py-2 text-xs font-bold text-[#08704C] hover:bg-[#08704C]/5">
//                   <Copy className="h-3.5 w-3.5" /> {copied === "phone" ? "تم النسخ ✓" : "نسخ الرقم"}
//                 </button>
//               </div>
//             </div>
//             <div className="group min-w-0 rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
//               <Mail className="mb-3 h-7 w-7 text-[#08704C]" />
//               <h2 className="mb-1 font-extrabold text-[#205939]">البريد الإلكتروني</h2>
//               <p dir="ltr" className="mb-3 break-all text-right text-sm text-gray-600">{EMAIL}</p>
//               <div className="flex flex-wrap gap-2">
//                 <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 rounded-lg bg-[#08704C] px-3 py-2 text-xs font-bold text-white hover:bg-[#07583C]">
//                   <Mail className="h-3.5 w-3.5" /> إرسال بريد
//                 </a>
//                 <button type="button" onClick={() => copyContact(EMAIL, "email")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#08704C]/20 px-3 py-2 text-xs font-bold text-[#08704C] hover:bg-[#08704C]/5">
//                   <Copy className="h-3.5 w-3.5" /> {copied === "email" ? "تم النسخ ✓" : "نسخ البريد"}
//                 </button>
//               </div>
//             </div>
//             <div className="rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm">
//               <Clock3 className="mb-3 h-7 w-7 text-[#08704C]" />
//               <h2 className="mb-1 font-extrabold text-[#205939]">أوقات العمل</h2>
//               <p className="text-sm text-gray-600">8:00 صباحًا – 4:00 عصرًا</p>
//             </div>
//             <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
//               <MapPin className="mb-3 h-7 w-7 text-[#08704C]" />
//               <h2 className="mb-1 font-extrabold text-[#205939]">مقر الجمعية</h2>
//               <p className="text-sm text-gray-600">حي الروضة، الدمام</p>
//             </a>
//           </div>

//           <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
//             <section className="rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-sm sm:p-9">
//               <h2 className="mb-2 text-2xl font-black text-[#205939]">أرسل لنا رسالة</h2>
//               <p className="mb-7 text-sm leading-7 text-gray-500">
//                 اكتب استفسارك وسنتواصل معك عند الحاجة خلال أوقات العمل.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-gray-800">الاسم الكامل *</label>
//                     <input id="contact-name" required maxLength={120} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={fieldStyle} placeholder="الاسم الكامل" />
//                   </div>
//                   <div>
//                     <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-gray-800">رقم الجوال *</label>
//                     <input id="contact-phone" required type="tel" maxLength={20} inputMode="tel" autoComplete="tel" dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldStyle} placeholder="05xxxxxxxx" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-gray-800">البريد الإلكتروني (اختياري)</label>
//                   <input id="contact-email" type="email" maxLength={160} autoComplete="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldStyle} placeholder="name@example.com" />
//                 </div>
//                 <div>
//                   <label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-gray-800">موضوع الرسالة *</label>
//                   <input id="contact-subject" required maxLength={160} value={subject} onChange={(e) => setSubject(e.target.value)} className={fieldStyle} placeholder="موضوع الاستفسار" />
//                 </div>
//                 <div>
//                   <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-gray-800">تفاصيل الرسالة *</label>
//                   <textarea id="contact-message" required rows={5} maxLength={3000} value={message} onChange={(e) => setMessage(e.target.value)} className={`${fieldStyle} resize-y`} placeholder="كيف يمكننا مساعدتك؟" />
//                 </div>
//                 <div className="absolute -left-[9999px]" aria-hidden="true">
//                   <label htmlFor="contact-website">اترك هذا الحقل فارغًا</label>
//                   <input id="contact-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
//                 </div>
//                 <p className="rounded-xl bg-[#F1F7F2] p-4 text-xs leading-6 text-[#315844]">
//                   بإرسال الرسالة، توافق على استخدام بيانات التواصل لغرض الرد على استفسارك. يتم إرسال البيانات عبر خدمة نماذج خارجية.
//                 </p>
//                 <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-6 py-4 font-extrabold text-white transition hover:bg-[#07583C] disabled:cursor-not-allowed disabled:opacity-60">
//                   <Send className="h-5 w-5" /> {sending ? "جارٍ الإرسال..." : "إرسال الرسالة"}
//                 </button>
//                 {result === "success" && (
//                   <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-800">
//                     <CheckCircle2 className="h-5 w-5 shrink-0" /> تم استلام رسالتك من خدمة الإرسال. نشكرك على تواصلك.
//                   </p>
//                 )}
//                 {result === "error" && (
//                   <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">
//                     <AlertCircle className="h-5 w-5 shrink-0" /> تعذر إرسال الرسالة. تحقق من البيانات أو حاول مرة أخرى.
//                   </p>
//                 )}
//                 <p className="text-center text-xs text-gray-500">
//                   لتقديم شكوى أو اقتراح، استخدم <Link href="/complaints" className="font-bold text-[#08704C] underline underline-offset-4">صفحة الشكاوى والاقتراحات</Link>.
//                 </p>
//               </form>
//             </section>

//             <section className="overflow-hidden rounded-3xl border border-[#08704C]/10 bg-white shadow-sm">
//               <div className="border-b border-gray-100 p-6">
//                 <h2 className="mb-1 flex items-center gap-2 text-xl font-black text-[#205939]">
//                   <MapPin className="h-5 w-5 text-[#08704C]" /> موقع الجمعية
//                 </h2>
//                 <p className="text-sm text-gray-500">جمعية يعمر للعناية بالمساجد – حي الروضة، الدمام</p>
//               </div>
//               <iframe
//                 title="خريطة موقع جمعية يعمر للعناية بالمساجد"
//                 src={MAP_EMBED}
//                 className="h-[320px] w-full border-0 sm:h-[370px]"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />
//               <div className="p-5">
//                 <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#08704C]/10 px-5 py-3 font-bold text-[#08704C] transition hover:bg-[#08704C]/15">
//                   <Navigation className="h-5 w-5" /> فتح الموقع والاتجاهات في خرائط Google
//                 </a>
//                 <p className="mt-3 text-center text-xs text-gray-500">
//                   إذا لم تظهر الخريطة، استخدم زر فتح الموقع أعلاه.
//                 </p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
import { useState, type FormEvent } from "react";

import Head from "next/head";

import Link from "next/link";
import { submitForm } from "@/lib/submitForm";

import {

  Phone,

  Mail,

  Clock3,

  MapPin,

  Navigation,

  Send,

  CheckCircle2,

  AlertCircle,

  MessageCircle,

  Copy,

} from "lucide-react";



const PHONE = "920011240";

const EMAIL = "i.altayeb@yaamur.org.sa";

const MAP_LINK = "https://maps.app.goo.gl/sgEdXPt6in6Xqcg58?g_st=ic";

const MAP_EMBED =

  "https://www.google.com/maps?q=" +

  encodeURIComponent("جمعية يعمر للعناية بالمساجد، الروضة، الدمام 32256") +

  "&output=embed";



export default function ContactPage() {

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const [website, setWebsite] = useState(""); // Honeypot ضد الرسائل الآلية

  const [sending, setSending] = useState(false);

  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [copied, setCopied] = useState<"phone" | "email" | null>(null);



  async function copyContact(value: string, field: "phone" | "email") {

    try {

      await navigator.clipboard.writeText(value);

      setCopied(field);

    } catch {

      // Fallback for browsers that do not support the Clipboard API.

      const input = document.createElement("textarea");

      input.value = value;

      input.style.position = "fixed";

      input.style.opacity = "0";

      document.body.appendChild(input);

      input.select();

      const successful = document.execCommand("copy");

      document.body.removeChild(input);

      if (successful) setCopied(field);

      else window.prompt("انسخ البيانات التالية:", value);

    }

  }



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setResult("idle");
    setErrorMessage("");

    const cleanPhone = phone.replace(/[\s()-]/g, "");
    if (
      !name.trim() ||
      !subject.trim() ||
      !message.trim() ||
      !/^\+?\d{8,15}$/.test(cleanPhone) ||
      (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    ) {
      setErrorMessage("تأكد من تعبئة البيانات وإدخال رقم جوال وبريد إلكتروني صحيحين.");
      setResult("error");
      return;
    }
    if (website.trim()) return;

    setSending(true);
    try {
      const data = new FormData();
      data.set("name", name.trim());
      data.set("رقم الجوال", cleanPhone);
      if (email.trim()) data.set("email", email.trim());
      data.set("نوع الرسالة", "استفسار عام - تواصل معنا");
      data.set("الموضوع", subject.trim());
      data.set("message", message.trim());
      await submitForm(data, `تواصل معنا - ${subject.trim()} - موقع يعمر`, "message");

      setResult("success");
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "تعذر إرسال الرسالة. حاول مرة أخرى.");
      setResult("error");
    } finally {
      setSending(false);
    }
  }

  const fieldStyle =

    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15";



  return (

    <>

      <Head>

        <title>تواصل معنا | جمعية يعمر للعناية بالمساجد</title>

        <meta

          name="description"

          content="تواصل مع جمعية يعمر للعناية بالمساجد في حي الروضة بالدمام، وأرسل استفسارك مباشرة من الموقع."

        />

      </Head>



      <main dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <header className="mb-10 text-center">

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#08704C]/10 bg-white px-5 py-2 text-sm font-bold text-[#08704C]">

              <MessageCircle className="h-4 w-4" /> نحن قريبون منك

            </span>

            <h1 className="mb-4 text-4xl font-black text-[#205939] sm:text-5xl">

              تواصل معنا

            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">

              يسعدنا استقبال استفساراتكم ورسائلكم، ونسعد بالتواصل معكم فيما يخدم بيوت الله.

            </p>

          </header>



          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="group rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <Phone className="mb-3 h-7 w-7 text-[#08704C]" />

              <h2 className="mb-1 font-extrabold text-[#205939]">اتصل بنا</h2>

              <p dir="ltr" className="mb-3 text-right text-sm text-gray-600">{PHONE}</p>

              <div className="flex flex-wrap gap-2">

                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 rounded-lg bg-[#08704C] px-3 py-2 text-xs font-bold text-white hover:bg-[#07583C]">

                  <Phone className="h-3.5 w-3.5" /> اتصال

                </a>

                <button type="button" onClick={() => copyContact(PHONE, "phone")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#08704C]/20 px-3 py-2 text-xs font-bold text-[#08704C] hover:bg-[#08704C]/5">

                  <Copy className="h-3.5 w-3.5" /> {copied === "phone" ? "تم النسخ ✓" : "نسخ الرقم"}

                </button>

              </div>

            </div>

            <div className="group min-w-0 rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <Mail className="mb-3 h-7 w-7 text-[#08704C]" />

              <h2 className="mb-1 font-extrabold text-[#205939]">البريد الإلكتروني</h2>

              <p dir="ltr" className="mb-3 break-all text-right text-sm text-gray-600">{EMAIL}</p>

              <div className="flex flex-wrap gap-2">

                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 rounded-lg bg-[#08704C] px-3 py-2 text-xs font-bold text-white hover:bg-[#07583C]">

                  <Mail className="h-3.5 w-3.5" /> إرسال بريد

                </a>

                <button type="button" onClick={() => copyContact(EMAIL, "email")} className="inline-flex items-center gap-1.5 rounded-lg border border-[#08704C]/20 px-3 py-2 text-xs font-bold text-[#08704C] hover:bg-[#08704C]/5">

                  <Copy className="h-3.5 w-3.5" /> {copied === "email" ? "تم النسخ ✓" : "نسخ البريد"}

                </button>

              </div>

            </div>

            <div className="rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm">

              <Clock3 className="mb-3 h-7 w-7 text-[#08704C]" />

              <h2 className="mb-1 font-extrabold text-[#205939]">أوقات العمل</h2>

              <p className="text-sm text-gray-600">8:00 صباحًا – 4:00 عصرًا</p>

            </div>

            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <MapPin className="mb-3 h-7 w-7 text-[#08704C]" />

              <h2 className="mb-1 font-extrabold text-[#205939]">مقر الجمعية</h2>

              <p className="text-sm text-gray-600">حي الروضة، الدمام</p>

            </a>

          </div>



          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            <section className="rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-sm sm:p-9">

              <h2 className="mb-2 text-2xl font-black text-[#205939]">أرسل لنا رسالة</h2>

              <p className="mb-7 text-sm leading-7 text-gray-500">

                اكتب استفسارك وسنتواصل معك عند الحاجة خلال أوقات العمل.

              </p>



              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-gray-800">الاسم الكامل \*</label>

                    <input id="contact-name" required maxLength={120} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={fieldStyle} placeholder="الاسم الكامل" />

                  </div>

                  <div>

                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-gray-800">رقم الجوال \*</label>

                    <input id="contact-phone" required type="tel" maxLength={20} inputMode="tel" autoComplete="tel" dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldStyle} placeholder="05xxxxxxxx" />

                  </div>

                </div>

                <div>

                  <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-gray-800">البريد الإلكتروني (اختياري)</label>

                  <input id="contact-email" type="email" maxLength={160} autoComplete="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldStyle} placeholder="name@example.com" />

                </div>

                <div>

                  <label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-gray-800">موضوع الرسالة \*</label>

                  <input id="contact-subject" required maxLength={160} value={subject} onChange={(e) => setSubject(e.target.value)} className={fieldStyle} placeholder="موضوع الاستفسار" />

                </div>

                <div>

                  <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-gray-800">تفاصيل الرسالة \*</label>

                  <textarea id="contact-message" required rows={5} maxLength={3000} value={message} onChange={(e) => setMessage(e.target.value)} className={`${fieldStyle} resize-y`} placeholder="كيف يمكننا مساعدتك؟" />

                </div>

                <div className="absolute -left-[9999px]" aria-hidden="true">

                  <label htmlFor="contact-website">اترك هذا الحقل فارغًا</label>

                  <input id="contact-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />

                </div>

                <p className="rounded-xl bg-[#F1F7F2] p-4 text-xs leading-6 text-[#315844]">

                  بإرسال الرسالة، توافق على استخدام بيانات التواصل لغرض الرد على استفسارك. يتم إرسال البيانات عبر خدمة نماذج خارجية.

                </p>

                <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-6 py-4 font-extrabold text-white transition hover:bg-[#07583C] disabled:cursor-not-allowed disabled:opacity-60">

                  <Send className="h-5 w-5" /> {sending ? "جارٍ الإرسال..." : "إرسال الرسالة"}

                </button>

                {result === "success" && (

                  <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-800">

                    <CheckCircle2 className="h-5 w-5 shrink-0" /> تم استلام رسالتك من خدمة الإرسال. نشكرك على تواصلك.

                  </p>

                )}

                {result === "error" && (

                  <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">

                    <AlertCircle className="h-5 w-5 shrink-0" /> {errorMessage}

                  </p>

                )}

                <p className="text-center text-xs text-gray-500">

                  لتقديم شكوى أو اقتراح، استخدم <Link href="/complaints" className="font-bold text-[#08704C] underline underline-offset-4">صفحة الشكاوى والاقتراحات</Link>.

                </p>

              </form>

            </section>



            <section className="overflow-hidden rounded-3xl border border-[#08704C]/10 bg-white shadow-sm">

              <div className="border-b border-gray-100 p-6">

                <h2 className="mb-1 flex items-center gap-2 text-xl font-black text-[#205939]">

                  <MapPin className="h-5 w-5 text-[#08704C]" /> موقع الجمعية

                </h2>

                <p className="text-sm text-gray-500">جمعية يعمر للعناية بالمساجد – حي الروضة، الدمام</p>

              </div>

              <iframe

                title="خريطة موقع جمعية يعمر للعناية بالمساجد"

                src={MAP_EMBED}

                className="h-[320px] w-full border-0 sm:h-[370px]"

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

                allowFullScreen

              />

              <div className="p-5">

                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#08704C]/10 px-5 py-3 font-bold text-[#08704C] transition hover:bg-[#08704C]/15">

                  <Navigation className="h-5 w-5" /> فتح الموقع والاتجاهات في خرائط Google

                </a>

                <p className="mt-3 text-center text-xs text-gray-500">

                  إذا لم تظهر الخريطة، استخدم زر فتح الموقع أعلاه.

                </p>

              </div>

            </section>

          </div>

        </div>

      </main>

    </>

  );

}
