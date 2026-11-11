// import { useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Building2, Wrench, Sparkles, Calendar, MapPin, Users, Filter, ArrowLeft } from "lucide-react";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   category: "construction" | "maintenance" | "operation";
//   image: string;
//   beneficiaries: number;
//   status: "completed" | "ongoing";
//   details: string[];
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "مسجد عائشة بنت الصديق",
//     description: "صيانة نظام التبريد",
//     location: "ام الساهك – الحزم",
//     date: "2024-06-06",
//     category: "maintenance",
//     image: "/iamge/moasq/ashah.png",
//     beneficiaries: 300,
//     status: "completed",
//     details: [
//       "الطاقة الاستيعابية: 300 مصلي",
//       "تجهيزات حديثة ومكيفات بأحدث التقنيات"
//     ]
//   },
//   {
//     id: 2,
//     title: "مسجد ماجد الحارثي",
//     description: "ترميم المسجد بسبب الحريق",
//     location: "الدمام-النورس",
//     date: "2024-05-20",
//     category: "maintenance",
//     image: "/iamge/moasq/majd.jpg",
//     beneficiaries: 250,
//     status: "completed",
//     details: [
//       "ترميم كامل",
//       "تجديد الأرضيات والإضاءة",
//       "صيانة أنظمة التكييف والصوت",
//       "إعادة دهان كامل المبنى"
//     ]
//   },
//   {
//     id: 3,
//     title: "جامع رفيع الجابري",
//     description: "عطل في احد وحدات التكييف المركزي",
//     location: "الدمام-طيبة",
//     date: "2024-07-10",
//     category: "maintenance",
//     image: "/iamge/moasq/rfay.jpeg",
//     beneficiaries: 400,
//     status: "ongoing",
//     details: [
//       "توريد قطع التكييف",
//       "فحص واحدات التكييف",
//     ]
//   },
//   /*
//   {
//     id: 4,
//     title: "مسجد السلام",
//     description: "بناء مسجد نموذجي بتصميم عصري مع مرافق متكاملة",
//     location: "الجبيل، المنطقة الشرقية",
//     date: "2024-09-05",
//     category: "construction",
//     image: "",
//     beneficiaries: 500,
//     status: "ongoing",
//     details: [
//       "تصميم معماري إسلامي حديث",
//       "مرافق متكاملة للرجال والنساء",
//       "قاعة متعددة الأغراض",
//       "موقف سيارات واسع"
//     ]
//   },
//   {
//     id: 5,
//     title: "مسجد التقوى",
//     description: "صيانة شاملة وتطوير البنية التحتية للمسجد",
//     location: "رأس تنورة، المنطقة الشرقية",
//     date: "2024-10-15",
//     category: "maintenance",
//     image: "/placeholder-mosque-1.jpg",
//     beneficiaries: 200,
//     status: "completed",
//     details: [
//       "تطوير أنظمة الصوت والإضاءة",
//       "تركيب ألواح طاقة شمسية",
//       "توسعة المواضئ",
//       "تحديث نظام التكييف"
//     ]
//   },
//   {
//     id: 6,
//     title: "مسجد الهدى",
//     description: "إدارة وتشغيل مسجد كبير مع خدمات تعليمية ودعوية",
//     location: "الأحساء، المنطقة الشرقية",
//     date: "2024-11-01",
//     category: "operation",
//     image: "/placeholder-mosque-2.jpg",
//     beneficiaries: 600,
//     status: "ongoing",
//     details: [
//       "برامج تحفيظ القرآن الكريم",
//       "دروس علمية أسبوعية",
//       "مكتبة إسلامية شاملة",
//       "خدمات إرشادية ودعوية"
//     ]
      
//        }
//     */
// ];

// const categories = [
//   { id: "all", label: "جميع المشاريع", icon: Filter },
//   { id: "construction", label: "بناء المساجد", icon: Building2 },
//   { id: "maintenance", label: "الصيانة والترميم", icon: Wrench },
//   { id: "operation", label: "التشغيل والإدارة", icon: Sparkles }
// ];

// const gregorianEnFormatter = new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   calendar: "gregory",
//   timeZone: "UTC"
// });

// const formatDateEn = (isoDate: string) => gregorianEnFormatter.format(new Date(isoDate));

// const categoryColors = {
//   construction: { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
//   maintenance: { bg: "bg-[#A2B366]/10", text: "text-[#A2B366]", border: "border-[#A2B366]/30" },
//   operation: { bg: "bg-[#4D7A61]/10", text: "text-[#4D7A61]", border: "border-[#4D7A61]/30" }
// };

// const categoryLabels = {
//   construction: "بناء",
//   maintenance: "صيانة",
//   operation: "تشغيل"
// };

// export default function ProgramsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   const filteredProjects = selectedCategory === "all"
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   return (
//     <>
//       <Head>
//         <title>برامجنا ومشاريعنا | جمعية يعمر لعناية المساجد</title>
//         <meta name="description" content="تعرف على مشاريع جمعية يعمر في بناء وصيانة وتشغيل المساجد بالمنطقة الشرقية" />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//         </div>

      

//         <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto mb-12">
//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   مشاريعنا وإنجازاتنا
//                 </span>
//                 <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
//                   برامجنا ومشاريعنا
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   نفخر بما أنجزناه من مشاريع متميزة في خدمة بيوت الله بالمنطقة الشرقية. تعرف على مشاريعنا في البناء والصيانة والتشغيل
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={100}>
//               <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-4 mb-16">
//                 {categories.map((category) => {
//                   const Icon = category.icon;
//                   const isActive = selectedCategory === category.id;
//                   return (
//                     <button
//                       key={category.id}
//                       onClick={() => setSelectedCategory(category.id)}
//                       className={`px-4 md:px-6 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
//                         isActive
//                           ? "bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-xl scale-105"
//                           : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-100"
//                       }`}
//                     >
//                       <Icon className="w-4 h-4 md:w-5 md:h-5" />
//                       <span className="hidden md:inline">{category.label}</span>
//                       <span className="md:hidden">{category.label.split(" ")[0]}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => {
//                 const colors = categoryColors[project.category];
//                 return (
//                   <ScrollReveal key={project.id} delay={index * 100}>
//                     <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
//                       <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[]/10 to-[#A2B366]/10">
//                          {/* background image */}
//                                           <div className="absolute inset-0">
//                                             <Image src={project.image} alt="مشروع بناء - جمعية يعمر" fill className="object-cover object-center" />
//                                           </div>
                        
//                                           {/* subtle overlay and pattern */}
//                                           <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/20 to-[#4D7A61]/20 mix-blend-multiply"></div>
//                                           <div className="absolute inset-0 pattern-diagonal opacity-40"></div>
                        
//                                           {/* optional centered icon removed to let image show */}
                        
//                         <div className="absolute top-4 right-4 flex gap-2">
//                           <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
//                             {categoryLabels[project.category]}
//                           </Badge>
//                           {project.status === "ongoing" && (
//                             <Badge className="bg-blue-100 text-blue-700 border border-blue-300 font-bold">
//                               قيد التنفيذ
//                             </Badge>
//                           )}
//                         </div>
//                       </div>

//                       <CardContent className="p-6 space-y-4">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#08704C] transition-colors">
//                             {project.title}
//                           </h3>
//                           <p className="text-gray-600 leading-relaxed">
//                             {project.description}
//                           </p>
//                         </div>

//                         <div className="space-y-2 pt-2 border-t border-gray-100">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <MapPin className="w-4 h-4 text-[#08704C]" />
//                             <span>{project.location}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Calendar className="w-4 h-4 text-[#08704C]" />
//                             <span dir="ltr">{formatDateEn(project.date)}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Users className="w-4 h-4 text-[#08704C]" />
//                             <span>{project.beneficiaries}+ مستفيد</span>
//                           </div>
//                         </div>

//                         <div className="pt-4">
//                           <p className="text-sm font-semibold text-gray-900 mb-2">تفاصيل المشروع:</p>
//                           <ul className="space-y-1.5">
//                             {project.details.map((detail, idx) => (
//                               <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
//                                 <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
//                                 <span>{detail}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <Button
//                           variant="ghost"
//                           className="w-full text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold group/btn transition-all duration-300 mt-4"
//                         >
//                           <span className="group-hover/btn:mr-2 transition-all">التفاصيل الكاملة</span>
//                           <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   </ScrollReveal>
//                 );
//               })}
//             </div>

//             {filteredProjects.length === 0 && (
//               <div className="text-center py-20">
//                 <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
//                   <Filter className="w-12 h-12 text-gray-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد مشاريع</h3>
//                 <p className="text-gray-600">لم نجد مشاريع في هذا التصنيف حالياً</p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10 text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black mb-6">ساهم في عمارة بيوت الله</h2>
//               <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//                 كن شريكاً في الأجر والثواب بدعم مشاريعنا في بناء وصيانة وتشغيل المساجد
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a href="https://store.yaamur.org.sa/">
//                 <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
//                   تبرع الآن
//                   <ArrowLeft className="w-5 h-5 mr-2" />
//                 </Button>
//                 </a>
                
//                  <a href="https://wa.me/966920011240">
//                   <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
//                     تواصل معنا
//                   </Button>
//                   </a>
                
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

import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Users,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  X,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  beneficiaries: number;
  status: "completed" | "ongoing";
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "مسجد عائشة بنت الصديق",
    description: "صيانة نظام التبريد",
    location: "أم الساهك – الحزم",
    date: "2024-06-06",
    image: "/iamge/moasq/ashah.png",
    beneficiaries: 300,
    status: "completed",
    details: [
      "الطاقة الاستيعابية: 300 مصلي",
      "تجهيزات حديثة ومكيفات بأحدث التقنيات",
    ],
  },
  {
    id: 2,
    title: "مسجد ماجد الحارثي",
    description: "ترميم المسجد بسبب الحريق",
    location: "الدمام – النورس",
    date: "2024-05-20",
    image: "/iamge/moasq/majd.jpg",
    beneficiaries: 250,
    status: "completed",
    details: [
      "ترميم كامل للمسجد",
      "تجديد الأرضيات والإضاءة",
      "صيانة أنظمة التكييف والصوت",
      "إعادة دهان كامل المبنى",
    ],
  },
  {
    id: 3,
    title: "جامع رفيع الجابري",
    description: "صيانة إحدى وحدات التكييف المركزي",
    location: "الدمام – طيبة",
    date: "2024-07-10",
    image: "/iamge/moasq/rfay.jpeg",
    beneficiaries: 400,
    status: "ongoing",
    details: [
      "توريد قطع التكييف",
      "فحص وحدات التكييف",
    ],
  },
];

const gregorianEnFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
  calendar: "gregory",
  timeZone: "UTC",
});

const formatDate = (isoDate: string) =>
  gregorianEnFormatter.format(new Date(isoDate));

export default function ProgramsPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>مشاريع يعمر | جمعية يعمر للعناية بالمساجد</title>
        <meta
          name="description"
          content="تعرف على مشاريع وإنجازات جمعية يعمر للعناية بالمساجد"
        />
      </Head>

      <div
        className="min-h-screen bg-[#F8F6F1] overflow-hidden"
        dir="rtl"
      >
        {/* خلفية هادئة */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#08704C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#D6A85F]/10 rounded-full blur-3xl" />
        </div>

        {/* العنوان */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-[#08704C]/10 shadow-sm rounded-full px-5 py-2 mb-6">
                  <span className="w-2.5 h-2.5 bg-[#08704C] rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-[#08704C]">
                    مشاريع يعمر
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6">
                  مشاريع تصنع{" "}
                  <span className="text-[#08704C]">أثرًا يبقى</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  نستعرض لكم جانبًا من مشاريع جمعية يعمر في خدمة بيوت الله،
                  ونواصل العمل لنترك أثرًا يمتد ويخدم المجتمع.
                </p>
              </div>
            </ScrollReveal>

            {/* إحصائيات بسيطة */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-3 max-w-2xl mx-auto mt-12 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-5 sm:p-6 text-center border-l border-gray-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#08704C]">
                    {projects.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    مشاريع معروضة
                  </div>
                </div>

                <div className="p-5 sm:p-6 text-center border-l border-gray-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#08704C]">
                    {projects.reduce(
                      (total, project) => total + project.beneficiaries,
                      0
                    )}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    مستفيد
                  </div>
                </div>

                <div className="p-5 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#08704C]">
                    {projects.filter((p) => p.status === "ongoing").length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    مشاريع قيد التنفيذ
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* المشاريع */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[#08704C] font-bold text-sm mb-2">
                  اكتشف مشاريعنا
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                  مشاريع يعمر
                </h2>
              </div>

              <div className="hidden sm:block text-gray-500 text-sm">
                اضغط على البطاقة لاستكشاف التفاصيل
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((project, index) => {
                const isExpanded = expandedProject === project.id;

                return (
                  <ScrollReveal key={project.id} delay={index * 100}>
                    <article
                      className={`group bg-white rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                        isExpanded
                          ? "border-[#08704C] shadow-2xl"
                          : "border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl"
                      }`}
                    >
                      {/* الصورة */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* طبقة لونية */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* حالة المشروع */}
                        <div className="absolute top-4 right-4">
                          <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                              project.status === "ongoing"
                                ? "bg-[#D6A85F] text-white"
                                : "bg-white text-[#08704C]"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                project.status === "ongoing"
                                  ? "bg-white animate-pulse"
                                  : "bg-[#08704C]"
                              }`}
                            />
                            {project.status === "ongoing"
                              ? "قيد التنفيذ"
                              : "مشروع مكتمل"}
                          </span>
                        </div>

                        {/* عنوان فوق الصورة */}
                        <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                          <p className="text-sm text-white/80 mb-1">
                            {project.location}
                          </p>
                          <h3 className="text-2xl font-black">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* المحتوى */}
                      <div className="p-6">
                        <p className="text-gray-600 leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {/* المعلومات السريعة */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <div className="bg-[#F8F6F1] rounded-2xl p-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#08704C]" />
                            <div>
                              <p className="text-xs text-gray-500">
                                المستفيدون
                              </p>
                              <p className="font-bold text-gray-900 text-sm">
                                {project.beneficiaries}+ مستفيد
                              </p>
                            </div>
                          </div>

                          <div className="bg-[#F8F6F1] rounded-2xl p-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#08704C]" />
                            <div>
                              <p className="text-xs text-gray-500">
                                تاريخ المشروع
                              </p>
                              <p
                                className="font-bold text-gray-900 text-xs"
                                dir="ltr"
                              >
                                {formatDate(project.date)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* التفاصيل التفاعلية */}
                        <div
                          className={`grid transition-all duration-500 ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100 mb-5"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="bg-[#08704C]/5 rounded-2xl p-5">
                              <p className="font-bold text-gray-900 mb-3">
                                تفاصيل المشروع
                              </p>

                              <ul className="space-y-3">
                                {project.details.map((detail, detailIndex) => (
                                  <li
                                    key={detailIndex}
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                  >
                                    <CheckCircle2 className="w-5 h-5 text-[#08704C] shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* زر التفاعل */}
                        <button
                          onClick={() =>
                            setExpandedProject(
                              isExpanded ? null : project.id
                            )
                          }
                          className={`w-full rounded-2xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                            isExpanded
                              ? "bg-gray-100 text-gray-700"
                              : "bg-[#08704C] text-white hover:bg-[#065c3e] hover:shadow-lg"
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              إخفاء التفاصيل
                              <X className="w-5 h-5" />
                            </>
                          ) : (
                            <>
                              اكتشف المشروع
                              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* الدعوة للمساهمة */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08704C] px-6 py-14 sm:p-16 text-center text-white">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border-[30px] border-white/10" />
                <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full border-[40px] border-white/5" />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <p className="text-white/70 font-bold mb-3">
                    كن جزءًا من الأثر
                  </p>

                  <h2 className="text-3xl sm:text-5xl font-black mb-5">
                    ساهم في عمارة بيوت الله
                  </h2>

                  <p className="text-lg text-white/80 leading-relaxed mb-8">
                    كل مساهمة تصنع فرقًا، وتساعدنا على مواصلة العناية ببيوت
                    الله وخدمة المجتمع.
                  </p>

                  <a href="https://store.yaamur.org.sa/">
                    <Button
                      size="lg"
                      className="bg-white text-[#08704C] hover:bg-[#F8F6F1] font-bold px-10 text-lg rounded-2xl shadow-xl"
                    >
                      تبرع الآن
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </Button>
                  </a>
                </div>
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
