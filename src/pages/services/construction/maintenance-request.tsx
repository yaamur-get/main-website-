
import { useState, type FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Wrench,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Phone,
  UserRound,
  Mail,
  FileText,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const RECEIVER_EMAIL = "i.altayeb@yaamur.org.sa";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function MaintenanceRequestPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_honey")) return;

    setStatus("loading");
    setErrorMessage("");

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${RECEIVER_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("تعذر إرسال الطلب.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "تعذر إرسال الطلب حاليًا. يرجى المحاولة مرة أخرى أو التواصل مع الجمعية."
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#08704C]/20 bg-white px-4 py-3.5 text-gray-800 outline-none transition focus:border-[#08704C] focus:ring-4 focus:ring-[#08704C]/10";

  const labelClass = "mb-2 block text-sm font-bold text-[#174734]";

  return (
    <>
      <Head>
        <title>طلب صيانة مسجد | جمعية يعمر</title>
        <meta
          name="description"
          content="نموذج تقديم طلب صيانة مسجد لدى جمعية يعمر للعناية بالمساجد"
        />
      </Head>

      <div dir="rtl" className="min-h-screen bg-[#F0F3E7] text-gray-800">

        {/* رأس الصفحة */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08704C]/10 via-white to-[#A2B366]/20 px-4 py-16">
          <div className="container mx-auto max-w-4xl text-center">

            <Link
              href="/services/maintenance"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#08704C]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#08704C] transition hover:bg-[#08704C] hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
              العودة إلى الصيانة
            </Link>

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08704C] text-white shadow-lg">
              <Wrench className="h-8 w-8" />
            </div>

            <h1 className="mb-4 text-3xl font-black text-white sm:text-4xl">
               طلب صيانة مسجد أو جامع
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-white sm:text-lg">
              يسعدنا استقبال طلبات صيانة المساجد.
              يرجى تعبئة البيانات التالية وتوضيح احتياجات المسجد،
              وسيقوم فريق جمعية يعمر بمراجعة الطلب والتواصل معك.
            </p>
          </div>
        </section>

        {/* نموذج طلب الصيانة */}
        <section className="px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#08704C]/10 bg-white shadow-xl">

            <div className="border-b border-[#08704C]/10 bg-[#08704C]/5 px-6 py-7 sm:px-10">
              <h2 className="flex items-center gap-3 text-xl font-black text-[#08704C]">
                <FileText className="h-6 w-6" />
                بيانات طلب الصيانة
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                الحقول المميزة بعلامة * مطلوبة لإرسال الطلب.
              </p>
            </div>

            {status === "success" ? (
              <div className="px-6 py-16 text-center sm:px-10">

                <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-[#08704C]" />

                <h2 className="mb-3 text-2xl font-black text-[#08704C]">
                  تم إرسال طلب الصيانة
                </h2>

                <p className="mx-auto max-w-md leading-8 text-gray-600">
                  تم قبول الطلب بواسطة خدمة إرسال النماذج.
                  سيصل إلى بريد الجمعية بعد تفعيل عنوان الاستقبال.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-xl bg-[#08704C] px-6 py-3 font-bold text-white hover:bg-[#06583C]"
                  >
                    تقديم طلب آخر
                  </button>

                  <Link
                    href="/services/maintenance"
                    className="rounded-xl border border-[#08704C] px-6 py-3 font-bold text-[#08704C] hover:bg-[#F0F3E7]"
                  >
                    العودة للصيانة
                  </Link>

                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 px-6 py-8 sm:px-10"
              >

                {/* إعدادات البريد */}
                <input
                  type="hidden"
                  name="_subject"
                  value="طلب صيانة مسجد جديد - جمعية يعمر"
                />
                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />
                <input
                  type="hidden"
                  name="نوع الطلب"
                  value="طلب صيانة مسجد"
                />

                {/* حماية بسيطة من الرسائل الآلية */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* بيانات مقدم الطلب */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-3 text-lg font-black text-[#08704C]">
                    <UserRound className="h-5 w-5" />
                    بيانات مقدم الطلب
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label htmlFor="name" className={labelClass}>
                        الاسم الكامل *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        placeholder="أدخل الاسم الكامل"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        رقم الجوال *
                      </label>

                      <div className="relative">
                        <Phone className="absolute right-3 top-4 h-5 w-5 text-[#4D7A61]" />
                        <input
                          id="phone"
                          name="رقم الجوال"
                          type="tel"
                          required
                          maxLength={25}
                          placeholder="05XXXXXXXX"
                          className={`${inputClass} pr-10`}
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className={labelClass}>
                        البريد الإلكتروني *
                      </label>

                      <div className="relative">
                        <Mail className="absolute right-3 top-4 h-5 w-5 text-[#4D7A61]" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          maxLength={254}
                          placeholder="example@email.com"
                          className={`${inputClass} pr-10`}
                          dir="ltr"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* تفاصيل المسجد */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-3 text-lg font-black text-[#08704C]">
                    <Wrench className="h-5 w-5" />
                    تفاصيل المسجد والصيانة
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                      <label htmlFor="mosqueName" className={labelClass}>
                        اسم المسجد *
                      </label>
                      <input
                        id="mosqueName"
                        name="اسم المسجد"
                        type="text"
                        required
                        maxLength={150}
                        placeholder="أدخل اسم المسجد"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className={labelClass}>
                        المدينة *
                      </label>
                      <input
                        id="city"
                        name="المدينة"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="مثال: الدمام"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="district" className={labelClass}>
                        الحي *
                      </label>
                      <input
                        id="district"
                        name="الحي"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="اسم الحي"
                        className={inputClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="location" className={labelClass}>
                        رابط موقع المسجد على الخريطة
                      </label>

                      <div className="relative">
                        <MapPin className="absolute right-3 top-4 h-5 w-5 text-[#4D7A61]" />

                        <input
                          id="location"
                          name="رابط موقع المسجد"
                          type="url"
                          maxLength={500}
                          placeholder="https://maps.google.com/..."
                          className={`${inputClass} pr-10`}
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="maintenanceType" className={labelClass}>
                        نوع الصيانة المطلوبة *
                      </label>

                      <select
                        id="maintenanceType"
                        name="نوع الصيانة المطلوبة"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          اختر نوع الصيانة
                        </option>
                        <option value="صيانة كهربائية">
                          صيانة كهربائية
                        </option>
                        <option value="صيانة سباكة">
                          صيانة سباكة
                        </option>
                        <option value="صيانة تكييف">
                          صيانة تكييف
                        </option>
                        <option value="صيانة دورات المياه">
                          صيانة دورات المياه
                        </option>
                        <option value="صيانة إنشائية">
                          صيانة إنشائية
                        </option>
                        <option value="ترميم شامل">
                          ترميم شامل
                        </option>
                        <option value="صيانة عامة">
                          صيانة عامة
                        </option>
                        <option value="أخرى">
                          أخرى
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="urgency" className={labelClass}>
                        درجة أولوية الطلب *
                      </label>

                      <select
                        id="urgency"
                        name="درجة الأولوية"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          اختر درجة الأولوية
                        </option>
                        <option value="عاجل">عاجل</option>
                        <option value="متوسط">متوسط</option>
                        <option value="عادي">عادي</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contactTime" className={labelClass}>
                        الوقت المناسب للتواصل
                      </label>

                      <select
                        id="contactTime"
                        name="الوقت المناسب للتواصل"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="">أي وقت خلال الدوام</option>
                        <option value="صباحًا">صباحًا</option>
                        <option value="مساءً">مساءً</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="details" className={labelClass}>
                        وصف مشكلة الصيانة *
                      </label>

                      <textarea
                        id="details"
                        name="وصف مشكلة الصيانة"
                        required
                        rows={6}
                        maxLength={4000}
                        placeholder="يرجى توضيح المشكلة، والأجزاء المتضررة، وأي معلومات تساعد فريق الصيانة على دراسة الطلب..."
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                  </div>
                </div>

                {/* الموافقة */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#08704C]/10 bg-[#F0F3E7]/70 p-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[#08704C]"
                  />

                  <span className="text-sm leading-7 text-gray-700">
                    أوافق على استخدام البيانات المدخلة لغرض دراسة
                    طلب الصيانة والتواصل معي بشأنه.
                  </span>
                </label>

                {/* رسالة الخطأ */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {/* إرسال الطلب */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#08704C] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#06583C] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />

                  {status === "loading"
                    ? "جارٍ إرسال الطلب..."
                    : "إرسال طلب الصيانة"}

                  <ArrowLeft className="h-5 w-5" />
                </button>

                <p className="text-center text-xs leading-6 text-gray-500">
                  يُرسل الطلب عبر خدمة FormSubmit الخارجية،
                  وتخضع الموافقة على الطلب لمراجعة الجمعية.
                </p>

              </form>
            )}
          </div>
        </section>

        {/* التواصل */}
        <section className="px-4 pb-16 text-center">
          <p className="mb-4 text-gray-600">
    هل لديك استفسار قبل تقديم الطلب؟
  </p>

  <Link
    href="/complaints"
    className="inline-flex items-center gap-2 rounded-xl border-2 border-[#08704C] px-6 py-3 font-bold text-[#08704C] transition-colors hover:bg-[#08704C] hover:text-white"
  >
    الاستفسارات والاقتراحات
    <ArrowLeft className="h-4 w-4" />
  </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#08704C] hover:underline"
          >
            تواصل معنا
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
