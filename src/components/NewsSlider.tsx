// import { useState, useEffect, useRef, TouchEvent } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ChevronRight, ChevronLeft, Calendar, ArrowLeft } from "lucide-react";
// import { ClientOnly } from "@/components/ClientOnly";
// import Image from "next/image";

// export const sliderNewsItems = [
//   {
//     id: 1,
//     title: "تجربة نوعية",
//     description:
//       "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
//     date: "2025-11-05",
//     image: "/hart.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1986043268635750642"
//   },
//   {
//     id: 2,
//     title: "يعمر والتميمي للطاقة.",
//     description:
//       "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
//     date: "2025-10-28",
//     image: "/tammamy.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1980949618113343675"
//   },
//   {
//     id: 3,
//     title: "بروحٍ واحدة وولاءٍ متجدد ",
//     description:
//       "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
//     date: "2025-10-25",
//     image: "/dayksa.jpg",
//     // ضع هنا رابط التغريدة أو موضوع تويتر تريد فتحه عند الضغط "اقرأ المزيد"
//     moreUrl: "https://x.com/Yaamurorg/status/1970805024243474541"
//   },
//   {
//     id: 4,
//     title: "إفتتاح المقر الجديد",
//     description:
//       "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
//     date: "2025-10-20",
//     image: "/yaamur_go.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643"
//   }
// ];

// // Reuse the same data in this component
// const newsItems = sliderNewsItems;

// // Format date as DD/MM/YYYY using Gregorian calendar and Latin numerals
// function formatDMY(isoDate: string) {
//   const d = new Date(isoDate);
//   const day = String(d.getDate()).padStart(2, "0");
//   const month = String(d.getMonth() + 1).padStart(2, "0");
//   const year = d.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// export function NewsSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const itemsPerSlide = 1; // always show one full-width card
//   const [isPaused, setIsPaused] = useState(false);

//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   // itemsPerSlide is fixed to 1 to show a single full-width card per slide

//   const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

//   useEffect(() => {
//     setCurrentSlide((prev) => {
//       const maxIndex = totalSlides - 1;
//       return prev > maxIndex ? maxIndex : prev;
//     });
//   }, [itemsPerSlide, totalSlides]);

//   useEffect(() => {
//     if (isPaused || totalSlides <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 1900);

//     return () => clearInterval(interval);
//   }, [isPaused, totalSlides]);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const handlePrevious = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const handleTouchStart = (e: TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchEndX.current = null;
//   };

//   const handleTouchMove = (e: TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;

//     if (diff > 60) handleNext();
//     if (diff < -60) handlePrevious();
//   };

//   const startIndex = currentSlide * itemsPerSlide;
//   const visibleItems = newsItems.slice(startIndex, startIndex + itemsPerSlide);

//   return (
//     <div
//       className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
//         {currentSlide + 1}/{totalSlides}
//       </div>

//       <div
//         className="overflow-hidden rounded-3xl"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="grid gap-6 grid-cols-1">
//           {visibleItems.map((news, index) => (
//             <Card
//               key={news.id}
//               className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-3xl min-h-[320px] md:min-h-[360px]"
//             >
//               <CardContent className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   <div className="md:w-6/12 relative min-h-[220px] md:min-h-[360px] overflow-hidden">
//                     <Image
//                       src={news.image}
//                       alt={news.title}
//                       fill
//                       className="object-cover"
//                       sizes="(min-width: 1024px) 45vw, 90vw"
//                       priority={index === 0}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/10"></div>
//                     <div className="absolute inset-0 flex items-center justify-center">
                      
//                     </div>
//                   </div>

//                   <div className="md:w-6/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
//                     <div className="flex items-center gap-2 text-[#08704C]">
//                       <Calendar className="w-4 h-4" />
//                       <ClientOnly>
//                         <span className="text-base md:text-lg font-semibold" dir="ltr">
//                           {formatDMY(news.date)}
//                         </span>
//                       </ClientOnly>
//                     </div>

//                     <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
//                       {news.title}
//                     </h3>

//                     <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//                       {news.description}
//                     </p>

//                     {news.moreUrl ? (
//                       /^https?:\/\//i.test(news.moreUrl) ? (
//                         <a
//                           href={news.moreUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-block mt-6"
//                         >
//                           <Button
//                             variant="ghost"
//                             className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                           >
//                             <span className="group-hover/btn:mr-2 transition-all duration-300">
//                               اقرأ المزيد
//                             </span>
//                             <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                           </Button>
//                         </a>
//                       ) : (
//                         <Link href={news.moreUrl} className="inline-block mt-6">
//                           <Button
//                             variant="ghost"
//                             className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                           >
//                             <span className="group-hover/btn:mr-2 transition-all duration-300">
//                               اقرأ المزيد
//                             </span>
//                             <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                           </Button>
//                         </Link>
//                       )
//                     ) : (
//                       <Link href={`/news/${news.id}`} className="inline-block mt-6">
//                         <Button
//                           variant="ghost"
//                           className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                         >
//                           <span className="group-hover/btn:mr-2 transition-all duration-300">
//                             اقرأ المزيد
//                           </span>
//                           <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                         </Button>
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-4 mt-6">
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handlePrevious}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="السابق"
//         >
//           <ChevronRight className="w-5 h-5 text-[#08704C]" />
//         </Button>

//         <div className="flex justify-center gap-3">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2.5 rounded-full transition-all duration-500 ${
//                 index === currentSlide
//                   ? "w-10 bg-gradient-to-r from-[#08704C] to-[#4D7A61] shadow-md"
//                   : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
//               }`}
//               aria-label={`الشريحة ${index + 1}`}
//             />
//           ))}
//         </div>

//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handleNext}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="التالي"
//         >
//           <ChevronLeft className="w-5 h-5 text-[#08704C]" />
//         </Button>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect, useRef } from "react";
// import type { TouchEvent } from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Calendar,
//   ArrowLeft,
// } from "lucide-react";
// import { ClientOnly } from "@/components/ClientOnly";
// import Image from "next/image";

// // ======================================
// // بيانات الأخبار
// // ======================================

// export const sliderNewsItems = [
//   {
//     id: 1,
//     title: "تجربة نوعية",
//     description:
//       "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
//     date: "2025-11-05",
//     image: "/hart.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1986043268635750642",
//   },
//   {
//     id: 2,
//     title: "يعمر والتميمي للطاقة.",
//     description:
//       "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
//     date: "2025-10-28",
//     image: "/tammamy.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1980949618113343675",
//   },
//   {
//     id: 3,
//     title: "بروحٍ واحدة وولاءٍ متجدد",
//     description:
//       "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
//     date: "2025-10-25",
//     image: "/dayksa.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1970805024243474541",
//   },
//   {
//     id: 4,
//     title: "إفتتاح المقر الجديد",
//     description:
//       "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
//     date: "2025-10-20",
//     image: "/yaamur_go.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 5,
//     title: "شراكة يعمر وجامعة الامام",
//     description:
//       "أبرمت #جامعة_الإمام_عبدالرحمن_بن_فيصل، ممثلةً في وحدة العناية بالمساجد والمصليات الجامعية، مذكرة تفاهم مع جمعية يعمر للعناية بالمساجد؛ بهدف تعزيز  التعاون في المبادرات والبرامج ذات الاهتمام المشترك، بما يسهم في الارتقاء بالعناية بالمساجد والمصليات.",
//     date: "2026-08-05",
//    image: "/iamge/uni.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 6,
//     title: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
//     description:
//       "نحو مساجد خضراء ومستدامة 🌱🕌 سعدت #جمعية_يعمر باستقبال وفد من المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر @ncvcksa نُوقشت خلال الزيارة خطط تشجير الجوامع والمساجد بالمنطقة الشرقية، وقد بحث الطرفين إطلاق مشروع تجريبي نموذجي.",
//     date: "2026-07-16",
//    image: "/iamge/center.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 7,
//     title: "زيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية",
//     description:
//       "تشرفت جمعية #يعمر للعناية بالمساجد بزيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية.  وقدّم مجلس إدارة الجمعية لسموه نبذةً عن جهود «يعمر» ومبادراتها في العناية ببيوت الله، وما تسعى إليه من تعزيز استدامة خدماتها وأثرها.",
//     date: "2026-08-24",
//    image: "/iamge/king.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 8,
//     title: "رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية",
//     description:
//       "سعدنا بلقاء رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية، والتعريف بجهود «يعمر» في العناية ببيوت الله، واستعراض مبادراتها وأثرها في خدمة المصلين والمجتمع..",
//     date: "2026-09-20",
//    image: "/iamge/shabab.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 9,
//     title: "ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن",
//     description:
//       "ضمن مشاركتنا في ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن نواصل بناء الشراكات التي تصنع أثرًا مستدامًا سعدنا في جمعية يعمر للعناية بالمساجد بتوقيع اتفاقية شراكة وتعاون مع جمعية أصالة لتعزيز القيم نحو تكامل الجهود وتبادل الخبرات وتوسيع مجالات التعاون بما يخدم المجتمع ويعظّم الأثر",
//     date: "2026-09-21",
//    image: "/iamge/fahad.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 10,
//     title: "زيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية",
//     description:
//       "تشرّفت جمعية #يعمر للعناية بالمساجد ممثّلةً برئيس مجلس إدارتها وأعضاء المجلس والرئيس التنفيذي  بزيارة صاحب السمو الملكي الأمير سعود  بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية وقدّم رئيس مجلس إدارة الجمعية، الدكتور صالح بن سليمان الرشيد  لسموه نبذةً عن جهود الجمعية ومبادراتها في العناية ببيوت الله  ",
//     date: "2026-10-13",
//    image: "/iamge/ameer.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 11,
//     title: " إستقبال إدارة الجمعيات والمؤسسات الأهلية",
//     description:
//       "استقبلت جمعية يعمر للعناية بالمساجد ممثلَي أمانة المنطقة الشرقية الأستاذ محمد التمار مدير إدارة الجمعيات والمؤسسات الأهلية، والأستاذة نوف نقي مديرة الإشراف والتمكين للجمعيات الخيرية.  ",
//     date: "2026-10-14",
//    image: "/iamge/jam3iat.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 12,
//     title: " «جيلٌ يغرس لوطنٍ يزدهر»",
//     description:
//       "برعاية كريمة من صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز آل سعود  أمير المنطقة الشرقية وتزامنًا مع تدشين موسم التشجير الوطني 2026م.  ",
//     date: "2026-10-14",
//    image: "/iamge/saud.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },

// ];

// // استخدام البيانات نفسها في السلايدر
// const newsItems = sliderNewsItems;

// // ======================================
// // تنسيق التاريخ
// // ======================================

// function formatDMY(isoDate: string) {
//   const date = new Date(isoDate);

//   const day = String(date.getUTCDate()).padStart(2, "0");
//   const month = String(date.getUTCMonth() + 1).padStart(2, "0");
//   const year = date.getUTCFullYear();

//   return `${day}/${month}/${year}`;
// }

// // ======================================
// // مكون السلايدر
// // ======================================

// export function NewsSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const itemsPerSlide = 1;

//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   const totalSlides = Math.ceil(
//     newsItems.length / itemsPerSlide
//   );

//   // التأكد من أن رقم الشريحة صحيح
//   useEffect(() => {
//     setCurrentSlide((prev) => {
//       const maxIndex = Math.max(0, totalSlides - 1);
//       return prev > maxIndex ? maxIndex : prev;
//     });
//   }, [totalSlides]);

//   // التشغيل التلقائي
//   useEffect(() => {
//     if (isPaused || totalSlides <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 1900);

//     return () => clearInterval(interval);
//   }, [isPaused, totalSlides]);

//   // الانتقال إلى الشريحة التالية
//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   // الرجوع إلى الشريحة السابقة
//   const handlePrevious = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + totalSlides) % totalSlides
//     );
//   };

//   // الانتقال إلى شريحة محددة
//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   // التحكم باللمس على الجوال
//   const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchEndX.current = null;
//   };

//   const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (
//       touchStartX.current === null ||
//       touchEndX.current === null
//     ) {
//       return;
//     }

//     const diff = touchStartX.current - touchEndX.current;

//     if (diff > 60) {
//       handleNext();
//     }

//     if (diff < -60) {
//       handlePrevious();
//     }

//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   const startIndex = currentSlide * itemsPerSlide;

//   const visibleItems = newsItems.slice(
//     startIndex,
//     startIndex + itemsPerSlide
//   );

//   // ======================================
//   // واجهة السلايدر
//   // ======================================

//   return (
//     <div
//       className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* رقم الشريحة */}
//       <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
//         {currentSlide + 1}/{totalSlides}
//       </div>

//       {/* محتوى السلايدر */}
//       <div
//         className="overflow-hidden rounded-3xl"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="grid gap-6 grid-cols-1">
//           {visibleItems.map((news, index) => (
//             <Card
//               key={news.id}
//               className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-3xl min-h-[320px] md:min-h-[360px]"
//             >
//               <CardContent className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   {/* صورة الخبر */}
//                   <div className="md:w-6/12 relative min-h-[220px] md:min-h-[360px] overflow-hidden">
//                     <Image
//                       src={news.image}
//                       alt={news.title}
//                       fill
//                       className="object-cover"
//                       sizes="(min-width: 1024px) 45vw, 90vw"
//                       priority={index === 0}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/10" />
//                   </div>

//                   {/* تفاصيل الخبر */}
//                   <div className="md:w-6/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
//                     {/* التاريخ */}
//                     <div className="flex items-center gap-2 text-[#08704C]">
//                       <Calendar className="w-4 h-4" />

//                       <ClientOnly>
//                         <span
//                           className="text-base md:text-lg font-semibold"
//                           dir="ltr"
//                         >
//                           {formatDMY(news.date)}
//                         </span>
//                       </ClientOnly>
//                     </div>

//                     {/* العنوان */}
//                     <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
//                       {news.title}
//                     </h3>

//                     {/* الوصف */}
//                     <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//                       {news.description}
//                     </p>

//                     {/* رابط اقرأ المزيد */}
//                     {news.moreUrl ? (
//                       news.moreUrl.startsWith("http") ? (
//                         <a
//                           href={news.moreUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-block mt-6"
//                         >
//                           <Button
//                             variant="ghost"
//                             className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                           >
//                             <span className="group-hover/btn:mr-2 transition-all duration-300">
//                               اقرأ المزيد
//                             </span>

//                             <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                           </Button>
//                         </a>
//                       ) : (
//                         <Link
//                           href={news.moreUrl}
//                           className="inline-block mt-6"
//                         >
//                           <Button
//                             variant="ghost"
//                             className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                           >
//                             <span className="group-hover/btn:mr-2 transition-all duration-300">
//                               اقرأ المزيد
//                             </span>

//                             <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                           </Button>
//                         </Link>
//                       )
//                     ) : (
//                       <Link
//                         href={`/news/${news.id}`}
//                         className="inline-block mt-6"
//                       >
//                         <Button
//                           variant="ghost"
//                           className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                         >
//                           <span className="group-hover/btn:mr-2 transition-all duration-300">
//                             اقرأ المزيد
//                           </span>

//                           <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                         </Button>
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* أزرار التنقل ومؤشرات الشرائح */}
//       <div className="flex items-center justify-center gap-4 mt-6">
//         {/* السابق */}
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handlePrevious}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="السابق"
//         >
//           <ChevronRight className="w-5 h-5 text-[#08704C]" />
//         </Button>

//         {/* مؤشرات الشرائح */}
//         <div className="flex justify-center gap-3">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2.5 rounded-full transition-all duration-500 ${
//                 index === currentSlide
//                   ? "w-10 bg-gradient-to-r from-[#08704C] to-[#4D7A61] shadow-md"
//                   : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
//               }`}
//               aria-label={`الشريحة ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* التالي */}
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handleNext}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="التالي"
//         >
//           <ChevronLeft className="w-5 h-5 text-[#08704C]" />
//         </Button>
//       </div>
//     </div>
//   );
// }


// import Head from "next/head";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { ClientOnly } from "@/components/ClientOnly";
// import SiteFooter from "@/components/SiteFooter";

// import {
//   Calendar,
//   ArrowLeft,
//   Newspaper,
//   TrendingUp,
//   Sparkles,
//   Handshake,
//   MapPin,
//   Clock,
// } from "lucide-react";

// // ==============================================
// // أنواع الأخبار
// // ==============================================

// type NewsType = "partnership" | "visit" | "general";

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   moreUrl: string;
//   type: NewsType;
// }

// // ==============================================
// // جميع أخبار الجمعية
// // ==============================================

// const newsItems: NewsItem[] = [
//   {
//     id: 1,
//     title: "تجربة نوعية",
//     description:
//       "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
//     date: "2025-11-05",
//     image: "/hart.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1986043268635750642",
//     type: "general",
//   },
//   {
//     id: 2,
//     title: "يعمر والتميمي للطاقة.",
//     description:
//       "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
//     date: "2025-10-28",
//     image: "/tammamy.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1980949618113343675",
//     type: "partnership",
//   },
//   {
//     id: 3,
//     title: "بروحٍ واحدة وولاءٍ متجدد",
//     description:
//       "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
//     date: "2025-10-25",
//     image: "/dayksa.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1970805024243474541",
//     type: "general",
//   },
//   {
//     id: 4,
//     title: "إفتتاح المقر الجديد",
//     description:
//       "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
//     date: "2025-10-20",
//     image: "/yaamur_go.jpg",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "general",
//   },
//   {
//     id: 5,
//     title: "شراكة يعمر وجامعة الامام",
//     description:
//       "أبرمت #جامعة_الإمام_عبدالرحمن_بن_فيصل، ممثلةً في وحدة العناية بالمساجد والمصليات الجامعية، مذكرة تفاهم مع جمعية يعمر للعناية بالمساجد؛ بهدف تعزيز التعاون في المبادرات والبرامج ذات الاهتمام المشترك، بما يسهم في الارتقاء بالعناية بالمساجد والمصليات.",
//     date: "2026-08-05",
//     image: "/iamge/uni.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "partnership",
//   },
//   {
//     id: 6,
//     title: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
//     description:
//       "نحو مساجد خضراء ومستدامة 🌱🕌 سعدت #جمعية_يعمر باستقبال وفد من المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر @ncvcksa نُوقشت خلال الزيارة خطط تشجير الجوامع والمساجد بالمنطقة الشرقية، وقد بحث الطرفين إطلاق مشروع تجريبي نموذجي.",
//     date: "2026-07-16",
//     image: "/iamge/center.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "visit",
//   },
//   {
//     id: 7,
//     title:
//       "زيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية",
//     description:
//       "تشرفت جمعية #يعمر للعناية بالمساجد بزيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية. وقدّم مجلس إدارة الجمعية لسموه نبذةً عن جهود «يعمر» ومبادراتها في العناية ببيوت الله، وما تسعى إليه من تعزيز استدامة خدماتها وأثرها.",
//     date: "2026-08-24",
//     image: "/iamge/king.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "visit",
//   },
//   {
//     id: 8,
//     title: "رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية",
//     description:
//       "سعدنا بلقاء رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية، والتعريف بجهود «يعمر» في العناية ببيوت الله، واستعراض مبادراتها وأثرها في خدمة المصلين والمجتمع..",
//     date: "2026-09-20",
//     image: "/iamge/shabab.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "visit",
//   },
//   {
//     id: 9,
//     title: "ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن",
//     description:
//       "ضمن مشاركتنا في ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن نواصل بناء الشراكات التي تصنع أثرًا مستدامًا سعدنا في جمعية يعمر للعناية بالمساجد بتوقيع اتفاقية شراكة وتعاون مع جمعية أصالة لتعزيز القيم نحو تكامل الجهود وتبادل الخبرات وتوسيع مجالات التعاون بما يخدم المجتمع ويعظّم الأثر",
//     date: "2026-09-21",
//     image: "/iamge/fahad.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "partnership",
//   },
//   {
//     id: 10,
//     title:
//       "زيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية",
//     description:
//       "تشرّفت جمعية #يعمر للعناية بالمساجد ممثّلةً برئيس مجلس إدارتها وأعضاء المجلس والرئيس التنفيذي بزيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية وقدّم رئيس مجلس إدارة الجمعية، الدكتور صالح بن سليمان الرشيد لسموه نبذةً عن جهود الجمعية ومبادراتها في العناية ببيوت الله",
//     date: "2026-10-13",
//     image: "/iamge/ameer.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "visit",
//   },
//   {
//     id: 11,
//     title: "إستقبال إدارة الجمعيات والمؤسسات الأهلية",
//     description:
//       "استقبلت جمعية يعمر للعناية بالمساجد ممثلَي أمانة المنطقة الشرقية الأستاذ محمد التمار مدير إدارة الجمعيات والمؤسسات الأهلية، والأستاذة نوف نقي مديرة الإشراف والتمكين للجمعيات الخيرية.",
//     date: "2026-10-14",
//     image: "/iamge/jam3iat.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "visit",
//   },
//   {
//     id: 12,
//     title: "«جيلٌ يغرس لوطنٍ يزدهر»",
//     description:
//       "برعاية كريمة من صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز آل سعود أمير المنطقة الشرقية وتزامنًا مع تدشين موسم التشجير الوطني 2026م.",
//     date: "2026-10-14",
//     image: "/iamge/saud.png",
//     moreUrl: "https://x.com/Yaamurorg/status/1965356817011122643",
//     type: "general",
//   },
// ];

// // ==============================================
// // تنسيق التاريخ
// // ==============================================

// const dateFormatter = new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   calendar: "gregory",
//   timeZone: "UTC",
// });

// function formatDate(date: string) {
//   return dateFormatter.format(new Date(date));
// }

// // ==============================================
// // بطاقة الخبر
// // ==============================================

// function NewsCard({
//   news,
//   index,
// }: {
//   news: NewsItem;
//   index: number;
// }) {
//   return (
//     <ScrollReveal delay={(index % 3) * 100}>
//       <article className="group h-full bg-white rounded-[1.8rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
//         <a
//           href={news.moreUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block"
//         >
//           <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
//             <Image
//               src={news.image}
//               alt={news.title}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-110"
//               sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />

//             <div className="absolute top-4 right-4">
//               <span className="bg-white/95 text-[#08704C] px-3 py-1.5 rounded-full text-xs font-bold shadow">
//                 أخبار يعمر
//               </span>
//             </div>
//           </div>

//           <div className="p-6 flex flex-col">
//             <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
//               <Calendar className="w-4 h-4 text-[#08704C]" />
//               <ClientOnly>
//                 <span dir="ltr">{formatDate(news.date)}</span>
//               </ClientOnly>
//             </div>

//             <h3 className="text-xl font-black text-gray-900 leading-snug mb-3 group-hover:text-[#08704C] transition-colors">
//               {news.title}
//             </h3>

//             <p className="text-gray-600 leading-relaxed text-sm line-clamp-4 mb-6">
//               {news.description}
//             </p>

//             <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
//               <span className="text-xs text-gray-400">
//                 جمعية يعمر
//               </span>

//               <span className="flex items-center gap-2 text-[#08704C] font-bold text-sm">
//                 اقرأ الخبر
//                 <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
//               </span>
//             </div>
//           </div>
//         </a>
//       </article>
//     </ScrollReveal>
//   );
// }

// // ==============================================
// // عنوان القسم
// // ==============================================

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   icon,
//   count,
// }: {
//   eyebrow: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   count: number;
// }) {
//   return (
//     <ScrollReveal>
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
//         <div className="flex items-start gap-4">
//           <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#08704C]/10 text-[#08704C] flex items-center justify-center">
//             {icon}
//           </div>

//           <div>
//             <p className="text-[#08704C] text-sm font-bold mb-2">
//               {eyebrow}
//             </p>

//             <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
//               {title}
//             </h2>

//             <p className="text-gray-500 mt-2 leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>

//         <span className="text-sm font-bold text-gray-500 bg-white border border-gray-100 rounded-full px-4 py-2 w-fit">
//           {count} {count === 1 ? "خبر" : "أخبار"}
//         </span>
//       </div>
//     </ScrollReveal>
//   );
// }

// // ==============================================
// // صفحة الأخبار
// // ==============================================

// export default function NewsPage() {
//   // القسم الأول: جميع الأخبار
//   const featuredNews = newsItems;

//   // القسم الثاني: الشراكات فقط
//   const partnershipNews = newsItems.filter(
//     (news) => news.type === "partnership"
//   );

//   // القسم الثالث: الزيارات فقط
//   const visitNews = newsItems.filter(
//     (news) => news.type === "visit"
//   );

//   return (
//     <>
//       <Head>
//         <title>
//           أخبار الجمعية | جمعية يعمر للعناية بالمساجد
//         </title>

//         <meta
//           name="description"
//           content="تابع أبرز أخبار جمعية يعمر وشراكاتها وزياراتها ومبادراتها في خدمة بيوت الله بالمنطقة الشرقية."
//         />

//         <meta
//           property="og:title"
//           content="أخبار جمعية يعمر للعناية بالمساجد"
//         />

//         <meta
//           property="og:description"
//           content="أبرز أخبار جمعية يعمر وشراكاتها وزياراتها."
//         />
//       </Head>

//       <div
//         className="min-h-screen bg-[#F0F3E7] overflow-hidden"
//         dir="rtl"
//       >
//         {/* الخلفية */}

//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#08704C]/5 rounded-full blur-3xl" />

//           <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* عنوان الصفحة */}

//         <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto">
//                 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#08704C]/10 shadow-sm text-[#08704C] rounded-full text-sm font-bold mb-5">
//                   <Sparkles className="w-4 h-4" />
//                   <span>آخر مستجدات يعمر</span>
//                 </div>

//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
//                   أخبار{" "}
//                   <span className="text-[#08704C]">
//                     يعمر
//                   </span>
//                 </h1>

//                 <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//                   تابع أبرز أخبار جمعية يعمر وشراكاتها
//                   وزياراتها ومبادراتها في خدمة بيوت الله
//                   بالمنطقة الشرقية.
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* ======================================
//             القسم الأول: أبرز أخبار يعمر
//         ====================================== */}

//         <section className="px-4 sm:px-6 lg:px-8 pb-20 relative">
//           <div className="container mx-auto relative z-10">
//             <SectionHeading
//               eyebrow="تابع آخر مستجداتنا"
//               title="أبرز أخبار يعمر"
//               description="جميع أخبار ومستجدات الجمعية في مكان واحد."
//               icon={<Newspaper className="w-6 h-6" />}
//               count={featuredNews.length}
//             />

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {featuredNews.map((news, index) => (
//                 <NewsCard
//                   key={news.id}
//                   news={news}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ======================================
//             القسم الثاني: الشراكات
//         ====================================== */}

//         <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/60 relative">
//           <div className="container mx-auto relative z-10">
//             <SectionHeading
//               eyebrow="نبني علاقات تصنع الأثر"
//               title="شراكات جمعية يعمر"
//               description="شراكات واتفاقيات التعاون التي تسهم في دعم أعمال الجمعية واستدامة أثرها."
//               icon={<Handshake className="w-6 h-6" />}
//               count={partnershipNews.length}
//             />

//             {partnershipNews.length > 0 ? (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {partnershipNews.map((news, index) => (
//                   <NewsCard
//                     key={news.id}
//                     news={news}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16 bg-white rounded-3xl border border-gray-100">
//                 <Handshake className="w-12 h-12 text-[#08704C] mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900">
//                   لا توجد شراكات مضافة حاليًا
//                 </h3>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ======================================
//             القسم الثالث: الزيارات
//         ====================================== */}

//         <section className="px-4 sm:px-6 lg:px-8 py-20 relative">
//           <div className="container mx-auto relative z-10">
//             <SectionHeading
//               eyebrow="لقاءات وزيارات مثمرة"
//               title="زيارات يعمر"
//               description="أبرز الزيارات والاستقبالات واللقاءات التي تعزز التواصل والتعاون."
//               icon={<MapPin className="w-6 h-6" />}
//               count={visitNews.length}
//             />

//             {visitNews.length > 0 ? (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {visitNews.map((news, index) => (
//                   <NewsCard
//                     key={news.id}
//                     news={news}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16 bg-white rounded-3xl border border-gray-100">
//                 <MapPin className="w-12 h-12 text-[#08704C] mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900">
//                   لا توجد زيارات مضافة حاليًا
//                 </h3>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ======================================
//             تابع يعمر
//         ====================================== */}

//         <section className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-[2.5rem] bg-[#08704C] text-white">
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C] via-[#00946E] to-[#08704C]" />

//           <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full border-[40px] border-white/5" />

//           <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full border-[60px] border-white/5" />

//           <div className="relative z-10 container mx-auto py-16 px-6 text-center">
//             <ScrollReveal>
//               <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-6">
//                 <TrendingUp className="w-4 h-4" />
//                 كن قريباً من أخبارنا
//               </div>

//               <h2 className="text-3xl sm:text-5xl font-black mb-5">
//                 تابع رحلة يعمر في خدمة بيوت الله
//               </h2>

//               <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
//                 نشارككم أولاً بأول أخبار الجمعية وشراكاتها
//                 وزياراتها وكل ما نقدمه في خدمة بيوت الله
//                 والمجتمع.
//               </p>

//               <div className="flex flex-wrap justify-center gap-3">
//                 <a
//                   href="https://x.com/Yaamurorg"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button className="bg-white text-[#08704C] hover:bg-[#F0F3E7] px-7 rounded-xl font-bold">
//                     تابعنا على X
//                   </Button>
//                 </a>

//                 <a
//                   href="https://www.instagram.com/yaamurorg/?hl=ar"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button
//                     variant="outline"
//                     className="border-white/50 text-white hover:bg-white hover:text-[#08704C] px-7 rounded-xl font-bold"
//                   >
//                     إنستجرام
//                   </Button>
//                 </a>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* واتساب والتذييل */}

//         <WhatsAppButton />
//         <SiteFooter />
//       </div>
//     </>
//   );
// }
// import { useEffect, useRef, useState } from "react";
// import type { TouchEvent } from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Calendar,
//   ArrowLeft,
// } from "lucide-react";
// import { ClientOnly } from "@/components/ClientOnly";
// import Image from "next/image";

// // ======================================
// // بيانات الأخبار
// // ======================================

// export const sliderNewsItems = [
//   {
//     id: 1,
//     title: "تجربة نوعية",
//     description:
//       "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
//     date: "2025-11-05",
//     image: "/hart.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1986043268635750642",
//   },
//   {
//     id: 2,
//     title: "يعمر والتميمي للطاقة.",
//     description:
//       "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
//     date: "2025-10-28",
//     image: "/tammamy.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1980949618113343675",
//   },
//   {
//     id: 3,
//     title: "بروحٍ واحدة وولاءٍ متجدد",
//     description:
//       "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
//     date: "2025-10-25",
//     image: "/dayksa.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1970805024243474541",
//   },
//   {
//     id: 4,
//     title: "إفتتاح المقر الجديد",
//     description:
//       "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
//     date: "2025-10-20",
//     image: "/yaamur_go.jpg",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 5,
//     title: "شراكة يعمر وجامعة الامام",
//     description:
//       "أبرمت #جامعة_الإمام_عبدالرحمن_بن_فيصل، ممثلةً في وحدة العناية بالمساجد والمصليات الجامعية، مذكرة تفاهم مع جمعية يعمر للعناية بالمساجد؛ بهدف تعزيز التعاون في المبادرات والبرامج ذات الاهتمام المشترك، بما يسهم في الارتقاء بالعناية بالمساجد والمصليات.",
//     date: "2026-08-05",
//     image: "/iamge/uni.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 6,
//     title: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
//     description:
//       "نحو مساجد خضراء ومستدامة 🌱🕌 سعدت #جمعية_يعمر باستقبال وفد من المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر @ncvcksa نُوقشت خلال الزيارة خطط تشجير الجوامع والمساجد بالمنطقة الشرقية، وقد بحث الطرفين إطلاق مشروع تجريبي نموذجي.",
//     date: "2026-07-16",
//     image: "/iamge/center.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 7,
//     title:
//       "زيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية",
//     description:
//       "تشرفت جمعية #يعمر للعناية بالمساجد بزيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية. وقدّم مجلس إدارة الجمعية لسموه نبذةً عن جهود «يعمر» ومبادراتها في العناية ببيوت الله، وما تسعى إليه من تعزيز استدامة خدماتها وأثرها.",
//     date: "2026-08-24",
//     image: "/iamge/king.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 8,
//     title: "رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية",
//     description:
//       "سعدنا بلقاء رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية، والتعريف بجهود «يعمر» في العناية ببيوت الله، واستعراض مبادراتها وأثرها في خدمة المصلين والمجتمع.",
//     date: "2026-09-20",
//     image: "/iamge/shabab.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 9,
//     title: "ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن",
//     description:
//       "ضمن مشاركتنا في ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن نواصل بناء الشراكات التي تصنع أثرًا مستدامًا. سعدنا في جمعية يعمر للعناية بالمساجد بتوقيع اتفاقية شراكة وتعاون مع جمعية أصالة لتعزيز القيم نحو تكامل الجهود وتبادل الخبرات وتوسيع مجالات التعاون بما يخدم المجتمع ويعظّم الأثر.",
//     date: "2026-09-21",
//     image: "/iamge/fahad.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 10,
//     title:
//       "زيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية",
//     description:
//       "تشرّفت جمعية #يعمر للعناية بالمساجد ممثّلةً برئيس مجلس إدارتها وأعضاء المجلس والرئيس التنفيذي بزيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية. وقدّم رئيس مجلس إدارة الجمعية، الدكتور صالح بن سليمان الرشيد لسموه نبذةً عن جهود الجمعية ومبادراتها في العناية ببيوت الله.",
//     date: "2026-10-13",
//     image: "/iamge/ameer.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 11,
//     title: "إستقبال إدارة الجمعيات والمؤسسات الأهلية",
//     description:
//       "استقبلت جمعية يعمر للعناية بالمساجد ممثلَي أمانة المنطقة الشرقية الأستاذ محمد التمار مدير إدارة الجمعيات والمؤسسات الأهلية، والأستاذة نوف نقي مديرة الإشراف والتمكين للجمعيات الخيرية.",
//     date: "2026-10-14",
//     image: "/iamge/jam3iat.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
//   {
//     id: 12,
//     title: "«جيلٌ يغرس لوطنٍ يزدهر»",
//     description:
//       "برعاية كريمة من صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز آل سعود أمير المنطقة الشرقية وتزامنًا مع تدشين موسم التشجير الوطني 2026م.",
//     date: "2026-10-14",
//     image: "/iamge/saud.png",
//     moreUrl:
//       "https://x.com/Yaamurorg/status/1965356817011122643",
//   },
// ];

// // ======================================
// // تنسيق التاريخ
// // ======================================

// function formatDMY(isoDate: string) {
//   const date = new Date(`${isoDate}T00:00:00Z`);

//   const day = String(date.getUTCDate()).padStart(2, "0");
//   const month = String(date.getUTCMonth() + 1).padStart(2, "0");
//   const year = date.getUTCFullYear();

//   return `${day}/${month}/${year}`;
// }

// // ======================================
// // مكون السلايدر
// // ======================================

// function NewsSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const itemsPerSlide = 1;
//   const totalSlides = Math.ceil(
//     sliderNewsItems.length / itemsPerSlide
//   );

//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   useEffect(() => {
//     if (isPaused || totalSlides <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 1900);

//     return () => clearInterval(interval);
//   }, [isPaused, totalSlides]);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const handlePrevious = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + totalSlides) % totalSlides
//     );
//   };

//   const handleTouchStart = (
//     event: TouchEvent<HTMLDivElement>
//   ) => {
//     touchStartX.current = event.touches[0].clientX;
//     touchEndX.current = null;
//   };

//   const handleTouchMove = (
//     event: TouchEvent<HTMLDivElement>
//   ) => {
//     touchEndX.current = event.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (
//       touchStartX.current === null ||
//       touchEndX.current === null
//     ) {
//       return;
//     }

//     const difference =
//       touchStartX.current - touchEndX.current;

//     if (difference > 60) handleNext();
//     if (difference < -60) handlePrevious();

//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   const visibleNews = sliderNewsItems.slice(
//     currentSlide * itemsPerSlide,
//     currentSlide * itemsPerSlide + itemsPerSlide
//   );

//   return (
//     <div
//       className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
//         {currentSlide + 1}/{totalSlides}
//       </div>

//       <div
//         className="overflow-hidden rounded-3xl"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="grid grid-cols-1 gap-6">
//           {visibleNews.map((news, index) => (
//             <Card
//               key={news.id}
//               className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-3xl min-h-[320px] md:min-h-[360px]"
//             >
//               <CardContent className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   <div className="md:w-6/12 relative min-h-[220px] md:min-h-[360px] overflow-hidden">
//                     <Image
//                       src={news.image}
//                       alt={news.title}
//                       fill
//                       className="object-cover"
//                       sizes="(min-width: 1024px) 45vw, 90vw"
//                       priority={index === 0}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/10" />
//                   </div>

//                   <div className="md:w-6/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
//                     <div className="flex items-center gap-2 text-[#08704C]">
//                       <Calendar className="w-4 h-4" />

//                       <ClientOnly>
//                         <span
//                           className="text-base md:text-lg font-semibold"
//                           dir="ltr"
//                         >
//                           {formatDMY(news.date)}
//                         </span>
//                       </ClientOnly>
//                     </div>

//                     <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
//                       {news.title}
//                     </h3>

//                     <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//                       {news.description}
//                     </p>

//                     <a
//                       href={news.moreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block mt-6"
//                     >
//                       <Button
//                         variant="ghost"
//                         className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
//                       >
//                         <span className="group-hover/btn:mr-2 transition-all duration-300">
//                           اقرأ المزيد
//                         </span>

//                         <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
//                       </Button>
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-4 mt-6">
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handlePrevious}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="السابق"
//         >
//           <ChevronRight className="w-5 h-5 text-[#08704C]" />
//         </Button>

//         <div className="flex justify-center gap-3">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-2.5 rounded-full transition-all duration-500 ${
//                 index === currentSlide
//                   ? "w-10 bg-gradient-to-r from-[#08704C] to-[#4D7A61] shadow-md"
//                   : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
//               }`}
//               aria-label={`الشريحة ${index + 1}`}
//             />
//           ))}
//         </div>

//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={handleNext}
//           className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
//           aria-label="التالي"
//         >
//           <ChevronLeft className="w-5 h-5 text-[#08704C]" />
//         </Button>
//       </div>
//     </div>
//   );
// }

// // التصدير الافتراضي للصفحة الرئيسية
// export default NewsSlider;

// // التصدير المسمّى لاستخدام بيانات الأخبار في صفحة الأخبار
// export { NewsSlider };

"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import Image from "next/image";

// ======================================
// بيانات الأخبار
// ======================================

export const sliderNewsItems = [
  {
    id: 1,
    title: "تجربة نوعية",
    description:
      "نفّذت #جمعية_يعمر للعناية بالمساجد بالتعاون مع @SaudiRedCrescent محاكاةً واقعية لحالة توقف قلب داخل مقرها بالدمام، نفّذها فريق يعمر بعد تلقيه التدريب الإسعافي.",
    date: "2025-11-05",
    image: "/hart.jpg",
    moreUrl:
      "https://x.com/Yaamurorg/status/1986043268635750642",
  },
  {
    id: 2,
    title: "يعمر والتميمي للطاقة.",
    description:
      "وقّعت جمعية يعمر للعناية بالمساجد اتفاقية تعاون مع شركة التميمي للطاقة، تهدف إلى التعاون في مجالات دعم واستدامة مشاريع العناية ببيوت الله.",
    date: "2025-10-28",
    image: "/tammamy.jpg",
    moreUrl:
      "https://x.com/Yaamurorg/status/1980949618113343675",
  },
  {
    id: 3,
    title: "بروحٍ واحدة وولاءٍ متجدد",
    description:
      "احتفى موظفو #جمعية_يعمر للعناية بالمساجد باليوم الوطني السعودي الـ95، تجديدًا للعهد والوفاء، وفخرًا بالمسيرة المباركة التي وحّدها المؤسس.",
    date: "2025-10-25",
    image: "/dayksa.jpg",
    moreUrl:
      "https://x.com/Yaamurorg/status/1970805024243474541",
  },
  {
    id: 4,
    title: "إفتتاح المقر الجديد",
    description:
      "دشن مدير عام فرع وزارة الشؤون الإسلامية والدعوة والإرشاد بالمنطقة الشرقية، فضيلة الشيخ/ عمر بن فيصل الدويش مقر جمعية يعمر للعناية بالمساجد في المنطقة الشرقية وذلك بحضور رئيس مجلس إدارة الجمعية الدكتور صالح الرشيد وعدد من الداعمين والمهتمين بالعمل الخيري والمجتمعي.",
    date: "2025-10-20",
    image: "/yaamur_go.jpg",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 5,
    title: "شراكة يعمر وجامعة الامام",
    description:
      "أبرمت #جامعة_الإمام_عبدالرحمن_بن_فيصل، ممثلةً في وحدة العناية بالمساجد والمصليات الجامعية، مذكرة تفاهم مع جمعية يعمر للعناية بالمساجد؛ بهدف تعزيز التعاون في المبادرات والبرامج ذات الاهتمام المشترك، بما يسهم في الارتقاء بالعناية بالمساجد والمصليات.",
    date: "2026-08-05",
    image: "/iamge/uni.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 6,
    title: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    description:
      "نحو مساجد خضراء ومستدامة 🌱🕌 سعدت #جمعية_يعمر باستقبال وفد من المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر @ncvcksa نُوقشت خلال الزيارة خطط تشجير الجوامع والمساجد بالمنطقة الشرقية، وقد بحث الطرفين إطلاق مشروع تجريبي نموذجي.",
    date: "2026-07-16",
    image: "/iamge/center.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 7,
    title:
      "زيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية",
    description:
      "تشرفت جمعية #يعمر للعناية بالمساجد بزيارة صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز، أمير المنطقة الشرقية. وقدّم مجلس إدارة الجمعية لسموه نبذةً عن جهود «يعمر» ومبادراتها في العناية ببيوت الله، وما تسعى إليه من تعزيز استدامة خدماتها وأثرها.",
    date: "2026-08-24",
    image: "/iamge/king.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 8,
    title: "رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية",
    description:
      "سعدنا بلقاء رئيس وأعضاء #مجلس_شباب_أعمال_الشرقية، والتعريف بجهود «يعمر» في العناية ببيوت الله، واستعراض مبادراتها وأثرها في خدمة المصلين والمجتمع.",
    date: "2026-09-20",
    image: "/iamge/shabab.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 9,
    title: "ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن",
    description:
      "ضمن مشاركتنا في ملتقى نماء التطوعي بجامعة الملك فهد للبترول والمعادن نواصل بناء الشراكات التي تصنع أثرًا مستدامًا. سعدنا في جمعية يعمر للعناية بالمساجد بتوقيع اتفاقية شراكة وتعاون مع جمعية أصالة لتعزيز القيم نحو تكامل الجهود وتبادل الخبرات وتوسيع مجالات التعاون بما يخدم المجتمع ويعظّم الأثر.",
    date: "2026-09-21",
    image: "/iamge/fahad.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 10,
    title:
      "زيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية",
    description:
      "تشرّفت جمعية #يعمر للعناية بالمساجد ممثّلةً برئيس مجلس إدارتها وأعضاء المجلس والرئيس التنفيذي بزيارة صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز آل سعود نائب أمير المنطقة الشرقية. وقدّم رئيس مجلس إدارة الجمعية، الدكتور صالح بن سليمان الرشيد لسموه نبذةً عن جهود الجمعية ومبادراتها في العناية ببيوت الله.",
    date: "2026-10-13",
    image: "/iamge/ameer.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 11,
    title: "إستقبال إدارة الجمعيات والمؤسسات الأهلية",
    description:
      "استقبلت جمعية يعمر للعناية بالمساجد ممثلَي أمانة المنطقة الشرقية الأستاذ محمد التمار مدير إدارة الجمعيات والمؤسسات الأهلية، والأستاذة نوف نقي مديرة الإشراف والتمكين للجمعيات الخيرية.",
    date: "2026-10-14",
    image: "/iamge/jam3iat.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
  {
    id: 12,
    title: "«جيلٌ يغرس لوطنٍ يزدهر»",
    description:
      "برعاية كريمة من صاحب السمو الملكي الأمير سعود بن نايف بن عبدالعزيز آل سعود أمير المنطقة الشرقية وتزامنًا مع تدشين موسم التشجير الوطني 2026م.",
    date: "2026-10-14",
    image: "/iamge/saud.png",
    moreUrl:
      "https://x.com/Yaamurorg/status/1965356817011122643",
  },
];

// ======================================
// تنسيق التاريخ
// ======================================

function formatDMY(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

// ======================================
// مكون السلايدر
// ======================================

type NewsSliderProps = {
  /** عدد الأخبار المعروضة. عند عدم تحديده تظهر جميع الأخبار كما في السابق. */
  limit?: number;
};

function NewsSlider({ limit }: NewsSliderProps) {
  // ترتيب زمني تنازلي دون تعديل مصفوفة الأخبار الأصلية.
  // التواريخ مخزنة بصيغة YYYY-MM-DD، لذا تنجح المقارنة النصية.
  const sortedNews = [...sliderNewsItems].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  const displayedNews =
    typeof limit === "number" ? sortedNews.slice(0, Math.max(0, limit)) : sliderNewsItems;
  const [currentSlide, setCurrentSlide] = useState(0);

  // إعادة بدء السلايدر إذا تغير الحد بين الصفحات.
  useEffect(() => setCurrentSlide(0), [limit]);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerSlide = 1;
  const totalSlides = Math.ceil(
    displayedNews.length / itemsPerSlide
  );

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 1900);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
  };

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const difference =
      touchStartX.current - touchEndX.current;

    if (difference > 60) handleNext();
    if (difference < -60) handlePrevious();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const visibleNews = displayedNews.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <div
      className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
        {currentSlide + 1}/{totalSlides}
      </div>

      <div
        className="overflow-hidden rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-1 gap-6">
          {visibleNews.map((news, index) => (
            <Card
              key={news.id}
              className="border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-3xl min-h-[320px] md:min-h-[360px]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-6/12 relative min-h-[220px] md:min-h-[360px] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/10" />
                  </div>

                  <div className="md:w-6/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2 text-[#08704C]">
                      <Calendar className="w-4 h-4" />

                      <ClientOnly>
                        <span
                          className="text-base md:text-lg font-semibold"
                          dir="ltr"
                        >
                          {formatDMY(news.date)}
                        </span>
                      </ClientOnly>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                      {news.description}
                    </p>

                    <a
                      href={news.moreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6"
                    >
                      <Button
                        variant="ghost"
                        className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-base md:text-lg font-bold group/btn transition-all duration-300"
                      >
                        <span className="group-hover/btn:mr-2 transition-all duration-300">
                          اقرأ المزيد
                        </span>

                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          size="icon"
          variant="ghost"
          onClick={handlePrevious}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="السابق"
        >
          <ChevronRight className="w-5 h-5 text-[#08704C]" />
        </Button>

        <div className="flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-gradient-to-r from-[#08704C] to-[#4D7A61] shadow-md"
                  : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
              }`}
              aria-label={`الشريحة ${index + 1}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleNext}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="التالي"
        >
          <ChevronLeft className="w-5 h-5 text-[#08704C]" />
        </Button>
      </div>
    </div>
  );
}

// التصدير الافتراضي للصفحة الرئيسية
export default NewsSlider;

// التصدير المسمّى لاستخدام بيانات الأخبار في صفحة الأخبار
export { NewsSlider };