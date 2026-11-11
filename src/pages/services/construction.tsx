// import { useEffect, useMemo, useRef, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   BadgeCheck,
//   DraftingCompass,
//   FileSignature,
//   Hammer,
//   HandHeart,
//   LucideIcon,
//   MapPin,
//   PlugZap,
//   Sparkles,
//   Star,
//   Target,
//   Users2
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";
// import { ConstructionIconKey, constructionSteps } from "@/data/constructionJourney";

// const iconMap: Record<ConstructionIconKey, LucideIcon> = {
//   target: Target,
//   mapPin: MapPin,
//   fileSignature: FileSignature,
//   draftingCompass: DraftingCompass,
//   badgeCheck: BadgeCheck,
//   hammer: Hammer,
//   users2: Users2,
//   plugZap: PlugZap,
//   handHeart: HandHeart
// };

// export default function ConstructionPage() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
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

//   const testimonialSlides = useMemo(
//     () => [
//       {
//         id: 1,
//         quote: "من أول اتصال حتى تسليم المفاتيح، كنت أعرف ما سيحدث في كل خطوة. ثقة ووضوح طوال الرحلة.",
//         author: "عبدالله الحارثي",
//         role: "متبرع لمسجد",
//         type: "quote" as const
//       },
//       {
//         id: 2,
//         quote: "الإشراف دقيق والتصاميم مدروسة. المصلون شعروا بالراحة من أول صلاة بعد الافتتاح.",
//         author: "الشيخ أحمد",
//         role: "إمام وممثل للمجتمع",
//         type: "quote" as const
//       },
//       {
//         id: 3,
//         title: "مسجد مكتمل",
//         description: "تسليم جاهز للصلاة مع العدادات والطاقم والاعتمادات الرسمية.",
//         image: "/iamge/yaamur_bulding.jpg",
//         type: "photo" as const
//       }
//     ],
//     []
//   );

//   const beforeAfter = {
//     before: { label: "قبل", image: "/iamge/yaamur_mint.jpg" },
//     after: { label: "بعد", image: "/iamge/yaamur_bulding.jpg" }
//   };

//   const activeStep = constructionSteps[currentStep] ?? constructionSteps[0];
//   const progressValue = ((currentStep + 1) / constructionSteps.length) * 100;
//   const journeySteps = useMemo(
//     () =>
//       constructionSteps.map((step) => ({
//         title: step.title,
//         image: step.image,
//         bullets: step.bullets?.length ? step.bullets : [step.summary, step.description]
//       })),
//     []
//   );
//   const journeyPalette = [
//     { bg: "#F7F6F2", text: "#08704C" },
//     { bg: "#CFE3D8", text: "#08704C" },
//     { bg: "#7BAE6D", text: "#FFFFFF" },
//     { bg: "#3F7F65", text: "#FFFFFF" },
//     { bg: "#3F7F65", text: "#FFFFFF" },
//     { bg: "#08704C", text: "#FFFFFF" },
//     { bg: "#08704C", text: "#FFFFFF" },
//     { bg: "#08704C", text: "#FFFFFF" },
//     { bg: "#065B3D", text: "#FFFFFF" },
//     { bg: "#054A33", text: "#FFFFFF" }
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
//         <title>رحلة بناء | يعمر </title>
//         <meta
//           name="description"
//           content="رحلة بناء مسجدك مع يعمر في 9 خطوات واضحة. خريطة تفاعلية، مسار عمودي متكامل، ونهاية تحويل قوية للتبرع والمشاركة."
//         />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//         </div>

//         {/* Hero */}
//         <section className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
//           <div className="container relative z-10 pt-28 pb-24">
//             <ScrollReveal>
//               <div className="flex flex-col items-center justify-center text-center space-y-6">
                

//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed max-w-3xl">
//                   رحلة متكاملة لبناء المسجد، تبدأ من الفكرة
//                   وتنتهي بتشغيل مسجد مستدام يخدم الحي لسنوات طويلة،
//                   وفق معايير عالية وخبرة عملية.
//                 </h3>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* رحلة البناء: صورة ثابتة + محتوى متغير */}
//         <section id="journey" ref={sectionRef} className="py-0 bg-white">
//           <div className="container">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto py-10">
//                 <h2 className="text-4xl font-black text-gray-900 mb-4">رحلة البناء</h2>
                
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

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <ScrollReveal>
//                 <div>
//                   <div className="text-4xl font-black mb-2">4+</div>
//                   <p className="text-lg">مشاريع بناء</p>
//                 </div>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">24/7</div>
//                   <p className="text-lg">متابعة ميدانية</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">100%</div>
//                   <p className="text-lg">التسليم في الموعد</p>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black text-gray-900 mb-6">هل ترغب في بناء مسجد؟</h2>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
//                 <a href="https://wa.me/966920011240">
//                   <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
//                     تواصل عبر واتساب
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

// import { useEffect, useRef, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";

// const STEP_MS = 5000; // مدة عرض كل مرحلة (5 ثواني)

// const STEPS: { title: string; bullets: string[] }[] = [
//   {
//     title: "حصر احتياج المتبرع",
//     bullets: [
//       "جلسة عصف ذهني مع المتبرع لفهم الفكرة والهدف.",
//       "تحديد الرؤية العامة للمشروع.",
//       "تحديد الميزانية المتوقعة.",
//       "مناقشة الخيارات الأنسب لتحقيق أكبر أثر.",
//       "عرض نماذج وتجارب سابقة.",
//       "الهدف: تحويل الفكرة العامة إلى مشروع واضح المعالم وقابل للتنفيذ."
//     ]
//   },
//   {
//     title: "أختيار الأرض",
//     bullets: [
//       "دراسة الكثافة السكانية الحالية والمستقبلية.",
//       "حصر الاحتياج الفعلي",
//       "قياس حجم الأثر المتوقع مقابل مبلغ التبرع.",
//       "اختيار الأرض الأنسب لخدمة أكبر عدد من المصلين.",
//       "اعتماد الأرض رسميًا للمشروع."
//     ]
//   },
//   {
//     title: "الاتفاقية",
//     bullets: [
//       "التزامات الجمعية.",
//       "التزامات المتبرع.",
//       "الجدول الزمني للمشروع.",
//       "آلية التقارير والمتابعة.",
//       "الهدف: ضمان وضوح العلاقة بين الطرفين ومنع أي اختلاف في التوقعات مستقبلًا."
//     ]
//   },
//   {
//     title: "المخططات والتصاميم",
//     bullets: [
//       "المخططات المعمارية.",
//       "المخططات الإنشائية.",
//       "التصميم الداخلي والخارجي.",
//       "حصر الكميات والتكاليف (BOQ).",
//       "بالتعاون مع مكاتب هندسية متخصصة."
//     ]
//   },
//   {
//     title: "اختيار الاستشاري والمقاول",
//     bullets: [
//       "عقد اجتماع تعريفي بالمشروع.",
//       "شرح المشروع كاملًا لضمان المنافسة العادلة.",
//       "استقبال العروض الفنية والمالية.",
//       "تقييم العروض فنيًا وماليًا.",
//       "اختيار الأنسب عبر لجنة ترسية مختصة."
//     ]
//   },
//   {
//     title: "تنفيذ المشروع",
//     bullets: [
//       "بدء التنفيذ تحت إشراف مباشر من الجمعية.",
//       "متابعة تنفيذ الأعمال ميدانيًا.",
//       "متابعة الالتزام بالجداول الزمنية.",
//       "ما يميزنا: متابعة التنفيذ والمتابعة الزمنية المستمرة."
//     ]
//   },
//   {
//     title: "المساهمة في اختيار الإمام والمؤذن",
//     bullets: [
//       "التنسيق مع الجهات المختصة لاختيار الإمام والمؤذن.",
//       "هدفنا أن يكون المسجد مركزًا لحلقات التحفيظ.",
//       "منطلقًا للدروس العلمية.",
//       "ملتقى لأهل الحي.",
//       "حيًا برسالته وليس مجرد مبنى."
//     ]
//   },
//   {
//     title: "استخراج عدادات الماء والكهرباء واعتماد اسم المسجد الرسمي",
//     bullets: [
//       "استخراج التراخيص الحكومية.",
//       "تجهيز عدادات المياه والكهرباء.",
//       "اعتماد اسم المسجد رسميًا.",
//       "تجنب تأخير الافتتاح.",
//       "ضمان جاهزية الخدمات في الوقت المناسب دون خسائر أو تعطيل"
//     ]
//   },
//   {
//     title: "تسليم المشروع لفرع الوزارة",
//     bullets: [
//       "تسليم المسجد وفق أحدث أنظمة وتعليمات الوزارة.",
//       "تحديث المشروع حسب آخر الأكواد والأنظمة.",
//       "تمكين قبول المسجد من أول مرة دون ملاحظات."
//     ]
//   },
//   {
//     title: "تشغيل المسجد وضمان استدامته",
//     bullets: [
//       "النظافة الدائمة.",
//       "الصيانة المستمرة.",
//       "جدولة الصيانات الوقائية.",
//       "الهدف: استمرار المسجد في أداء رسالته بأفضل صورة ولسنوات طويلة."
//     ]
//   }
// ];

// // ===== شكل المسار المتعرّج (مقاسات داخل مربع عرضه 1000) =====
// const W = 1000;
// const H = 1500;
// const ROWS = [110, 480, 850, 1220];
// const COLS = [830, 500, 170];
// const NODES = [
//   ...COLS.map((x) => ({ x, y: ROWS[0] })),
//   ...[...COLS].reverse().map((x) => ({ x, y: ROWS[1] })),
//   ...COLS.map((x) => ({ x, y: ROWS[2] })),
//   { x: 500, y: ROWS[3] }
// ];
// const ROAD = [
//   `M 990 ${ROWS[0]} H 120 Q 50 ${ROWS[0]} 50 ${ROWS[0] + 70} V ${ROWS[1] - 70} Q 50 ${ROWS[1]} 120 ${ROWS[1]}`,
//   `H 880 Q 950 ${ROWS[1]} 950 ${ROWS[1] + 70} V ${ROWS[2] - 70} Q 950 ${ROWS[2]} 880 ${ROWS[2]}`,
//   `H 120 Q 50 ${ROWS[2]} 50 ${ROWS[2] + 70} V ${ROWS[3] - 70} Q 50 ${ROWS[3]} 120 ${ROWS[3]} H 640`
// ].join(" ");
// const RING = 2 * Math.PI * 46;
// const pad = (n: number) => String(n).padStart(2, "0");
// const pct = (v: number, of: number) => `${(v / of) * 100}%`;

// export default function ConstructionPage() {
//   const [current, setCurrent] = useState(0);
//   const [hovering, setHovering] = useState(false);
//   const [inView, setInView] = useState(false);
//   const [roadLen, setRoadLen] = useState(0);
//   const [nodeAt, setNodeAt] = useState<number[]>([]);
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const roadRef = useRef<SVGPathElement | null>(null);
//   const playing = inView && !hovering;

//   // نحسب مكان كل دائرة على الطريق عشان الخط الأخضر يوقف عندها بالضبط
//   useEffect(() => {
//     const road = roadRef.current;
//     if (!road) return;
//     const total = road.getTotalLength();
//     const at = NODES.map((n) => {
//       let best = 0;
//       let bestD = Infinity;
//       for (let l = 0; l <= total; l += 2) {
//         const p = road.getPointAtLength(l);
//         const d = (p.x - n.x) ** 2 + (p.y - n.y) ** 2;
//         if (d < bestD) {
//           bestD = d;
//           best = l;
//         }
//       }
//       return best;
//     });
//     setRoadLen(total);
//     setNodeAt(at);
//   }, []);

//   // يشتغل التنقل التلقائي فقط لما يكون المسار ظاهر في الشاشة
//   useEffect(() => {
//     const el = mapRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   // كل 5 ثواني ينتقل للمرحلة التالية، وبعد الأخيرة يرجع للأولى
//   useEffect(() => {
//     if (!playing) return;
//     const t = setTimeout(() => setCurrent((c) => (c + 1) % STEPS.length), STEP_MS);
//     return () => clearTimeout(t);
//   }, [current, playing]);

//   const fill = nodeAt[current] ?? 0;

//   return (
//     <>
//       <Head>
//         <title>رحلة بناء | يعمر</title>
//         <meta name="description" content="رحلة بناء مسجدك مع يعمر في 10 مراحل واضحة." />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         {/* Hero */}
//         <section className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
//           <div className="container relative z-10 pt-28 pb-24">
//             <ScrollReveal>
//               <div className="flex flex-col items-center justify-center text-center space-y-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed max-w-3xl">
//                   رحلة متكاملة لبناء المسجد، تبدأ من الفكرة وتنتهي بتشغيل مسجد مستدام يخدم الحي لسنوات طويلة، وفق
//                   معايير عالية وخبرة عملية.
//                 </h3>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* رحلة البناء */}
//         <section id="journey" className="py-16 bg-white">
//           <div className="container max-w-6xl">
//             <div className="text-center mb-10">
//               <h2 className="text-4xl font-black text-gray-900 mb-3">رحلة البناء</h2>
//               <p className="text-gray-500">اضغط على أي رقم لعرض تفاصيل المرحلة</p>
//             </div>

//             {/* كمبيوتر وتابلت: المسار المتعرّج */}
//             <div ref={mapRef} className="relative hidden md:block" style={{ aspectRatio: `${W} / ${H}` }}>
//               <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
//                 <defs>
//                   <linearGradient id="roadFill" x1="1" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#7BAE6D" />
//                     <stop offset="100%" stopColor="#08704C" />
//                   </linearGradient>
//                 </defs>
//                 <path ref={roadRef} d={ROAD} fill="none" stroke="#E3EDE7" strokeWidth="24" strokeLinecap="round" />
//                 <path d={ROAD} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 14" />
//                 <polygon points={`640,${ROWS[3] - 26} 640,${ROWS[3] + 26} 684,${ROWS[3]}`} fill="#E3EDE7" />
//                 {roadLen > 0 && (
//                   <path
//                     d={ROAD}
//                     fill="none"
//                     stroke="url(#roadFill)"
//                     strokeWidth="12"
//                     strokeLinecap="round"
//                     strokeDasharray={roadLen}
//                     strokeDashoffset={roadLen - fill}
//                     style={{ transition: "stroke-dashoffset 900ms cubic-bezier(.65,0,.35,1)" }}
//                   />
//                 )}
//               </svg>

//               {NODES.map((n, i) => {
//                 const active = i === current;
//                 const done = i < current;
//                 return (
//                   <div
//                     key={i}
//                     className="absolute -translate-x-1/2 -translate-y-1/2"
//                     style={{ left: pct(n.x, W), top: pct(n.y, H), zIndex: active ? 20 : 10 }}
//                     onMouseEnter={() => {
//                       setHovering(true);
//                       setCurrent(i);
//                     }}
//                     onMouseLeave={() => setHovering(false)}
//                   >
//                     {/* العنوان فوق الدائرة */}
//                     <p
//                       className={`absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 text-center text-base font-bold leading-snug transition-colors duration-300 ${
//                         active ? "text-[#08704C]" : "text-gray-500"
//                       }`}
//                     >
//                       {STEPS[i].title}
//                     </p>

//                     {/* الدائرة */}
//                     <button
//                       type="button"
//                       onClick={() => setCurrent(i)}
//                       aria-label={`المرحلة ${i + 1}: ${STEPS[i].title}`}
//                       aria-expanded={active}
//                       className={`step-node relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 text-2xl font-black transition-all duration-500 ${
//                         active
//                           ? "scale-110 border-[#08704C] bg-[#08704C] text-white shadow-[0_0_0_10px_rgba(8,112,76,0.12)]"
//                           : done
//                             ? "border-[#08704C] bg-[#08704C] text-white"
//                             : "border-[#C9DDD1] bg-white text-[#08704C]"
//                       }`}
//                     >
//                       {pad(i + 1)}
//                       {active && (
//                         <svg className="pointer-events-none absolute -inset-[10px]" viewBox="0 0 100 100">
//                           <circle
//                             key={`ring-${current}`}
//                             cx="50"
//                             cy="50"
//                             r="46"
//                             fill="none"
//                             stroke="#7BAE6D"
//                             strokeWidth="4"
//                             strokeLinecap="round"
//                             strokeDasharray={RING}
//                             transform="rotate(-90 50 50)"
//                             className="step-timer"
//                             style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
//                           />
//                         </svg>
//                       )}
//                     </button>

//                     {/* الخطوات تنزل تحت الدائرة */}
//                     <div
//                       className={`absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 transition-all duration-500 ease-out ${
//                         active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0 pointer-events-none"
//                       }`}
//                     >
//                       <ul className="space-y-2 rounded-2xl border border-[#08704C]/15 bg-white/95 p-4 text-right shadow-lg backdrop-blur">
//                         {STEPS[i].bullets.map((b, j) => (
//                           <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
//                             <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
//                             <span>{b}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* الجوال: قائمة المراحل، والمفتوحة تنزل خطواتها تحتها */}
//             <ol className="relative space-y-4 md:hidden">
//               {STEPS.map((s, i) => {
//                 const active = i === current;
//                 return (
//                   <li key={i} className="flex gap-4">
//                     <button
//                       type="button"
//                       onClick={() => setCurrent(i)}
//                       aria-expanded={active}
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-black transition-all duration-500 ${
//                         i <= current ? "border-[#08704C] bg-[#08704C] text-white" : "border-[#C9DDD1] bg-white text-[#08704C]"
//                       }`}
//                     >
//                       {pad(i + 1)}
//                     </button>
//                     <div className="flex-1 pt-3">
//                       <button
//                         type="button"
//                         onClick={() => setCurrent(i)}
//                         className={`text-right font-bold ${active ? "text-[#08704C]" : "text-gray-600"}`}
//                       >
//                         {s.title}
//                       </button>
//                       <div className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
//                         <ul className="space-y-2 overflow-hidden pt-2">
//                           {s.bullets.map((b, j) => (
//                             <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
//                               <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
//                               <span>{b}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ol>
//           </div>
//         </section>

//         <style jsx global>{`
//           .step-timer {
//             animation-name: stepTimer;
//             animation-timing-function: linear;
//             animation-fill-mode: forwards;
//           }
//           @keyframes stepTimer {
//             from {
//               stroke-dashoffset: ${RING};
//             }
//             to {
//               stroke-dashoffset: 0;
//             }
//           }
//         `}</style>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <ScrollReveal>
//                 <div>
//                   <div className="text-4xl font-black mb-2">4+</div>
//                   <p className="text-lg">مشاريع بناء</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">24/7</div>
//                   <p className="text-lg">متابعة ميدانية</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">100%</div>
//                   <p className="text-lg">التسليم في الموعد</p>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black text-gray-900 mb-6">هل ترغب في بناء مسجد؟</h2>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a href="https://wa.me/966920011240">
//                   <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
//                     تواصل عبر واتساب
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


// import { useEffect, useRef, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";

// const STEP_MS = 5000; // مدة عرض كل مرحلة (5 ثواني)

// const STEPS: { title: string; bullets: string[] }[] = [
//   {
//     title: "حصر احتياج المتبرع",
//     bullets: [
//       "جلسة عصف ذهني مع المتبرع لفهم الفكرة والهدف.",
//       "تحديد الرؤية العامة للمشروع.",
//       "تحديد الميزانية المتوقعة.",
//       "مناقشة الخيارات الأنسب لتحقيق أكبر أثر.",
//       "عرض نماذج وتجارب سابقة.",
//       "الهدف: تحويل الفكرة العامة إلى مشروع واضح المعالم وقابل للتنفيذ."
//     ]
//   },
//   {
//     title: "أختيار الأرض",
//     bullets: [
//       "دراسة الكثافة السكانية الحالية والمستقبلية.",
//       "حصر الاحتياج الفعلي",
//       "قياس حجم الأثر المتوقع مقابل مبلغ التبرع.",
//       "اختيار الأرض الأنسب لخدمة أكبر عدد من المصلين.",
//       "اعتماد الأرض رسميًا للمشروع."
//     ]
//   },
//   {
//     title: "الاتفاقية",
//     bullets: [
//       "التزامات الجمعية.",
//       "التزامات المتبرع.",
//       "الجدول الزمني للمشروع.",
//       "آلية التقارير والمتابعة.",
//       "الهدف: ضمان وضوح العلاقة بين الطرفين ومنع أي اختلاف في التوقعات مستقبلًا."
//     ]
//   },
//   {
//     title: "المخططات والتصاميم",
//     bullets: [
//       "المخططات المعمارية.",
//       "المخططات الإنشائية.",
//       "التصميم الداخلي والخارجي.",
//       "حصر الكميات والتكاليف (BOQ).",
//       "بالتعاون مع مكاتب هندسية متخصصة."
//     ]
//   },
//   {
//     title: "اختيار الاستشاري والمقاول",
//     bullets: [
//       "عقد اجتماع تعريفي بالمشروع.",
//       "شرح المشروع كاملًا لضمان المنافسة العادلة.",
//       "استقبال العروض الفنية والمالية.",
//       "تقييم العروض فنيًا وماليًا.",
//       "اختيار الأنسب عبر لجنة ترسية مختصة."
//     ]
//   },
//   {
//     title: "تنفيذ المشروع",
//     bullets: [
//       "بدء التنفيذ تحت إشراف مباشر من الجمعية.",
//       "متابعة تنفيذ الأعمال ميدانيًا.",
//       "متابعة الالتزام بالجداول الزمنية.",
//       "ما يميزنا: متابعة التنفيذ والمتابعة الزمنية المستمرة."
//     ]
//   },
//   {
//     title: "المساهمة في اختيار الإمام والمؤذن",
//     bullets: [
//       "التنسيق مع الجهات المختصة لاختيار الإمام والمؤذن.",
//       "هدفنا أن يكون المسجد مركزًا لحلقات التحفيظ.",
//       "منطلقًا للدروس العلمية.",
//       "ملتقى لأهل الحي.",
//       "حيًا برسالته وليس مجرد مبنى."
//     ]
//   },
//   {
//     title: "استخراج عدادات الماء والكهرباء واعتماد اسم المسجد الرسمي",
//     bullets: [
//       "استخراج التراخيص الحكومية.",
//       "تجهيز عدادات المياه والكهرباء.",
//       "اعتماد اسم المسجد رسميًا.",
//       "تجنب تأخير الافتتاح.",
//       "ضمان جاهزية الخدمات في الوقت المناسب دون خسائر أو تعطيل"
//     ]
//   },
//   {
//     title: "تسليم المشروع لفرع الوزارة",
//     bullets: [
//       "تسليم المسجد وفق أحدث أنظمة وتعليمات الوزارة.",
//       "تحديث المشروع حسب آخر الأكواد والأنظمة.",
//       "تمكين قبول المسجد من أول مرة دون ملاحظات."
//     ]
//   },
//   {
//     title: "تشغيل المسجد وضمان استدامته",
//     bullets: [
//       "النظافة الدائمة.",
//       "الصيانة المستمرة.",
//       "جدولة الصيانات الوقائية.",
//       "الهدف: استمرار المسجد في أداء رسالته بأفضل صورة ولسنوات طويلة."
//     ]
//   }
// ];

// // ===== شكل المسار المتعرّج (مقاسات داخل مربع عرضه 1000) =====
// const W = 1000;
// const H = 1500;
// const ROWS = [110, 480, 850, 1220];
// const COLS = [830, 500, 170];
// const NODES = [
//   ...COLS.map((x) => ({ x, y: ROWS[0] })),
//   ...[...COLS].reverse().map((x) => ({ x, y: ROWS[1] })),
//   ...COLS.map((x) => ({ x, y: ROWS[2] })),
//   { x: 500, y: ROWS[3] }
// ];
// const ROAD = [
//   `M 990 ${ROWS[0]} H 120 Q 50 ${ROWS[0]} 50 ${ROWS[0] + 70} V ${ROWS[1] - 70} Q 50 ${ROWS[1]} 120 ${ROWS[1]}`,
//   `H 880 Q 950 ${ROWS[1]} 950 ${ROWS[1] + 70} V ${ROWS[2] - 70} Q 950 ${ROWS[2]} 880 ${ROWS[2]}`,
//   `H 120 Q 50 ${ROWS[2]} 50 ${ROWS[2] + 70} V ${ROWS[3] - 70} Q 50 ${ROWS[3]} 120 ${ROWS[3]} H 640`
// ].join(" ");
// const RING = 2 * Math.PI * 46;
// const pad = (n: number) => String(n).padStart(2, "0");
// const pct = (v: number, of: number) => `${(v / of) * 100}%`;

// export default function ConstructionPage() {
//   const [current, setCurrent] = useState(0);
//   const [inView, setInView] = useState(false);
//   const [hovering, setHovering] = useState(false);
//   const [roadLen, setRoadLen] = useState(0);
//   const [nodeAt, setNodeAt] = useState<number[]>([]);
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const roadRef = useRef<SVGPathElement | null>(null);
//   const playing = inView && !hovering;

//   // نحسب مكان كل دائرة على الطريق عشان الخط الأخضر يوقف عندها بالضبط
//   useEffect(() => {
//     const road = roadRef.current;
//     if (!road) return;
//     const total = road.getTotalLength();
//     const at = NODES.map((n) => {
//       let best = 0;
//       let bestD = Infinity;
//       for (let l = 0; l <= total; l += 2) {
//         const p = road.getPointAtLength(l);
//         const d = (p.x - n.x) ** 2 + (p.y - n.y) ** 2;
//         if (d < bestD) {
//           bestD = d;
//           best = l;
//         }
//       }
//       return best;
//     });
//     setRoadLen(total);
//     setNodeAt(at);
//   }, []);

//   // يشتغل التنقل التلقائي فقط لما يكون المسار ظاهر في الشاشة
//   useEffect(() => {
//     const el = mapRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   // كل 5 ثواني ينتقل للمرحلة التالية، وبعد الأخيرة يرجع للأولى
//   useEffect(() => {
//     if (!playing) return;
//     const t = setTimeout(() => setCurrent((c) => (c + 1) % STEPS.length), STEP_MS);
//     return () => clearTimeout(t);
//   }, [current, playing]);

//   const fill = nodeAt[current] ?? 0;

//   return (
//     <>
//       <Head>
//         <title>رحلة بناء | يعمر</title>
//         <meta name="description" content="رحلة بناء مسجدك مع يعمر في 10 مراحل واضحة." />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         {/* Hero */}
//         <section className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
//           <div className="container relative z-10 pt-28 pb-24">
//             <ScrollReveal>
//               <div className="flex flex-col items-center justify-center text-center space-y-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed max-w-3xl">
//                   رحلة متكاملة لبناء المسجد، تبدأ من الفكرة وتنتهي بتشغيل مسجد مستدام يخدم الحي لسنوات طويلة، وفق
//                   معايير عالية وخبرة عملية.
//                 </h3>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* رحلة البناء */}
//         <section id="journey" className="py-16 bg-white">
//           <div className="container max-w-6xl">
//             <div className="text-center mb-10">
//               <h2 className="text-4xl font-black text-gray-900 mb-3">رحلة البناء</h2>
//               <p className="text-gray-500">اضغط على أي رقم لعرض تفاصيل المرحلة</p>
//             </div>

//             {/* كمبيوتر وتابلت: المسار المتعرّج */}
//             <div ref={mapRef} className="relative hidden md:block" style={{ aspectRatio: `${W} / ${H}` }}>
//               <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
//                 <defs>
//                   <linearGradient id="roadFill" x1="1" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#7BAE6D" />
//                     <stop offset="100%" stopColor="#08704C" />
//                   </linearGradient>
//                 </defs>
//                 <path ref={roadRef} d={ROAD} fill="none" stroke="#E3EDE7" strokeWidth="24" strokeLinecap="round" />
//                 <path d={ROAD} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 14" />
//                 <polygon points={`640,${ROWS[3] - 26} 640,${ROWS[3] + 26} 684,${ROWS[3]}`} fill="#E3EDE7" />
//                 {roadLen > 0 && (
//                   <path
//                     d={ROAD}
//                     fill="none"
//                     stroke="url(#roadFill)"
//                     strokeWidth="12"
//                     strokeLinecap="round"
//                     strokeDasharray={roadLen}
//                     strokeDashoffset={roadLen - fill}
//                     style={{ transition: "stroke-dashoffset 900ms cubic-bezier(.65,0,.35,1)" }}
//                   />
//                 )}
//               </svg>

//               {NODES.map((n, i) => {
//                 const active = i === current;
//                 const done = i < current;
//                 return (
//                   <div
//                     key={i}
//                     className="absolute -translate-x-1/2 -translate-y-1/2"
//                     style={{ left: pct(n.x, W), top: pct(n.y, H), zIndex: active ? 20 : 10 }}
//                     onMouseEnter={() => active && setHovering(true)}
//                     onMouseLeave={() => setHovering(false)}
//                   >
//                     {/* العنوان فوق الدائرة */}
//                     <p
//                       className={`absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 text-center text-base font-bold leading-snug transition-colors duration-300 ${
//                         active ? "text-[#08704C]" : "text-gray-500"
//                       }`}
//                     >
//                       {STEPS[i].title}
//                     </p>

//                     {/* الدائرة */}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setCurrent(i);
//                         setHovering(true);
//                       }}
//                       aria-label={`المرحلة ${i + 1}: ${STEPS[i].title}`}
//                       aria-expanded={active}
//                       className={`step-node relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 text-2xl font-black transition-all duration-500 ${
//                         active
//                           ? "scale-110 border-[#08704C] bg-[#08704C] text-white shadow-[0_0_0_10px_rgba(8,112,76,0.12)]"
//                           : done
//                             ? "border-[#08704C] bg-[#08704C] text-white"
//                             : "border-[#C9DDD1] bg-white text-[#08704C]"
//                       }`}
//                     >
//                       {pad(i + 1)}
//                       {active && (
//                         <svg className="pointer-events-none absolute -inset-[10px]" viewBox="0 0 100 100">
//                           <circle
//                             key={`ring-${current}`}
//                             cx="50"
//                             cy="50"
//                             r="46"
//                             fill="none"
//                             stroke="#7BAE6D"
//                             strokeWidth="4"
//                             strokeLinecap="round"
//                             strokeDasharray={RING}
//                             transform="rotate(-90 50 50)"
//                             className="step-timer"
//                             style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
//                           />
//                         </svg>
//                       )}
//                     </button>

//                     {/* الخطوات تنزل تحت الدائرة */}
//                     <div
//                       className={`absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 transition-all duration-500 ease-out ${
//                         active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0 pointer-events-none"
//                       }`}
//                     >
//                       <ul className="space-y-2 rounded-2xl border border-[#08704C]/15 bg-white/95 p-4 text-right shadow-lg backdrop-blur">
//                         {STEPS[i].bullets.map((b, j) => (
//                           <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
//                             <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
//                             <span>{b}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* الجوال: قائمة المراحل، والمفتوحة تنزل خطواتها تحتها */}
//             <ol className="relative space-y-4 md:hidden">
//               {STEPS.map((s, i) => {
//                 const active = i === current;
//                 return (
//                   <li key={i} className="flex gap-4">
//                     <button
//                       type="button"
//                       onClick={() => setCurrent(i)}
//                       aria-expanded={active}
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-black transition-all duration-500 ${
//                         i <= current ? "border-[#08704C] bg-[#08704C] text-white" : "border-[#C9DDD1] bg-white text-[#08704C]"
//                       }`}
//                     >
//                       {pad(i + 1)}
//                     </button>
//                     <div className="flex-1 pt-3">
//                       <button
//                         type="button"
//                         onClick={() => setCurrent(i)}
//                         className={`text-right font-bold ${active ? "text-[#08704C]" : "text-gray-600"}`}
//                       >
//                         {s.title}
//                       </button>
//                       <div className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
//                         <ul className="space-y-2 overflow-hidden pt-2">
//                           {s.bullets.map((b, j) => (
//                             <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
//                               <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
//                               <span>{b}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ol>
//           </div>
//         </section>

//         <style jsx global>{`
//           .step-timer {
//             animation-name: stepTimer;
//             animation-timing-function: linear;
//             animation-fill-mode: forwards;
//           }
//           @keyframes stepTimer {
//             from {
//               stroke-dashoffset: ${RING};
//             }
//             to {
//               stroke-dashoffset: 0;
//             }
//           }
//         `}</style>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <ScrollReveal>
//                 <div>
//                   <div className="text-4xl font-black mb-2">4+</div>
//                   <p className="text-lg">مشاريع بناء</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">24/7</div>
//                   <p className="text-lg">متابعة ميدانية</p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <div>
//                   <div className="text-4xl font-black mb-2">100%</div>
//                   <p className="text-lg">التسليم في الموعد</p>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black text-gray-900 mb-6">هل ترغب في بناء مسجد؟</h2>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a href="https://wa.me/966920011240">
//                   <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
//                     تواصل عبر واتساب
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
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

const STEP_MS = 5000; // مدة عرض كل مرحلة (5 ثواني)

const STEPS: { title: string; bullets: string[] }[] = [
  {
    title: "حصر احتياج المتبرع",
    bullets: [
      "جلسة عصف ذهني مع المتبرع لفهم الفكرة والهدف.",
      "تحديد الرؤية العامة للمشروع.",
      "تحديد الميزانية المتوقعة.",
      "مناقشة الخيارات الأنسب لتحقيق أكبر أثر.",
      "عرض نماذج وتجارب سابقة.",
      "الهدف: تحويل الفكرة العامة إلى مشروع واضح المعالم وقابل للتنفيذ."
    ]
  },
  {
    title: "أختيار الأرض",
    bullets: [
      "دراسة الكثافة السكانية الحالية والمستقبلية.",
      "حصر الاحتياج الفعلي",
      "قياس حجم الأثر المتوقع مقابل مبلغ التبرع.",
      "اختيار الأرض الأنسب لخدمة أكبر عدد من المصلين.",
      "اعتماد الأرض رسميًا للمشروع."
    ]
  },
  {
    title: "الاتفاقية",
    bullets: [
      "التزامات الجمعية.",
      "التزامات المتبرع.",
      "الجدول الزمني للمشروع.",
      "آلية التقارير والمتابعة.",
      "الهدف: ضمان وضوح العلاقة بين الطرفين ومنع أي اختلاف في التوقعات مستقبلًا."
    ]
  },
  {
    title: "المخططات والتصاميم",
    bullets: [
      "المخططات المعمارية.",
      "المخططات الإنشائية.",
      "التصميم الداخلي والخارجي.",
      "حصر الكميات والتكاليف (BOQ).",
      "بالتعاون مع مكاتب هندسية متخصصة."
    ]
  },
  {
    title: "اختيار الاستشاري والمقاول",
    bullets: [
      "عقد اجتماع تعريفي بالمشروع.",
      "شرح المشروع كاملًا لضمان المنافسة العادلة.",
      "استقبال العروض الفنية والمالية.",
      "تقييم العروض فنيًا وماليًا.",
      "اختيار الأنسب عبر لجنة ترسية مختصة."
    ]
  },
  {
    title: "تنفيذ المشروع",
    bullets: [
      "بدء التنفيذ تحت إشراف مباشر من الجمعية.",
      "متابعة تنفيذ الأعمال ميدانيًا.",
      "متابعة الالتزام بالجداول الزمنية.",
      "ما يميزنا: متابعة التنفيذ والمتابعة الزمنية المستمرة."
    ]
  },
  {
    title: "المساهمة في اختيار الإمام والمؤذن",
    bullets: [
      "التنسيق مع الجهات المختصة لاختيار الإمام والمؤذن.",
      "هدفنا أن يكون المسجد مركزًا لحلقات التحفيظ.",
      "منطلقًا للدروس العلمية.",
      "ملتقى لأهل الحي.",
      "حيًا برسالته وليس مجرد مبنى."
    ]
  },
  {
    title: "استخراج عدادات الماء والكهرباء واعتماد اسم المسجد الرسمي",
    bullets: [
      "استخراج التراخيص الحكومية.",
      "تجهيز عدادات المياه والكهرباء.",
      "اعتماد اسم المسجد رسميًا.",
      "تجنب تأخير الافتتاح.",
      "ضمان جاهزية الخدمات في الوقت المناسب دون خسائر أو تعطيل"
    ]
  },
  {
    title: "تسليم المشروع لفرع الوزارة",
    bullets: [
      "تسليم المسجد وفق أحدث أنظمة وتعليمات الوزارة.",
      "تحديث المشروع حسب آخر الأكواد والأنظمة.",
      "تمكين قبول المسجد من أول مرة دون ملاحظات."
    ]
  },
  {
    title: "تشغيل المسجد وضمان استدامته",
    bullets: [
      "النظافة الدائمة.",
      "الصيانة المستمرة.",
      "جدولة الصيانات الوقائية.",
      "الهدف: استمرار المسجد في أداء رسالته بأفضل صورة ولسنوات طويلة."
    ]
  }
];

// ===== شكل المسار المتعرّج (مقاسات داخل مربع عرضه 1000) =====
const W = 1000;
const H = 1500;
const ROWS = [110, 480, 850, 1220];
const COLS = [830, 500, 170];
const NODES = [
  ...COLS.map((x) => ({ x, y: ROWS[0] })),
  ...[...COLS].reverse().map((x) => ({ x, y: ROWS[1] })),
  ...COLS.map((x) => ({ x, y: ROWS[2] })),
  { x: 500, y: ROWS[3] }
];
const ROAD = [
  `M 990 ${ROWS[0]} H 120 Q 50 ${ROWS[0]} 50 ${ROWS[0] + 70} V ${ROWS[1] - 70} Q 50 ${ROWS[1]} 120 ${ROWS[1]}`,
  `H 880 Q 950 ${ROWS[1]} 950 ${ROWS[1] + 70} V ${ROWS[2] - 70} Q 950 ${ROWS[2]} 880 ${ROWS[2]}`,
  `H 120 Q 50 ${ROWS[2]} 50 ${ROWS[2] + 70} V ${ROWS[3] - 70} Q 50 ${ROWS[3]} 120 ${ROWS[3]} H 640`
].join(" ");
const RING = 2 * Math.PI * 46;
const pad = (n: number) => String(n).padStart(2, "0");
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export default function ConstructionPage() {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [roadLen, setRoadLen] = useState(0);
  const [nodeAt, setNodeAt] = useState<number[]>([]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const roadRef = useRef<SVGPathElement | null>(null);
  const playing = inView && !hovering;

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
        <title>رحلة بناء | يعمر</title>
        <meta name="description" content="رحلة بناء مسجدك مع يعمر في 10 مراحل واضحة." />
      </Head>

      <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
          <div className="container relative z-10 pt-28 pb-24">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed max-w-3xl">
                  رحلة متكاملة لبناء المسجد، تبدأ من الفكرة وتنتهي بتشغيل مسجد مستدام يخدم الحي لسنوات طويلة، وفق
                  معايير عالية وخبرة عملية.
                </h3>
                <a href="#construction-request" className="inline-flex items-center justify-center rounded-xl bg-[#08704C] px-8 py-3.5 font-bold text-white shadow-lg hover:bg-[#06583C] transition-colors">طلب بناء مسجد ↓</a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* رحلة البناء */}
        <section id="journey" className="py-16 bg-white">
          <div className="container max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-gray-900 mb-3">رحلة البناء</h2>
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
                <polygon points={`640,${ROWS[3] - 26} 640,${ROWS[3] + 26} 684,${ROWS[3]}`} fill="#E3EDE7" />
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
                    onMouseEnter={() => active && setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
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
                      onClick={() => {
                        setCurrent(i);
                        setHovering(true);
                      }}
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

        {/* إحصائيات البناء - الرقم المعتمد */}
        <section className="relative bg-[#08704C] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="text-4xl font-black mb-2">9+</div>
                  <p className="text-lg">مشاريع بناء</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div>
                  <div className="text-4xl font-black mb-2">100%</div>
                  <p className="text-lg">التسليم في الموعد</p>
                </div>
              </ScrollReveal>
            </div>
        </section>

        {/* أزرار طلب البناء والتواصل */}
        <section id="construction-request" className="scroll-mt-24 bg-white/85 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-black text-[#08704C] sm:text-4xl">هل ترغب في بناء مسجد؟</h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-600">قدّم طلبك عبر النموذج الإلكتروني، وسيتولى فريق الجمعية مراجعة المعلومات والتواصل معك.</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/services/construction/request" className="inline-flex min-w-48 items-center justify-center rounded-xl bg-[#08704C] px-8 py-4 font-bold text-white hover:bg-[#06583C]">تقديم طلب بناء</Link>
                <Link href="/contact" className="inline-flex min-w-48 items-center justify-center rounded-xl border-2 border-[#08704C] px-8 py-4 font-bold text-[#08704C] hover:bg-[#08704C] hover:text-white">تواصل معنا</Link>
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