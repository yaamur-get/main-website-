// import { useState, type FormEvent } from "react";
// import Head from "next/head";
// import { MessageSquareText, Send, CheckCircle2, AlertCircle } from "lucide-react";

// type RequestType = "شكوى" | "اقتراح" | "ملاحظة";
// type Result = "idle" | "success" | "error";

// // رمز النموذج الذي أرسلته FormSubmit إلى البريد بعد طلب التفعيل.
// // يجب الضغط على ACTIVATE FORM في الرسالة أولاً.
// const FORMSUBMIT_ENDPOINT =
//   "https://formsubmit.co/ajax/44dab40f3514485eb72be897e0cf27d0";

// export default function ComplaintsPage() {
//   const [requestType, setRequestType] = useState<RequestType>("اقتراح");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [details, setDetails] = useState("");
//   const [website, setWebsite] = useState(""); // Honeypot لمقاومة الرسائل الآلية
//   const [sending, setSending] = useState(false);
//   const [result, setResult] = useState<Result>("idle");

//   async function submitRequest(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (sending) return;
//     setResult("idle");

//     const cleanPhone = phone.trim().replace(/[\s()-]/g, "");
//     // يدعم الأرقام السعودية 05xxxxxxxx و +9665xxxxxxxx و 9665xxxxxxxx
//     const phoneIsValid = /^(?:05\d{8}|(?:\+?966)5\d{8})$/.test(cleanPhone);
//     if (!name.trim() || !details.trim() || !phoneIsValid) {
//       setResult("error");
//       return;
//     }

//     // لا نرسل الرسائل المعبأة آلياً في الحقل المخفي.
//     if (website.trim()) return;

//     setSending(true);
//     try {
//       const response = await fetch(FORMSUBMIT_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           _subject: `طلب جديد من موقع يعمر - ${requestType}`,
//           _template: "table",
//           _captcha: "false",
//           _honey: website,
//           "نوع الطلب": requestType,
//           "الاسم": name.trim(),
//           "رقم الجوال": cleanPhone,
//           "تفاصيل الطلب": details.trim(),
//         }),
//       });

//       const data: { success?: boolean | string; message?: string } =
//         await response.json();
//       const accepted = data.success === true || data.success === "true";

//       if (!response.ok || !accepted) {
//         throw new Error(data.message || "FormSubmit did not accept submission");
//       }

//       setResult("success");
//       setName("");
//       setPhone("");
//       setDetails("");
//     } catch (error) {
//       console.error("Complaints form submission failed:", error);
//       setResult("error");
//     } finally {
//       setSending(false);
//     }
//   }

//   return (
//     <div dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6">
//       <Head>
//         <title>الشكاوى والاقتراحات | جمعية يعمر للعناية بالمساجد</title>
//         <meta
//           name="description"
//           content="أرسل شكواك أو اقتراحك أو ملاحظتك إلى جمعية يعمر للعناية بالمساجد."
//         />
//       </Head>

//       <main className="mx-auto max-w-2xl">
//         <div className="mb-9 text-center">
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]">
//             <MessageSquareText size={32} aria-hidden="true" />
//           </div>
//           <h1 className="mb-3 text-3xl font-extrabold text-[#205939] sm:text-4xl">
//             الشكاوى والاقتراحات
//           </h1>
//           <p className="mx-auto max-w-xl leading-8 text-gray-600">
//             نسعد باستقبال آرائكم وملاحظاتكم التي تسهم في تحسين خدمات جمعية يعمر للعناية بالمساجد.
//           </p>
//         </div>

//         <form
//           onSubmit={submitRequest}
//           className="space-y-6 rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-lg sm:p-9"
//         >
//           <fieldset>
//             <legend className="mb-3 font-bold text-gray-800">
//               نوع الطلب <span className="text-red-600">*</span>
//             </legend>
//             <div className="grid grid-cols-3 gap-2 sm:gap-3">
//               {(["شكوى", "اقتراح", "ملاحظة"] as const).map((option) => (
//                 <label
//                   key={option}
//                   className={`cursor-pointer rounded-xl border px-2 py-3 text-center text-sm font-semibold transition-colors sm:text-base ${
//                     requestType === option
//                       ? "border-[#08704C] bg-[#08704C]/10 text-[#08704C]"
//                       : "border-gray-200 text-gray-700 hover:border-[#08704C]/50"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="requestType"
//                     value={option}
//                     checked={requestType === option}
//                     onChange={() => setRequestType(option)}
//                     className="sr-only"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </fieldset>

//           <div>
//             <label htmlFor="complaint-name" className="mb-2 block font-bold text-gray-800">
//               الاسم الكامل <span className="text-red-600">*</span>
//             </label>
//             <input
//               id="complaint-name"
//               name="name"
//               required
//               maxLength={120}
//               autoComplete="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="أدخل اسمك الكامل"
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
//             />
//           </div>

//           <div>
//             <label htmlFor="complaint-phone" className="mb-2 block font-bold text-gray-800">
//               رقم الجوال <span className="text-red-600">*</span>
//             </label>
//             <input
//               id="complaint-phone"
//               name="phone"
//               type="tel"
//               required
//               dir="ltr"
//               inputMode="tel"
//               autoComplete="tel"
//               maxLength={20}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="05xxxxxxxx"
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 text-right outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
//             />
//           </div>

//           <div>
//             <label htmlFor="complaint-details" className="mb-2 block font-bold text-gray-800">
//               تفاصيل الطلب <span className="text-red-600">*</span>
//             </label>
//             <textarea
//               id="complaint-details"
//               name="details"
//               required
//               rows={6}
//               maxLength={3000}
//               value={details}
//               onChange={(e) => setDetails(e.target.value)}
//               placeholder="اكتب تفاصيل الشكوى أو الاقتراح أو الملاحظة هنا..."
//               className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
//             />
//           </div>

//           <div className="absolute -left-[9999px]" aria-hidden="true">
//             <label htmlFor="complaint-website">اترك هذا الحقل فارغًا</label>
//             <input
//               id="complaint-website"
//               tabIndex={-1}
//               autoComplete="off"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//             />
//           </div>

//           <p className="rounded-xl bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">
//             ستصل رسالتك إلى إدارة الجمعية، وسيتم التواصل معك عند الحاجة. بإرسال الطلب، توافق
//             على استخدام بياناتك لهذا الغرض.
//           </p>

//           <button
//             type="submit"
//             disabled={sending}
//             className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white transition-colors hover:bg-[#07583C] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             <Send size={19} aria-hidden="true" />
//             {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
//           </button>

//           {result === "success" && (
//             <div role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-800">
//               <CheckCircle2 className="mt-1 shrink-0" />
//               تم إرسال طلبك بنجاح. نشكرك على تواصلك مع جمعية يعمر، وسيتم التواصل معك في اقرب وقت ممكن.
//             </div>
//           )}
//           {result === "error" && (
//             <div role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-700">
//               <AlertCircle className="mt-1 shrink-0" />
//               تعذر إرسال الطلب. تأكد من رقم الجوال وحاول مرة أخرى. إذا استمرت المشكلة،
//               يرجى التواصل مع الجمعية مباشرة.
//             </div>
//           )}
//         </form>
//       </main>
//     </div>
//   );
// }
import { useState, type FormEvent } from "react";
import Head from "next/head";
import { MessageSquareText, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitForm } from "@/lib/submitForm";

type RequestType = "شكوى" | "اقتراح" | "ملاحظة";
type Result = "idle" | "success" | "error";

export default function ComplaintsPage() {
  const [requestType, setRequestType] = useState<RequestType>("اقتراح");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<Result>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || website.trim()) return;
    setResult("idle");
    setErrorMessage("");

    const cleanPhone = phone.trim().replace(/[\s()-]/g, "");
    const phoneIsValid = /^(?:05\d{8}|(?:\+?966|00966)5\d{8})$/.test(cleanPhone);
    if (!name.trim() || !details.trim() || !phoneIsValid) {
      setErrorMessage("تأكد من تعبئة الحقول المطلوبة وكتابة رقم جوال سعودي صحيح.");
      setResult("error");
      return;
    }

    const formData = new FormData();
    formData.append("نوع الطلب", requestType);
    formData.append("name", name.trim());
    formData.append("رقم الجوال", cleanPhone);
    formData.append("تفاصيل الطلب", details.trim());

    setSending(true);
    try {
      await submitForm(
        formData,
        `طلب جديد من موقع يعمر - ${requestType}`,
        "تفاصيل الطلب"
      );
      setResult("success");
      setName("");
      setPhone("");
      setDetails("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "تعذر إرسال الطلب. حاول مرة أخرى أو تواصل مع الجمعية."
      );
      setResult("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#F0F3E7] px-4 pb-20 pt-32 sm:px-6">
      <Head>
        <title>الشكاوى والاقتراحات | جمعية يعمر للعناية بالمساجد</title>
        <meta
          name="description"
          content="أرسل شكواك أو اقتراحك أو ملاحظتك إلى جمعية يعمر للعناية بالمساجد."
        />
      </Head>

      <main className="mx-auto max-w-2xl">
        <div className="mb-9 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]">
            <MessageSquareText size={32} aria-hidden="true" />
          </div>
          <h1 className="mb-3 text-3xl font-extrabold text-[#205939] sm:text-4xl">
            الشكاوى والاقتراحات
          </h1>
          <p className="mx-auto max-w-xl leading-8 text-gray-600">
            نسعد باستقبال آرائكم وملاحظاتكم التي تسهم في تحسين خدمات جمعية يعمر للعناية بالمساجد.
          </p>
        </div>

        <form
          onSubmit={submitRequest}
          className="space-y-6 rounded-3xl border border-[#08704C]/10 bg-white p-6 shadow-lg sm:p-9"
        >
          <fieldset>
            <legend className="mb-3 font-bold text-gray-800">
              نوع الطلب <span className="text-red-600">*</span>
            </legend>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {(["شكوى", "اقتراح", "ملاحظة"] as const).map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer rounded-xl border px-2 py-3 text-center text-sm font-semibold transition-colors sm:text-base ${
                    requestType === option
                      ? "border-[#08704C] bg-[#08704C]/10 text-[#08704C]"
                      : "border-gray-200 text-gray-700 hover:border-[#08704C]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="requestType"
                    value={option}
                    checked={requestType === option}
                    onChange={() => setRequestType(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="complaint-name" className="mb-2 block font-bold text-gray-800">
              الاسم الكامل <span className="text-red-600">*</span>
            </label>
            <input
              id="complaint-name"
              name="name"
              required
              maxLength={120}
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
            />
          </div>

          <div>
            <label htmlFor="complaint-phone" className="mb-2 block font-bold text-gray-800">
              رقم الجوال <span className="text-red-600">*</span>
            </label>
            <input
              id="complaint-phone"
              name="phone"
              type="tel"
              required
              dir="ltr"
              inputMode="tel"
              autoComplete="tel"
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05xxxxxxxx"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-right outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
            />
          </div>

          <div>
            <label htmlFor="complaint-details" className="mb-2 block font-bold text-gray-800">
              تفاصيل الطلب <span className="text-red-600">*</span>
            </label>
            <textarea
              id="complaint-details"
              name="details"
              required
              rows={6}
              maxLength={3000}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="اكتب تفاصيل الشكوى أو الاقتراح أو الملاحظة هنا..."
              className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#08704C] focus:ring-2 focus:ring-[#08704C]/15"
            />
          </div>

          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="complaint-website">اترك هذا الحقل فارغًا</label>
            <input
              id="complaint-website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className="rounded-xl bg-[#F1F7F2] p-4 text-sm leading-7 text-[#315844]">
            ستُرسل رسالتك إلى إدارة الجمعية عبر خدمة Web3Forms، وسيتم التواصل معك عند الحاجة.
            بإرسال الطلب، توافق على استخدام بياناتك لهذا الغرض.
          </p>

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08704C] px-5 py-4 text-lg font-bold text-white transition-colors hover:bg-[#07583C] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={19} aria-hidden="true" />
            {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
          </button>

          {result === "success" && (
            <div role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-green-800">
              <CheckCircle2 className="mt-1 shrink-0" />
              تم إرسال طلبك بنجاح. نشكرك على تواصلك مع جمعية يعمر، وسيتم التواصل معك عند الحاجة.
            </div>
          )}
          {result === "error" && (
            <div role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-700">
              <AlertCircle className="mt-1 shrink-0" />
              {errorMessage}
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
