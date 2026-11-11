
// import Image from "next/image";
// import Link from "next/link";
// import { ClientOnly } from "@/components/ClientOnly";
// import {
//   type LucideIcon,
//   Phone,
//   Mail,
//   MapPin,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Music,
//   Download,
//   MessageSquareText,
//   ExternalLink,
//   ArrowLeft,
// } from "lucide-react";

// const PHONE = "920011240";
// const EMAIL = "i.altayeb@yaamur.org.sa";

// const MAP_URL =
//   "https://maps.app.goo.gl/sgEdXPt6in6Xqcg58?g_st=ic";

// const socialLinks: Array<{
//   label: string;
//   href: string;
//   Icon: LucideIcon;
// }> = [
//   {
//     label: "منصة إكس",
//     href: "https://twitter.com/YaamurOrg",
//     Icon: Twitter,
//   },
//   {
//     label: "إنستقرام",
//     href: "https://instagram.com/YaamurOrg",
//     Icon: Instagram,
//   },
//   {
//     label: "لينكدإن",
//     href: "https://www.linkedin.com/in/yaamurorg-%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D9%8A%D8%B9%D9%85%D8%B1-%D9%84%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-0a9562365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//     Icon: Linkedin,
//   },
//   {
//     label: "تيك توك",
//     href: "https://www.tiktok.com/@yaamurorg",
//     Icon: Music,
//   },
// ];

// export default function SiteFooter() {
//   return (
//     <footer
//       dir="rtl"
//       className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 text-white sm:px-6 lg:px-8"
//     >
//       {/* خلفية زخرفية */}
//       <div className="pointer-events-none absolute inset-0 pattern-grid opacity-5" />

//       <div className="container relative z-10 mx-auto">
//         <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//           {/* ================= معلومات الجمعية ================= */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-xl">
//                 <Image
//                   src="/yaamurlogoone.png"
//                   alt="شعار جمعية يعمر"
//                   width={42}
//                   height={42}
//                   className="object-contain"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold">
//                   جمعية يعمر
//                 </h3>
//                 <p className="text-sm text-gray-400">
//                   للعناية بالمساجد
//                 </p>
//               </div>
//             </div>

//             <p className="leading-8 text-gray-400">
//               نسعى لتحقيق التميز في خدمة بيوت الله
//               من خلال البناء والصيانة والتشغيل المتقن.
//             </p>

//             <a
//               href="/data/registration-certificate.pdf"
//               download="شهادة-تسجيل-الجمعية.pdf"
//               className="inline-flex items-center gap-2 rounded-lg bg-[#4D7A61]/20 px-4 py-2 text-sm font-semibold text-[#4D7A61] transition-colors hover:bg-[#4D7A61] hover:text-white"
//             >
//               <Download className="h-4 w-4" />
//               شهادة التسجيل
//             </a>
//           </div>

//           {/* ================= حسابات الجمعية ================= */}
//           <div className="space-y-4">
//             <h4 className="mb-6 text-lg font-bold">
//               حسابات الجمعية
//             </h4>

//             <nav className="flex flex-col gap-4">
//               {socialLinks.map(({ label, href, Icon }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-[#4D7A61]"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4D7A61]/20 transition-colors group-hover:bg-[#4D7A61]">
//                     <Icon className="h-4 w-4 group-hover:text-white" />
//                   </div>

//                   <span>{label}</span>
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* ================= تواصل معنا ================= */}
//           <div className="space-y-5">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2 text-lg font-bold transition-colors hover:text-[#4D7A61]"
//             >
//               تواصل معنا
//               <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
//             </Link>

//             {/* رقم الهاتف - قابل للضغط */}
//             <a
//               href={`tel:${PHONE}`}
//               className="group flex w-fit max-w-full items-center gap-3 text-gray-300 transition-colors hover:text-white"
//               aria-label={`الاتصال بجمعية يعمر على الرقم ${PHONE}`}
//             >
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4D7A61]/20 text-[#4D7A61] transition-colors group-hover:bg-[#4D7A61] group-hover:text-white">
//                 <Phone className="h-5 w-5" />
//               </div>

//               <span dir="ltr" className="font-medium">
//                 {PHONE}
//               </span>
//             </a>

//             {/* البريد الإلكتروني - قابل للضغط */}
//             <a
//               href={`mailto:${EMAIL}`}
//               className="group flex max-w-full items-center gap-3 text-gray-300 transition-colors hover:text-white"
//               aria-label={`إرسال بريد إلكتروني إلى ${EMAIL}`}
//             >
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4D7A61]/20 text-[#4D7A61] transition-colors group-hover:bg-[#4D7A61] group-hover:text-white">
//                 <Mail className="h-5 w-5" />
//               </div>

//               <span
//                 dir="ltr"
//                 className="min-w-0 break-all text-sm font-medium"
//               >
//                 {EMAIL}
//               </span>
//             </a>

//             {/* صفحة التواصل */}
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#65D9B6] transition-colors hover:text-white"
//             >
//               <Mail className="h-4 w-4" />
//               صفحة تواصل معنا
//               <ArrowLeft className="h-4 w-4" />
//             </Link>

//             {/* صفحة الشكاوى والاقتراحات */}
//             <div>
//               <Link
//                 href="/complaints"
//                 className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#65D9B6]"
//               >
//                 <MessageSquareText className="h-4 w-4" />
//                 الشكاوى والاقتراحات
//                 <ArrowLeft className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>

//           {/* ================= موقع الجمعية ================= */}
//           <div className="space-y-5">
//             <h4 className="text-lg font-bold">
//               موقع الجمعية
//             </h4>

//             <div className="flex items-start gap-3 text-gray-400">
//               <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#4D7A61]" />

//               <p className="leading-7">
//                 حي الروضة، الدمام

//                 <span className="block text-sm">
//                   المنطقة الشرقية، المملكة العربية السعودية
//                 </span>
//               </p>
//             </div>

//             {/* بطاقة الموقع */}
//             <a
//               href={MAP_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex min-h-[145px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#4D7A61]/20 bg-gradient-to-br from-[#08704C]/25 to-[#4D7A61]/10 p-5 text-center transition-all duration-300 hover:border-[#4D7A61]/60 hover:bg-[#08704C]/30"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4D7A61]/20 text-[#65D9B6] transition-transform duration-300 group-hover:scale-110">
//                 <MapPin className="h-7 w-7" />
//               </div>

//               <span className="font-bold">
//                 مقر جمعية يعمر
//               </span>

//               <span className="text-xs text-gray-400">
//                 اضغط لعرض الموقع على خرائط Google
//               </span>
//             </a>

//             {/* زر الاتجاهات */}
//             <a
//               href={MAP_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#08704C] to-[#4D7A61] px-4 py-3 font-bold text-white shadow-lg transition-all hover:brightness-110"
//             >
//               <MapPin className="h-4 w-4" />
//               افتح الموقع على الخريطة
//               <ExternalLink className="h-4 w-4" />
//             </a>
//           </div>
//         </div>

//         {/* ================= أسفل الفوتر ================= */}
//         <div className="space-y-3 border-t border-gray-700 pt-8 text-center">
//           <p className="text-sm text-gray-400">
//             جميع الحقوق محفوظة ©{" "}
//             <ClientOnly>
//               {new Date().getFullYear()}
//             </ClientOnly>{" "}
//             جمعية يعمر للعناية بالمساجد
//           </p>

//           <p className="text-sm text-gray-500">
//             رقم الترخيص: 5161
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ClientOnly } from "@/components/ClientOnly";
import {
  type LucideIcon,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Music,
  Download,
  MessageSquareText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const PHONE = "920011240";
const EMAIL = "i.altayeb@yaamur.org.sa";

const MAP_URL =
  "https://maps.app.goo.gl/sgEdXPt6in6Xqcg58?g_st=ic";

const socialLinks: Array<{
  label: string;
  href: string;
  Icon: LucideIcon;
}> = [
  {
    label: "منصة إكس",
    href: "https://twitter.com/YaamurOrg",
    Icon: Twitter,
  },
  {
    label: "إنستقرام",
    href: "https://instagram.com/YaamurOrg",
    Icon: Instagram,
  },
  {
    label: "لينكدإن",
    href: "https://www.linkedin.com/in/yaamurorg-%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D9%8A%D8%B9%D9%85%D8%B1-%D9%84%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-0a9562365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Icon: Linkedin,
  },
  {
    label: "تيك توك",
    href: "https://www.tiktok.com/@yaamurorg",
    Icon: Music,
  },
];

export default function SiteFooter() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#08704C] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      {/* زخرفة خفيفة */}
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-5" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* معلومات الجمعية */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-xl">
                <Image
                  src="/yaamurlogoone.png"
                  alt="شعار جمعية يعمر"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  جمعية يعمر
                </h3>
                <p className="text-sm text-white/75">
                  للعناية بالمساجد
                </p>
              </div>
            </div>

            <p className="leading-8 text-white/80">
              نسعى لتحقيق التميز في خدمة بيوت الله
              من خلال البناء والصيانة والتشغيل المتقن.
            </p>

            <a
              href="/data/registration-certificate.pdf"
              download="شهادة-تسجيل-الجمعية.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#08704C]"
            >
              <Download className="h-4 w-4" />
              شهادة التسجيل
            </a>
          </div>

          {/* حسابات الجمعية */}
          <div className="space-y-4">
            <h4 className="mb-6 text-lg font-bold text-white">
              حسابات الجمعية
            </h4>

            <nav className="flex flex-col gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 transition-colors group-hover:bg-white/25">
                    <Icon className="h-4 w-4 text-white" />
                  </div>

                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* تواصل معنا */}
          <div className="space-y-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-[#D3DAB6]"
            >
              تواصل معنا
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>

            {/* رقم الهاتف */}
            <a
              href={`tel:${PHONE}`}
              className="group flex w-fit max-w-full items-center gap-3 text-white/80 transition-colors hover:text-white"
              aria-label={`الاتصال بجمعية يعمر على الرقم ${PHONE}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-white/25">
                <Phone className="h-5 w-5" />
              </div>

              <span dir="ltr" className="font-medium">
                {PHONE}
              </span>
            </a>

            {/* البريد الإلكتروني */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex max-w-full items-center gap-3 text-white/80 transition-colors hover:text-white"
              aria-label={`إرسال بريد إلكتروني إلى ${EMAIL}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-white/25">
                <Mail className="h-5 w-5" />
              </div>

              <span
                dir="ltr"
                className="min-w-0 break-all text-sm font-medium"
              >
                {EMAIL}
              </span>
            </a>

            {/* صفحة التواصل */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D3DAB6] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              صفحة تواصل معنا
              <ArrowLeft className="h-4 w-4" />
            </Link>

            {/* الشكاوى والاقتراحات */}
            <div>
              <Link
                href="/complaints"
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <MessageSquareText className="h-4 w-4" />
                الشكاوى والاقتراحات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* موقع الجمعية */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white">
              موقع الجمعية
            </h4>

            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D3DAB6]" />

              <p className="leading-7">
                حي الروضة، الدمام

                <span className="block text-sm">
                  المنطقة الشرقية، المملكة العربية السعودية
                </span>
              </p>
            </div>

            {/* بطاقة موقع الجمعية */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[145px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-[#D3DAB6] transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-7 w-7" />
              </div>

              <span className="font-bold text-white">
                مقر جمعية يعمر
              </span>

              <span className="text-xs text-white/70">
                اضغط لعرض الموقع على خرائط Google
              </span>
            </a>

            {/* زر الاتجاهات */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#08704C]"
            >
              <MapPin className="h-4 w-4" />
              افتح الموقع على الخريطة
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* أسفل الفوتر */}
        <div className="space-y-3 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            جميع الحقوق محفوظة ©{" "}
            <ClientOnly>
              {new Date().getFullYear()}
            </ClientOnly>{" "}
            جمعية يعمر للعناية بالمساجد
          </p>

          <p className="text-sm text-white/65">
            رقم الترخيص: 5161
          </p>
        </div>
      </div>
    </footer>
  );
}
