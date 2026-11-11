// import { useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Building2, Calendar, ArrowLeft, Newspaper, Award, Users, TrendingUp } from "lucide-react";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { ClientOnly } from "@/components/ClientOnly";
// import { sliderNewsItems } from "@/components/NewsSlider";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
//   date: string;
//   category: "projects" | "events" | "achievements" | "general";
//   image: string;
//   author: string;
//   featured: boolean;
//   url:string
// }

// const baseNewsItems: NewsItem[] = [
  /*
  {
    id: 2,
    title: "إطلاق برنامج الصيانة الشاملة لـ 50 مسجداً",
    description: "برنامج متكامل للصيانة الدورية يشمل 50 مسجداً في المنطقة الشرقية بميزانية تتجاوز 5 ملايين ريال",
    content: "أطلقت جمعية يعمر برنامجاً طموحاً للصيانة الشاملة يستهدف 50 مسجداً في مختلف مدن المنطقة الشرقية، يشمل البرنامج الصيانة الدورية والترميم والتطوير.",
    date: "2025-10-28",
    category: "projects",
    image: "/placeholder-mosque-2.jpg",
    author: "إدارة المشاريع",
    featured: true
  },
  {
    id: 3,
    title: "توقيع شراكة استراتيجية مع مؤسسة الخير",
    description: "شراكة استراتيجية جديدة لدعم مشاريع بناء المساجد في المناطق النائية والأحياء الجديدة",
    content: "وقعت جمعية يعمر اتفاقية شراكة استراتيجية مع مؤسسة الخير لدعم مشاريع بناء المساجد، تهدف الشراكة إلى بناء 10 مساجد جديدة خلال العامين القادمين.",
    date: "2025-10-25",
    category: "events",
    image: "/placeholder-mosque-3.jpg",
    author: "قسم العلاقات العامة",
    featured: false
  },
  {
    id: 4,
    title: "إنجاز تاريخي: 150 مسجداً في عامين فقط",
    description: "نفخر بإنجاز بناء وتشغيل 150 مسجداً خلال عامين من العمل المتواصل والدؤوب في خدمة بيوت الله",
    content: "حققت جمعية يعمر إنجازاً تاريخياً بإتمام بناء وتشغيل 150 مسجداً في مختلف مناطق المنطقة الشرقية خلال عامين فقط، وهو إنجاز يعكس التزام الجمعية بخدمة بيوت الله.",
    date: "2025-10-20",
    category: "achievements",
    image: "/placeholder-mosque-4.jpg",
    author: "رئيس مجلس الإدارة",
    featured: true
  },
  {
    id: 5,
    title: "حملة تنظيف وتعقيم شاملة لـ 80 مسجداً",
    description: "تنفيذ حملة تنظيف وتعقيم شاملة استهدفت 80 مسجداً بالتعاون مع متطوعين من المجتمع المحلي",
    content: "نظمت جمعية يعمر حملة واسعة للتنظيف والتعقيم شملت 80 مسجداً، بمشاركة أكثر من 200 متطوع، وذلك في إطار الحرص على توفير بيئة نظيفة وآمنة للمصلين.",
    date: "2025-10-15",
    category: "events",
    image: "/placeholder-mosque-1.jpg",
    author: "قسم التشغيل",
    featured: false
  },
  {
    id: 6,
    title: "تخريج 300 حافظ للقرآن الكريم من حلقات المساجد",
    description: "احتفالية كبرى لتخريج 300 حافظ للقرآن الكريم من حلقات التحفيظ في مساجد الجمعية",
    content: "أقامت جمعية يعمر حفلاً تكريمياً لتخريج 300 حافظ للقرآن الكريم من حلقات التحفيظ المنتشرة في مساجد الجمعية، في إنجاز يعكس اهتمام الجمعية بالجانب التعليمي والدعوي.",
    date: "2025-10-10",
    category: "achievements",
    image: "/placeholder-mosque-2.jpg",
    author: "إدارة البرامج التعليمية",
    featured: false
  },
  {
    id: 7,
    title: "افتتاح مكتبة إسلامية رقمية في 20 مسجداً",
    description: "إطلاق مشروع المكتبة الإسلامية الرقمية في 20 مسجداً لتسهيل الوصول إلى المحتوى الإسلامي المعتمد",
    content: "دشنت جمعية يعمر مشروع المكتبة الإسلامية الرقمية في 20 مسجداً، توفر المكتبة آلاف الكتب والمراجع الإسلامية المعتمدة بشكل رقمي ومجاني للجميع.",
    date: "2025-10-05",
    category: "projects",
    image: "/placeholder-mosque-3.jpg",
    author: "قسم التقنية",
    featured: false
  },
  {
    id: 8,
    title: "جائزة التميز في خدمة المساجد لعام 2025",
    description: "حصول جمعية يعمر على جائزة التميز في خدمة المساجد على مستوى المملكة للعام 2025",
    content: "تسلمت جمعية يعمر جائزة التميز في خدمة المساجد على مستوى المملكة، تقديراً لجهودها المتميزة في بناء وصيانة وتشغيل المساجد بأعلى معايير الجودة.",
    date: "2025-09-28",
    category: "achievements",
    image: "/placeholder-mosque-4.jpg",
    author: "فريق التحرير",
    featured: false
  },
  {
    id: 9,
    title: "إطلاق تطبيق 'مساجدنا' الذكي",
    description: "تطبيق إلكتروني شامل لخدمة المصلين يوفر مواقيت الصلاة والفعاليات والدروس في جميع مساجد الجمعية",
    content: "أطلقت جمعية يعمر تطبيق 'مساجدنا' الذكي الذي يوفر معلومات شاملة عن جميع مساجد الجمعية، بما في ذلك مواقيت الصلاة والفعاليات والدروس العلمية والخدمات المتاحة.",
    date: "2025-09-20",
    category: "general",
    image: "/placeholder-mosque-1.jpg",
    author: "قسم التقنية",
    featured: false
  }
    */
// ];

// const sliderNewsAsNewsPageItems: NewsItem[] = sliderNewsItems.map((item) => ({
//   id: 100 + item.id,
//   title: item.title,
//   description: item.description,
//   content: item.description,
//   url: item.moreUrl,
//   date: item.date,
//   category: "general",
//   image: item.image,
//   author: "جمعية يعمر",
//   featured: true
// }));

// const newsItems: NewsItem[] = [...baseNewsItems, ...sliderNewsAsNewsPageItems];

// const categories = [
//   { id: "all", label: "جميع الأخبار", icon: Newspaper },
//   { id: "projects", label: "المشاريع", icon: Building2 },
//   { id: "events", label: "الفعاليات", icon: Users },
//   { id: "achievements", label: "الإنجازات", icon: Award }
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
//   projects: { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
//   events: { bg: "bg-[#4D7A61]/10", text: "text-[#4D7A61]", border: "border-[#4D7A61]/30" },
//   achievements: { bg: "bg-[#A2B366]/10", text: "text-[#A2B366]", border: "border-[#A2B366]/30" },
//   general: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" }
// };

// const categoryLabels = {
//   projects: "مشاريع",
//   events: "فعاليات",
//   achievements: "إنجازات",
//   general: "عام"
// };

// export default function NewsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   const filteredNews = selectedCategory === "all"
//     ? newsItems
//     : newsItems.filter(news => news.category === selectedCategory);

//   const featuredNews = newsItems.filter(news => news.featured);

//   return (
//     <>
//       <Head>
//         <title>أخبار الجمعية | جمعية يعمر لعناية المساجد</title>
//         <meta name="description" content="تابع آخر أخبار وفعاليات وإنجازات جمعية يعمر في خدمة بيوت الله" />
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
//                   تابع أخبارنا
//                 </span>
//                 <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
//                   أخبار الجمعية
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   تابع آخر الأخبار والفعاليات والإنجازات في خدمة بيوت الله بالمنطقة الشرقية
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
//                       <span className="md:hidden">{category.label.split(" ")[1] || category.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {selectedCategory === "all" && featuredNews.length > 0 && (
//           <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
//             <div className="container mx-auto relative z-10">
//               <ScrollReveal>
//                 <h2 className="text-3xl font-black text-gray-900 mb-8">الأخبار المميزة</h2>
//               </ScrollReveal>
              
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {featuredNews.map((news, index) => {
//                   const colors = categoryColors[news.category];
//                   return (
//                     <ScrollReveal key={news.id} delay={index * 100}>
//                       <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
//                         <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#08704C]/10 to-[#A2B366]/10">
//                           <Image
//                                                 src={news.image}
//                                                 alt={news.title}
//                                                 fill
//                                                 className="object-cover"
//                                                 sizes="(min-width: 1024px) 45vw, 90vw"
//                                                 priority={index === 0}
//                                               />
                          
//                           <div className="absolute top-4 right-4">
//                             <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
//                               {categoryLabels[news.category]}
//                             </Badge>
//                           </div>

//                           <div className="absolute top-4 left-4">
//                             <Badge className="bg-[#A2B366] text-white font-bold">
//                               مميز
//                             </Badge>
//                           </div>
//                         </div>

//                         <CardContent className="p-6 space-y-4">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Calendar className="w-4 h-4 text-[#08704C]" />
//                             <ClientOnly>
//                               <span dir="ltr">
//                                 {formatDateEn(news.date)}
//                               </span>
//                             </ClientOnly>
//                           </div>

//                           <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors line-clamp-2">
//                             {news.title}
//                           </h3>

//                           <p className="text-gray-600 leading-relaxed line-clamp-3">
//                             {news.description}
//                           </p>

//                           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                             <span className="text-sm text-gray-500">{news.author}</span>
//                             <a href={news.url}>
//                             <Button
//                               variant="ghost"
//                               className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn"
//                             >
//                               <span className="group-hover/btn:mr-2 transition-all">اقرأ المزيد</span>
//                               <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                             </Button>
//                             </a>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </ScrollReveal>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         )}

//         <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <h2 className="text-3xl font-black text-gray-900 mb-8">
//                 {selectedCategory === "all" ? "جميع الأخبار" : `أخبار ${categories.find(c => c.id === selectedCategory)?.label}`}
//               </h2>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredNews.map((news, index) => {
//                 const colors = categoryColors[news.category];
//                 return (
//                   <ScrollReveal key={news.id} delay={index * 50}>
//                     <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
//                       <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#08704C]/10 to-[#A2B366]/10">
//                         <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <Newspaper className="w-20 h-20 text-[#08704C]/20 group-hover:scale-110 transition-transform duration-500" />
//                         </div>
                        
//                         <div className="absolute top-4 right-4">
//                           <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
//                             {categoryLabels[news.category]}
//                           </Badge>
//                         </div>
//                       </div>

//                       <CardContent className="p-6 space-y-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Calendar className="w-4 h-4 text-[#08704C]" />
//                           <ClientOnly>
//                             <span dir="ltr">
//                               {formatDateEn(news.date)}
//                             </span>
//                           </ClientOnly>
//                         </div>

//                         <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors line-clamp-2">
//                           {news.title}
//                         </h3>

//                         <p className="text-gray-600 leading-relaxed line-clamp-3">
//                           {news.description}
//                         </p>

//                         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                           <span className="text-sm text-gray-500">{news.author}</span>
//                           <a href={news.url} >
//                           <Button
//                             variant="ghost"
//                             className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn"
//                           >
//                             <span className="group-hover/btn:mr-2 transition-all">اقرأ المزيد</span>
//                             <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                           </Button>
//                           </a>
                          
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </ScrollReveal>
//                 );
//               })}
//             </div>

//             {filteredNews.length === 0 && (
//               <div className="text-center py-20">
//                 <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
//                   <Newspaper className="w-12 h-12 text-gray-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد أخبار</h3>
//                 <p className="text-gray-600">لم نجد أخباراً في هذا التصنيف حالياً</p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10 text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black mb-6">تابعنا على وسائل التواصل</h2>
//               <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//                 لا تفوت آخر الأخبار والفعاليات - تابعنا على حساباتنا الرسمية
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a href="https://x.com/Yaamurorg">
//                 <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
//                   تويتر
//                   <TrendingUp className="w-5 h-5 mr-2" />
//                 </Button>
//                 </a>
//                 <a href="https://wa.me/966920011240">
//                 <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
//                   واتساب
//                 </Button>
//                 </a>
//                 <a href="https://www.instagram.com/yaamurorg/?hl=ar">
//                 <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
//                  إنستجرام
//                 </Button>
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

// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Calendar,
//   ArrowLeft,
//   Newspaper,
//   TrendingUp,
//   Sparkles,
//   Clock,
// } from "lucide-react";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { ClientOnly } from "@/components/ClientOnly";
// import { sliderNewsItems } from "@/components/NewsSlider";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
//   date: string;
//   category: "projects" | "events" | "achievements" | "general";
//   image: string;
//   author: string;
//   featured: boolean;
//   url: string;
// }

// /* =========================================================
//    الصق هنا baseNewsItems الموجودة في كودك القديم كما هي
// ========================================================= */

// const baseNewsItems: NewsItem[] = [
//   // ضع أخبارك الأصلية هنا
// ];

// /* ========================================================= */

// const sliderNewsAsNewsPageItems: NewsItem[] = sliderNewsItems.map((item) => ({
//   id: 100 + item.id,
//   title: item.title,
//   description: item.description,
//   content: item.description,
//   url: item.moreUrl,
//   date: item.date,
//   category: "general",
//   image: item.image,
//   author: "جمعية يعمر",
//   featured: true,
// }));

// // جميع الأخبار في مكان واحد
// const newsItems: NewsItem[] = [
//   ...baseNewsItems,
//   ...sliderNewsAsNewsPageItems,
// ];

// const gregorianEnFormatter = new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   calendar: "gregory",
//   timeZone: "UTC",
// });

// const formatDateEn = (isoDate: string) =>
//   gregorianEnFormatter.format(new Date(isoDate));

// const categoryLabels = {
//   projects: "أخبار يعمر",
//   events: "أخبار يعمر",
//   achievements: "أخبار يعمر",
//   general: "أخبار يعمر",
// };

// export default function NewsPage() {
//   // عرض جميع الأخبار بدون تصنيفات أو فلاتر
//   const filteredNews = newsItems;

//   const featuredNews = newsItems.filter((news) => news.featured);

//   // اختيار الخبر الرئيسي
//   const heroNews = featuredNews[0] || newsItems[0];

//   // خبران جانبيان
//   const sideNews = featuredNews.slice(1, 3);

//   // بقية الأخبار، مع استبعاد الخبر الرئيسي
//   const regularNews = filteredNews.filter(
//     (news) => news.id !== heroNews?.id
//   );

//   return (
//     <>
//       <Head>
//         <title>أخبار الجمعية | جمعية يعمر للعناية بالمساجد</title>
//         <meta
//           name="description"
//           content="تابع آخر أخبار جمعية يعمر للعناية بالمساجد"
//         />
//       </Head>

//       <div
//         className="min-h-screen bg-[#F0F3E7] overflow-hidden"
//         dir="rtl"
//       >
//         {/* الخلفية الهادئة */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#08704C]/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ================= عنوان الصفحة ================= */}
//         <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto">
//                 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#08704C]/10 shadow-sm text-[#08704C] rounded-full text-sm font-bold mb-5">
//                   <Sparkles className="w-4 h-4" />
//                   <span>آخر مستجدات يعمر</span>
//                 </div>

//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
//                   أخبار <span className="text-[#08704C]">يعمر</span>
//                 </h1>

//                 <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//                   تابع آخر أخبار جمعية يعمر، ومشاريعها وإنجازاتها في خدمة
//                   بيوت الله بالمنطقة الشرقية
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* ================= الخبر الرئيسي ================= */}
//         {heroNews && (
//           <section className="px-4 sm:px-6 lg:px-8 pb-20 relative">
//             <div className="container mx-auto relative z-10">

//               <ScrollReveal>
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="w-2 h-9 bg-[#08704C] rounded-full" />

//                   <div>
//                     <p className="text-[#08704C] text-sm font-bold">
//                       جديد يعمر
//                     </p>

//                     <h2 className="text-3xl font-black text-gray-900">
//                       الخبر الأبرز
//                     </h2>
//                   </div>
//                 </div>
//               </ScrollReveal>

//               <div className="grid lg:grid-cols-3 gap-6">

//                 {/* ===== الخبر الكبير ===== */}
//                 <ScrollReveal className="lg:col-span-2">
//                   <article className="group relative min-h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl">

//                     <Image
//                       src={heroNews.image}
//                       alt={heroNews.title}
//                       fill
//                       priority
//                       className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                       sizes="(min-width: 1024px) 65vw, 100vw"
//                     />

//                     {/* طبقة داكنة فوق الصورة */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//                     {/* شارة الخبر */}
//                     <div className="absolute top-6 right-6">
//                       <Badge className="bg-white/90 backdrop-blur text-[#08704C] px-4 py-2 text-sm font-bold border-0">
//                         <Sparkles className="w-4 h-4 ml-2" />
//                         خبر مميز
//                       </Badge>
//                     </div>

//                     {/* محتوى الخبر */}
//                     <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">

//                       <div className="flex items-center gap-3 text-white/80 text-sm mb-5">
//                         <Calendar className="w-4 h-4" />

//                         <ClientOnly>
//                           <span dir="ltr">
//                             {formatDateEn(heroNews.date)}
//                           </span>
//                         </ClientOnly>

//                         <span className="w-1 h-1 bg-white/50 rounded-full" />

//                         <span>{heroNews.author}</span>
//                       </div>

//                       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 max-w-3xl">
//                         {heroNews.title}
//                       </h2>

//                       <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-7 line-clamp-2">
//                         {heroNews.description}
//                       </p>

//                       <a href={heroNews.url}>
//                         <Button className="group/btn bg-white text-[#08704C] hover:bg-[#08704C] hover:text-white rounded-xl px-7 py-6 font-bold transition-all">
//                           اكتشف الخبر

//                           <ArrowLeft className="w-5 h-5 mr-3 transition-transform duration-300 group-hover/btn:-translate-x-2" />
//                         </Button>
//                       </a>
//                     </div>
//                   </article>
//                 </ScrollReveal>

//                 {/* ===== الأخبار الجانبية ===== */}
//                 <div className="flex flex-col gap-6">

//                   {sideNews.map((news, index) => (
//                     <ScrollReveal
//                       key={news.id}
//                       delay={index * 120}
//                     >
//                       <a
//                         href={news.url}
//                         className="group block relative h-[238px] rounded-[1.7rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
//                       >
//                         <Image
//                           src={news.image}
//                           alt={news.title}
//                           fill
//                           className="object-cover transition-transform duration-700 group-hover:scale-110"
//                           sizes="(min-width: 1024px) 30vw, 100vw"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

//                         <div className="absolute top-4 right-4">
//                           <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-[#08704C]">
//                             أخبار يعمر
//                           </span>
//                         </div>

//                         <div className="absolute bottom-0 inset-x-0 p-5 text-white">

//                           <div className="flex items-center gap-2 text-xs text-white/70 mb-2">
//                             <Clock className="w-3.5 h-3.5" />

//                             <ClientOnly>
//                               <span dir="ltr">
//                                 {formatDateEn(news.date)}
//                               </span>
//                             </ClientOnly>
//                           </div>

//                           <h3 className="font-black text-lg leading-tight line-clamp-2">
//                             {news.title}
//                           </h3>

//                           <div className="flex items-center gap-2 text-sm font-bold text-white/90 mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                             اقرأ الخبر
//                             <ArrowLeft className="w-4 h-4" />
//                           </div>
//                         </div>
//                       </a>
//                     </ScrollReveal>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ================= جميع الأخبار ================= */}
//         <section className="px-4 sm:px-6 lg:px-8 pb-24 relative">
//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">

//                 <div>
//                   <span className="text-[#08704C] font-bold text-sm">
//                     كل ما هو جديد
//                   </span>

//                   <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
//                     استكشف آخر الأخبار
//                   </h2>
//                 </div>

//                 <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
//                   <span className="w-2 h-2 rounded-full bg-[#4D7A61] animate-pulse" />
//                   {regularNews.length} أخبار متاحة
//                 </div>
//               </div>
//             </ScrollReveal>

//             {/* شبكة أخبار متنوعة */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {regularNews.map((news, index) => (
//                 <ScrollReveal
//                   key={news.id}
//                   delay={(index % 3) * 100}
//                   className={index % 5 === 0 ? "lg:col-span-2" : ""}
//                 >
//                   <article
//                     className={`group relative bg-white rounded-[1.8rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
//                       index % 5 === 0
//                         ? "lg:flex lg:h-[330px]"
//                         : "h-full"
//                     }`}
//                   >
//                     {/* صورة الخبر */}
//                     <div
//                       className={`relative overflow-hidden bg-gray-100 ${
//                         index % 5 === 0
//                           ? "lg:w-1/2 h-64 lg:h-full"
//                           : "aspect-[16/10]"
//                       }`}
//                     >
//                       <Image
//                         src={news.image}
//                         alt={news.title}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                         sizes="(min-width: 1024px) 50vw, 100vw"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                       <div className="absolute top-4 right-4">
//                         <span className="bg-[#08704C]/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
//                           أخبار يعمر
//                         </span>
//                       </div>
//                     </div>

//                     {/* تفاصيل الخبر */}
//                     <div
//                       className={`p-6 flex flex-col ${
//                         index % 5 === 0
//                           ? "lg:w-1/2 lg:justify-center"
//                           : ""
//                       }`}
//                     >
//                       <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
//                         <Calendar className="w-4 h-4 text-[#08704C]" />

//                         <ClientOnly>
//                           <span dir="ltr">
//                             {formatDateEn(news.date)}
//                           </span>
//                         </ClientOnly>
//                       </div>

//                       <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-[#08704C] transition-colors">
//                         {news.title}
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed line-clamp-3 mb-5">
//                         {news.description}
//                       </p>

//                       <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">

//                         <span className="text-xs text-gray-400">
//                           {news.author}
//                         </span>

//                         <a
//                           href={news.url}
//                           className="flex items-center gap-2 text-[#08704C] font-bold text-sm group/link"
//                         >
//                           اقرأ المزيد

//                           <span className="w-7 h-7 rounded-full bg-[#08704C]/10 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#08704C] group-hover/link:text-white">
//                             <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-1" />
//                           </span>
//                         </a>
//                       </div>
//                     </div>
//                   </article>
//                 </ScrollReveal>
//               ))}
//             </div>

//             {/* في حالة عدم وجود أخبار */}
//             {regularNews.length === 0 && (
//               <div className="text-center py-24">
//                 <div className="w-24 h-24 mx-auto rounded-full bg-[#08704C]/10 flex items-center justify-center mb-6">
//                   <Newspaper className="w-10 h-10 text-[#08704C]" />
//                 </div>

//                 <h3 className="text-2xl font-black text-gray-900 mb-2">
//                   لا توجد أخبار حالياً
//                 </h3>

//                 <p className="text-gray-500">
//                   سيتم إضافة أخبار جديدة قريباً
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ================= تابع يعمر ================= */}
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
//                 نشارككم أولاً بأول أخبار الجمعية ومشاريعها وكل ما نقدمه
//                 في خدمة بيوت الله والمجتمع.
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

//         <WhatsAppButton />
//         <SiteFooter />
//       </div>
//     </>
//   );
// }

// import Head from "next/head";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// import {
//   Calendar,
//   ArrowLeft,
//   Newspaper,
//   TrendingUp,
//   Sparkles,
//   Clock,
// } from "lucide-react";

// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { ClientOnly } from "@/components/ClientOnly";

// import {
//   NewsSlider,
//   sliderNewsItems,
// } from "@/components/NewsSlider";

// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // ==============================================
// // تعريف نوع الخبر
// // ==============================================

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
//   date: string;
//   category: "projects" | "events" | "achievements" | "general";
//   image: string;
//   author: string;
//   featured: boolean;
//   url: string;
// }

// // ==============================================
// // الأخبار القديمة
// // ==============================================

// // يمكنك إضافة أخبارك القديمة هنا بنفس البنية.
// // تركتها فارغة لأن بيانات الأخبار القديمة لم تكن
// // موجودة في الكود الذي أرسلته.

// const baseNewsItems: NewsItem[] = [];

// // ==============================================
// // تحويل أخبار السلايدر إلى أخبار الصفحة
// // ==============================================

// const sliderNewsAsNewsPageItems: NewsItem[] =
//   sliderNewsItems.map((item) => ({
//     id: 100 + item.id,
//     title: item.title,
//     description: item.description,
//     content: item.description,
//     url: item.moreUrl,
//     date: item.date,
//     category: "general",
//     image: item.image,
//     author: "جمعية يعمر",
//     featured: true,
//   }));

// // دمج الأخبار القديمة مع أخبار السلايدر

// const newsItems: NewsItem[] = [
//   ...baseNewsItems,
//   ...sliderNewsAsNewsPageItems,
// ];

// // ==============================================
// // تنسيق التاريخ
// // ==============================================

// const gregorianEnFormatter = new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   calendar: "gregory",
//   timeZone: "UTC",
// });

// const formatDateEn = (isoDate: string) =>
//   gregorianEnFormatter.format(new Date(isoDate));

// // ==============================================
// // صفحة الأخبار
// // ==============================================

// export default function NewsPage() {
//   // جميع الأخبار
//   const filteredNews = newsItems;

//   // الأخبار المميزة
//   const featuredNews = newsItems.filter(
//     (news) => news.featured
//   );

//   // الخبر الرئيسي
//   const heroNews = featuredNews[0] || newsItems[0];

//   // خبران جانبيان
//   const sideNews = featuredNews.slice(1, 3);

//   // استبعاد الخبر الرئيسي والأخبار الجانبية
//   // حتى لا تتكرر في شبكة جميع الأخبار
//   const displayedNewsIds = new Set([
//     heroNews?.id,
//     ...sideNews.map((news) => news.id),
//   ]);

//   const regularNews = filteredNews.filter(
//     (news) => !displayedNewsIds.has(news.id)
//   );

//   return (
//     <>
//       {/* ======================================
//           إعدادات الصفحة ومحركات البحث
//       ====================================== */}

//       <Head>
//         <title>
//           أخبار الجمعية | جمعية يعمر للعناية بالمساجد
//         </title>

//         <meta
//           name="description"
//           content="تابع آخر أخبار جمعية يعمر للعناية بالمساجد ومشاريعها وإنجازاتها في خدمة بيوت الله بالمنطقة الشرقية."
//         />

//         <meta
//           property="og:title"
//           content="أخبار جمعية يعمر للعناية بالمساجد"
//         />

//         <meta
//           property="og:description"
//           content="تابع آخر أخبار جمعية يعمر ومشاريعها وإنجازاتها."
//         />
//       </Head>

//       <div
//         className="min-h-screen bg-[#F0F3E7] overflow-hidden"
//         dir="rtl"
//       >

//         {/* ======================================
//             الخلفية الهادئة
//         ====================================== */}

//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#08704C]/5 rounded-full blur-3xl" />

//           <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ======================================
//             عنوان الصفحة
//         ====================================== */}

//         <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
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
//                   تابع آخر أخبار جمعية يعمر، ومشاريعها
//                   وإنجازاتها في خدمة بيوت الله بالمنطقة الشرقية
//                 </p>

//               </div>
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ======================================
//             سلايدر أخبار يعمر
//         ====================================== */}

//         <section className="relative px-4 sm:px-6 lg:px-8 pb-20">

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="flex items-center gap-3 mb-10">

//                 <div className="w-2 h-9 bg-[#08704C] rounded-full" />

//                 <div>
//                   <p className="text-[#08704C] text-sm font-bold">
//                     تابع آخر مستجداتنا
//                   </p>

//                   <h2 className="text-3xl font-black text-gray-900">
//                     أحدث أخبار الجمعية
//                   </h2>
//                 </div>

//               </div>
//             </ScrollReveal>

//             <NewsSlider />

//           </div>

//         </section>

//         {/* ======================================
//             الخبر الرئيسي والأخبار الجانبية
//         ====================================== */}

//         {heroNews && (
//           <section className="px-4 sm:px-6 lg:px-8 pb-20 relative">

//             <div className="container mx-auto relative z-10">

//               <ScrollReveal>
//                 <div className="flex items-center gap-3 mb-8">

//                   <div className="w-2 h-9 bg-[#08704C] rounded-full" />

//                   <div>
//                     <p className="text-[#08704C] text-sm font-bold">
//                       جديد يعمر
//                     </p>

//                     <h2 className="text-3xl font-black text-gray-900">
//                       الخبر الأبرز
//                     </h2>
//                   </div>

//                 </div>
//               </ScrollReveal>

//               <div className="grid lg:grid-cols-3 gap-6">

//                 {/* ======================================
//                     الخبر الكبير
//                 ====================================== */}

//                 <ScrollReveal className="lg:col-span-2">

//                   <article className="group relative min-h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl">

//                     <Image
//                       src={heroNews.image}
//                       alt={heroNews.title}
//                       fill
//                       priority
//                       className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                       sizes="(min-width: 1024px) 65vw, 100vw"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//                     <div className="absolute top-6 right-6">

//                       <Badge className="bg-white/90 backdrop-blur text-[#08704C] px-4 py-2 text-sm font-bold border-0">

//                         <Sparkles className="w-4 h-4 ml-2" />

//                         خبر مميز

//                       </Badge>

//                     </div>

//                     <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">

//                       <div className="flex items-center gap-3 text-white/80 text-sm mb-5">

//                         <Calendar className="w-4 h-4" />

//                         <ClientOnly>
//                           <span dir="ltr">
//                             {formatDateEn(heroNews.date)}
//                           </span>
//                         </ClientOnly>

//                         <span className="w-1 h-1 bg-white/50 rounded-full" />

//                         <span>{heroNews.author}</span>

//                       </div>

//                       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 max-w-3xl">
//                         {heroNews.title}
//                       </h2>

//                       <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-7 line-clamp-2">
//                         {heroNews.description}
//                       </p>

//                       <a
//                         href={heroNews.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Button className="group/btn bg-white text-[#08704C] hover:bg-[#08704C] hover:text-white rounded-xl px-7 py-6 font-bold transition-all">

//                           اكتشف الخبر

//                           <ArrowLeft className="w-5 h-5 mr-3 transition-transform duration-300 group-hover/btn:-translate-x-2" />

//                         </Button>
//                       </a>

//                     </div>

//                   </article>

//                 </ScrollReveal>

//                 {/* ======================================
//                     الأخبار الجانبية
//                 ====================================== */}

//                 <div className="flex flex-col gap-6">

//                   {sideNews.map((news, index) => (

//                     <ScrollReveal
//                       key={news.id}
//                       delay={index * 120}
//                     >

//                       <a
//                         href={news.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group block relative h-[238px] rounded-[1.7rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
//                       >

//                         <Image
//                           src={news.image}
//                           alt={news.title}
//                           fill
//                           className="object-cover transition-transform duration-700 group-hover:scale-110"
//                           sizes="(min-width: 1024px) 30vw, 100vw"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

//                         <div className="absolute top-4 right-4">

//                           <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-[#08704C]">
//                             أخبار يعمر
//                           </span>

//                         </div>

//                         <div className="absolute bottom-0 inset-x-0 p-5 text-white">

//                           <div className="flex items-center gap-2 text-xs text-white/70 mb-2">

//                             <Clock className="w-3.5 h-3.5" />

//                             <ClientOnly>
//                               <span dir="ltr">
//                                 {formatDateEn(news.date)}
//                               </span>
//                             </ClientOnly>

//                           </div>

//                           <h3 className="font-black text-lg leading-tight line-clamp-2">
//                             {news.title}
//                           </h3>

//                           <div className="flex items-center gap-2 text-sm font-bold text-white/90 mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

//                             اقرأ الخبر

//                             <ArrowLeft className="w-4 h-4" />

//                           </div>

//                         </div>

//                       </a>

//                     </ScrollReveal>

//                   ))}

//                 </div>

//               </div>

//             </div>

//           </section>
//         )}

//         {/* ======================================
//             جميع الأخبار
//         ====================================== */}

//         <section className="px-4 sm:px-6 lg:px-8 pb-24 relative">

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>

//               <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">

//                 <div>

//                   <span className="text-[#08704C] font-bold text-sm">
//                     كل ما هو جديد
//                   </span>

//                   <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
//                     استكشف آخر الأخبار
//                   </h2>

//                 </div>

//                 <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">

//                   <span className="w-2 h-2 rounded-full bg-[#4D7A61] animate-pulse" />

//                   {regularNews.length} أخبار متاحة

//                 </div>

//               </div>

//             </ScrollReveal>

//             {/* شبكة الأخبار */}

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {regularNews.map((news, index) => (

//                 <ScrollReveal
//                   key={news.id}
//                   delay={(index % 3) * 100}
//                   className={index % 5 === 0 ? "lg:col-span-2" : ""}
//                 >

//                   <article
//                     className={`group relative bg-white rounded-[1.8rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
//                       index % 5 === 0
//                         ? "lg:flex lg:h-[330px]"
//                         : "h-full"
//                     }`}
//                   >

//                     {/* صورة الخبر */}

//                     <div
//                       className={`relative overflow-hidden bg-gray-100 ${
//                         index % 5 === 0
//                           ? "lg:w-1/2 h-64 lg:h-full"
//                           : "aspect-[16/10]"
//                       }`}
//                     >

//                       <Image
//                         src={news.image}
//                         alt={news.title}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                         sizes="(min-width: 1024px) 50vw, 100vw"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                       <div className="absolute top-4 right-4">

//                         <span className="bg-[#08704C]/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
//                           أخبار يعمر
//                         </span>

//                       </div>

//                     </div>

//                     {/* تفاصيل الخبر */}

//                     <div
//                       className={`p-6 flex flex-col ${
//                         index % 5 === 0
//                           ? "lg:w-1/2 lg:justify-center"
//                           : ""
//                       }`}
//                     >

//                       <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">

//                         <Calendar className="w-4 h-4 text-[#08704C]" />

//                         <ClientOnly>
//                           <span dir="ltr">
//                             {formatDateEn(news.date)}
//                           </span>
//                         </ClientOnly>

//                       </div>

//                       <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-[#08704C] transition-colors">
//                         {news.title}
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed line-clamp-3 mb-5">
//                         {news.description}
//                       </p>

//                       <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">

//                         <span className="text-xs text-gray-400">
//                           {news.author}
//                         </span>

//                         <a
//                           href={news.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 text-[#08704C] font-bold text-sm group/link"
//                         >

//                           اقرأ المزيد

//                           <span className="w-7 h-7 rounded-full bg-[#08704C]/10 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#08704C] group-hover/link:text-white">

//                             <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-1" />

//                           </span>

//                         </a>

//                       </div>

//                     </div>

//                   </article>

//                 </ScrollReveal>

//               ))}

//             </div>

//             {/* لا توجد أخبار */}

//             {regularNews.length === 0 && (

//               <div className="text-center py-24">

//                 <div className="w-24 h-24 mx-auto rounded-full bg-[#08704C]/10 flex items-center justify-center mb-6">

//                   <Newspaper className="w-10 h-10 text-[#08704C]" />

//                 </div>

//                 <h3 className="text-2xl font-black text-gray-900 mb-2">
//                   لا توجد أخبار إضافية حالياً
//                 </h3>

//                 <p className="text-gray-500">
//                   سيتم إضافة أخبار جديدة قريباً
//                 </p>

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
//                 نشارككم أولاً بأول أخبار الجمعية ومشاريعها
//                 وكل ما نقدمه في خدمة بيوت الله والمجتمع.
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

//         {/* ======================================
//             واتساب وتذييل الموقع
//         ====================================== */}

//         <WhatsAppButton />

//         <SiteFooter />

//       </div>
//     </>
//   );
// }
// import Head from "next/head";
// import Image from "next/image";
// import {
//   Calendar,
//   ArrowLeft,
//   Newspaper,
//   Handshake,
//   MapPin,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";

// import { sliderNewsItems } from "@/components/NewsSlider";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";

// type NewsCategory = "general" | "partnership" | "visit";

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   moreUrl: string;
//   category: NewsCategory;
// }

// const categoryByNewsId: Record<number, NewsCategory> = {
//   1: "general",
//   2: "partnership",
//   3: "general",
//   4: "general",
//   5: "partnership",
//   6: "visit",
//   7: "visit",
//   8: "visit",
//   9: "partnership",
//   10: "visit",
//   11: "visit",
//   12: "general",
// };

// const newsItems: NewsItem[] = sliderNewsItems.map((item) => ({
//   ...item,
//   category: categoryByNewsId[item.id] || "general",
// }));

// const formatDate = (isoDate: string) => {
//   return new Intl.DateTimeFormat("en-GB", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     calendar: "gregory",
//     timeZone: "UTC",
//   }).format(new Date(`${isoDate}T00:00:00Z`));
// };

// const categoryLabels: Record<NewsCategory, string> = {
//   general: "أخبار يعمر",
//   partnership: "شراكات يعمر",
//   visit: "زيارات يعمر",
// };

// function NewsCard({ news }: { news: NewsItem }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
//       <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
//         <Image
//           src={news.image}
//           alt={news.title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//           sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//         />

//         <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#08704C] shadow-sm">
//           {categoryLabels[news.category]}
//         </span>
//       </div>

//       <div className="flex flex-1 flex-col p-5 sm:p-6">
//         <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
//           <Calendar className="h-4 w-4 text-[#08704C]" />
//           <time dir="ltr">{formatDate(news.date)}</time>
//         </div>

//         <h3 className="mb-3 text-lg font-black leading-relaxed text-gray-900 transition-colors group-hover:text-[#08704C] sm:text-xl">
//           {news.title}
//         </h3>

//         <p className="mb-6 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
//           {news.description}
//         </p>

//         <div className="flex items-center justify-between border-t border-gray-100 pt-4">
//           <span className="text-xs text-gray-400">جمعية يعمر</span>

//           <a
//             href={news.moreUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 font-bold text-[#08704C] transition-colors hover:text-[#4D7A61]"
//           >
//             اقرأ الخبر
//             <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

// function NewsSection({
//   title,
//   subtitle,
//   items,
//   icon,
//   sectionId,
// }: {
//   title: string;
//   subtitle: string;
//   items: NewsItem[];
//   icon: "news" | "partnership" | "visit";
//   sectionId: string;
// }) {
//   const Icon =
//     icon === "partnership"
//       ? Handshake
//       : icon === "visit"
//         ? MapPin
//         : Newspaper;

//   return (
//     <section
//       id={sectionId}
//       className="relative px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
//     >
//       <div className="container relative z-10 mx-auto">
//         <ScrollReveal>
//           <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <div className="mb-3 flex items-center gap-3">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C]">
//                   <Icon className="h-5 w-5" />
//                 </span>

//                 <span className="text-sm font-bold text-[#08704C]">
//                   {subtitle}
//                 </span>
//               </div>

//               <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
//                 {title}
//               </h2>
//             </div>

//             <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-sm">
//               {items.length} أخبار
//             </span>
//           </div>
//         </ScrollReveal>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {items.map((news, index) => (
//             <ScrollReveal key={news.id} delay={(index % 3) * 80}>
//               <NewsCard news={news} />
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function NewsPage() {
//   const generalNews = newsItems.filter(
//     (news) => news.category === "general"
//   );

//   const partnershipNews = newsItems.filter(
//     (news) => news.category === "partnership"
//   );

//   const visitNews = newsItems.filter(
//     (news) => news.category === "visit"
//   );

//   return (
//     <>
//       <Head>
//         <title>أخبار يعمر | جمعية يعمر للعناية بالمساجد</title>
//         <meta
//           name="description"
//           content="تابع أبرز أخبار جمعية يعمر وشراكاتها وزياراتها ومبادراتها في خدمة بيوت الله بالمنطقة الشرقية."
//         />
//       </Head>

//       <main
//         dir="rtl"
//         className="min-h-screen overflow-hidden bg-[#F0F3E7]"
//       >
//         {/* خلفية الصفحة */}
//         <div className="pointer-events-none fixed inset-0 overflow-hidden">
//           <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#08704C]/5 blur-3xl" />
//           <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#A2B366]/5 blur-3xl" />
//         </div>

//         {/* مقدمة صفحة الأخبار */}
//         <section className="relative px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
//           <div className="container relative z-10 mx-auto">
//             <ScrollReveal>
//               <div className="mx-auto max-w-4xl text-center">
//                 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#08704C]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#08704C] shadow-sm">
//                   <Sparkles className="h-4 w-4" />
//                   آخر مستجدات يعمر
//                 </div>

//                 <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
//                   أخبار <span className="text-[#08704C]">يعمر</span>
//                 </h1>

//                 <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-600 sm:text-xl">
//                   تابع أبرز أخبار جمعية يعمر وشراكاتها وزياراتها ومبادراتها
//                   في خدمة بيوت الله بالمنطقة الشرقية.
//                 </p>

//                 <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
//                   <a
//                     href="#featured-news"
//                     className="inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#08704C]/15 transition-all hover:-translate-y-1 hover:bg-[#065b3e]"
//                   >
//                     تابع آخر مستجداتنا
//                     <ArrowLeft className="h-4 w-4" />
//                   </a>

//                   <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 font-bold text-gray-600">
//                     <Newspaper className="h-4 w-4 text-[#08704C]" />
//                     {newsItems.length} خبرًا
//                   </span>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* أبرز أخبار يعمر: جميع الأخبار */}
//         <div className="relative bg-white/60">
//           <NewsSection
//             sectionId="featured-news"
//             title="أبرز أخبار يعمر"
//             subtitle="جميع أخبار ومستجدات الجمعية في مكان واحد"
//             items={newsItems}
//             icon="news"
//           />
//         </div>

//         {/* شراكات يعمر */}
//         <div className="relative">
//           <NewsSection
//             sectionId="partnership-news"
//             title="شراكات جمعية يعمر"
//             subtitle="نبني علاقات تصنع الأثر"
//             items={partnershipNews}
//             icon="partnership"
//           />
//         </div>

//         {/* زيارات يعمر */}
//         <div className="relative bg-white/60">
//           <NewsSection
//             sectionId="visit-news"
//             title="زيارات يعمر"
//             subtitle="لقاءات وزيارات مثمرة"
//             items={visitNews}
//             icon="visit"
//           />
//         </div>

//         {/* تابع أخبار الجمعية */}
//         <section className="relative mx-4 mb-16 overflow-hidden rounded-[2rem] bg-[#08704C] text-white sm:mx-6 lg:mx-8">
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C] via-[#00946E] to-[#08704C]" />
//           <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full border-[40px] border-white/5" />
//           <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[60px] border-white/5" />

//           <div className="container relative z-10 mx-auto px-6 py-16 text-center sm:py-20">
//             <ScrollReveal>
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">
//                 <TrendingUp className="h-4 w-4" />
//                 كن قريبًا من أخبارنا
//               </div>

//               <h2 className="mb-5 text-3xl font-black sm:text-5xl">
//                 تابع رحلة يعمر في خدمة بيوت الله
//               </h2>

//               <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/80">
//                 نشارككم أولًا بأول أخبار الجمعية وشراكاتها وزياراتها وكل ما
//                 نقدمه في خدمة بيوت الله والمجتمع.
//               </p>

//               <div className="flex flex-wrap justify-center gap-3">
//                 <a
//                   href="https://x.com/Yaamurorg"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-xl bg-white px-7 py-3 font-bold text-[#08704C] transition-colors hover:bg-[#F0F3E7]"
//                 >
//                   تابعنا على X
//                 </a>

//                 <a
//                   href="https://www.instagram.com/yaamurorg/?hl=ar"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-xl border border-white/50 px-7 py-3 font-bold text-white transition-colors hover:bg-white hover:text-[#08704C]"
//                 >
//                   إنستجرام
//                 </a>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         <WhatsAppButton />
//         <SiteFooter />
//       </main>
//     </>
//   );
// }
import Head from "next/head";
import Image from "next/image";

import { Calendar, ArrowLeft, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

import { sliderNewsItems } from "@/components/NewsSlider";

// ======================================
// أنواع البيانات
// ======================================

type NewsCategory = "general" | "partnership" | "visit";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  moreUrl: string;
  category: NewsCategory;
}

// ======================================
// تصنيف الأخبار
// ======================================

// الشراكات: 3 أخبار
const partnershipNewsIds = [2, 5, 9];

// الزيارات: 5 أخبار
const visitNewsIds = [6, 7, 8, 10, 11];

// ======================================
// تجهيز الأخبار من مصدر البيانات الأصلي
// ======================================

const allNews: NewsItem[] = sliderNewsItems.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  date: item.date,
  image: item.image,
  moreUrl: item.moreUrl,

  category: partnershipNewsIds.includes(item.id)
    ? "partnership"
    : visitNewsIds.includes(item.id)
      ? "visit"
      : "general",
}));

// ======================================
// تنسيق التاريخ
// ======================================

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    calendar: "gregory",
    timeZone: "UTC",
  }).format(date);
}

// ======================================
// بطاقة الخبر
// ======================================

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

function NewsCard({ news, index }: NewsCardProps) {
  const categoryLabel =
    news.category === "partnership"
      ? "شراكات"
      : news.category === "visit"
        ? "زيارات"
        : "أخبار يعمر";

  return (
    <ScrollReveal delay={(index % 3) * 80}>
      <Card className="group h-full overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#08704C]/30 hover:shadow-xl">
        {/* صورة الخبر */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute top-4 right-4">
            <Badge className="border-0 bg-white/95 px-3 py-1.5 font-bold text-[#08704C] shadow-sm">
              {categoryLabel}
            </Badge>
          </div>
        </div>

        {/* تفاصيل الخبر */}
        <CardContent className="flex h-full flex-col space-y-4 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4 text-[#08704C]" />

            <span dir="ltr">{formatDate(news.date)}</span>
          </div>

          <h3 className="line-clamp-2 text-xl font-black leading-relaxed text-gray-900 transition-colors group-hover:text-[#08704C]">
            {news.title}
          </h3>

         <p className="line-clamp-3 min-h-[84px] text-base leading-7 text-gray-600">
  {news.description}
</p>

          <div className="border-t border-gray-100 pt-4">
            <a
              href={news.moreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[#08704C] transition-colors hover:text-[#4D7A61]"
            >
              اقرأ المزيد

              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

// ======================================
// عنوان القسم
// ======================================

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  count: number;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  count,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-3 inline-block font-bold text-[#08704C]">
            {eyebrow}
          </span>

          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <p className="mt-3 leading-7 text-gray-500">
            {description}
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-[#08704C]/10 px-4 py-2 text-sm font-bold text-[#08704C]">
          <Newspaper className="h-4 w-4" />
          {count} أخبار
        </div>
      </div>
    </ScrollReveal>
  );
}

// ======================================
// شبكة الأخبار
// ======================================

interface NewsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  news: NewsItem[];
  id: string;
}

function NewsSection({
  eyebrow,
  title,
  description,
  news,
  id,
}: NewsSectionProps) {
  return (
    <section
      id={id}
      className="relative px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          count={news.length}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <NewsCard
              key={item.id}
              news={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// صفحة الأخبار
// ======================================

export default function NewsPage() {
  // جميع الأخبار وعددها 12
  const featuredNews = allNews;

  // أخبار الشراكات وعددها 3
  const partnershipNews = allNews.filter((news) =>
    partnershipNewsIds.includes(news.id)
  );

  // أخبار الزيارات وعددها 5
  const visitNews = allNews.filter((news) =>
    visitNewsIds.includes(news.id)
  );

  return (
    <>
      <Head>
        <title>أخبار الجمعية | جمعية يعمر للعناية بالمساجد</title>

        <meta
          name="description"
          content="تابع أبرز أخبار جمعية يعمر وشراكاتها وزياراتها في خدمة بيوت الله بالمنطقة الشرقية."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main
        dir="rtl"
        className="relative min-h-screen overflow-hidden bg-[#F0F3E7]"
      >
        {/* خلفية زخرفية */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#08704C]/5 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#A2B366]/5 blur-3xl" />
        </div>

        {/* ======================================
            مقدمة الصفحة
        ====================================== */}

        <section className="relative px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <div className="container relative z-10 mx-auto">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#08704C]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#08704C] shadow-sm">
                  <Newspaper className="h-4 w-4" />
                  آخر مستجدات يعمر
                </div>

                <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  أخبار{" "}
                  <span className="text-[#08704C]">يعمر</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg leading-9 text-gray-600 sm:text-xl">
                  تابع أبرز أخبار جمعية يعمر وشراكاتها وزياراتها،
                  ومبادراتها في العناية ببيوت الله بالمنطقة الشرقية.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ======================================
            أبرز أخبار يعمر - 12 خبرًا
        ====================================== */}

        <NewsSection
          id="all-news"
          eyebrow="آخر المستجدات"
          title="أبرز أخبار يعمر"
          description="تابع آخر أخبار الجمعية ومبادراتها وأنشطتها."
          news={featuredNews}
        />

        {/* ======================================
            شراكات يعمر - 3 أخبار
        ====================================== */}

        <div className="mx-auto my-4 h-px w-[90%] bg-[#08704C]/10" />

        <NewsSection
          id="partnerships"
          eyebrow="معًا نصنع الأثر"
          title="شراكات جمعية يعمر"
          description="أخبار الاتفاقيات والشراكات والتعاون مع الجهات المختلفة."
          news={partnershipNews}
        />

        {/* ======================================
            زيارات يعمر - 5 أخبار
        ====================================== */}

        <div className="mx-auto my-4 h-px w-[90%] bg-[#08704C]/10" />

        <NewsSection
          id="visits"
          eyebrow="لقاءات وزيارات"
          title="زيارات يعمر"
          description="أخبار زيارات الجمعية واستقبال الوفود واللقاءات."
          news={visitNews}
        />

        {/* ======================================
            تابع أخبار الجمعية
        ====================================== */}

        <section className="relative mx-4 mb-16 mt-12 overflow-hidden rounded-[2rem] bg-[#08704C] text-white sm:mx-6 lg:mx-8">
          <div className="absolute inset-0 bg-gradient-to-l from-[#08704C] via-[#00946E] to-[#08704C]" />

          <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full border-[40px] border-white/5" />

          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[60px] border-white/5" />

          <div className="container relative z-10 mx-auto px-6 py-14 text-center sm:py-16">
            <ScrollReveal>
              <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">
                كن قريبًا من أخبارنا
              </span>

              <h2 className="mb-5 text-3xl font-black sm:text-4xl">
                تابع رحلة يعمر في خدمة بيوت الله
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/80">
                نشارككم أولًا بأول أخبار الجمعية ومشاريعها وكل ما
                نقدمه في خدمة بيوت الله والمجتمع.
              </p>

              <a
                href="https://x.com/Yaamurorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-xl bg-white px-7 font-bold text-[#08704C] hover:bg-[#F0F3E7]">
                  تابعنا على X
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />
        <SiteFooter />
      </main>
    </>
  );
}