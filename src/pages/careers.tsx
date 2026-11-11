
// // import Head from "next/head";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Building2, Briefcase, MapPin, Clock, Users, FileText, Send, CheckCircle } from "lucide-react";
// // import { ScrollReveal } from "@/components/ScrollReveal";
// // import { WhatsAppButton } from "@/components/WhatsAppButton";
// // import SiteFooter from "@/components/SiteFooter";

// // interface JobPosition {
// //   id: number;
// //   title: string;
// //   department: string;
// //   location: string;
// //   type: "full-time" | "part-time" | "contract";
// //   description: string;
// //   requirements: string[];
// //   responsibilities: string[];
// //   benefits: string[];
// //   urls: string;
// // }

// // const jobPositions: JobPosition[] = [
// //   {
// //     id: 1,
// // title: "أخصائي خدمة عملاء",
// // urls: "https://docs.google.com/forms/d/e/1FAIpQLSdawliStfoNUN6xyWxwp3vfZL-PDn9Fgl03yO0yzKb_8HhSag/viewform",
// // department: "العلاقات وخدمة المستفيدين",
// // location: "الدمام، المنطقة الشرقية",
// // type: "full-time",
// // description: "تعلن جمعية يعمر للعناية بالمساجد عن توفر فرصة وظيفية بمسمى أخصائي خدمة عملاء للمساهمة في التواصل مع المستفيدين وحل المشكلات بكفاءة.",
// // requirements: [
// //   "سعودي الجنسية",
// //   "مهارات عالية في التواصل وحل المشكلات",
// //   "القدرة على العمل تحت الضغط وإنجاز المهام بدقة وكفاءة"
// // ],
// // responsibilities: [
// //   "التواصل مع العملاء والمستفيدين",
// //   "متابعة وحل المشكلات والاستفسارات",
// //   "إدارة المهام اليومية المتعلقة بخدمة العملاء"
// // ],
// // benefits: [
// //   "رواتب مجزية",
// //   "تأمين طبي",
// //   "دورات تدريبية",
// //   "بيئة عمل محفزة"
// // ]

// //   },
// //   {
// //    id: 2,
// // title: "أخصائي مشتريات",
// // urls: "https://docs.google.com/forms/d/e/1FAIpQLSdawliStfoNUN6xyWxwp3vfZL-PDn9Fgl03yO0yzKb_8HhSag/viewform",
// // department: "إدارة المشتريات",
// // location: "الدمام، المنطقة الشرقية",
// // type: "full-time",
// // description: "تعلن جمعية يعمر للعناية بالمساجد عن توفر فرصة وظيفية بمسمى أخصائي مشتريات لتولي مهام شراء المستلزمات ومتابعة العقود والمناقصات.",
// // requirements: [
// //   "سعودي الجنسية",
// //   "خبرة لا تقل عن سنتين في مشتريات المقاولات",
// //   "إجادة اللغة الإنجليزية قراءة وكتابة ومحادثة",
// //   "مهارات تفاوض عالية ودقة في إنجاز الأعمال"
// // ],
// // responsibilities: [
// //   "تنفيذ عمليات شراء المستلزمات والعقود",
// //   "التواصل مع الموردين ومتابعة العروض",
// //   "إعداد وتجهيز ملفات المشتريات والمناقصات",
// //   "متابعة تنفيذ الطلبات وضمان الالتزام بالمواصفات"
// // ],
// // benefits: [
// //   "رواتب مجزية",
// //   "تأمين طبي",
// //   "دورات تدريبية",
// //   "بيئة عمل محفزة"
// // ]

// //   }
// // ];

// // const jobTypeLabels = {
// //   "full-time": "دوام كامل",
// //   "part-time": "دوام جزئي",
// //   "contract": "عقد محدد"
// // };

// // const jobTypeColors = {
// //   "full-time": { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
// //   "part-time": { bg: "bg-[#4D7A61]/10", text: "text-[#4D7A61]", border: "border-[#4D7A61]/30" },
// //   "contract": { bg: "bg-[#A2B366]/10", text: "text-[#A2B366]", border: "border-[#A2B366]/30" }
// // };

// // export default function CareersPage() {
// //   return (
// //     <>
// //       <Head>
// //         <title>الفرص الوظيفية | جمعية يعمر لعناية المساجد</title>
// //         <meta name="description" content="انضم إلى فريق يعمر - فرص وظيفية وتطوعية في خدمة بيوت الله" />
// //       </Head>

// //       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
// //         <div className="fixed inset-0 pointer-events-none overflow-hidden">
// //           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
// //         </div>

       

// //         <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
// //           <div className="container mx-auto relative z-10">
// //             <ScrollReveal>
// //               <div className="text-center max-w-4xl mx-auto mb-12">
// //                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
// //                   انضم إلى فريقنا
// //                 </span>
// //                 <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
// //                   الفرص الوظيفية
// //                 </h1>
// //                 <p className="text-xl text-gray-600 leading-relaxed">
// //                   كن جزءاً من فريق يعمر واحصل على فرصة المساهمة في خدمة بيوت الله. نوفر بيئة عمل إيمانية محفزة ومزايا تنافسية
// //                 </p>
// //               </div>
// //             </ScrollReveal>

// //             <ScrollReveal delay={100}>
// //               <div className="grid md:grid-cols-3 gap-6 mb-16">
// //                 <Card className="border-2 border-[#08704C]/20 bg-gradient-to-br from-white to-[#08704C]/5">
// //                   <CardContent className="p-6 text-center">
// //                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
// //                       <Briefcase className="w-8 h-8 text-white" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{jobPositions.length}+</h3>
// //                     <p className="text-gray-600">فرصة وظيفية متاحة</p>
// //                   </CardContent>
// //                 </Card>

// //                 <Card className="border-2 border-[#4D7A61]/20 bg-gradient-to-br from-white to-[#4D7A61]/5">
// //                   <CardContent className="p-6 text-center">
// //                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
// //                       <Users className="w-8 h-8 text-white" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold text-gray-900 mb-2">16+</h3>
// //                     <p className="text-gray-600">موظف في فريقنا</p>
// //                   </CardContent>
// //                 </Card>

// //                 <Card className="border-2 border-[#A2B366]/20 bg-gradient-to-br from-white to-[#A2B366]/5">
// //                   <CardContent className="p-6 text-center">
// //                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
// //                       <CheckCircle className="w-8 h-8 text-white" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
// //                     <p className="text-gray-600">بيئة عمل محفزة</p>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </ScrollReveal>
// //           </div>
// //         </section>

// //         <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
// //           <div className="container mx-auto relative z-10">
// //             <ScrollReveal>
// //               <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">الوظائف المتاحة</h2>
// //             </ScrollReveal>

// //             <div className="space-y-6">
// //               {jobPositions.map((job, index) => {
// //                 const colors = jobTypeColors[job.type];
// //                 return (
// //                   <ScrollReveal key={job.id} delay={index * 50}>
// //                     <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#08704C]/30 bg-white">
// //                       <CardHeader className="border-b border-gray-100">
// //                         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
// //                           <div className="flex-1">
// //                             <div className="flex items-start gap-3 mb-3">
// //                               <div className="w-12 h-12 bg-[#08704C]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#08704C] transition-colors">
// //                                 <Briefcase className="w-6 h-6 text-[#08704C] group-hover:text-white transition-colors" />
// //                               </div>
// //                               <div className="flex-1">
// //                                 <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#08704C] transition-colors">
// //                                   {job.title}
// //                                 </CardTitle>
// //                                 <p className="text-gray-600">{job.description}</p>
// //                               </div>
// //                             </div>

// //                             <div className="flex flex-wrap gap-3 mt-4">
// //                               <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
// //                                 <Clock className="w-3 h-3 ml-1" />
// //                                 {jobTypeLabels[job.type]}
// //                               </Badge>
// //                               <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-bold">
// //                                 <Building2 className="w-3 h-3 ml-1" />
// //                                 {job.department}
// //                               </Badge>
// //                               <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-bold">
// //                                 <MapPin className="w-3 h-3 ml-1" />
// //                                 {job.location}
// //                               </Badge>
// //                             </div>
// //                           </div>
// //                             <a href={job.urls}>
// //                           <Button className="bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white shadow-lg md:mt-0">
// //                             <Send className="w-4 h-4 ml-2" />
// //                             قدّم الآن
// //                           </Button>
// //                           </a>
// //                         </div>
// //                       </CardHeader>

// //                       <CardContent className="p-6">
// //                         <div className="grid md:grid-cols-3 gap-6">
// //                           <div>
// //                             <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
// //                               <FileText className="w-5 h-5 text-[#08704C]" />
// //                               المتطلبات
// //                             </h4>
// //                             <ul className="space-y-2">
// //                               {job.requirements.map((req, idx) => (
// //                                 <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
// //                                   <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
// //                                   <span>{req}</span>
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           </div>

// //                           <div>
// //                             <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
// //                               <CheckCircle className="w-5 h-5 text-[#08704C]" />
// //                               المهام
// //                             </h4>
// //                             <ul className="space-y-2">
// //                               {job.responsibilities.map((resp, idx) => (
// //                                 <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
// //                                   <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
// //                                   <span>{resp}</span>
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           </div>

// //                           <div>
// //                             <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
// //                               <CheckCircle className="w-5 h-5 text-[#08704C]" />
// //                               المزايا
// //                             </h4>
// //                             <ul className="space-y-2">
// //                               {job.benefits.map((benefit, idx) => (
// //                                 <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
// //                                   <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
// //                                   <span>{benefit}</span>
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           </div>
// //                         </div>
// //                       </CardContent>
// //                     </Card>
// //                   </ScrollReveal>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </section>

// //         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
// //           <div className="absolute inset-0 pattern-grid opacity-10"></div>
// //           <div className="container mx-auto relative z-10 text-center">
// //             <ScrollReveal>
// //               <h2 className="text-4xl font-black mb-6">لم تجد الوظيفة المناسبة؟</h2>
// //               <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
// //                 أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرص مناسبة لمؤهلاتك
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <a href="https://wa.me/966920011240">
// //                 <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
// //                   <Send className="w-5 h-5 ml-2" />
// //                   أرسل سيرتك الذاتية
// //                 </Button>
// //                 </a>

// //                  <a href="https://wa.me/966920011240">
// //                   <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
// //                     تواصل معنا
// //                   </Button>
// //                   </a>
                
// //               </div>
// //             </ScrollReveal>
// //           </div>
// //         </section>

// //         <WhatsAppButton />

// //         <SiteFooter />
// //       </div>
// //     </>
// //   );
// // }

// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import SiteFooter from "@/components/SiteFooter";

// import {
//   ArrowLeft,
//   Briefcase,
//   MapPin,
//   Clock,
//   Users,
//   FileText,
//   Send,
//   CheckCircle2,
//   Building2,
//   Wallet,
//   HeartHandshake,
//   Sparkles,
//   GraduationCap,
//   ClipboardList,
//   ShieldCheck,
//   MessageCircle,
//   BadgeCheck,
// } from "lucide-react";

// // ==============================================
// // أنواع البيانات
// // ==============================================

// interface JobPosition {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: "full-time" | "part-time" | "contract";
//   description: string;
//   requirements: string[];
//   responsibilities: string[];
//   benefits: string[];
//   urls: string;
// }

// // ==============================================
// // بيانات الوظائف
// // ==============================================

// const applicationUrl =
//   "https://docs.google.com/forms/d/e/1FAIpQLSdawliStfoNUN6xyWxwp3vfZL-PDn9Fgl03yO0yzKb_8HhSag/viewform";

// const whatsappUrl = "https://wa.me/966920011240";

// const jobPositions: JobPosition[] = [
//   {
//     id: 1,
//     title: "أخصائي خدمة عملاء",
//     urls: applicationUrl,
//     department: "العلاقات وخدمة المستفيدين",
//     location: "الدمام، المنطقة الشرقية",
//     type: "full-time",
//     description:
//       "تعلن جمعية يعمر للعناية بالمساجد عن توفر فرصة وظيفية بمسمى أخصائي خدمة عملاء للمساهمة في التواصل مع المستفيدين وحل المشكلات بكفاءة.",
//     requirements: [
//       "سعودي الجنسية",
//       "مهارات عالية في التواصل وحل المشكلات",
//       "القدرة على العمل تحت الضغط وإنجاز المهام بدقة وكفاءة",
//     ],
//     responsibilities: [
//       "التواصل مع العملاء والمستفيدين",
//       "متابعة وحل المشكلات والاستفسارات",
//       "إدارة المهام اليومية المتعلقة بخدمة العملاء",
//     ],
//     benefits: [
//       "رواتب مجزية",
//       "تأمين طبي",
//       "دورات تدريبية",
//       "بيئة عمل محفزة",
//     ],
//   },
//   {
//     id: 2,
//     title: "أخصائي مشتريات",
//     urls: applicationUrl,
//     department: "إدارة المشتريات",
//     location: "الدمام، المنطقة الشرقية",
//     type: "full-time",
//     description:
//       "تعلن جمعية يعمر للعناية بالمساجد عن توفر فرصة وظيفية بمسمى أخصائي مشتريات لتولي مهام شراء المستلزمات ومتابعة العقود والمناقصات.",
//     requirements: [
//       "سعودي الجنسية",
//       "خبرة لا تقل عن سنتين في مشتريات المقاولات",
//       "إجادة اللغة الإنجليزية قراءة وكتابة ومحادثة",
//       "مهارات تفاوض عالية ودقة في إنجاز الأعمال",
//     ],
//     responsibilities: [
//       "تنفيذ عمليات شراء المستلزمات والعقود",
//       "التواصل مع الموردين ومتابعة العروض",
//       "إعداد وتجهيز ملفات المشتريات والمناقصات",
//       "متابعة تنفيذ الطلبات وضمان الالتزام بالمواصفات",
//     ],
//     benefits: [
//       "رواتب مجزية",
//       "تأمين طبي",
//       "دورات تدريبية",
//       "بيئة عمل محفزة",
//     ],
//   },
// ];

// // ==============================================
// // بيانات مساعدة
// // ==============================================

// const jobTypeLabels = {
//   "full-time": "دوام كامل",
//   "part-time": "دوام جزئي",
//   contract: "عقد محدد",
// };

// const jobTypeStyles = {
//   "full-time": "bg-[#08704C]/10 text-[#08704C] border-[#08704C]/20",
//   "part-time": "bg-[#4D7A61]/10 text-[#4D7A61] border-[#4D7A61]/20",
//   contract: "bg-[#A2B366]/10 text-[#A2B366] border-[#A2B366]/20",
// };

// // ==============================================
// // مكونات مساعدة
// // ==============================================

// function InfoPill({
//   icon: Icon,
//   children,
// }: {
//   icon: React.ElementType;
//   children: React.ReactNode;
// }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 px-3.5 py-2 text-xs sm:text-sm text-gray-600 font-semibold">
//       <Icon className="w-4 h-4 text-[#08704C] shrink-0" />
//       {children}
//     </span>
//   );
// }

// function JobList({
//   title,
//   icon: Icon,
//   items,
//   tone = "green",
// }: {
//   title: string;
//   icon: React.ElementType;
//   items: string[];
//   tone?: "green" | "brown" | "teal";
// }) {
//   const tones = {
//     green: "bg-[#08704C]/10 text-[#08704C]",
//     brown: "bg-[#A2B366]/10 text-[#A2B366]",
//     teal: "bg-[#4D7A61]/10 text-[#4D7A61]",
//   };

//   return (
//     <div className="h-full rounded-2xl bg-[#FAFAF8] border border-gray-100 p-5 sm:p-6">
//       <div className="flex items-center gap-3 mb-5">
//         <div
//           className={`w-10 h-10 rounded-xl flex items-center justify-center ${tones[tone]}`}
//         >
//           <Icon className="w-5 h-5" />
//         </div>

//         <h4 className="font-black text-gray-900">{title}</h4>
//       </div>

//       <ul className="space-y-3">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-start gap-2.5">
//             <CheckCircle2 className="w-4 h-4 text-[#08704C] mt-1 shrink-0" />
//             <span className="text-sm text-gray-600 leading-7">{item}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // ==============================================
// // صفحة الفرص الوظيفية
// // ==============================================

// export default function CareersPage() {
//   return (
//     <>
//       <Head>
//         <title>الفرص الوظيفية | جمعية يعمر للعناية بالمساجد</title>

//         <meta
//           name="description"
//           content="انضم إلى فريق جمعية يعمر للعناية بالمساجد. اكتشف الفرص الوظيفية المتاحة وقدم طلبك للمساهمة في خدمة بيوت الله."
//         />

//         <meta
//           property="og:title"
//           content="الفرص الوظيفية | جمعية يعمر"
//         />

//         <meta
//           property="og:description"
//           content="كن جزءًا من فريق يعمر وساهم في خدمة بيوت الله."
//         />

//         <meta name="robots" content="index, follow" />
//       </Head>

//       <main
//         className="min-h-screen bg-[#F0F3E7] text-gray-900 overflow-hidden"
//         dir="rtl"
//       >
//         {/* الخلفية */}

//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#08704C]/5 blur-3xl" />
//           <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A2B366]/5 blur-3xl" />
//         </div>

//         {/* ======================================
//             1. الواجهة الرئيسية
//         ====================================== */}

//         <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <ScrollReveal>
//                 <div className="inline-flex items-center gap-2 rounded-full bg-[#08704C]/10 text-[#08704C] px-5 py-2.5 text-sm font-bold mb-7">
//                   <Sparkles className="w-4 h-4" />
//                   انضم إلى فريقنا
//                 </div>

//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-7">
//                   الفرص الوظيفية
//                   <span className="block text-[#08704C] mt-3">
//                     كن جزءًا من الأثر
//                   </span>
//                 </h1>

//                 <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
//                   كن جزءًا من فريق يعمر واحصل على فرصة المساهمة في خدمة
//                   بيوت الله. نوفر بيئة عمل إيمانية محفزة ومزايا تنافسية.
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-3 mt-8">
//                   <a href="#available-jobs">
//                     <Button className="bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-7 py-6 font-bold shadow-lg shadow-[#08704C]/20">
//                       استعرض الوظائف
//                       <ArrowLeft className="w-5 h-5 mr-3" />
//                     </Button>
//                   </a>

//                   <a href="contact" target="_blank" rel="noreferrer">
//                     <Button
//                       variant="outline"
//                       className="border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C]/5 rounded-xl px-7 py-6 font-bold"
//                     >
//                       <MessageCircle className="w-5 h-5 ml-2" />
//                       تواصل معنا
//                     </Button>
//                   </a>
//                 </div>
//               </ScrollReveal>
//             </div>

//             {/* الإحصائيات */}

//             <ScrollReveal delay={120}>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16">
//                 <Card className="border border-[#08704C]/10 bg-white shadow-sm rounded-3xl">
//                   <CardContent className="p-6 sm:p-7 text-center">
//                     <div className="w-14 h-14 mx-auto rounded-2xl bg-[#08704C]/10 flex items-center justify-center mb-4">
//                       <Briefcase className="w-7 h-7 text-[#08704C]" />
//                     </div>

//                     <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
//                       {jobPositions.length}+
//                     </p>

//                     <p className="text-sm text-gray-500 font-semibold">
//                       فرصة وظيفية متاحة
//                     </p>
//                   </CardContent>
//                 </Card>

//                 <Card className="border border-[#4D7A61]/15 bg-white shadow-sm rounded-3xl">
//                   <CardContent className="p-6 sm:p-7 text-center">
//                     <div className="w-14 h-14 mx-auto rounded-2xl bg-[#4D7A61]/10 flex items-center justify-center mb-4">
//                       <Users className="w-7 h-7 text-[#4D7A61]" />
//                     </div>

//                     <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
//                       16+
//                     </p>

//                     <p className="text-sm text-gray-500 font-semibold">
//                       موظف في فريقنا
//                     </p>
//                   </CardContent>
//                 </Card>

//                 <Card className="border border-[#A2B366]/15 bg-white shadow-sm rounded-3xl">
//                   <CardContent className="p-6 sm:p-7 text-center">
//                     <div className="w-14 h-14 mx-auto rounded-2xl bg-[#A2B366]/10 flex items-center justify-center mb-4">
//                       <HeartHandshake className="w-7 h-7 text-[#A2B366]" />
//                     </div>

//                     <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
//                       100%
//                     </p>

//                     <p className="text-sm text-gray-500 font-semibold">
//                       بيئة عمل محفزة
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* ======================================
//             2. الوظائف المتاحة
//         ====================================== */}

//         <section
//           id="available-jobs"
//           className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white"
//         >
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-2xl mx-auto mb-14">
//                 <span className="text-[#08704C] text-sm font-bold">
//                   انطلق في مسيرتك المهنية
//                 </span>

//                 <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
//                   الوظائف المتاحة
//                 </h2>

//                 <p className="text-gray-500 leading-relaxed">
//                   تعرف على الفرص الوظيفية المتاحة لدينا، واختر الفرصة
//                   التي تناسب مؤهلاتك وخبراتك.
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="space-y-8">
//               {jobPositions.map((job, index) => (
//                 <ScrollReveal key={job.id} delay={index * 100}>
//                   <Card className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#08704C]/25 transition-all duration-500">
//                     {/* رأس البطاقة */}

//                     <div className="h-2 bg-gradient-to-l from-[#08704C] via-[#4D7A61] to-[#A2B366]" />

//                     <CardContent className="p-5 sm:p-8 lg:p-10">
//                       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
//                         <div className="flex items-start gap-4 flex-1">
//                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#08704C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08704C] transition-colors duration-300">
//                             <Briefcase className="w-7 h-7 text-[#08704C] group-hover:text-white transition-colors" />
//                           </div>

//                           <div className="flex-1">
//                             <div className="flex flex-wrap items-center gap-3 mb-3">
//                               <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-[#08704C] transition-colors">
//                                 {job.title}
//                               </h3>

//                               <span
//                                 className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
//                                   jobTypeStyles[job.type]
//                                 }`}
//                               >
//                                 <Clock className="w-3.5 h-3.5" />
//                                 {jobTypeLabels[job.type]}
//                               </span>
//                             </div>

//                             <p className="text-gray-600 leading-loose text-sm sm:text-base">
//                               {job.description}
//                             </p>
//                           </div>
//                         </div>

//                         <a
//                           href={job.urls}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="shrink-0"
//                         >
//                           <Button className="w-full lg:w-auto bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-7 py-6 font-bold shadow-lg shadow-[#08704C]/15">
//                             <Send className="w-4 h-4 ml-2" />
//                             قدّم الآن
//                             <ArrowLeft className="w-4 h-4 mr-2" />
//                           </Button>
//                         </a>
//                       </div>

//                       {/* معلومات الوظيفة */}

//                       <div className="flex flex-wrap gap-2.5 mb-8 pb-8 border-b border-gray-100">
//                         <InfoPill icon={Building2}>
//                           {job.department}
//                         </InfoPill>

//                         <InfoPill icon={MapPin}>
//                           {job.location}
//                         </InfoPill>

//                         <InfoPill icon={Clock}>
//                           {jobTypeLabels[job.type]}
//                         </InfoPill>
//                       </div>

//                       {/* تفاصيل الوظيفة */}

//                       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//                         <JobList
//                           title="المتطلبات"
//                           icon={GraduationCap}
//                           items={job.requirements}
//                           tone="green"
//                         />

//                         <JobList
//                           title="المهام والمسؤوليات"
//                           icon={ClipboardList}
//                           items={job.responsibilities}
//                           tone="teal"
//                         />

//                         <JobList
//                           title="المزايا الوظيفية"
//                           icon={ShieldCheck}
//                           items={job.benefits}
//                           tone="brown"
//                         />
//                       </div>

//                       {/* زر التقديم أسفل البطاقة */}

//                       <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-[#F0F3E7] p-5">
//                         <div className="flex items-center gap-3">
//                           <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
//                             <BadgeCheck className="w-6 h-6 text-[#08704C]" />
//                           </div>

//                           <div>
//                             <p className="font-black text-gray-900 text-sm">
//                               هل تجد هذه الوظيفة مناسبة لك؟
//                             </p>

//                             <p className="text-xs text-gray-500 mt-1">
//                               أرسل طلبك عبر نموذج التقديم الإلكتروني.
//                             </p>
//                           </div>
//                         </div>

//                         <a
//                           href={job.urls}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Button
//                             variant="outline"
//                             className="w-full sm:w-auto border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C] hover:text-white rounded-xl px-6 font-bold"
//                           >
//                             التقديم على الوظيفة
//                             <ArrowLeft className="w-4 h-4 mr-2" />
//                           </Button>
//                         </a>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ======================================
//             3. لماذا تنضم إلى يعمر؟
//         ====================================== */}

//         <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//           <div className="container mx-auto">
//             <ScrollReveal>
//               <div className="text-center max-w-2xl mx-auto mb-12">
//                 <span className="text-[#08704C] text-sm font-bold">
//                   بيئة عمل تصنع الأثر
//                 </span>

//                 <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
//                   لماذا تنضم إلى فريق يعمر؟
//                 </h2>

//                 <p className="text-gray-500 leading-relaxed">
//                   نؤمن بأن فريق العمل هو أساس نجاحنا، ونسعى إلى توفير
//                   بيئة تساعد على التطور والإنجاز والمساهمة في خدمة بيوت الله.
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {[
//                 {
//                   icon: HeartHandshake,
//                   title: "رسالة ذات أثر",
//                   description:
//                     "المساهمة في خدمة بيوت الله وتحقيق أثر إيجابي في المجتمع.",
//                 },
//                 {
//                   icon: Wallet,
//                   title: "مزايا تنافسية",
//                   description:
//                     "رواتب مجزية وتأمين طبي ومزايا تساعد على الاستقرار الوظيفي.",
//                 },
//                 {
//                   icon: GraduationCap,
//                   title: "التطوير المستمر",
//                   description:
//                     "فرص للتعلم والتدريب وتنمية المهارات والخبرات المهنية.",
//                 },
//                 {
//                   icon: Users,
//                   title: "فريق متعاون",
//                   description:
//                     "العمل ضمن فريق يؤمن بالتعاون والاحترام وتحقيق الأهداف المشتركة.",
//                 },
//                 {
//                   icon: Sparkles,
//                   title: "بيئة محفزة",
//                   description:
//                     "بيئة عمل إيمانية محفزة تشجع على المبادرة والإبداع.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "الجودة والإتقان",
//                   description:
//                     "العمل وفق قيم الجودة والإخلاص والإحسان في خدمة بيوت الله.",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <ScrollReveal key={item.title} delay={index * 70}>
//                     <div className="h-full rounded-3xl bg-white border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
//                       <div className="w-14 h-14 rounded-2xl bg-[#08704C]/10 flex items-center justify-center mb-5 group-hover:bg-[#08704C] transition-colors">
//                         <Icon className="w-7 h-7 text-[#08704C] group-hover:text-white transition-colors" />
//                       </div>

//                       <h3 className="text-lg font-black text-gray-900 mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-sm text-gray-500 leading-loose">
//                         {item.description}
//                       </p>
//                     </div>
//                   </ScrollReveal>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ======================================
//             4. إرسال السيرة الذاتية والتواصل
//         ====================================== */}

//         <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
//           <div className="container mx-auto">
//             <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08704C] text-white">
//               <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full border-[50px] border-white/5" />
//               <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[60px] border-white/5" />

//               <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
//                 <ScrollReveal>
//                   <span className="inline-flex items-center gap-2 text-white/75 text-sm font-bold mb-5">
//                     <HeartHandshake className="w-5 h-5" />
//                     فرصتك القادمة قد تبدأ هنا
//                   </span>

//                   <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
//                     لم تجد الوظيفة المناسبة؟
//                   </h2>

//                   <p className="text-white/80 text-base sm:text-lg leading-loose max-w-xl">
//                     أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرص
//                     مناسبة لمؤهلاتك وخبراتك.
//                   </p>

//                   <div className="flex items-center gap-3 mt-7">
//                     <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
//                       <FileText className="w-5 h-5 text-white" />
//                     </div>

//                     <p className="text-sm text-white/80">
//                       يسعدنا التعرف على الكفاءات الراغبة في الانضمام إلى فريقنا.
//                     </p>
//                   </div>
//                 </ScrollReveal>

//                 <ScrollReveal delay={120}>
//                   <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-sm p-6 sm:p-8">
//                     <h3 className="text-xl font-black mb-3">
//                       يسعدنا تواصلك معنا
//                     </h3>

//                     <p className="text-sm text-white/75 leading-relaxed mb-7">
//                       يمكنك إرسال سيرتك الذاتية أو الاستفسار عن الفرص
//                       الوظيفية المتاحة عبر واتساب.
//                     </p>

//                     <div className="space-y-3">
//                       <a
//                         href={whatsappUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block"
//                       >
//                         <Button className="w-full bg-white hover:bg-gray-100 text-[#08704C] rounded-xl py-6 font-black text-base">
//                           <Send className="w-5 h-5 ml-2" />
//                           أرسل سيرتك الذاتية
//                           <ArrowLeft className="w-5 h-5 mr-2" />
//                         </Button>
//                       </a>

//                       <a
//                         href={whatsappUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block"
//                       >
//                         <Button
//                           variant="outline"
//                           className="w-full border-white/40 text-white hover:bg-white hover:text-[#08704C] rounded-xl py-6 font-bold text-base"
//                         >
//                           <MessageCircle className="w-5 h-5 ml-2" />
//                           تواصل معنا عبر واتساب
//                         </Button>
//                       </a>
//                     </div>

//                     <p className="text-center text-xs text-white/60 mt-5">
//                       جمعية يعمر للعناية بالمساجد
//                     </p>
//                   </div>
//                 </ScrollReveal>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ======================================
//             5. التذييل
//         ====================================== */}

//         <WhatsAppButton />
//         <SiteFooter />
//       </main>
//     </>
//   );
// }
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Users,
  FileText,
  Send,
  CheckCircle2,
  Building2,
  Wallet,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

// ==============================================
// أنواع البيانات
// ==============================================

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  urls: string;
}

// ==============================================
// بيانات الوظائف
// ==============================================

const applicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdawliStfoNUN6xyWxwp3vfZL-PDn9Fgl03yO0yzKb_8HhSag/viewform";

const whatsappUrl = "https://wa.me/966920011240";

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "مهندس مشاريع",
    urls: applicationUrl,
    department: "إدارة المشاريع",
    location: "الدمام، المنطقة الشرقية",
    type: "full-time",
    description:
      "تعلن جمعية يعمر للعناية بالمساجد عن توفر شاغر وظيفي بمسمى مهندس مشاريع للمساهمة في متابعة وتنسيق مشاريع البناء والصيانة والتشغيل الخاصة بالمساجد.",
    requirements: [
      "مؤهل جامعي في الهندسة بتخصص مناسب لطبيعة المشاريع",
      "مهارات تنظيم وتخطيط ومتابعة المشاريع",
      "القدرة على إعداد التقارير الفنية والتنسيق مع فرق العمل",
    ],
    responsibilities: [
      "متابعة سير تنفيذ المشاريع وفق الخطط والجداول الزمنية",
      "التنسيق مع المقاولين والجهات ذات العلاقة",
      "المساهمة في متابعة جودة الأعمال وإعداد تقارير تقدم المشاريع",
    ],
    benefits: [
      "فرصة للمساهمة في مشاريع العناية ببيوت الله",
      "العمل ضمن فريق متخصص ومتعاون",
      "بيئة عمل تدعم التطور المهني",
    ],
  },
];

// ==============================================
// بيانات مساعدة
// ==============================================

const jobTypeLabels = {
  "full-time": "دوام كامل",
  "part-time": "دوام جزئي",
  contract: "عقد محدد",
};

const jobTypeStyles = {
  "full-time": "bg-[#08704C]/10 text-[#08704C] border-[#08704C]/20",
  "part-time": "bg-[#4D7A61]/10 text-[#4D7A61] border-[#4D7A61]/20",
  contract: "bg-[#A2B366]/10 text-[#A2B366] border-[#A2B366]/20",
};

// ==============================================
// مكونات مساعدة
// ==============================================

function InfoPill({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 px-3.5 py-2 text-xs sm:text-sm text-gray-600 font-semibold">
      <Icon className="w-4 h-4 text-[#08704C] shrink-0" />
      {children}
    </span>
  );
}

function JobList({
  title,
  icon: Icon,
  items,
  tone = "green",
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  tone?: "green" | "brown" | "teal";
}) {
  const tones = {
    green: "bg-[#08704C]/10 text-[#08704C]",
    brown: "bg-[#A2B366]/10 text-[#A2B366]",
    teal: "bg-[#4D7A61]/10 text-[#4D7A61]",
  };

  return (
    <div className="h-full rounded-2xl bg-[#FAFAF8] border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${tones[tone]}`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <h4 className="font-black text-gray-900">{title}</h4>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#08704C] mt-1 shrink-0" />
            <span className="text-sm text-gray-600 leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==============================================
// صفحة الفرص الوظيفية
// ==============================================

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>الفرص الوظيفية | جمعية يعمر للعناية بالمساجد</title>

        <meta
          name="description"
          content="انضم إلى فريق جمعية يعمر للعناية بالمساجد. اكتشف الفرص الوظيفية المتاحة وقدم طلبك للمساهمة في خدمة بيوت الله."
        />

        <meta
          property="og:title"
          content="الفرص الوظيفية | جمعية يعمر"
        />

        <meta
          property="og:description"
          content="كن جزءًا من فريق يعمر وساهم في خدمة بيوت الله."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <main
        className="min-h-screen bg-[#F0F3E7] text-gray-900 overflow-hidden"
        dir="rtl"
      >
        {/* الخلفية */}

        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#08704C]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A2B366]/5 blur-3xl" />
        </div>

        {/* ======================================
            1. الواجهة الرئيسية
        ====================================== */}

        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#08704C]/10 text-[#08704C] px-5 py-2.5 text-sm font-bold mb-7">
                  <Sparkles className="w-4 h-4" />
                  انضم إلى فريقنا
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-7">
                  الفرص الوظيفية
                  <span className="block text-[#08704C] mt-3">
                    كن جزءًا من الأثر
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
                  كن جزءًا من فريق يعمر واحصل على فرصة المساهمة في خدمة
                  بيوت الله. نوفر بيئة عمل إيمانية محفزة ومزايا تنافسية.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <a href="#available-jobs">
                    <Button className="bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-7 py-6 font-bold shadow-lg shadow-[#08704C]/20">
                      استعرض الوظائف
                      <ArrowLeft className="w-5 h-5 mr-3" />
                    </Button>
                  </a>

                  <a href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C]/5 rounded-xl px-7 py-6 font-bold"
                    >
                      <MessageCircle className="w-5 h-5 ml-2" />
                      تواصل معنا
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* الإحصائيات */}

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16">
                <Card className="border border-[#08704C]/10 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-6 sm:p-7 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#08704C]/10 flex items-center justify-center mb-4">
                      <Briefcase className="w-7 h-7 text-[#08704C]" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                      {jobPositions.length}
                    </p>

                    <p className="text-sm text-gray-500 font-semibold">
                      فرصة وظيفية متاحة
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-[#4D7A61]/15 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-6 sm:p-7 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#4D7A61]/10 flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-[#4D7A61]" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                      17+
                    </p>

                    <p className="text-sm text-gray-500 font-semibold">
                      موظف في فريقنا
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-[#A2B366]/15 bg-white shadow-sm rounded-3xl">
                  <CardContent className="p-6 sm:p-7 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#A2B366]/10 flex items-center justify-center mb-4">
                      <HeartHandshake className="w-7 h-7 text-[#A2B366]" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                      100%
                    </p>

                    <p className="text-sm text-gray-500 font-semibold">
                      بيئة عمل محفزة
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ======================================
            2. الوظائف المتاحة
        ====================================== */}

        <section
          id="available-jobs"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-[#08704C] text-sm font-bold">
                  انطلق في مسيرتك المهنية
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
                  الوظائف المتاحة
                </h2>

                <p className="text-gray-500 leading-relaxed">
                  تعرف على الفرص الوظيفية المتاحة لدينا، واختر الفرصة
                  التي تناسب مؤهلاتك وخبراتك.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {jobPositions.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 100}>
                  <Card className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#08704C]/25 transition-all duration-500">
                    {/* رأس البطاقة */}

                    <div className="h-2 bg-gradient-to-l from-[#08704C] via-[#4D7A61] to-[#A2B366]" />

                    <CardContent className="p-5 sm:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#08704C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08704C] transition-colors duration-300">
                            <Briefcase className="w-7 h-7 text-[#08704C] group-hover:text-white transition-colors" />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-[#08704C] transition-colors">
                                {job.title}
                              </h3>

                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
                                  jobTypeStyles[job.type]
                                }`}
                              >
                                <Clock className="w-3.5 h-3.5" />
                                {jobTypeLabels[job.type]}
                              </span>
                            </div>

                            <p className="text-gray-600 leading-loose text-sm sm:text-base">
                              {job.description}
                            </p>
                          </div>
                        </div>

                        <a
                          href={job.urls}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0"
                        >
                          <Button className="w-full lg:w-auto bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-7 py-6 font-bold shadow-lg shadow-[#08704C]/15">
                            <Send className="w-4 h-4 ml-2" />
                            قدّم الآن
                            <ArrowLeft className="w-4 h-4 mr-2" />
                          </Button>
                        </a>
                      </div>

                      {/* معلومات الوظيفة */}

                      <div className="flex flex-wrap gap-2.5 mb-8 pb-8 border-b border-gray-100">
                        <InfoPill icon={Building2}>
                          {job.department}
                        </InfoPill>

                        <InfoPill icon={MapPin}>
                          {job.location}
                        </InfoPill>

                        <InfoPill icon={Clock}>
                          {jobTypeLabels[job.type]}
                        </InfoPill>
                      </div>

                      {/* تفاصيل الوظيفة */}

                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <JobList
                          title="المتطلبات"
                          icon={GraduationCap}
                          items={job.requirements}
                          tone="green"
                        />

                        <JobList
                          title="المهام والمسؤوليات"
                          icon={ClipboardList}
                          items={job.responsibilities}
                          tone="teal"
                        />

                        <JobList
                          title="المزايا الوظيفية"
                          icon={ShieldCheck}
                          items={job.benefits}
                          tone="brown"
                        />
                      </div>

                      {/* زر التقديم أسفل البطاقة */}

                      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-[#F0F3E7] p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                            <BadgeCheck className="w-6 h-6 text-[#08704C]" />
                          </div>

                          <div>
                            <p className="font-black text-gray-900 text-sm">
                              هل تجد هذه الوظيفة مناسبة لك؟
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                              أرسل طلبك عبر نموذج التقديم الإلكتروني.
                            </p>
                          </div>
                        </div>

                        <a
                          href={job.urls}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C] hover:text-white rounded-xl px-6 font-bold"
                          >
                            التقديم على الوظيفة
                            <ArrowLeft className="w-4 h-4 mr-2" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            3. لماذا تنضم إلى يعمر؟
        ====================================== */}

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[#08704C] text-sm font-bold">
                  بيئة عمل تصنع الأثر
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
                  لماذا تنضم إلى فريق يعمر؟
                </h2>

                <p className="text-gray-500 leading-relaxed">
                  نؤمن بأن فريق العمل هو أساس نجاحنا، ونسعى إلى توفير
                  بيئة تساعد على التطور والإنجاز والمساهمة في خدمة بيوت الله.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: HeartHandshake,
                  title: "رسالة ذات أثر",
                  description:
                    "المساهمة في خدمة بيوت الله وتحقيق أثر إيجابي في المجتمع.",
                },
                {
                  icon: Wallet,
                  title: "مزايا تنافسية",
                  description:
                    "رواتب مجزية وتأمين طبي ومزايا تساعد على الاستقرار الوظيفي.",
                },
                {
                  icon: GraduationCap,
                  title: "التطوير المستمر",
                  description:
                    "فرص للتعلم والتدريب وتنمية المهارات والخبرات المهنية.",
                },
                {
                  icon: Users,
                  title: "فريق متعاون",
                  description:
                    "العمل ضمن فريق يؤمن بالتعاون والاحترام وتحقيق الأهداف المشتركة.",
                },
                {
                  icon: Sparkles,
                  title: "بيئة محفزة",
                  description:
                    "بيئة عمل إيمانية محفزة تشجع على المبادرة والإبداع.",
                },
                {
                  icon: ShieldCheck,
                  title: "الجودة والإتقان",
                  description:
                    "العمل وفق قيم الجودة والإخلاص والإحسان في خدمة بيوت الله.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal key={item.title} delay={index * 70}>
                    <div className="h-full rounded-3xl bg-white border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#08704C]/10 flex items-center justify-center mb-5 group-hover:bg-[#08704C] transition-colors">
                        <Icon className="w-7 h-7 text-[#08704C] group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-lg font-black text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-loose">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================
            4. إرسال السيرة الذاتية والتواصل
        ====================================== */}

        <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08704C] text-white">
              <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full border-[50px] border-white/5" />
              <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[60px] border-white/5" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
                <ScrollReveal>
                  <span className="inline-flex items-center gap-2 text-white/75 text-sm font-bold mb-5">
                    <HeartHandshake className="w-5 h-5" />
                    فرصتك القادمة قد تبدأ هنا
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
                    لم تجد الوظيفة المناسبة؟
                  </h2>

                  <p className="text-white/80 text-base sm:text-lg leading-loose max-w-xl">
                    أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرص
                    مناسبة لمؤهلاتك وخبراتك.
                  </p>

                  <div className="flex items-center gap-3 mt-7">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>

                    <p className="text-sm text-white/80">
                      يسعدنا التعرف على الكفاءات الراغبة في الانضمام إلى فريقنا.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={120}>
                  <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-sm p-6 sm:p-8">
                    <h3 className="text-xl font-black mb-3">
                      يسعدنا تواصلك معنا
                    </h3>

                    <p className="text-sm text-white/75 leading-relaxed mb-7">
                      يمكنك إرسال سيرتك الذاتية أو الاستفسار عن الفرص
                      الوظيفية المتاحة عبر واتساب.
                    </p>

                    <div className="space-y-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-white hover:bg-gray-100 text-[#08704C] rounded-xl py-6 font-black text-base">
                          <Send className="w-5 h-5 ml-2" />
                          أرسل سيرتك الذاتية
                          <ArrowLeft className="w-5 h-5 mr-2" />
                        </Button>
                      </a>

                      <Link href="/contact" className="block">
                        <Button
                          variant="outline"
                          className="w-full border-white/40 text-white hover:bg-white hover:text-[#08704C] rounded-xl py-6 font-bold text-base"
                        >
                          <MessageCircle className="w-5 h-5 ml-2" />
                          تواصل معنا
                        </Button>
                      </Link>
                    </div>

                    <p className="text-center text-xs text-white/60 mt-5">
                      جمعية يعمر للعناية بالمساجد
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            5. التذييل
        ====================================== */}

        <WhatsAppButton />
        <SiteFooter />
      </main>
    </>
  );
}
