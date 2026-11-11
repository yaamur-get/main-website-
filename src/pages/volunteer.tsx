// import { useState, type FormEvent } from "react";
// import Head from "next/head";
// import {
//   HandHeart, Wrench, CalendarDays, Monitor, Camera,
//   Send, CheckCircle2, AlertCircle, ArrowDown,
// } from "lucide-react";

// const EMAIL = "i.altayeb@yaamur.org.sa";
// const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

// const fields = [
//   { title: "التطوع الميداني", description: "المساهمة في المبادرات الميدانية لخدمة المساجد.", icon: Wrench },
//   { title: "الفعاليات والمبادرات", description: "المساعدة في تنظيم الأنشطة والفعاليات.", icon: CalendarDays },
//   { title: "التطوع التقني", description: "توظيف المهارات التقنية لدعم أعمال الجمعية.", icon: Monitor },
//   { title: "الإعلام والتصميم", description: "المساهمة في التصوير والتصميم وصناعة المحتوى.", icon: Camera },
// ];

// function validSaudiPhone(value: string) {
//   const digits = value.replace(/[\s()-]/g, "");
//   return /^(?:05\d{8}|\+9665\d{8}|9665\d{8}|009665\d{8})$/.test(digits);
// }

// export default function VolunteerPage() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [field, setField] = useState("");
//   const [notes, setNotes] = useState("");
//   const [website, setWebsite] = useState("");
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (sending || website.trim()) return;
//     setStatus("idle");
//     if (!name.trim() || !validSaudiPhone(phone) || !city.trim() || !field) {
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
//           _subject: "طلب تطوع جديد - موقع جمعية يعمر",
//           _template: "table",
//           _captcha: "false",
//           _honey: website,
//           "نوع الطلب": "طلب تطوع",
//           "الاسم الكامل": name.trim(),
//           "رقم الجوال": phone.trim(),
//           "البريد الإلكتروني": email.trim() || "لم يذكر",
//           "المدينة": city.trim(),
//           "مجال التطوع": field,
//           "المهارات والملاحظات": notes.trim() || "لا توجد",
//         }),
//       });
//       const data: { success?: boolean | string; message?: string } = await response.json();
//       if (!response.ok || (data.success !== true && data.success !== "true")) {
//         throw new Error(data.message || "تعذر إرسال الطلب");
//       }
//       setStatus("success");
//       setName(""); setPhone(""); setEmail(""); setCity(""); setField(""); setNotes("");
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
//         <title>تطوع معنا | جمعية يعمر للعناية بالمساجد</title>
//         <meta name="description" content="ساهم بوقتك ومهاراتك في خدمة بيوت الله، وقدّم طلب اهتمام بالتطوع لدى جمعية يعمر للعناية بالمساجد." />
//       </Head>
//       <main dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6">
//         <div className="mx-auto max-w-5xl">
//           <header className="mx-auto mb-12 max-w-3xl text-center">
//             <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]"><HandHeart size={34} /></span>
//             <h1 className="mb-4 text-3xl font-black text-[#205939] sm:text-5xl">تطوع معنا.. وكن جزءًا من الأثر</h1>
//             <p className="text-base leading-9 text-gray-600 sm:text-lg">بوقتك ومهاراتك تستطيع الإسهام في مبادرات العناية ببيوت الله، والمشاركة في أعمال تعزز خدمة المساجد والمصلين.</p>
//             <a href="#volunteer-form" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-6 py-3 font-bold text-white transition hover:bg-[#06583B]">قدّم اهتمامك بالتطوع <ArrowDown size={18} /></a>
//           </header>

//           <section aria-labelledby="volunteer-fields" className="mb-12">
//             <h2 id="volunteer-fields" className="mb-2 text-center text-2xl font-black text-[#205939] sm:text-3xl">مجالات التطوع المقترحة</h2>
//             <p className="mb-7 text-center text-sm text-gray-500">المجالات للتعريف، وتخضع الفرص المتاحة لاحتياج الجمعية.</p>
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {fields.map(({ title, description, icon: Icon }) => (
//                 <article key={title} className="rounded-2xl border border-[#08704C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
//                   <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#08704C]/10 text-[#08704C]"><Icon size={24} /></div>
//                   <h3 className="mb-2 font-extrabold text-[#205939]">{title}</h3>
//                   <p className="text-sm leading-7 text-gray-600">{description}</p>
//                 </article>
//               ))}
//             </div>
//           </section>

//           <section id="volunteer-form" aria-labelledby="volunteer-form-title" className="mx-auto max-w-3xl scroll-mt-28 rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-lg sm:p-9">
//             <h2 id="volunteer-form-title" className="mb-2 text-2xl font-black text-[#205939]">نموذج طلب التطوع</h2>
//             <p className="mb-7 text-sm leading-7 text-gray-600">عبّئ بياناتك وسيتواصل معك فريق الجمعية عند توفر فرصة مناسبة. تقديم الطلب لا يعني القبول النهائي.</p>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div><label htmlFor="vol-name" className="font-bold text-gray-800">الاسم الكامل *</label><input id="vol-name" required maxLength={120} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="الاسم الكامل" /></div>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div><label htmlFor="vol-phone" className="font-bold text-gray-800">رقم الجوال *</label><input id="vol-phone" type="tel" dir="ltr" required inputMode="tel" maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)} className={`${inputClass} text-right`} placeholder="05xxxxxxxx" /></div>
//                 <div><label htmlFor="vol-email" className="font-bold text-gray-800">البريد الإلكتروني (اختياري)</label><input id="vol-email" type="email" dir="ltr" maxLength={150} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputClass} text-left`} placeholder="name@example.com" /></div>
//               </div>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div><label htmlFor="vol-city" className="font-bold text-gray-800">المدينة *</label><input id="vol-city" required maxLength={100} value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} placeholder="المدينة" /></div>
//                 <div><label htmlFor="vol-field" className="font-bold text-gray-800">مجال التطوع المفضل *</label><select id="vol-field" required value={field} onChange={(e) => setField(e.target.value)} className={inputClass}><option value="">اختر المجال</option>{fields.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}<option value="مجال آخر">مجال آخر</option></select></div>
//               </div>
//               <div><label htmlFor="vol-notes" className="font-bold text-gray-800">المهارات والخبرات أو الملاحظات (اختياري)</label><textarea id="vol-notes" rows={5} maxLength={2500} value={notes} onChange={(e) => setNotes(e.target.value)} className={inputClass} placeholder="أخبرنا عن المهارات أو الأوقات المناسبة للتطوع..." /></div>
//               <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="vol-website">اتركه فارغًا</label><input id="vol-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></div>
//               <p className="rounded-xl bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">تُستخدم بياناتك للتواصل بشأن طلب التطوع، وتُرسل عبر خدمة FormSubmit الخارجية إلى البريد المعتمد لدى الجمعية. لا ترسل معلومات حساسة في الملاحظات.</p>
//               <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white transition hover:bg-[#06583B] disabled:cursor-not-allowed disabled:opacity-60"><Send size={19} />{sending ? "جارٍ الإرسال..." : "إرسال طلب التطوع"}</button>
//               {status === "success" && <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-800"><CheckCircle2 className="mt-1 shrink-0" />تم إرسال طلب اهتمامك بالتطوع. شكرًا لتواصلك، وسيتم التواصل معك عند الحاجة.</p>}
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
  HandHeart,
  Wrench,
  CalendarDays,
  Monitor,
  Camera,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
} from "lucide-react";

const EMAIL = "i.altayeb@yaamur.org.sa";
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const fields = [
  {
    title: "التطوع الميداني",
    description: "المساهمة في المبادرات الميدانية لخدمة المساجد.",
    icon: Wrench,
  },
  {
    title: "الفعاليات والمبادرات",
    description: "المساعدة في تنظيم الأنشطة والفعاليات.",
    icon: CalendarDays,
  },
  {
    title: "التطوع التقني",
    description: "توظيف المهارات التقنية لدعم أعمال الجمعية.",
    icon: Monitor,
  },
  {
    title: "الإعلام والتصميم",
    description: "المساهمة في التصوير والتصميم وصناعة المحتوى.",
    icon: Camera,
  },
];

function validSaudiPhone(value: string) {
  const digits = value.replace(/[\s()-]/g, "");
  return /^(?:05\d{8}|\+9665\d{8}|9665\d{8}|009665\d{8})$/.test(digits);
}

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [field, setField] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || website.trim()) return;

    setStatus("idle");
    if (!name.trim() || !validSaudiPhone(phone) || !city.trim() || !field) {
      setErrorMessage("تأكد من تعبئة الحقول المطلوبة وكتابة رقم جوال سعودي صحيح.");
      setStatus("error");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "طلب تطوع جديد - موقع جمعية يعمر",
          _template: "table",
          _honey: website,
          "نوع الطلب": "طلب تطوع",
          "الاسم الكامل": name.trim(),
          "رقم الجوال": phone.trim(),
          "البريد الإلكتروني": email.trim() || "لم يذكر",
          المدينة: city.trim(),
          "مجال التطوع": field,
          "المهارات والملاحظات": notes.trim() || "لا توجد",
        }),
      });

      const data: { success?: boolean | string; message?: string } =
        await response.json();
      if (
        !response.ok ||
        (data.success !== true && data.success !== "true")
      ) {
        throw new Error(data.message || "تعذر إرسال الطلب");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
      setField("");
      setNotes("");
    } catch {
      setErrorMessage("تعذر إرسال الطلب الآن. حاول مرة أخرى لاحقًا.");
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#D2DED7] bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-4 focus:ring-[#08704C]/10";

  return (
    <>
      <Head>
        <title>تطوع معنا | جمعية يعمر للعناية بالمساجد</title>
        <meta
          name="description"
          content="ساهم بوقتك ومهاراتك في خدمة بيوت الله، وقدّم طلب اهتمام بالتطوع لدى جمعية يعمر للعناية بالمساجد."
        />
      </Head>

      <main
        dir="rtl"
        className="min-h-screen bg-transparent px-4 pb-20 pt-24 sm:px-6 lg:pt-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* المقدمة */}
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#08704C]/10 bg-white/90 text-[#08704C] shadow-sm">
              <HandHeart size={34} />
            </span>
            <h1 className="mb-5 text-3xl font-black leading-tight text-[#205939] sm:text-5xl">
              تطوع معنا.. وكن جزءًا من الأثر
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-9 text-gray-700 sm:text-lg">
              بوقتك ومهاراتك تستطيع الإسهام في مبادرات العناية ببيوت الله،
              والمشاركة في أعمال تعزز خدمة المساجد والمصلين.
            </p>
            <a
              href="#volunteer-form"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-[#06583B]"
            >
              قدّم اهتمامك بالتطوع
              <ArrowDown size={18} />
            </a>
          </header>

          {/* البطاقات مستقلة، بلا مستطيل خلفها */}
          <section id="volunteer-fields-section" aria-labelledby="volunteer-fields" className="relative mx-auto mb-20 max-w-5xl px-0 py-2">
            <h2
              id="volunteer-fields"
              className="mb-3 text-center text-2xl font-black text-[#205939] sm:text-3xl"
            >
              مجالات التطوع المقترحة
            </h2>
            <p className="mb-10 text-center text-sm font-medium text-gray-700">
              المجالات للتعريف، وتخضع الفرص المتاحة لاحتياج الجمعية.
            </p>

            <div className="mx-auto grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {fields.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="flex h-full min-h-[218px] flex-col items-center justify-start rounded-2xl border border-[#08704C]/15 bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(8,70,48,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#08704C]/35 hover:shadow-xl motion-reduce:transform-none"
                >
                  <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F1EB] text-[#08704C]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-base font-extrabold text-[#205939]">
                    {title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* النموذج بطاقة مستقلة أصغر */}
          <section
            id="volunteer-form"
            aria-labelledby="volunteer-form-title"
            className="mx-auto max-w-3xl scroll-mt-28 overflow-hidden rounded-3xl border border-[#08704C]/15 bg-white/95 shadow-[0_18px_55px_rgba(8,70,48,0.12)] backdrop-blur-sm"
          >
            <div className="border-b border-[#08704C]/10 bg-[#F0F3E7]/80 px-6 py-7 text-center sm:px-10">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#08704C]/10 text-[#08704C]">
                <HandHeart size={24} />
              </div>
              <h2
                id="volunteer-form-title"
                className="mb-3 text-2xl font-black text-[#205939] sm:text-3xl"
              >
                نموذج طلب التطوع
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-7 text-gray-600">
                عبّئ بياناتك وسيتواصل معك فريق الجمعية عند توفر فرصة مناسبة.
                تقديم الطلب لا يعني القبول النهائي.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10">
              <div>
                <label htmlFor="vol-name" className="font-bold text-[#174734]">
                  الاسم الكامل *
                </label>
                <input
                  id="vol-name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="الاسم الكامل"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="vol-phone" className="font-bold text-[#174734]">
                    رقم الجوال *
                  </label>
                  <input
                    id="vol-phone"
                    type="tel"
                    dir="ltr"
                    required
                    inputMode="tel"
                    maxLength={20}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${inputClass} text-right`}
                    placeholder="05xxxxxxxx"
                  />
                </div>
                <div>
                  <label htmlFor="vol-email" className="font-bold text-[#174734]">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    dir="ltr"
                    maxLength={150}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} text-left`}
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="vol-city" className="font-bold text-[#174734]">
                    المدينة *
                  </label>
                  <input
                    id="vol-city"
                    required
                    maxLength={100}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={inputClass}
                    placeholder="المدينة"
                  />
                </div>
                <div>
                  <label htmlFor="vol-field" className="font-bold text-[#174734]">
                    مجال التطوع المفضل *
                  </label>
                  <select
                    id="vol-field"
                    required
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">اختر المجال</option>
                    {fields.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="مجال آخر">مجال آخر</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="vol-notes" className="font-bold text-[#174734]">
                  المهارات والخبرات أو الملاحظات (اختياري)
                </label>
                <textarea
                  id="vol-notes"
                  rows={5}
                  maxLength={2500}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="أخبرنا عن المهارات أو الأوقات المناسبة للتطوع..."
                />
              </div>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="vol-website">اتركه فارغًا</label>
                <input
                  id="vol-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <p className="rounded-xl border border-[#08704C]/10 bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">
                تُستخدم بياناتك للتواصل بشأن طلب التطوع، وتُرسل عبر خدمة
                FormSubmit الخارجية إلى البريد المعتمد لدى الجمعية. لا ترسل
                معلومات حساسة في الملاحظات.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#06583B] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={19} />
                {sending ? "جارٍ الإرسال..." : "إرسال طلب التطوع"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
                >
                  <CheckCircle2 className="mt-1 shrink-0" />
                  تم قبول الطلب بواسطة خدمة النماذج. تأكد من تفعيل بريد الاستقبال
                  ووصول الرسالة إلى الجمعية.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
                >
                  <AlertCircle className="mt-1 shrink-0" />
                  {errorMessage}
                </p>
              )}
            </form>
          </section>
        </div>
        <style jsx global>{`
          /* بطاقات التطوع بدون مستطيل خلفي من التنسيقات العامة */
          #volunteer-fields-section {
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
            box-shadow: none !important;
            border: 0 !important;
            backdrop-filter: none !important;
          }
          #volunteer-fields-section::before,
          #volunteer-fields-section::after {
            content: none !important;
            display: none !important;
          }
          #volunteer-fields-section article {
            background: #ffffff !important;
          }
        `}</style>
      </main>
    </>
  );
}
