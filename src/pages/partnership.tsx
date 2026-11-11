// import { useState, type FormEvent } from "react";
// import Head from "next/head";
// import {
//   Handshake, Landmark, HeartHandshake, HardHat,
//   Send, CheckCircle2, AlertCircle, ArrowDown,
// } from "lucide-react";

// const EMAIL = "i.altayeb@yaamur.org.sa";
// const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

// const partnershipTypes = [
//   { title: "شراكة رسمية", description: "التعاون والتنسيق مع الجهات الحكومية ذات العلاقة.", icon: Landmark },
//   { title: "شراكة داعمة", description: "المساهمة في دعم المبادرات والمشاريع من خلال الجهات المانحة.", icon: HeartHandshake },
//   { title: "شراكة تنفيذية", description: "التعاون مع الشركات والجمعيات لتنفيذ الأعمال والمبادرات.", icon: HardHat },
// ];

// function validSaudiPhone(value: string) {
//   const digits = value.replace(/[\s()-]/g, "");
//   return /^(?:05\d{8}|\+9665\d{8}|9665\d{8}|009665\d{8})$/.test(digits);
// }

// export default function PartnershipPage() {
//   const [organization, setOrganization] = useState("");
//   const [representative, setRepresentative] = useState("");
//   const [position, setPosition] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [type, setType] = useState("");
//   const [proposal, setProposal] = useState("");
//   const [website, setWebsite] = useState("");
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (sending || website.trim()) return;
//     setStatus("idle");
//     if (!organization.trim() || !representative.trim() || !validSaudiPhone(phone) || !email.trim() || !type || !proposal.trim()) {
//       setErrorMessage("تأكد من تعبئة الحقول المطلوبة وكتابة رقم جوال سعودي صحيح.");
//       setStatus("error");
//       return;
//     }
//     setSending(true);
//     try {
//       const response = await fetch(ENDPOINT, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           _subject: "طلب شراكة جديد - موقع جمعية يعمر",
//           _template: "table",
//           _captcha: "false",
//           _honey: website,
//           "نوع الطلب": "طلب شراكة",
//           "اسم الجهة": organization.trim(),
//           "اسم ممثل الجهة": representative.trim(),
//           "المنصب أو الصفة": position.trim() || "لم يذكر",
//           "رقم الجوال": phone.trim(),
//           "البريد الإلكتروني الرسمي": email.trim(),
//           "نوع الشراكة": type,
//           "تفاصيل مقترح التعاون": proposal.trim(),
//         }),
//       });
//       const data: { success?: boolean | string; message?: string } = await response.json();
//       if (!response.ok || (data.success !== true && data.success !== "true")) {
//         throw new Error(data.message || "تعذر إرسال الطلب");
//       }
//       setStatus("success");
//       setOrganization(""); setRepresentative(""); setPosition(""); setPhone(""); setEmail(""); setType(""); setProposal("");
//     } catch {
//       setErrorMessage("تعذر إرسال الطلب الآن. حاول مرة أخرى لاحقًا.");
//       setStatus("error");
//     } finally {
//       setSending(false);
//     }
//   }

//   const inputClass = "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15";

//   return (
//     <>
//       <Head>
//         <title>كن شريكًا | جمعية يعمر للعناية بالمساجد</title>
//         <meta name="description" content="قدّم مقترح شراكة مع جمعية يعمر للعناية بالمساجد، وساهم في صناعة أثر مستدام لخدمة بيوت الله." />
//       </Head>
//       <main dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6">
//         <div className="mx-auto max-w-5xl">
//           <header className="mx-auto mb-12 max-w-3xl text-center">
//             <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]"><Handshake size={34} /></span>
//             <h1 className="mb-4 text-3xl font-black text-[#205939] sm:text-5xl">كن شريكًا في الأثر</h1>
//             <p className="text-base leading-9 text-gray-600 sm:text-lg">نرحب بالتعاون مع الجهات التي تشاركنا الاهتمام بالعناية ببيوت الله، ونسعى إلى بناء شراكات تسهم في استدامة الخدمات والمبادرات.</p>
//             <a href="#partnership-form" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-6 py-3 font-bold text-white transition hover:bg-[#06583B]">قدّم مقترح شراكة <ArrowDown size={18} /></a>
//           </header>

//           <section aria-labelledby="partnership-types" className="mb-12">
//             <h2 id="partnership-types" className="mb-7 text-center text-2xl font-black text-[#205939] sm:text-3xl">مجالات الشراكة</h2>
//             <div className="grid gap-4 md:grid-cols-3">
//               {partnershipTypes.map(({ title, description, icon: Icon }) => (
//                 <article key={title} className="rounded-2xl border border-[#08704C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
//                   <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#08704C]/10 text-[#08704C]"><Icon size={24} /></div>
//                   <h3 className="mb-2 text-lg font-extrabold text-[#205939]">{title}</h3>
//                   <p className="text-sm leading-7 text-gray-600">{description}</p>
//                 </article>
//               ))}
//             </div>
//           </section>

//           <section id="partnership-form" aria-labelledby="partnership-form-title" className="mx-auto max-w-3xl scroll-mt-28 rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-lg sm:p-9">
//             <h2 id="partnership-form-title" className="mb-2 text-2xl font-black text-[#205939]">نموذج طلب الشراكة</h2>
//             <p className="mb-7 text-sm leading-7 text-gray-600">عرّفنا بجهتك ومقترح التعاون، وسيتم الاطلاع على الطلب والتواصل معكم عند الحاجة. تقديم المقترح لا يعني الموافقة على الشراكة.</p>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div><label htmlFor="partner-org" className="font-bold text-gray-800">اسم الجهة *</label><input id="partner-org" required maxLength={160} value={organization} onChange={(e) => setOrganization(e.target.value)} className={inputClass} placeholder="اسم المؤسسة أو الشركة أو الجهة" /></div>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div><label htmlFor="partner-rep" className="font-bold text-gray-800">اسم ممثل الجهة *</label><input id="partner-rep" required maxLength={120} autoComplete="name" value={representative} onChange={(e) => setRepresentative(e.target.value)} className={inputClass} placeholder="الاسم الكامل" /></div>
//                 <div><label htmlFor="partner-position" className="font-bold text-gray-800">المنصب أو الصفة (اختياري)</label><input id="partner-position" maxLength={120} value={position} onChange={(e) => setPosition(e.target.value)} className={inputClass} placeholder="المنصب الوظيفي" /></div>
//               </div>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div><label htmlFor="partner-phone" className="font-bold text-gray-800">رقم الجوال *</label><input id="partner-phone" type="tel" dir="ltr" required inputMode="tel" maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)} className={`${inputClass} text-right`} placeholder="05xxxxxxxx" /></div>
//                 <div><label htmlFor="partner-email" className="font-bold text-gray-800">البريد الإلكتروني الرسمي *</label><input id="partner-email" type="email" dir="ltr" required maxLength={150} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputClass} text-left`} placeholder="name@organization.sa" /></div>
//               </div>
//               <div><label htmlFor="partner-type" className="font-bold text-gray-800">نوع الشراكة *</label><select id="partner-type" required value={type} onChange={(e) => setType(e.target.value)} className={inputClass}><option value="">اختر نوع الشراكة</option>{partnershipTypes.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}</select></div>
//               <div><label htmlFor="partner-proposal" className="font-bold text-gray-800">تفاصيل مقترح التعاون *</label><textarea id="partner-proposal" required rows={6} maxLength={3500} value={proposal} onChange={(e) => setProposal(e.target.value)} className={inputClass} placeholder="اشرح نوع التعاون المقترح والأثر المتوقع..." /></div>
//               <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="partner-website">اتركه فارغًا</label><input id="partner-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></div>
//               <p className="rounded-xl bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">تُستخدم بياناتكم لدراسة مقترح الشراكة والتواصل بشأنه، وتُرسل عبر خدمة FormSubmit الخارجية إلى البريد المعتمد لدى الجمعية. لا ترسلوا معلومات سرية ضمن النموذج.</p>
//               <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white transition hover:bg-[#06583B] disabled:cursor-not-allowed disabled:opacity-60"><Send size={19} />{sending ? "جارٍ الإرسال..." : "إرسال طلب الشراكة"}</button>
//               {status === "success" && <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-800"><CheckCircle2 className="mt-1 shrink-0" />تم إرسال مقترح الشراكة. نشكركم على اهتمامكم، وسيتم التواصل معكم عند الحاجة.</p>}
//               {status === "error" && <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-700"><AlertCircle className="mt-1 shrink-0" />{errorMessage}</p>}
//             </form>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }
import { useState, type FormEvent } from "react";
import Head from "next/head";
import {
  Handshake, Landmark, HeartHandshake, HardHat,
  Send, CheckCircle2, AlertCircle, ArrowDown,
} from "lucide-react";

import { submitForm } from "@/lib/submitForm";

const partnershipTypes = [
  { title: "شراكة رسمية", description: "التعاون والتنسيق مع الجهات الحكومية ذات العلاقة.", icon: Landmark },
  { title: "شراكة داعمة", description: "المساهمة في دعم المبادرات والمشاريع من خلال الجهات المانحة.", icon: HeartHandshake },
  { title: "شراكة تنفيذية", description: "التعاون مع الشركات والجمعيات لتنفيذ الأعمال والمبادرات.", icon: HardHat },
];

function validSaudiPhone(value: string) {
  const digits = value.replace(/[\s()-]/g, "");
  return /^(?:05\d{8}|\+9665\d{8}|9665\d{8}|009665\d{8})$/.test(digits);
}

export default function PartnershipPage() {
  const [organization, setOrganization] = useState("");
  const [representative, setRepresentative] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [proposal, setProposal] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || website.trim()) return;
    setStatus("idle");
    if (!organization.trim() || !representative.trim() || !validSaudiPhone(phone) || !email.trim() || !type || !proposal.trim()) {
      setErrorMessage("تأكد من تعبئة الحقول المطلوبة وكتابة رقم جوال سعودي صحيح.");
      setStatus("error");
      return;
    }
    setSending(true);
    try {
      const formData = new FormData();
      formData.set("نوع الطلب", "طلب شراكة");
      formData.set("name", representative.trim());
      formData.set("اسم الجهة", organization.trim());
      formData.set("اسم ممثل الجهة", representative.trim());
      formData.set("المنصب أو الصفة", position.trim() || "لم يذكر");
      formData.set("رقم الجوال", phone.trim());
      formData.set("email", email.trim());
      formData.set("البريد الإلكتروني الرسمي", email.trim());
      formData.set("نوع الشراكة", type);
      formData.set("تفاصيل مقترح التعاون", proposal.trim());

      await submitForm(formData, "طلب شراكة جديد - موقع جمعية يعمر", "تفاصيل مقترح التعاون");
      setStatus("success");
      setOrganization(""); setRepresentative(""); setPosition(""); setPhone(""); setEmail(""); setType(""); setProposal("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "تعذر إرسال الطلب الآن. حاول مرة أخرى لاحقًا.");
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15";

  return (
    <>
      <Head>
        <title>كن شريكًا | جمعية يعمر للعناية بالمساجد</title>
        <meta name="description" content="قدّم مقترح شراكة مع جمعية يعمر للعناية بالمساجد، وساهم في صناعة أثر مستدام لخدمة بيوت الله." />
      </Head>
      <main dir="rtl" className="min-h-screen bg-[#F8F4ED] px-4 pb-20 pt-32 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]"><Handshake size={34} /></span>
            <h1 className="mb-4 text-3xl font-black text-[#174734] sm:text-5xl">كن شريكًا في الأثر</h1>
            <p className="text-base leading-9 text-gray-600 sm:text-lg">نرحب بالتعاون مع الجهات التي تشاركنا الاهتمام بالعناية ببيوت الله، ونسعى إلى بناء شراكات تسهم في استدامة الخدمات والمبادرات.</p>
            <a href="#partnership-form" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-6 py-3 font-bold text-white transition hover:bg-[#06583B]">قدّم مقترح شراكة <ArrowDown size={18} /></a>
          </header>

          <section aria-labelledby="partnership-types" className="mb-12">
            <h2 id="partnership-types" className="mb-7 text-center text-2xl font-black text-[#174734] sm:text-3xl">مجالات الشراكة</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {partnershipTypes.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-2xl border border-[#08704C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#08704C]/10 text-[#08704C]"><Icon size={24} /></div>
                  <h3 className="mb-2 text-lg font-extrabold text-[#174734]">{title}</h3>
                  <p className="text-sm leading-7 text-gray-600">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="partnership-form" aria-labelledby="partnership-form-title" className="mx-auto max-w-3xl scroll-mt-28 rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-lg sm:p-9">
            <h2 id="partnership-form-title" className="mb-2 text-2xl font-black text-[#174734]">نموذج طلب الشراكة</h2>
            <p className="mb-7 text-sm leading-7 text-gray-600">عرّفنا بجهتك ومقترح التعاون، وسيتم الاطلاع على الطلب والتواصل معكم عند الحاجة. تقديم المقترح لا يعني الموافقة على الشراكة.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label htmlFor="partner-org" className="font-bold text-gray-800">اسم الجهة *</label><input id="partner-org" required maxLength={160} value={organization} onChange={(e) => setOrganization(e.target.value)} className={inputClass} placeholder="اسم المؤسسة أو الشركة أو الجهة" /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="partner-rep" className="font-bold text-gray-800">اسم ممثل الجهة *</label><input id="partner-rep" required maxLength={120} autoComplete="name" value={representative} onChange={(e) => setRepresentative(e.target.value)} className={inputClass} placeholder="الاسم الكامل" /></div>
                <div><label htmlFor="partner-position" className="font-bold text-gray-800">المنصب أو الصفة (اختياري)</label><input id="partner-position" maxLength={120} value={position} onChange={(e) => setPosition(e.target.value)} className={inputClass} placeholder="المنصب الوظيفي" /></div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="partner-phone" className="font-bold text-gray-800">رقم الجوال *</label><input id="partner-phone" type="tel" dir="ltr" required inputMode="tel" maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)} className={`${inputClass} text-right`} placeholder="05xxxxxxxx" /></div>
                <div><label htmlFor="partner-email" className="font-bold text-gray-800">البريد الإلكتروني الرسمي *</label><input id="partner-email" type="email" dir="ltr" required maxLength={150} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputClass} text-left`} placeholder="name@organization.sa" /></div>
              </div>
              <div><label htmlFor="partner-type" className="font-bold text-gray-800">نوع الشراكة *</label><select id="partner-type" required value={type} onChange={(e) => setType(e.target.value)} className={inputClass}><option value="">اختر نوع الشراكة</option>{partnershipTypes.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}</select></div>
              <div><label htmlFor="partner-proposal" className="font-bold text-gray-800">تفاصيل مقترح التعاون *</label><textarea id="partner-proposal" required rows={6} maxLength={3500} value={proposal} onChange={(e) => setProposal(e.target.value)} className={inputClass} placeholder="اشرح نوع التعاون المقترح والأثر المتوقع..." /></div>
              <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="partner-website">اتركه فارغًا</label><input id="partner-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></div>
              <p className="rounded-xl bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">تُستخدم بياناتكم لدراسة مقترح الشراكة والتواصل بشأنه، وتُرسل عبر خدمة Web3Forms الخارجية إلى البريد المعتمد لدى الجمعية. لا ترسلوا معلومات سرية ضمن النموذج.</p>
              <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white transition hover:bg-[#06583B] disabled:cursor-not-allowed disabled:opacity-60"><Send size={19} />{sending ? "جارٍ الإرسال..." : "إرسال طلب الشراكة"}</button>
              {status === "success" && <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-800"><CheckCircle2 className="mt-1 shrink-0" />تم إرسال مقترح الشراكة. نشكركم على اهتمامكم، وسيتم التواصل معكم عند الحاجة.</p>}
              {status === "error" && <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-700"><AlertCircle className="mt-1 shrink-0" />{errorMessage}</p>}
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
