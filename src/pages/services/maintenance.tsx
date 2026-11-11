// import { useEffect, useMemo, useRef, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";
// import { maintenanceSteps } from "@/data/maintenanceJourney";

// export default function MaintenancePage() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [displayStep, setDisplayStep] = useState(0);
//   const [incomingStep, setIncomingStep] = useState<number | null>(null);
//   const [isFading, setIsFading] = useState(false);
//   const [isJourneyActive, setIsJourneyActive] = useState(false);
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const touchStartY = useRef(0);
//   const lastStepAt = useRef(0);
//   const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const fadeDuration = 900;
//   const throttleMs = 900;
//   const fastReturnDelta = 120;

//   const activeStep = maintenanceSteps[currentStep] ?? maintenanceSteps[0];
//   const progressValue = ((currentStep + 1) / maintenanceSteps.length) * 100;
//   const journeySteps = useMemo(
//     () =>
//       maintenanceSteps.map((step) => ({
//         title: step.title,
//         image: step.image,
//         bullets: step.bullets?.length ? step.bullets : [step.summary, step.description]
//       })),
//     []
//   );
//   const journeyPalette = [
//     { bg: "#F7F6F2", text: "#08704C" },
//     { bg: "#DDE9E1", text: "#08704C" },
//     { bg: "#A6C9B4", text: "#08704C" },
//     { bg: "#7BAE6D", text: "#FFFFFF" },
//     { bg: "#3F7F65", text: "#FFFFFF" },
//     { bg: "#08704C", text: "#FFFFFF" },
//     { bg: "#065B3D", text: "#FFFFFF" }
//   ];
//   const palette = journeyPalette[currentStep] ?? journeyPalette[0];
//   const cardBgColor = palette.bg;
//   const textColor = palette.text;
//   const textMutedColor = palette.text;
//   const hexToRgba = (hex: string, alpha: number) => {
//     const normalized = hex.replace("#", "");
//     const r = parseInt(normalized.slice(0, 2), 16);
//     const g = parseInt(normalized.slice(2, 4), 16);
//     const b = parseInt(normalized.slice(4, 6), 16);
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//   };
//   const cardOverlay = `linear-gradient(180deg, ${hexToRgba(cardBgColor, 0.18)} 0%, ${hexToRgba(cardBgColor, 0.65)} 100%)`;

//   const canStepNow = () => Date.now() - lastStepAt.current > throttleMs;

//   const changeStep = (nextIndex: number) => {
//     if (!canStepNow()) return;
//     if (nextIndex < 0 || nextIndex >= journeySteps.length) return;
//     if (nextIndex === currentStep) return;
//     lastStepAt.current = Date.now();
//     setCurrentStep(nextIndex);
//     setIncomingStep(nextIndex);
//     setIsFading(true);
//     if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
//     fadeTimeout.current = setTimeout(() => {
//       setDisplayStep(nextIndex);
//       setIncomingStep(null);
//       setIsFading(false);
//     }, fadeDuration);
//   };

//   useEffect(() => {
//     return () => {
//       if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
//     };
//   }, []);

//   useEffect(() => {
//     const sectionEl = sectionRef.current;
//     if (!sectionEl) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setIsJourneyActive(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(sectionEl);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     const sectionEl = sectionRef.current;
//     if (!sectionEl) return;

//     const shouldLockScroll = () => {
//       const rect = sectionEl.getBoundingClientRect();
//       return rect.top <= 0 && rect.bottom >= window.innerHeight;
//     };

//     const jumpToStart = () => {
//       if (currentStep === 0) return;
//       changeStep(0);
//     };

//     const onWheel = (event: WheelEvent) => {
//       if (!shouldLockScroll()) return;
//       const direction = event.deltaY > 0 ? 1 : -1;
//       const atEnd = direction > 0 && currentStep === journeySteps.length - 1;
//       const atStart = direction < 0 && currentStep === 0;
//       if (atEnd || atStart) return;
//       event.preventDefault();
//       if (direction < 0 && Math.abs(event.deltaY) >= fastReturnDelta) {
//         jumpToStart();
//         return;
//       }
//       changeStep(currentStep + direction);
//     };

//     const onTouchStart = (event: TouchEvent) => {
//       touchStartY.current = event.touches[0]?.clientY ?? 0;
//     };

//     const onTouchMove = (event: TouchEvent) => {
//       if (!shouldLockScroll()) return;
//       const currentY = event.touches[0]?.clientY ?? 0;
//       const delta = touchStartY.current - currentY;
//       if (Math.abs(delta) < 40) return;
//       const direction = delta > 0 ? 1 : -1;
//       const atEnd = direction > 0 && currentStep === journeySteps.length - 1;
//       const atStart = direction < 0 && currentStep === 0;
//       if (atEnd || atStart) return;
//       event.preventDefault();
//       if (direction < 0 && Math.abs(delta) >= fastReturnDelta) {
//         jumpToStart();
//         touchStartY.current = currentY;
//         return;
//       }
//       changeStep(currentStep + direction);
//       touchStartY.current = currentY;
//     };

//     sectionEl.addEventListener("wheel", onWheel, { passive: false });
//     sectionEl.addEventListener("touchstart", onTouchStart, { passive: true });
//     sectionEl.addEventListener("touchmove", onTouchMove, { passive: false });

//     return () => {
//       sectionEl.removeEventListener("wheel", onWheel);
//       sectionEl.removeEventListener("touchstart", onTouchStart);
//       sectionEl.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [currentStep, journeySteps.length]);

//   return (
//     <>
//       <Head>
//         <title>الصيانة | جمعية يعمر </title>
//         <meta name="description" content="خدمات الصيانة الدورية والترميم الشامل للمساجد بأعلى معايير الجودة" />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//         </div>

       

//         <section className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
//           <div className="container relative z-10 pt-28 pb-24">
//             <ScrollReveal>
//               <div className="flex flex-col items-center justify-center text-center space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full">
//                   <Sparkles className="w-4 h-4 text-[#08704C]" />
//                   <span className="text-sm font-semibold text-[#08704C]">اطلب الصيانة</span>
//                 </div>
//                 <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight max-w-3xl">
//                   الصيانة وفق أعلى المعايير وبجودة مهنية معتمدة.
//                 </h1>
//                 <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
//                   نلتزم بتطبيق المواصفات الفنية بدقة، وتنفيذ الأعمال باحترافية عالية، مع متابعة مستمرة تضمن الجودة، والموثوقية، والالتزام في كل مرحلة من مراحل الصيانة.
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

        

//         {/* مسار الصيانة */}
//         <section id="maintenance-journey" ref={sectionRef} className="py-0 bg-white">
//           <div className="container">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto py-10">
//                 <h2 className="text-4xl font-black text-gray-900 mb-4">مسار الصيانة</h2>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={120}>
//               <div className="flex flex-col lg:flex-row gap-10 items-stretch min-h-screen">
//                 <div className="hidden lg:block w-full lg:w-[460px] xl:w-[520px] shrink-0 order-1 lg:order-2">
//                   <div className="sticky top-0 lg:top-10 h-screen flex flex-col justify-center gap-6">
//                     <div className="flex items-center justify-between text-sm text-gray-600">
//                       <span>المرحلة {currentStep + 1} من {journeySteps.length}</span>
//                       <div className="h-1.5 w-28 sm:w-32 bg-gray-200 rounded-full overflow-hidden">
//                         <div
//                           className="h-full bg-[#08704C] transition-all duration-300"
//                           style={{ width: `${progressValue}%` }}
//                         />
//                       </div>
//                     </div>

//                     <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white journey-clip">
//                       <Image
//                         src={journeySteps[displayStep]?.image ?? activeStep.image}
//                         alt={journeySteps[displayStep]?.title ?? activeStep.title}
//                         fill
//                         sizes="(min-width: 1024px) 520px, 100vw"
//                         className="absolute inset-0 object-cover"
//                       />
//                       {incomingStep !== null && (
//                         <Image
//                           src={journeySteps[incomingStep]?.image ?? activeStep.image}
//                           alt={journeySteps[incomingStep]?.title ?? activeStep.title}
//                           fill
//                           sizes="(min-width: 1024px) 520px, 100vw"
//                           className="absolute inset-0 object-cover transition-opacity duration-700"
//                           style={{ opacity: isFading ? 1 : 0 }}
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-tr from-[#08704C]/35 to-transparent mix-blend-multiply" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex-1 w-full flex flex-col justify-center order-2 lg:order-1">
//                   <div
//                     className="journey-card relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 text-right journey-text"
//                     style={{ backgroundColor: cardBgColor, color: textColor, ["--journey-bg" as string]: `url(${activeStep.image})`, ["--journey-overlay" as string]: cardOverlay }}
//                     key={currentStep}
//                   >
//                     <div className="journey-card-content relative z-10">
//                       <div className="flex flex-wrap items-center justify-between gap-3 text-sm opacity-90" style={{ color: textMutedColor }}>
//                         <span>المرحلة {currentStep + 1}</span>
//                         <div className="flex items-center gap-2">
//                           <Button
//                             type="button"
//                             size="sm"
//                             variant="outline"
//                             className="border-gray-200 text-white hover:text-white hover:border-[#08704C] text-base sm:text-lg"
//                             onClick={() => changeStep(currentStep - 1)}
//                             disabled={currentStep === 0}
//                           >
//                             السابق
//                             <ArrowRight className="w-4 h-4 mr-2" />
//                           </Button>
//                           <Button
//                             type="button"
//                             size="sm"
//                             className="bg-[#08704C] hover:bg-[#4D7A61] text-white text-base sm:text-lg"
//                             onClick={() => changeStep(currentStep + 1)}
//                             disabled={currentStep === journeySteps.length - 1}
//                           >
//                             التالي
//                             <ArrowLeft className="w-4 h-4 ml-2" />
//                           </Button>
//                         </div>
//                       </div>
//                       <div className="text-3xl sm:text-4xl font-black mt-3">
//                         {journeySteps[currentStep]?.title}
//                       </div>

//                       <div className="mt-6 space-y-4">
//                         {journeySteps[currentStep]?.bullets.map((bullet, index) => (
//                           <div key={`${currentStep}-${index}`} className="flex items-start gap-3">
//                             <span className="mt-2 w-2 h-2 rounded-full bg-[#08704C]" />
//                             <p className="text-base leading-relaxed opacity-90" style={{ color: textMutedColor }}>
//                               {bullet}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="journey-card-image" />
//                   </div>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>

//           {isJourneyActive && (
//             <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
//               <div className="flex flex-col items-center gap-3 rounded-full bg-white/85 backdrop-blur px-3 py-4 shadow-lg border border-gray-100">
//                 {journeySteps.map((step, index) => {
//                   const isActive = index === currentStep;
//                   return (
//                     <div key={`${step.title}-${index}`} className="flex items-center justify-center">
//                       <span
//                         className={`block rounded-full transition-all duration-300 ${
//                           isActive ? "w-3 h-3 bg-[#08704C] shadow-[0_0_0_4px_rgba(8,112,76,0.15)]" : "w-2 h-2 bg-gray-300"
//                         }`}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </section>

//         <style jsx global>{`
//           html {
//             scroll-behavior: smooth;
//           }
//           .journey-clip {
//             clip-path: polygon(0 0, 88% 0, 100% 10%, 100% 100%, 0 100%, 0 0);
//           }
//           .journey-text {
//             animation: journeyTextIn 500ms ease both;
//           }
//           @media (max-width: 768px) {
//             .journey-card {
//               min-height: 85vh;
//               display: flex;
//               flex-direction: column;
//               gap: 16px;
//             }
//             .journey-card-content {
//               position: relative;
//               z-index: 1;
//             }
//             .journey-card-image {
//               position: relative;
//               margin-top: auto;
//               min-height: 32vh;
//               border-radius: 20px;
//               background-image: var(--journey-bg);
//               background-size: cover;
//               background-position: center;
//               overflow: hidden;
//             }
//             .journey-card-image::after {
//               content: "";
//               position: absolute;
//               inset: 0;
//               background: var(--journey-overlay);
//             }
//           }
//           @keyframes journeyTextIn {
//             from {
//               opacity: 0;
//               transform: translateY(12px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}</style>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A2B366] via-[#08704C] to-[#A2B366] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <ScrollReveal>
//                 <div>
//                   <div className="text-4xl font-black mb-2">512+</div>
//                   <p className="text-lg">عملية صيانة</p>
//                 </div>
//               </ScrollReveal>
              
//               <ScrollReveal delay={200}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">24/7</div>
//                   <p className="text-lg">دعم متواصل</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">100%</div>
//                   <p className="text-lg">ضمان الجودة</p>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black text-gray-900 mb-6">هل مسجدك بحاجة للصيانة؟</h2>
//               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//              تواصل معنا الآن
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a href="https://wa.me/966920011240">
//                 <Button size="lg" className="bg-gradient-to-r from-[#A2B366] to-[#08704C] hover:from-[#08704C] hover:to-[#A2B366] text-white shadow-xl text-lg px-10">
//                   احجز موعد معينة 
//                   <ArrowLeft className="w-5 h-5 mr-2" />
//                 </Button>
//                 </a>
                
//                 <a href="https://wa.me/966920011240">
//                   <Button size="lg" variant="outline" className="border-2 border-[#A2B366] text-[#A2B366] hover:bg-[#A2B366] hover:text-white text-lg px-10">
//                     تواصل معنا
//                   </Button>
//                 </a>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         <WhatsAppButton />

//         <SiteFooter />
//       </div>
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import { maintenanceSteps } from "@/data/maintenanceJourney";

const STEP_MS = 5000; // مدة عرض كل مرحلة (5 ثواني)

// الكلام نفسه من ملف بيانات الصيانة
const STEPS: { title: string; bullets: string[] }[] = maintenanceSteps.map((step) => ({
  title: step.title,
  bullets: (step.bullets?.length ? step.bullets : [step.summary, step.description]).filter(Boolean) as string[]
}));

// ===== شكل المسار المتعرّج: 3 دوائر في كل صف، ويتعدّل تلقائيًا حسب عدد المراحل =====
const W = 1000;
const PER_ROW = 3;
const ROW_COUNT = Math.ceil(STEPS.length / PER_ROW);
const ROWS = Array.from({ length: ROW_COUNT }, (_, r) => 110 + r * 370);
const H = ROWS[ROW_COUNT - 1] + 280;
const COLS = [830, 500, 170];
const goesLeft = (r: number) => r % 2 === 0;
const NODES = STEPS.map((_, i) => {
  const r = Math.floor(i / PER_ROW);
  const inRow = Math.min(PER_ROW, STEPS.length - r * PER_ROW);
  const cols = goesLeft(r) ? COLS : [...COLS].reverse();
  const x = inRow === 1 ? 500 : cols[i % PER_ROW];
  return { x, y: ROWS[r] };
});
const LAST = NODES[NODES.length - 1];
const LAST_LEFT = goesLeft(ROW_COUNT - 1);
const END_X = LAST_LEFT ? Math.max(LAST.x - 140, 60) : Math.min(LAST.x + 140, 940);
const ROAD = ROWS.map((y, r) => {
  const start = r === 0 ? `M 990 ${y} ` : "";
  if (r === ROW_COUNT - 1) return `${start}H ${END_X}`;
  const ny = ROWS[r + 1];
  return goesLeft(r)
    ? `${start}H 120 Q 50 ${y} 50 ${y + 70} V ${ny - 70} Q 50 ${ny} 120 ${ny}`
    : `${start}H 880 Q 950 ${y} 950 ${y + 70} V ${ny - 70} Q 950 ${ny} 880 ${ny}`;
}).join(" ");
const ARROW = LAST_LEFT
  ? `${END_X},${LAST.y - 26} ${END_X},${LAST.y + 26} ${END_X - 44},${LAST.y}`
  : `${END_X},${LAST.y - 26} ${END_X},${LAST.y + 26} ${END_X + 44},${LAST.y}`;
const RING = 2 * Math.PI * 46;
const pad = (n: number) => String(n).padStart(2, "0");
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export default function MaintenancePage() {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [roadLen, setRoadLen] = useState(0);
  const [nodeAt, setNodeAt] = useState<number[]>([]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const roadRef = useRef<SVGPathElement | null>(null);
  const playing = inView && hovered !== current;

  // نحسب مكان كل دائرة على الطريق عشان الخط الأخضر يوقف عندها بالضبط
  useEffect(() => {
    const road = roadRef.current;
    if (!road) return;
    const total = road.getTotalLength();
    const at = NODES.map((n) => {
      let best = 0;
      let bestD = Infinity;
      for (let l = 0; l <= total; l += 2) {
        const p = road.getPointAtLength(l);
        const d = (p.x - n.x) ** 2 + (p.y - n.y) ** 2;
        if (d < bestD) {
          bestD = d;
          best = l;
        }
      }
      return best;
    });
    setRoadLen(total);
    setNodeAt(at);
  }, []);

  // يشتغل التنقل التلقائي فقط لما يكون المسار ظاهر في الشاشة
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // كل 5 ثواني ينتقل للمرحلة التالية، وبعد الأخيرة يرجع للأولى
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % STEPS.length), STEP_MS);
    return () => clearTimeout(t);
  }, [current, playing]);

  const fill = nodeAt[current] ?? 0;

  return (
    <>
      <Head>
        <title>الصيانة | جمعية يعمر </title>
        <meta name="description" content="خدمات الصيانة الدورية والترميم الشامل للمساجد بأعلى معايير الجودة" />
      </Head>

      <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
          <div className="container relative z-10 pt-28 pb-24">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full">
                  <Sparkles className="w-4 h-4 text-[#08704C]" />
                  <span className="text-sm font-semibold text-[#08704C]">اطلب الصيانة</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight max-w-3xl">
                  الصيانة وفق أعلى المعايير وبجودة مهنية معتمدة.
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                  نلتزم بتطبيق المواصفات الفنية بدقة، وتنفيذ الأعمال باحترافية عالية، مع متابعة مستمرة تضمن الجودة، والموثوقية، والالتزام في كل مرحلة من مراحل الصيانة.
                </p>
                <a href="#maintenance-request" className="inline-flex items-center justify-center rounded-xl bg-[#08704C] px-8 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-[#06583C]">
                  احجز طلب صيانة ↓
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* مسار الصيانة */}
        <section id="maintenance-journey" className="py-16 bg-white">
          <div className="container max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-gray-900 mb-3">مسار الصيانة</h2>
              <p className="text-gray-500">اضغط على أي رقم لعرض تفاصيل المرحلة</p>
            </div>

            {/* كمبيوتر وتابلت: المسار المتعرّج */}
            <div ref={mapRef} className="relative hidden md:block" style={{ aspectRatio: `${W} / ${H}` }}>
              <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="roadFill" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7BAE6D" />
                    <stop offset="100%" stopColor="#08704C" />
                  </linearGradient>
                </defs>
                <path ref={roadRef} d={ROAD} fill="none" stroke="#E3EDE7" strokeWidth="24" strokeLinecap="round" />
                <path d={ROAD} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 14" />
                <polygon points={ARROW} fill="#E3EDE7" />
                {roadLen > 0 && (
                  <path
                    d={ROAD}
                    fill="none"
                    stroke="url(#roadFill)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={roadLen}
                    strokeDashoffset={roadLen - fill}
                    style={{ transition: "stroke-dashoffset 900ms cubic-bezier(.65,0,.35,1)" }}
                  />
                )}
              </svg>

              {NODES.map((n, i) => {
                const active = i === current;
                const done = i < current;
                return (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: pct(n.x, W), top: pct(n.y, H), zIndex: active ? 20 : 10 }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* العنوان فوق الدائرة */}
                    <p
                      className={`absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 text-center text-base font-bold leading-snug transition-colors duration-300 ${
                        active ? "text-[#08704C]" : "text-gray-500"
                      }`}
                    >
                      {STEPS[i].title}
                    </p>

                    {/* الدائرة */}
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`المرحلة ${i + 1}: ${STEPS[i].title}`}
                      aria-expanded={active}
                      className={`step-node relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 text-2xl font-black transition-all duration-500 ${
                        active
                          ? "scale-110 border-[#08704C] bg-[#08704C] text-white shadow-[0_0_0_10px_rgba(8,112,76,0.12)]"
                          : done
                            ? "border-[#08704C] bg-[#08704C] text-white"
                            : "border-[#C9DDD1] bg-white text-[#08704C]"
                      }`}
                    >
                      {pad(i + 1)}
                      {active && (
                        <svg className="pointer-events-none absolute -inset-[10px]" viewBox="0 0 100 100">
                          <circle
                            key={`ring-${current}`}
                            cx="50"
                            cy="50"
                            r="46"
                            fill="none"
                            stroke="#7BAE6D"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={RING}
                            transform="rotate(-90 50 50)"
                            className="step-timer"
                            style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
                          />
                        </svg>
                      )}
                    </button>

                    {/* الخطوات تنزل تحت الدائرة */}
                    <div
                      className={`absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 transition-all duration-500 ease-out ${
                        active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0 pointer-events-none"
                      }`}
                    >
                      <ul className="space-y-2 rounded-2xl border border-[#08704C]/15 bg-white/95 p-4 text-right shadow-lg backdrop-blur">
                        {STEPS[i].bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* الجوال: قائمة المراحل، والمفتوحة تنزل خطواتها تحتها */}
            <ol className="relative space-y-4 md:hidden">
              {STEPS.map((s, i) => {
                const active = i === current;
                return (
                  <li key={i} className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-expanded={active}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-black transition-all duration-500 ${
                        i <= current ? "border-[#08704C] bg-[#08704C] text-white" : "border-[#C9DDD1] bg-white text-[#08704C]"
                      }`}
                    >
                      {pad(i + 1)}
                    </button>
                    <div className="flex-1 pt-3">
                      <button
                        type="button"
                        onClick={() => setCurrent(i)}
                        className={`text-right font-bold ${active ? "text-[#08704C]" : "text-gray-600"}`}
                      >
                        {s.title}
                      </button>
                      <div className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <ul className="space-y-2 overflow-hidden pt-2">
                          {s.bullets.map((b, j) => (
                            <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <style jsx global>{`
          .step-timer {
            animation-name: stepTimer;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }
          @keyframes stepTimer {
            from {
              stroke-dashoffset: ${RING};
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

        {/* إنجازات الصيانة، دون عرض دعم متواصل */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#A2B366] via-[#08704C] to-[#A2B366] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="container relative z-10 mx-auto">
            <div className="grid gap-8 text-center md:grid-cols-2">
              <ScrollReveal>
                <div><div className="mb-2 text-4xl font-black">496+</div><p className="text-lg">إجمالي مشاريع الصيانة المنفذة</p></div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div><div className="mb-2 text-4xl font-black">100%</div><p className="text-lg">ضمان الجودة</p></div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="maintenance-request" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6 text-4xl font-black text-[#08704C]">هل مسجدك بحاجة للصيانة؟</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">قدّم طلب صيانة المسجد عبر النموذج الإلكتروني، وسيتواصل معك فريق الجمعية بعد مراجعة التفاصيل.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/services/construction/maintenance-request" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#06583C]">
                  احجز طلب صيانة <ArrowLeft className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border-2 border-[#08704C] px-10 py-4 text-lg font-bold text-[#08704C] transition hover:bg-[#08704C] hover:text-white">
                  تواصل معنا
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <SiteFooter />
      </div>
    </>
  );
}
