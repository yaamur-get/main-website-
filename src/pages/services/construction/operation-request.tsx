import { useState, type FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  AlertCircle,
  Send,
  ClipboardList,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const RECEIVER_EMAIL = "i.altayeb@yaamur.org.sa";

type Status = "idle" | "loading" | "success" | "error";

export default function OperationRequestPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error("فشل الاتصال بالخدمة");
      const result: { success?: boolean | string } = await response.json();
      if (result.success !== true && result.success !== "true") {
        throw new Error("لم تقبل الخدمة الطلب");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#08704C]/20 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-[#08704C] focus:ring-4 focus:ring-[#08704C]/10";

  return (
    <>
      <Head>
        <title>طلب تشغيل مسجد | جمعية يعمر</title>
        <meta name="description" content="قدّم طلب تشغيل مسجد لدى جمعية يعمر للعناية بالمساجد" />
      </Head>
      <div dir="rtl" className="min-h-screen bg-[#F0F3E7]">
        <header className="bg-gradient-to-br from-[#08704C]/10 via-white to-[#A2B366]/20 px-4 py-16 text-center">
          <Link
            href="/services/operation"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#08704C]/20 bg-white px-5 py-2.5 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white"
          >
            <ArrowRight className="h-4 w-4" /> العودة إلى التشغيل
          </Link>
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C] text-white">
            <Building2 className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-3xl font-black text-[#08704C] sm:text-4xl">طلب تشغيل مسجد</h1>
          <p className="mx-auto max-w-2xl leading-8 text-gray-600">
            قدّم بيانات المسجد واحتياجات التشغيل، وسيتولى فريق الجمعية مراجعة الطلب والتواصل معك.
          </p>
        </header>

        <main className="px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#08704C]/10 bg-white shadow-xl">
            <div className="border-b border-[#08704C]/10 bg-[#08704C]/5 px-6 py-7 sm:px-10">
              <h2 className="flex items-center gap-2 text-xl font-black text-[#08704C]">
                <ClipboardList className="h-6 w-6" /> بيانات طلب التشغيل
              </h2>
              <p className="mt-2 text-sm text-gray-600">الحقول التي عليها * إلزامية.</p>
            </div>

            {status === "success" ? (
              <div className="px-6 py-16 text-center">
                <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-[#08704C]" />
                <h2 className="mb-3 text-2xl font-black text-[#08704C]">تم قبول إرسال الطلب</h2>
                <p className="mx-auto max-w-md leading-8 text-gray-600">
                  قبلت خدمة النماذج بياناتك. يُرجى التأكد من تفعيل البريد لدى FormSubmit؛ قبول الإرسال لا يضمن وصول الرسالة إلى صندوق الجمعية.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-[#08704C] px-8 py-3 font-bold text-white hover:bg-[#06583C]"
                >
                  تقديم طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-10">
                <input type="hidden" name="_subject" value="طلب تشغيل مسجد جديد - جمعية يعمر" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="نوع الطلب" value="طلب تشغيل مسجد" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-[#174734]">
                    الاسم الكامل *
                    <input name="name" type="text" autoComplete="name" required maxLength={120} className={inputClass} placeholder="الاسم الكامل" />
                  </label>
                  <label className="text-sm font-bold text-[#174734]">
                    رقم الجوال *
                    <input name="رقم الجوال" type="tel" autoComplete="tel" required maxLength={25} className={inputClass} placeholder="05XXXXXXXX" dir="ltr" />
                  </label>
                  <label className="text-sm font-bold text-[#174734] sm:col-span-2">
                    البريد الإلكتروني *
                    <input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} placeholder="example@email.com" dir="ltr" />
                  </label>
                  <label className="text-sm font-bold text-[#174734] sm:col-span-2">
                    اسم المسجد *
                    <input name="اسم المسجد" required maxLength={150} className={inputClass} placeholder="اسم المسجد" />
                  </label>
                  <label className="text-sm font-bold text-[#174734]">
                    المدينة *
                    <input name="المدينة" required maxLength={100} className={inputClass} placeholder="مثال: الدمام" />
                  </label>
                  <label className="text-sm font-bold text-[#174734]">
                    الحي
                    <input name="الحي" maxLength={100} className={inputClass} placeholder="اسم الحي" />
                  </label>
                  <label className="text-sm font-bold text-[#174734] sm:col-span-2">
                    رابط موقع المسجد على الخريطة
                    <input name="رابط الموقع" type="url" maxLength={500} className={inputClass} placeholder="https://maps.google.com/..." dir="ltr" />
                  </label>
                  <label className="text-sm font-bold text-[#174734] sm:col-span-2">
                    نوع خدمات التشغيل المطلوبة *
                    <select name="نوع التشغيل" required defaultValue="" className={inputClass}>
                      <option value="" disabled>اختر الخدمة</option>
                      <option value="تشغيل وإدارة متكاملة">تشغيل وإدارة متكاملة</option>
                      <option value="إدارة ومتابعة التشغيل">إدارة ومتابعة التشغيل</option>
                      <option value="النظافة والتشغيل">النظافة والتشغيل</option>
                      <option value="إدارة المرافق والخدمات">إدارة المرافق والخدمات</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </label>
                  <label className="text-sm font-bold text-[#174734] sm:col-span-2">
                    وصف الاحتياج *
                    <textarea name="تفاصيل طلب التشغيل" rows={6} required maxLength={4000} className={`${inputClass} resize-y`} placeholder="اشرح احتياج المسجد وطبيعة التشغيل المطلوب..." />
                  </label>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#08704C]/10 bg-[#F0F3E7] p-4 text-sm leading-7 text-gray-700">
                  <input type="checkbox" required className="mt-1 accent-[#08704C]" />
                  أوافق على استخدام بياناتي لدراسة طلب التشغيل والتواصل معي بشأنه.
                </label>
                {status === "error" && (
                  <p role="alert" className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    <AlertCircle className="h-5 w-5" /> تعذر إرسال الطلب حاليًا. حاول مرة أخرى.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#08704C] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#06583C] disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />
                  {status === "loading" ? "جارٍ إرسال الطلب..." : "إرسال طلب التشغيل"}
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <p className="text-center text-xs leading-6 text-gray-500">
                  يُرسل الطلب عبر FormSubmit، وتخضع الموافقة عليه لمراجعة الجمعية.
                </p>
              </form>
            )}
          </div>
        </main>

        <section className="px-4 pb-16 text-center">
          <p className="mb-4 text-gray-600">هل لديك استفسار قبل تقديم الطلب؟</p>
          <Link
            href="/complaints"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#08704C] px-8 py-4 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white"
          >
            الاستفسارات والاقتراحات <ArrowLeft className="h-4 w-4" />
          </Link>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
