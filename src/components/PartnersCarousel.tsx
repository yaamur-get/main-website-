
// import Image from "next/image";
// import { partners as partnerList } from "@/data/partners";
// import { Building2 } from "lucide-react";

// export function PartnersCarousel() {
//   return (
//     <div className="relative">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         {partnerList.map((partner, index) => {
//           const srcUrl = `/partners/${encodeURIComponent(partner.filename)}`;
//           return (
//             <div
//               key={partner.id}
//               className="group relative"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center border-2 border-transparent hover:border-[#08704C]/30 group-hover:scale-105 card-elevated p-6">
//                 <div className="w-full h-40 flex items-center justify-center">
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <Image
//                       src={srcUrl}
//                       alt={partner.name}
//                       sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
//                       style={{ objectFit: "contain" }}
//                       width={260}
//                       height={140}
//                       unoptimized
//                       onError={(e) => {
//                         // Log the failed URL for debugging and show fallback
//                         console.warn("PartnersCarousel image failed:", srcUrl);
//                         const imgEl = (e.target || e.currentTarget) as HTMLElement | null;
//                         if (imgEl) imgEl.style.display = "none";
//                         const fallback = imgEl?.nextElementSibling as HTMLElement | null;
//                         if (fallback) fallback.style.display = "flex";
//                       }}
//                     />

//                     <div className="hidden w-16 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-2xl flex items-center justify-center text-white" style={{ display: "none" }}>
//                       <Building2 className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Landmark,
  Handshake,
  HeartHandshake,
  Building2,
  X,
  ZoomIn,
  type LucideIcon,
} from "lucide-react";
import { partners } from "@/data/partners";

type Partner = (typeof partners)[number];

// نفس توزيع الشعارات الموجود في كودك الحالي
const partnerGroups = {
  official: [12, 11, 18, 21],
  support: [1, 8, 9, 10, 15, 16, 7, 14],
  execution: [2, 3, 4, 5, 6, 13, 17, 19],
};

function getPartners(ids: number[]): Partner[] {
  return ids
    .map((id) => partners.find((p) => p.id === id))
    .filter((p): p is Partner => Boolean(p));
}

// زخارف هندسية إسلامية خفيفة في الأطراف
function IslamicPattern({
  position,
}: {
  position: "top" | "bottom";
}) {
  const isTop = position === "top";
  const patternId = `islamic-partners-${position}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 h-64 w-64 sm:h-96 sm:w-96 ${
        isTop
          ? "-right-16 -top-14"
          : "-bottom-20 -left-16"
      }`}
      style={{
  opacity: 0.24,
  maskImage: `radial-gradient(
    ellipse at ${isTop ? "top right" : "bottom left"},
    black 14%,
    transparent 78%
  )`,
  WebkitMaskImage: `radial-gradient(
    ellipse at ${isTop ? "top right" : "bottom left"},
    black 14%,
    transparent 78%
  )`,
}}
    >
      <svg
        viewBox="0 0 320 320"
        className="h-full w-full text-[#08704C]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="14"
              y="14"
              width="36"
              height="36"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="14"
              y="14"
              width="36"
              height="36"
              transform="rotate(45 32 32)"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle
              cx="32"
              cy="32"
              r="8"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M32 0V14 M32 50V64 M0 32H14 M50 32H64"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>

        <rect
          width="320"
          height="320"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
}

// بطاقة الشعار
function LogoCard({
  partner,
  onPreview,
}: {
  partner: Partner;
  onPreview: (partner: Partner) => void;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onPreview(partner)}
      aria-label={`تكبير شعار ${partner.name}`}
      className="
        group relative flex h-24 w-full
        items-center justify-center
        overflow-hidden rounded-2xl
        border border-[#08704C]/10
        bg-white p-3
        shadow-[0_5px_18px_rgba(0,0,0,0.045)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#08704C]/35
        hover:shadow-[0_12px_25px_rgba(8,112,76,0.12)]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-[#08704C]
        sm:h-28
        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      {/* لمعة خضراء خفيفة عند المرور */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-[#08704C]/[0.06]
          via-transparent
          to-[#99BD55]/[0.07]
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {failed ? (
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Building2 className="h-7 w-7" />
          <span className="text-xs">{partner.name}</span>
        </div>
      ) : (
        <Image
          src={`/partners/${encodeURIComponent(partner.filename)}`}
          alt={partner.name}
          width={200}
          height={110}
          unoptimized
          onError={() => setFailed(true)}
          className="
            relative z-10 h-full w-full
            object-contain
            transition-transform duration-300
            group-hover:scale-[1.06]
            motion-reduce:transform-none
          "
        />
      )}

      {/* أيقونة التكبير تظهر عند المرور */}
      <span
        className="
          pointer-events-none absolute bottom-2 left-2
          rounded-full bg-[#08704C]
          p-1.5 text-white
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          group-focus-visible:opacity-100
        "
      >
        <ZoomIn className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

// عنوان الفئة مع الخط المنحني مثل الصورة المرجعية
function PartnerSection({
  title,
  subtitle,
  ids,
  icon: Icon,
  onPreview,
}: {
  title: string;
  subtitle: string;
  ids: number[];
  icon: LucideIcon;
  onPreview: (partner: Partner) => void;
}) {
  const items = getPartners(ids);

  return (
    <section className="relative min-w-0">
      <div className="relative mb-5 pt-1">

        {/* عنوان داخل كبسولة خضراء */}
        <div className="relative z-10 flex justify-start">
          <div
            className="
              inline-flex items-center gap-2
              rounded-t-2xl rounded-bl-2xl
              bg-[#D4E5A1] px-4 py-2
              text-[#08704C]
              shadow-sm
            "
          >
            <Icon className="h-5 w-5" />

            <h3 className="text-base font-extrabold sm:text-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* إطار أخضر منحني */}
        <div
          className="
            relative h-5
            rounded-tr-[28px]
            border-r border-t
            border-[#08704C]/65
          "
        />

        <p className="mt-1 text-right text-xs text-gray-500">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((partner) => (
          <LogoCard
            key={partner.id}
            partner={partner}
            onPreview={onPreview}
          />
        ))}
      </div>
    </section>
  );
}

export function PartnersCarousel() {
  const [selectedPartner, setSelectedPartner] =
    useState<Partner | null>(null);

  // إغلاق الصورة بزر Escape
  useEffect(() => {
    if (!selectedPartner) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedPartner(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPartner]);

  return (
    <>
      <div
        dir="rtl"
        className="
          relative mx-auto w-full max-w-7xl
          overflow-hidden rounded-[30px]
          bg-[#FAF9F5]
          px-4 py-8
          sm:px-6 sm:py-10
          lg:px-8
        "
      >
        {/* الزخارف الإسلامية */}
        <IslamicPattern position="top" />
        <IslamicPattern position="bottom" />

        {/* تدرجات خلفية هادئة */}
        <div
          className="
            pointer-events-none absolute
            -right-24 top-20 h-72 w-72
            rounded-full bg-[#08704C]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-24 -left-24 h-72 w-72
            rounded-full bg-[#99BD55]/[0.07]
            blur-3xl
          "
        />

        {/* توزيع مطابق لفكرة التقرير */}
        <div
          className="
            relative z-10 grid grid-cols-1
            items-start gap-8
            lg:grid-cols-2 lg:gap-10
          "
        >
          {/* يمين الصفحة */}
          <div className="space-y-10">
            <PartnerSection
              title="شريك رسمي"
              subtitle="الجهات الحكومية"
              ids={partnerGroups.official}
              icon={Landmark}
              onPreview={setSelectedPartner}
            />

            <PartnerSection
              title="شريك تنفيذ"
              subtitle="الشركات والجمعيات ذات الشراكات التنفيذية"
              ids={partnerGroups.execution}
              icon={Handshake}
              onPreview={setSelectedPartner}
            />
          </div>

          {/* يسار الصفحة */}
          <div>
            <PartnerSection
              title="شريك داعم"
              subtitle="المؤسسات المانحة والداعمة ماليًا"
              ids={partnerGroups.support}
              icon={HeartHandshake}
              onPreview={setSelectedPartner}
            />
          </div>
        </div>
      </div>

      {/* نافذة تكبير الشعار */}
      {selectedPartner && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/60 p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedPartner(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`شعار ${selectedPartner.name}`}
            onClick={(event) => event.stopPropagation()}
            className="
              relative w-full max-w-lg
              rounded-3xl bg-white
              p-8 shadow-2xl
              sm:p-12
            "
          >
            <button
              type="button"
              onClick={() => setSelectedPartner(null)}
              aria-label="إغلاق المعاينة"
              className="
                absolute left-4 top-4
                rounded-full bg-gray-100
                p-2 text-gray-700
                transition-colors hover:bg-gray-200
              "
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex min-h-[220px] items-center justify-center">
              <Image
                src={`/partners/${encodeURIComponent(
                  selectedPartner.filename
                )}`}
                alt={selectedPartner.name}
                width={420}
                height={240}
                unoptimized
                className="max-h-[280px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
