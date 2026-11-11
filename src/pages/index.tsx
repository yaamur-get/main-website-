// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Building2, Wrench, Sparkles, ExternalLink, Users, Handshake, BookOpen, ArrowUp, ArrowLeft, TrendingUp, FileText } from "lucide-react";
// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import { NewsSlider } from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },
//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description: "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: "حصول يعمر على شهادة الامتثال من الهلال الأحمر",
//       description: "تحقيق معايير ومتطلبات السلامة الاسعافية للأماكن العامة",
//       image: "/achif/cre.png"
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>
//         <meta name="description" content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//         </div>

//         {/* <header 
//           className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
//             isScrolled 
//               ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" 
//               : "bg-transparent"
//           }`}
//         >
//           <div className="container mx-auto">
//             <div className="flex items-center justify-between h-20">
//               <div className="flex items-center gap-3">
//                 <div className="relative h-full w-40 shrink-0">
//                   <Image
//                     src="/yaamurlogoone.png"
//                     alt="جمعية يعمر لعناية المساجد"
//                     width={200}
//                     height={40}
//                     className="object-contain object-center transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-rightجم "
//                     priority
//                   />
//                 </div>
//               </div>

//               <nav className="hidden lg:flex items-center gap-8">
//                 <Link
//                   href="/"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   الرئيسية
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <div 
//                   className="relative"
//                   onMouseEnter={() => setShowServicesMenu(true)}
//                   onMouseLeave={() => setShowServicesMenu(false)}
//                 >
//                   <button className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group flex items-center gap-1">
//                     خدماتنا
//                     <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`} />
//                     <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                   </button>
                  
//                   {showServicesMenu && (
//                     <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                       <Link
//                         href="/services/construction"
//                         className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
//                       >
//                         <Building2 className="w-4 h-4" />
//                         البناء
//                       </Link>
//                       <Link
//                         href="/services/maintenance"
//                         className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
//                       >
//                         <Wrench className="w-4 h-4" />
//                         الصيانة
//                       </Link>
//                       <Link
//                         href="/services/operation"
//                         className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
//                       >
//                         <Sparkles className="w-4 h-4" />
//                         التشغيل
//                       </Link>
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   href="/programs"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   برامجنا
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <Link
//                   href="/news"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   الأخبار
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <Link
//                   href="/about"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   عن يعمر
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <Link
//                   href="/careers"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   الفرص الوظيفية
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <Link
//                   href="/governance"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   الحوكمة
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>

//                 <Link
//                   href="#contact"
//                   className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
//                 >
//                   تواصل معنا
//                   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
//                 </Link>
//               </nav>

//               <MobileMenu isScrolled={isScrolled} />

//               <Button 
//                 className="hidden sm:flex bg-gradient-to-r from-[#08704C] via-[#4D7A61] to-[#08704C] hover:shadow-2xl text-white shadow-lg transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
//                 size="lg"
//               >
//                 <ExternalLink className="w-4 h-4 ml-2" />
//                 المتجر الخيري
//               </Button>
//             </div>
//           </div>
//         </header> */}

//         <section id="home" className="relative pt-6 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-30"></div>
//           <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#08704C]/10 to-transparent rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tl from-[#A2B366]/10 to-transparent rounded-full blur-3xl" style={{ animationDelay: "2s" }}></div>
          
//           <div className="container mx-auto relative z-10">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-8">
                

//                                         {/* تحت الآية مباشرة */}
//                         <div className="flex w-full justify-center">
//                           <Image
//                             src="/maidelog.png"
//                             alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
//                             width={1000}
//                             height={600}
//                             className="mx-auto h-auto w-[min(90vw,640px)] object-contain"
//                             priority
//                           />
//                         </div>

//                         {/* Mobile-only full-width hero image placed directly under the logo */}
//                         <div className="block md:hidden mt-4">
//                           <div className="rounded-2xl overflow-hidden shadow-2xl">
//                             <Image
//                               src="/Picture24.jpg"
//                               alt="مشاريع يعمر"
//                               width={1200}
//                               height={700}
//                               className="w-full h-auto object-cover"
//                               priority
//                             />
//                           </div>
//                         </div>

//                 <ScrollReveal delay={200}>
//                   <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
//                               جمعية أهلية 
//                        تُعنى بتقديم خدمات العناية المتكاملة بالمساجد والجوامع من بناء وصيانة وتشغيل, صدر ترخيصها رقم 5161 بتاريخ 1444/08/17
//                   </p>
//                 </ScrollReveal>
                    
//                 <ScrollReveal delay={300}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-fit">
//                     <a href="https://store.yaamur.org.sa/">
//                     <Button 
//                       size="lg" 
//                       className="bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white shadow-2xl text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
//                     >
//                       <ExternalLink className="w-5 h-5 ml-2" />
//                       تبرع الآن
//                     </Button>
//                     </a>

//                     <Link href="/about" className="w-full">
//                     <Button 
//                       size="lg" 
//                       variant="outline" 
//                       className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10 py-7 transition-all duration-300 w-full"
//                     >
//                       <BookOpen className="w-5 h-5 ml-2" />
//                       رؤيتنا ورسالتنا
//                     </Button>
                    
//                     </Link>

//                     <a href="/data/شهادة-التسجيل-الجمعية-1.pdf" target="_blank" rel="noopener noreferrer" className="md:col-span-1">
//                     <Button 
//                       size="lg" 
//                       variant="outline" 
//                       className="border-2 border-[#A2B366] text-[#A2B366] hover:bg-[#A2B366] hover:text-white text-lg px-10 py-7 transition-all duration-300 w-full"
//                     >
//                       <FileText className="w-5 h-5 ml-2" />
//                       شهادة التسجيل
//                     </Button>
//                     </a>
                    
//                   </div>
//                 </ScrollReveal>

//                 <ScrollReveal delay={400}>
//                   <div className="flex items-center gap-8 pt-4">
//                     <div className="flex items-center gap-4">
//                       <div className="flex -space-x-4">
//                         {[1, 2, 3, 4, 5].map((i) => (
//                           <div
//                             key={i}
//                             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#08704C] to-[#4D7A61] border-2 border-white flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md"
//                           >
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                       <span className="text-sm md:text-base text-gray-600 font-medium">5+ عدد بناء المساجد جديدة</span>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               </div>

//               <ScrollReveal delay={200}>
//                 <div className="relative hidden md:block">
//                   <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl card-elevated">
//                     <div
//                       className="aspect-[4/4] bg-gradient-to-br from-[#08704C]/20 via-[#4D7A61]/20 to-[#A2B366]/20 flex items-center justify-center relative"
//                       style={{
//                         backgroundImage: "url('/Picture24.jpg')",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
                      
                      
//                       <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-xl flex items-center justify-center">
//                             <TrendingUp className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-2xl font-bold text-gray-900">512+</p>
//                             <p className="text-xs text-gray-600">عدد المساجد المخدومة</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl" style={{ animationDelay: "1s" }}>
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-xl flex items-center justify-center">
//                             <Sparkles className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-2xl font-bold text-gray-900">305+</p>
//                             <p className="text-xs text-gray-600">عدد المشاريع و المبادرات المنفذة</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#4D7A61]/20 rounded-full blur-2xl"></div>
//                   <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#A2B366]/20 rounded-full blur-2xl"></div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-dots opacity-20"></div>
          
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
                
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">خدماتنا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <ScrollReveal delay={100}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#08704C]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors">بناء المساجد</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                      إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسيةالمعتمدة.
//                       </p>
//                     </div>
//                     <Link href="/services/construction">
//                       <Button variant="ghost" className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A2B366]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors">الصيانة</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                     تنفيذأعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>
//                     <Link href="/services/maintenance">
//                       <Button variant="ghost" className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={300}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4D7A61]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors">التشغيل</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                       تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة المصلين
//                       </p>
//                     </div>
//                     <Link href="/services/operation">
//                       <Button variant="ghost" className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-20"></div>
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-14">
              
//                 <h2 className="text-4xl font-black text-gray-900 mb-3">أبرز  الإنجازات</h2>
                
//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>
        
      

//         <section id="news" className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden">
          
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
               
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">آخر الأخبار</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//                   <NewsSlider />
//                 </div>
//               </ScrollReveal>
//           </div>
//         </section>

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
//           <div className="container mx-auto relative z-10">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-black mb-6">إنجازاتنا بالأرقام</h2>
//               <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                 نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { number: 210, label: "المساجد المخدومة", unit: "", icon: Building2, logo: 'مزلة33.png' },
//                 { number: 82, label: "الأحياء المخدومة", unit: "", icon: TrendingUp, logo:'مزلة8.png' },
//                 { number: 2020, label: "دورات المياه التي تم صيانتها", unit: "م²", icon: Wrench, logo: 'مزلة.png' },
//                 { number: 454, label: "المكيفات التي تمت صيانتها", unit: "", icon: Sparkles, logo: 'مزلة4.png' },
//                 { number: 239, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: 'مزلة4.png' },
//                 { number: 120, label: "المكيفات الجديدة", unit: "", icon: Building2, logo: 'مزلة4.png' },
//                 { number: 2799, label: "الإضاءات التي تم تغييرها", unit: "", icon: Sparkles, logo: 'مزلة5.png' },
//                 { number: 48894, label: "أمتر الفرش الذي تم غسله", unit: "م²", icon: TrendingUp, logo: 'مزلة3.png' },
//                 { number: 17237, label: "أمتار الفرش الذي تم تغييره", unit: "م²", icon: Building2, logo: 'مزلة3.png' },
//                 { number: 22986, label: "الأمتار المصبوغة", unit: "م²", icon: Wrench, logo: 'مزلة3.png' }
//               ].map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <ScrollReveal key={index} delay={index * 100}>
//                     <div className="text-center space-y-6 group">
//                       <div className="w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 hover:scale-105 transition-all duration-300 shadow-md">
//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16"
//                             />
//                           </div>
//                         ) : (
//                           Icon && <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter end={stat.number} className="text-3xl md:text-4xl font-extrabold text-white" />
//                         {stat.unit && <span className="text-sm mt-1 text-white/90">{stat.unit}</span>}
//                       </div>
//                       <p className="text-lg font-bold mt-3">{stat.label}</p>
//                     </div>
//                   </ScrollReveal>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         <TestimonialsSection />

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">
//           <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
          
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">شركاؤنا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>
//           </div>
//         </section>

//         <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-dots opacity-20"></div>
          
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">انضم إلينا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//               <ScrollReveal delay={100}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">تطوع معنا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك وجهدك
//                     </p>
//                     <a href="https://wa.me/966920011240?text=اريد%20الانضمام%20الى%20فريق%20المتطوعين">
//                     <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white shadow-lg hover:shadow-xl transition-all">
//                       سجل الآن
//                     </Button>
//                     </a>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">كن شريكًا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر والثواب
//                     </p>
//                     <a href="https://wa.me/966920011240">
//                     <Button className="w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] hover:from-[#08704C] hover:to-[#A2B366] text-white shadow-lg hover:shadow-xl transition-all">
//                       تواصل معنا
//                     </Button>
//                     </a>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={300}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">اعرف أكثر</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>
//                     <Link href="/about ">
//                     <Button className="w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] hover:from-[#08704C] hover:to-[#4D7A61] text-white shadow-lg hover:shadow-xl transition-all">
//                       من نحن
//                     </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group animate-pulse-glow"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
//           </button>
//         )}

//         <WhatsAppButton />

//         {/* Footer: use shared SiteFooter component */}
//         <SiteFooter />
//       </div>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Building2, Wrench, Sparkles, ExternalLink, Users, Handshake, BookOpen, ArrowUp, ArrowLeft, TrendingUp, FileText } from "lucide-react";
// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import { NewsSlider } from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // صورة الواجهة (موجودة في مجلد public)
// const HERO_IMAGE = "/picture24.jpg";

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },
//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description: "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: "حصول يعمر على شهادة الامتثال من الهلال الأحمر",
//       description: "تحقيق معايير ومتطلبات السلامة الاسعافية للأماكن العامة",
//       image: "/achif/cre.png"
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>
//         <meta name="description" content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//         </div>

//         {/* ===== الواجهة: صورة المسجد تغطي الخلفية كاملة ===== */}
//         <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//           <Image src={HERO_IMAGE} alt="مشاريع يعمر" fill priority sizes="100vw" className="object-cover object-center" />
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/90 via-[#08704C]/60 to-black/20"></div>

//           <div className="container mx-auto relative z-10 w-full">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-8">
//                 <div className="flex w-full justify-center">
//                   <Image
//                     src="/maidelog.png"
//                     alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
//                     width={1000}
//                     height={600}
//                     className="mx-auto h-auto w-[min(90vw,640px)] object-contain brightness-0 invert drop-shadow-lg"
//                     priority
//                   />
//                 </div>

//                 <ScrollReveal delay={200}>
//                   <p className="text-xl text-white/90 leading-relaxed max-w-xl">
//                     جمعية أهلية تُعنى بتقديم خدمات العناية المتكاملة بالمساجد والجوامع من بناء وصيانة وتشغيل, صدر ترخيصها رقم 5161 بتاريخ 1444/08/17
//                   </p>
//                 </ScrollReveal>

//                 <ScrollReveal delay={300}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-fit">
//                     <a href="https://store.yaamur.org.sa/">
//                       <Button
//                         size="lg"
//                         className="bg-white text-[#08704C] hover:bg-white/90 shadow-2xl text-lg px-10 py-7 hover:scale-105 transition-all duration-300 w-full"
//                       >
//                         <ExternalLink className="w-5 h-5 ml-2" />
//                         تبرع الآن
//                       </Button>
//                     </a>

//                     <Link href="/about" className="w-full">
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 transition-all duration-300 w-full"
//                       >
//                         <BookOpen className="w-5 h-5 ml-2" />
//                         رؤيتنا ورسالتنا
//                       </Button>
//                     </Link>

//                     <a href="/data/شهادة-التسجيل-الجمعية-1.pdf" target="_blank" rel="noopener noreferrer" className="md:col-span-1">
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 transition-all duration-300 w-full"
//                       >
//                         <FileText className="w-5 h-5 ml-2" />
//                         شهادة التسجيل
//                       </Button>
//                     </a>
//                   </div>
//                 </ScrollReveal>

//                 <ScrollReveal delay={400}>
//                   <div className="flex items-center gap-8 pt-4">
//                     <div className="flex items-center gap-8">
//                       <div className="flex -space-x-4">
//                         {[1, 2, 3, 4, 5, 6].map((i) => (
//                           <div
//                             key={i}
//                             style={{ animation: `homeBob 3.5s ease-in-out ${i * 0.35}s infinite` }}
//                             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#08704C] flex items-center justify-center text-[#08704C] font-bold text-sm md:text-base shadow-md"
//                           >
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                       <span className="text-sm md:text-base text-white/90 font-medium">6+ عدد بناء المساجد جديدة</span>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               </div>

//               {/* مربعات الأرقام على اليسار */}
//               <ScrollReveal delay={200}>
//                 <div className="hidden lg:flex flex-col items-end gap-8">
//                   <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl animate-float">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-xl flex items-center justify-center">
//                         <TrendingUp className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="text-2xl font-bold text-gray-900">512+</p>
//                         <p className="text-xs text-gray-600">عدد المساجد المخدومة</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl animate-float ml-16" style={{ animationDelay: "1s" }}>
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-xl flex items-center justify-center">
//                         <Sparkles className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="text-2xl font-bold text-gray-900">305+</p>
//                         <p className="text-xs text-gray-600">عدد المشاريع و المبادرات المنفذة</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-dots opacity-20"></div>

//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">خدماتنا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <ScrollReveal delay={100}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#08704C]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors">بناء المساجد</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                      إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسيةالمعتمدة.
//                       </p>
//                     </div>
//                     <Link href="/services/construction">
//                       <Button variant="ghost" className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A2B366]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors">الصيانة</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                     تنفيذأعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>
//                     <Link href="/services/maintenance">
//                       <Button variant="ghost" className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={300}>
//                 <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4D7A61]/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardContent className="p-8 space-y-6 relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors">التشغيل</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                       تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة المصلين
//                       </p>
//                     </div>
//                     <Link href="/services/operation">
//                       <Button variant="ghost" className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] p-0 h-auto font-bold group/btn">
//                         <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
//                         <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-20"></div>
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-14">

//                 <h2 className="text-4xl font-black text-gray-900 mb-3">أبرز  الإنجازات</h2>

//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         <section id="news" className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden">

//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">آخر الأخبار</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//                   <NewsSlider />
//                 </div>
//               </ScrollReveal>
//           </div>
//         </section>

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

//           <div className="container mx-auto relative z-10">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-black mb-6">إنجازاتنا بالأرقام</h2>
//               <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                 نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { number: 210, label: "المساجد المخدومة", unit: "", icon: Building2, logo: 'مزلة33.png' },
//                 { number: 82, label: "الأحياء المخدومة", unit: "", icon: TrendingUp, logo:'مزلة8.png' },
//                 { number: 2020, label: "دورات المياه التي تم صيانتها", unit: "م²", icon: Wrench, logo: 'مزلة.png' },
//                 { number: 454, label: "المكيفات التي تمت صيانتها", unit: "", icon: Sparkles, logo: 'مزلة4.png' },
//                 { number: 239, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: 'مزلة4.png' },
//                 { number: 120, label: "المكيفات الجديدة", unit: "", icon: Building2, logo: 'مزلة4.png' },
//                 { number: 2799, label: "الإضاءات التي تم تغييرها", unit: "", icon: Sparkles, logo: 'مزلة5.png' },
//                 { number: 48894, label: "أمتر الفرش الذي تم غسله", unit: "م²", icon: TrendingUp, logo: 'مزلة3.png' },
//                 { number: 17237, label: "أمتار الفرش الذي تم تغييره", unit: "م²", icon: Building2, logo: 'مزلة3.png' },
//                 { number: 22986, label: "الأمتار المصبوغة", unit: "م²", icon: Wrench, logo: 'مزلة3.png' }
//               ].map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <ScrollReveal key={index} delay={index * 100}>
//                     <div className="text-center space-y-6 group">
//                       <div className="w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 hover:scale-105 transition-all duration-300 shadow-md">
//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16"
//                             />
//                           </div>
//                         ) : (
//                           Icon && <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter end={stat.number} className="text-3xl md:text-4xl font-extrabold text-white" />
//                         {stat.unit && <span className="text-sm mt-1 text-white/90">{stat.unit}</span>}
//                       </div>
//                       <p className="text-lg font-bold mt-3">{stat.label}</p>
//                     </div>
//                   </ScrollReveal>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         <TestimonialsSection />

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">
//           <div className="absolute inset-0 pattern-diagonal opacity-30"></div>

//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">شركاؤنا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>
//           </div>
//         </section>

//         <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-dots opacity-20"></div>

//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">انضم إلينا</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//               <ScrollReveal delay={100}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">تطوع معنا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك وجهدك
//                     </p>
//                     <a href="https://wa.me/966920011240?text=اريد%20الانضمام%20الى%20فريق%20المتطوعين">
//                     <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white shadow-lg hover:shadow-xl transition-all">
//                       سجل الآن
//                     </Button>
//                     </a>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">كن شريكًا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر والثواب
//                     </p>
//                     <a href="https://wa.me/966920011240">
//                     <Button className="w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] hover:from-[#08704C] hover:to-[#A2B366] text-white shadow-lg hover:shadow-xl transition-all">
//                       تواصل معنا
//                     </Button>
//                     </a>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={300}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">اعرف أكثر</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>
//                     <Link href="/about ">
//                     <Button className="w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] hover:from-[#08704C] hover:to-[#4D7A61] text-white shadow-lg hover:shadow-xl transition-all">
//                       من نحن
//                     </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group animate-pulse-glow"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
//           </button>
//         )}

//         <WhatsAppButton />

//         {/* Footer: use shared SiteFooter component */}
//         <SiteFooter />
//       </div>

//       {/* حركة الدوائر: ترتفع 4 بكسل وتنزل بهدوء، كل دائرة بعد اللي قبلها */}
//       <style jsx global>{`
//         @keyframes homeBob {
//           0%, 100% { transform: translateY(0) }
//           50% { transform: translateY(-4px) }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           [style*="homeBob"] { animation: none !important }
//         }
//       `}</style>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Building2,
//   Wrench,
//   Sparkles,
//   ExternalLink,
//   Users,
//   Handshake,
//   BookOpen,
//   ArrowUp,
//   ArrowLeft,
//   TrendingUp,
//   FileText
// } from "lucide-react";

// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import  NewsSlider  from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // صورة الواجهة
// const HERO_IMAGE = "/picture24.jpg";

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },
//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description:
//         "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description:
//         "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: " ثلاثة أعوام من العضوية المستمرة في مجلس الجمعيات الأهلية",
//       description:
//         "نعتز في #جمعية_يعمر للعناية بالمساجد بهذا التكريم من مجلس الجمعيات الأهلية بالمنطقة الشرقية  @ercharities  بمناسبة إكمال ثلاثة أعوام من العضوية المستمرة في المجلس. ثلاثة أعوام من الشراكة والتعاون، نسعى فيها إلى الإسهام في تمكين القطاع غير الربحي وتعزيز أثره، وخدمة بيوت الله بما يحقق رسالتنا: #مساجد_عامرة_ونموذجية ",
//       image: "/iamge/adh.png",
//     }
//   ];

//   const stats = [
//     {
//       number: 210,
//       label: "المساجد المخدومة",
//       unit: "",
//       icon: Building2,
//       logo: "مزلة33.png"
//     },
//     {
//       number: 82,
//       label: "الأحياء المخدومة",
//       unit: "",
//       icon: TrendingUp,
//       logo: "مزلة8.png"
//     },
//     {
//       number: 2020,
//       label: "دورات المياه التي تم صيانتها",
//       unit: "م²",
//       icon: Wrench,
//       logo: "مزلة.png"
//     },
//     {
//       number: 454,
//       label: "المكيفات التي تمت صيانتها",
//       unit: "",
//       icon: Sparkles,
//       logo: "مزلة4.png"
//     },
//     {
//       number: 239,
//       label: "المكيفات التي تم غسلها",
//       unit: "",
//       icon: Wrench,
//       logo: "مزلة4.png"
//     },
//     {
//       number: 120,
//       label: "المكيفات الجديدة",
//       unit: "",
//       icon: Building2,
//       logo: "مزلة4.png"
//     },
//     {
//       number: 2799,
//       label: "الإضاءات التي تم تغييرها",
//       unit: "",
//       icon: Sparkles,
//       logo: "مزلة5.png"
//     },
//     {
//       number: 48894,
//       label: "أمتار الفرش الذي تم غسله",
//       unit: "م²",
//       icon: TrendingUp,
//       logo: "مزلة3.png"
//     },
//     {
//       number: 17237,
//       label: "أمتار الفرش الذي تم تغييره",
//       unit: "م²",
//       icon: Building2,
//       logo: "مزلة3.png"
//     },
//     {
//       number: 22986,
//       label: "الأمتار المصبوغة",
//       unit: "م²",
//       icon: Wrench,
//       logo: "مزلة3.png"
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>

//         <meta
//           name="description"
//           content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة"
//         />

//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7] overflow-hidden" dir="rtl">

//         {/* الخلفية */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ================= HERO ================= */}

//         <section
//           id="home"
//           className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
//         >
//           {/* الصورة */}
//           <div className="absolute inset-0 hero-image-wrapper">
//             <Image
//               src={HERO_IMAGE}
//               alt="مشاريع يعمر"
//               fill
//               priority
//               sizes="100vw"
//               className="object-cover object-center hero-image"
//             />
//           </div>

//           {/* التدرج */}
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/90 via-[#08704C]/60 to-black/20" />

//           {/* إضاءة هادئة */}
//           <div className="absolute inset-0 hero-light pointer-events-none" />

//           <div className="container mx-auto relative z-10 w-full">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">

//               {/* المحتوى */}
//               <div className="space-y-8">

//                 {/* الشعار */}
//                 <div className="flex w-full justify-center hero-content hero-delay-1">
//                   <Image
//                     src="/maidelog.png"
//                     alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
//                     width={1000}
//                     height={600}
//                     className="mx-auto h-auto w-[min(90vw,640px)] object-contain brightness-0 invert drop-shadow-lg"
//                     priority
//                   />
//                 </div>

//                 <div className="hero-content hero-delay-2">
//                   <p className="text-xl text-white/90 leading-relaxed max-w-xl">
//                     جمعية أهلية تُعنى بتقديم خدمات العناية المتكاملة بالمساجد
//                     والجوامع من بناء وصيانة وتشغيل، صدر ترخيصها رقم 5161
//                     بتاريخ 1444/08/17
//                   </p>
//                 </div>

//                 {/* الأزرار */}
//                 <div className="hero-content hero-delay-3">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-fit">

//                     <a href="https://store.yaamur.org.sa/">
//                       <Button
//                         size="lg"
//                         className="interactive-button bg-white text-[#08704C] hover:bg-white/90 shadow-2xl text-lg px-10 py-7 w-full"
//                       >
//                         <ExternalLink className="w-5 h-5 ml-2" />
//                         تبرع الآن
//                       </Button>
//                     </a>

//                     <Link href="/about" className="w-full">
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="interactive-button border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 w-full"
//                       >
//                         <BookOpen className="w-5 h-5 ml-2" />
//                         رؤيتنا ورسالتنا
//                       </Button>
//                     </Link>

//                     <a
//                       href="/data/شهادة-التسجيل-الجمعية-1.pdf"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="md:col-span-1"
//                     >
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="interactive-button border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#08704C] text-lg px-10 py-7 w-full"
//                       >
//                         <FileText className="w-5 h-5 ml-2" />
//                         شهادة التسجيل
//                       </Button>
//                     </a>
//                   </div>
//                 </div>

//                 {/* الدوائر */}
//                 <div className="hero-content hero-delay-4">
//                   <div className="flex items-center gap-8 pt-4">

//                     <div className="flex -space-x-4">
//                       {[1, 2, 3, 4, 5, 6].map((i) => (
//                         <div
//                           key={i}
//                           className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#08704C] flex items-center justify-center text-[#08704C] font-bold text-sm md:text-base shadow-md transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:z-20 cursor-default"
//                         >
//                           {i}
//                         </div>
//                       ))}
//                     </div>

//                     <span className="text-sm md:text-base text-white/90 font-medium">
//                       6+ عدد بناء المساجد الجديدة
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* البطاقات الجانبية */}
//               <div className="hidden lg:flex flex-col items-end gap-8 hero-content hero-delay-3">

//                 <div className="hero-stat-card bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
//                   <div className="flex items-center gap-3">

//                     <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-xl flex items-center justify-center">
//                       <TrendingUp className="w-6 h-6 text-white" />
//                     </div>

//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">
//                         512+
//                       </p>

//                       <p className="text-xs text-gray-600">
//                         عدد المساجد المخدومة
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="hero-stat-card bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl ml-16">

//                   <div className="flex items-center gap-3">

//                     <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-xl flex items-center justify-center">
//                       <Sparkles className="w-6 h-6 text-white" />
//                     </div>

//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">
//                         305+
//                       </p>

//                       <p className="text-xs text-gray-600">
//                         عدد المشاريع والمبادرات المنفذة
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ================= SERVICES ================= */}

//         <section
//           id="services"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   خدماتنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير
//                   الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {/* البناء */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors duration-500">
//                         بناء المساجد
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسية
//                         المعتمدة.
//                       </p>
//                     </div>

//                     <Link href="/services/construction">
//                       <Button
//                         variant="ghost"
//                         className="text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* الصيانة */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors duration-500">
//                         الصيانة
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تنفيذ أعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>

//                     <Link href="/services/maintenance">
//                       <Button
//                         variant="ghost"
//                         className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* التشغيل */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors duration-500">
//                         التشغيل
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة
//                         المصلين.
//                       </p>
//                     </div>

//                     <Link href="/services/operation">
//                       <Button
//                         variant="ghost"
//                         className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* ================= ACHIEVEMENTS ================= */}

//         <section
//           id="achievements"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-grid opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-14">
//                 <h2 className="text-4xl font-black text-gray-900 mb-3">
//                   أبرز الإنجازات
//                 </h2>
//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* ================= NEWS ================= */}

//         <section
//           id="news"
//           className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden"
//         >
//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   آخر الأخبار
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//                 <NewsSlider />
//               </div>
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= STATISTICS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">

//           <div className="absolute inset-0 pattern-grid opacity-10" />

//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black mb-6">
//                   إنجازاتنا بالأرقام
//                 </h2>

//                 <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                   نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <ScrollReveal key={index} delay={index * 80}>

//                     <div className="text-center space-y-6 group">

//                       <div className="stat-card w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 shadow-md">

//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16 stat-logo"
//                             />
//                           </div>
//                         ) : (
//                           <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter
//                           end={stat.number}
//                           className="text-3xl md:text-4xl font-extrabold text-white"
//                         />

//                         {stat.unit && (
//                           <span className="text-sm mt-1 text-white/90">
//                             {stat.unit}
//                           </span>
//                         )}
//                       </div>

//                       <p className="text-lg font-bold mt-3">
//                         {stat.label}
//                       </p>

//                     </div>
//                   </ScrollReveal>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* ================= TESTIMONIALS ================= */}

//         <TestimonialsSection />

//         {/* ================= PARTNERS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">

//           <div className="absolute inset-0 pattern-diagonal opacity-30" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   شركاؤنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= JOIN US ================= */}

//         <section
//           id="about"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >

//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   انضم إلينا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//               {/* تطوع */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       تطوع معنا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك
//                       وجهدك
//                     </p>

//                     <a href="https://wa.me/966920011240?text=اريد%20الانضمام%20الى%20فريق%20المتطوعين">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-lg">
//                         سجل الآن
//                       </Button>
//                     </a>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* شريك */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       كن شريكًا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر
//                       والثواب
//                     </p>

//                     <a href="https://wa.me/966920011240">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] text-white shadow-lg">
//                         تواصل معنا
//                       </Button>
//                     </a>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* اعرف أكثر */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       اعرف أكثر
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>

//                     <Link href="/about">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] text-white shadow-lg">
//                         من نحن
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* زر العودة للأعلى */}
//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="scroll-top-button fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] text-white rounded-2xl shadow-2xl flex items-center justify-center"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 transition-transform duration-300" />
//           </button>
//         )}

//         <WhatsAppButton />

//         <SiteFooter />
//       </div>

//       {/* ================= CUSTOM MOTION ================= */}

//       <style jsx global>{`

//         /* حركة صورة الواجهة - هادئة جداً */
//         @keyframes heroBreath {
//           0%, 100% {
//             transform: scale(1.02);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .hero-image {
//           animation: heroBreath 18s ease-in-out infinite;
//         }


//         /* دخول عناصر الواجهة */
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .hero-content {
//           opacity: 0;
//           animation: heroReveal 0.9s cubic-bezier(.22, .8, .25, 1) forwards;
//         }

//         .hero-delay-1 {
//           animation-delay: 0.1s;
//         }

//         .hero-delay-2 {
//           animation-delay: 0.3s;
//         }

//         .hero-delay-3 {
//           animation-delay: 0.5s;
//         }

//         .hero-delay-4 {
//           animation-delay: 0.7s;
//         }


//         /* إضاءة خفيفة فوق الصورة */
//         .hero-light {
//           background:
//             radial-gradient(
//               circle at 75% 30%,
//               rgba(255,255,255,0.10),
//               transparent 30%
//             );
//         }


//         /* البطاقات الجانبية */
//         .hero-stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .hero-stat-card:hover {
//           transform: translateY(-8px) translateX(-4px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
//         }


//         /* الأزرار */
//         .interactive-button {
//           transition:
//             transform 0.35s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.35s ease,
//             background-color 0.35s ease;
//         }

//         .interactive-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 16px 35px rgba(0, 0, 0, 0.16);
//         }

//         .interactive-button:active {
//           transform: translateY(0) scale(0.98);
//         }


//         /* البطاقات الرئيسية */
//         .premium-card {
//           transition:
//             transform 0.55s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.55s ease,
//             border-color 0.55s ease;
//         }

//         .premium-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.10);
//         }


//         /* الإضاءة داخل البطاقة */
//         .card-glow {
//           position: absolute;
//           width: 180px;
//           height: 180px;
//           top: -100px;
//           right: -100px;
//           border-radius: 9999px;
//           background: rgba(8, 112, 76, 0.08);
//           filter: blur(25px);
//           opacity: 0;
//           transition:
//             opacity 0.6s ease,
//             transform 0.8s ease;
//         }

//         .premium-card:hover .card-glow {
//           opacity: 1;
//           transform: scale(1.4);
//         }


//         /* الأيقونات بدون دوران */
//         .service-icon,
//         .join-icon {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .premium-card:hover .service-icon,
//         .premium-card:hover .join-icon {
//           transform: translateY(-6px) scale(1.04);
//           box-shadow: 0 20px 35px rgba(0, 0, 0, 0.16);
//         }


//         /* بطاقات الإحصائيات */
//         .stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             background 0.5s ease,
//             border-color 0.5s ease,
//             box-shadow 0.5s ease;
//         }

//         .group:hover .stat-card {
//           transform: translateY(-8px);
//           background: rgba(255, 255, 255, 0.14);
//           border-color: rgba(255, 255, 255, 0.28);
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
//         }

//         .stat-logo {
//           transition: transform 0.5s cubic-bezier(.22, .8, .25, 1);
//         }

//         .group:hover .stat-logo {
//           transform: scale(1.08);
//         }


//         /* زر العودة للأعلى */
//         @keyframes scrollButtonIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.9);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .scroll-top-button {
//           animation: scrollButtonIn 0.45s cubic-bezier(.22, .8, .25, 1);
//           transition:
//             transform 0.35s ease,
//             box-shadow 0.35s ease;
//         }

//         .scroll-top-button:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//         }

//         .scroll-top-button:hover svg {
//           transform: translateY(-3px);
//         }


//         /* احترام إعدادات المستخدم لتقليل الحركة */
//         @media (prefers-reduced-motion: reduce) {

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//             scroll-behavior: auto !important;
//           }

//         }

//       `}</style>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Building2,
//   Wrench,
//   Sparkles,
//   ExternalLink,
//   Users,
//   Handshake,
//   BookOpen,
//   ArrowUp,
//   ArrowLeft,
//   TrendingUp,
//   FileText, Heart, Pause, Play, ChevronLeft, ChevronRight, ShieldCheck, MapPin, CheckCircle2, ClipboardCheck
// } from "lucide-react";

// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import  NewsSlider  from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // صورة الواجهة
// const HERO_IMAGE = "/picture24.jpg";
// const DONATION_URL = "https://store.yaamur.org.sa/";

// // ضع الصور الجديدة في public/hero/ بالأسماء المحددة.
// // إذا لم تتوفر صورة بعد، يعرض الموقع picture24.jpg تلقائيًا.
// const heroSlides = [
//   { image: HERO_IMAGE, eyebrow: "معًا لبيوت الله", title: "أثرٌ يبقى.. ومساجد عامرة", description: "ساهم في العناية ببيوت الله، وكن جزءًا من أثر يمتد لخدمة المصلين.", action: "تبرع الآن" },
//   { image: "/hero/slide-2.jpg", eyebrow: "فرش المساجد", title: "سجادة جديدة.. وراحة لكل مصلٍ", description: "بدعمك تتجدد المصليات وتتهيأ لاستقبال المصلين في أجواء مريحة.", action: "ساهم في الفرش" },
//   { image: "/hero/slide-3.jpg", eyebrow: "صيانة المساجد", title: "عناية مستمرة ببيوت الله", description: "ساهم في صيانة المرافق والتكييف والإضاءة، لتبقى المساجد مهيأة.", action: "ادعم الصيانة" },
//   { image: "/hero/slide-4.jpg", eyebrow: "أثر عطائك", title: "من مساهمتك يبدأ الأثر", description: "ساهم في مشاريع العناية بالمساجد، وتعرّف على الإنجازات المنفذة.", action: "استعرض فرص العطاء" }
// ];

// // روابط فئات وليست حملات مباشرة. حدّث كل رابط عندما تتوفر صفحة الحملة الرسمية.
// const opportunities = [
//   { title: "فرش وتجهيز المساجد", description: "مساهمات تدعم تهيئة المصليات وتجديد الفرش.", icon: Building2, label: "فرص الفرش والتجهيز" },
//   { title: "صيانة المرافق والتكييف", description: "مساهمات تدعم جاهزية المساجد ومرافقها.", icon: Wrench, label: "فرص الصيانة" },
//   { title: "تشغيل والعناية اليومية", description: "مساهمات تدعم استدامة خدمات العناية بالمساجد.", icon: Sparkles, label: "فرص التشغيل" }
// ];

// // صورة مستقلة لكل مشهد مع بديل تلقائي؛ يسمح بالتدرج والتلاشي بين الصور.
// function HeroBackgroundImage({ src, alt, active, priority = false }: {
//   src: string;
//   alt: string;
//   active: boolean;
//   priority?: boolean;
// }) {
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
//       <Image
//         src={failed ? HERO_IMAGE : src}
//         alt={alt}
//         fill
//         priority={priority}
//         sizes="100vw"
//         onError={() => setFailed(true)}
//         className="object-cover object-center hero-image"
//       />
//     </div>
//   );
// }

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [reducedMotion, setReducedMotion] = useState(false);

//   useEffect(() => {
//     const query = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const sync = () => setReducedMotion(query.matches);
//     sync();
//     query.addEventListener?.("change", sync);
//     return () => query.removeEventListener?.("change", sync);
//   }, []);

//   useEffect(() => {
//     if (!isPlaying || reducedMotion) return;
//     const interval = window.setInterval(() => {
//       setActiveSlide((current) => (current + 1) % heroSlides.length);
//     }, 6000);
//     return () => window.clearInterval(interval);
//   }, [isPlaying, reducedMotion]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },

//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description:
//         "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: " ثلاثة أعوام من العضوية المستمرة في مجلس الجمعيات الأهلية",
//       description:
//         "نعتز في #جمعية_يعمر للعناية بالمساجد بهذا التكريم من مجلس الجمعيات الأهلية بالمنطقة الشرقية  @ercharities  بمناسبة إكمال ثلاثة أعوام من العضوية المستمرة في المجلس. ثلاثة أعوام من الشراكة والتعاون، نسعى فيها إلى الإسهام في تمكين القطاع غير الربحي وتعزيز أثره، وخدمة بيوت الله بما يحقق رسالتنا: #مساجد_عامرة_ونموذجية ",
//       image: "/iamge/adh.png",
//     }
//   ];

//   const stats = [
//     { number: 7, label: "المساجد والجوامع التي تم بناؤها", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 413, label: "إجمالي المساجد والجوامع المخدومة", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 496, label: "إجمالي مشاريع الصيانة المنفذة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 23, label: "مشاريع الصيانة الطارئة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 53, label: "الأحياء المستفيدة", unit: "", icon: TrendingUp, logo: "مزلة8.png" },
//     { number: 243, label: "المكيفات الجديدة التي تم تركيبها", unit: "", icon: Sparkles, logo: "مزلة4.png" },
//     { number: 1185, label: "المكيفات التي تمت صيانتها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 621, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 17057, label: "إجمالي أمتار العزل المنفذة", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 20973, label: "إجمالي أمتار الفرش الجديد", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 67806, label: "إجمالي أمتار الفرش التي تم غسلها", unit: "م", icon: Sparkles, logo: "مزلة3.png" },
//     { number: 6783, label: "إجمالي مساحة دورات المياه التي تمت صيانتها أو خدمتها", unit: "م²", icon: Wrench, logo: "مزلة.png" }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>

//         <meta
//           name="description"
//           content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة"
//         />

//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7] overflow-hidden" dir="rtl">

//         {/* الخلفية */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ================= HERO - واجهة يعمر المطوّرة ================= */}
//         <section id="home" className="relative min-h-[min(780px,94vh)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="واجهة يعمر الرئيسية">
//           {/* صور المشاهد تتغير مع النص تلقائيًا. الصورة الأولى هي صورة الموقع الأصلية. */}
//           <div className="absolute inset-0 hero-image-wrapper">
//             {heroSlides.map((slide, index) => (
//               <HeroBackgroundImage
//                 key={slide.image}
//                 src={slide.image}
//                 alt={`صورة ${slide.eyebrow}`}
//                 active={index === activeSlide}
//                 priority={index === 0}
//               />
//             ))}
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/65 via-[#08704C]/35 to-[#205939]/10" />
//           <div className="absolute inset-0 hero-light pointer-events-none" />
//           <div className="container mx-auto relative z-10 w-full">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//               <div className="space-y-8">
//                 <div className="hero-content hero-delay-1">
//                   <Image src="/maidelog.png" alt="شعار جمعية يعمر للعناية بالمساجد" width={1000} height={600} className="h-auto w-[min(85vw,430px)] object-contain brightness-0 invert drop-shadow-lg" priority />
//                 </div>
//                 {/* key يعيد حركة ظهور النص فقط عند تغير المشهد */}
//                 <div key={activeSlide} className="hero-message space-y-4 min-h-[195px]" aria-live="off">
//                   <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/15 border border-white/25 text-white px-4 py-2 rounded-full">{heroSlides[activeSlide].eyebrow}</span>
//                   <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white">{heroSlides[activeSlide].title}</h1>
//                   <p className="text-base sm:text-xl leading-relaxed max-w-xl text-white/90">{heroSlides[activeSlide].description}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-3 items-center">
//                   <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 bg-white text-[#08704C] font-black text-lg shadow-xl hover:bg-[#eaf8f0] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-[#e7d79d]">
//                     <Heart className="w-5 h-5" aria-hidden="true" /> {heroSlides[activeSlide].action} <ExternalLink className="w-4 h-4" aria-hidden="true" />
//                   </a>
//                   <a href="#opportunities" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 border-2 border-white/80 text-white font-bold hover:bg-white/15 transition-colors">فرص العطاء</a>
//                 </div>
//                 <div className="flex items-center gap-3 text-white" aria-label="التحكم في المشاهد">
//                   <button type="button" onClick={() => {setActiveSlide((a)=>(a+1)%heroSlides.length);}} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد التالي"><ChevronRight className="w-5 h-5" /></button>
//                   <div className="flex gap-2" role="group" aria-label="اختيار المشهد">
//                     {heroSlides.map((slide, i) => <button key={i} type="button" onClick={() => setActiveSlide(i)} aria-label={`عرض المشهد ${i+1}: ${slide.eyebrow}`} aria-current={i===activeSlide ? "true" : undefined} className={`h-2.5 rounded-full transition-all ${i===activeSlide ? "w-9 bg-white" : "w-2.5 bg-white/45 hover:bg-white/80"}`} />)}
//                   </div>
//                   <button type="button" onClick={()=>setIsPlaying(p=>!p)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label={isPlaying ? "إيقاف تبديل المشاهد" : "استئناف تبديل المشاهد"}>{isPlaying ? <Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}</button>
//                   <button type="button" onClick={() => setActiveSlide((a)=>(a-1+heroSlides.length)%heroSlides.length)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد السابق"><ChevronLeft className="w-5 h-5" /></button>
//                   <span className="text-sm text-white/75">{activeSlide+1} / {heroSlides.length}</span>
//                 </div>
//               </div>
//               <div className="hidden lg:flex flex-col gap-4 items-end hero-content hero-delay-3">
//                 <div className="w-[min(100%,390px)] rounded-3xl border border-white/25 bg-white/12 backdrop-blur-md p-8 text-white shadow-xl">
//                   <div className="flex items-center gap-3 mb-4"><ShieldCheck className="w-8 h-8"/><span className="text-lg font-black">تبرع بثقة</span></div>
//                   <p className="leading-8 text-white/90">جمعية أهلية متخصصة في العناية بالمساجد؛ ترخيص رقم 5161 وفق البيانات المنشورة في الموقع.</p>
//                   <div className="mt-5 h-px bg-white/25" />
//                   <p className="mt-4 text-sm text-white/80">تنتقل التبرعات إلى متجر يعمر الرسمي عبر اتصال آمن.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* آية قرآنية بزخرفة هادئة — بدون عنوان أو مرجع أسفلها */}
//         <div className="relative bg-[#F0F3E7] px-4 sm:px-6 lg:px-8 py-9 sm:py-12" dir="rtl">
//           <div className="container mx-auto max-w-6xl">
//             <div className="flex items-center justify-center gap-3 sm:gap-7">
//               {/* زخارف متناظرة خفيفة تراعي عرض الجوال */}
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#08704C]/30 to-transparent" />
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//               </div>
//               <p className="text-center text-[#08704C] font-medium text-[15px] sm:text-lg lg:text-[22px] leading-[2.3] tracking-normal max-w-[830px]" lang="ar">
//                 ﴿ إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ﴾
//               </p>
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#08704C]/30 to-transparent" />
//               </div>
//             </div>
//             <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#08704C]/30 to-transparent" aria-hidden="true" />
//           </div>
//         </div>

//         {/* ================= OPPORTUNITIES - فرص العطاء ================= */}
//         <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7]">
//           <div className="container mx-auto">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <span className="inline-block rounded-full bg-[#08704C]/10 px-4 py-2 text-sm font-bold text-[#08704C] mb-4">فرص العطاء</span>
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#103f31] mb-4">عطاؤك يساهم في عمارة بيوت الله</h2>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-6">
//               {opportunities.map((item, index) => {
//                 const Icon = item.icon;
//                 return <ScrollReveal key={item.title} delay={index*100}>
//                   <article className="h-full flex flex-col rounded-3xl bg-white border border-[#08704C]/10 shadow-sm p-7 hover:shadow-xl transition-shadow">
//                     <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C] mb-6"><Icon className="w-9 h-9"/></div>
//                     <h3 className="text-2xl font-black text-[#143f32] mb-3">{item.title}</h3>
//                     <p className="text-gray-600 leading-8 mb-7 flex-1">{item.description}</p>
//                     <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] text-white px-5 py-3 font-bold hover:bg-[#065538]">استعرض فرص التبرع <ExternalLink className="w-4 h-4"/></a>
//                   </article>
//                 </ScrollReveal>;
//               })}
//             </div>
//             <p className="text-center text-gray-500 text-sm mt-5">تُعرض الفئات للتعريف؛ تفاصيل المشاريع المتاحة ومبالغها داخل المتجر الرسمي.</p>
//           </div>
//         </section>

//         {/* ================= IMPACT JOURNEY - من عطائكم إلى الأثر ================= */}
//         <section id="impact-journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto max-w-6xl">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#08704C] mb-4">من عطائكم إلى الأثر</h2>
//                 <p className="text-gray-600 text-lg">رحلة مبسطة تشرح كيف تسهم تبرعاتكم في دعم أعمال العناية بالمساجد.</p>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-5">
//               {[
//                 {title:"مساهمتك",text:"اختر إحدى فرص التبرع المتاحة في المتجر الرسمي.",icon:Heart},
//                 {title:"تنفيذ المشروع",text:"تُوجَّه الموارد لدعم أعمال البناء أو الصيانة أو التشغيل وفق المشروع.",icon:Wrench},
//                 {title:"أثر ملموس",text:"اطّلع على أخبار الجمعية وتقارير إنجازاتها المنشورة.",icon:CheckCircle2}
//               ].map((step, i) => {const Icon=step.icon; return <div key={step.title} className="relative rounded-3xl border border-[#08704C]/15 bg-[#F0F3E7] p-8 text-center">
//                 <span className="absolute top-4 right-5 text-[#08704C]/40 text-sm font-bold">0{i+1}</span>
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#08704C] text-white mb-5"><Icon className="w-8 h-8"/></div>
//                 <h3 className="text-xl font-black text-[#08704C] mb-3">{step.title}</h3><p className="text-gray-600 leading-7">{step.text}</p>
//               </div>;})}
//             </div>
//           </div>
//         </section>

//         {/* ================= TRUST - الثقة والشفافية ================= */}
//         <section aria-label="معلومات الثقة والشفافية" className="bg-[#eaf2ed] px-4 sm:px-6 lg:px-8 py-10">
//           <div className="container mx-auto grid sm:grid-cols-3 gap-5 text-center">
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><ShieldCheck className="w-7 h-7"/> ترخيص الجمعية: 5161</div>
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><ClipboardCheck className="w-7 h-7"/> ISO 9001:2015 </div>
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><TrendingUp className="w-7 h-7"/> حوكمة 2024: 99.40%</div>
//           </div>
//         </section>

//         {/* ================= SERVICES ================= */}

//         <section
//           id="services"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   خدماتنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير
//                   الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {/* البناء */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors duration-500">
//                         بناء المساجد
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسية
//                         المعتمدة.
//                       </p>
//                     </div>

//                     <Link href="/services/construction">
//                       <Button
//                         variant="ghost"
//                         className="text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* الصيانة */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors duration-500">
//                         الصيانة
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تنفيذ أعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>

//                     <Link href="/services/maintenance">
//                       <Button
//                         variant="ghost"
//                         className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* التشغيل */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors duration-500">
//                         التشغيل
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة
//                         المصلين.
//                       </p>
//                     </div>

//                     <Link href="/services/operation">
//                       <Button
//                         variant="ghost"
//                         className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* ================= ACHIEVEMENTS ================= */}

//         <section
//           id="achievements"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-grid opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-14">
//                 <h2 className="text-4xl font-black text-gray-900 mb-3">
//                   أبرز الإنجازات
//                 </h2>
//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* ================= NEWS ================= */}

//         <section
//           id="news"
//           className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden"
//         >
//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   آخر الأخبار
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//                 <NewsSlider limit={3} />
//               </div>
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= STATISTICS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">

//           <div className="absolute inset-0 pattern-grid opacity-10" />

//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black mb-6">
//                   إنجازاتنا بالأرقام
//                 </h2>

//                 <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                   نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <ScrollReveal key={index} delay={index * 80}>

//                     <div className="text-center space-y-6 group">

//                       <div className="stat-card w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 shadow-md">

//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16 stat-logo"
//                             />
//                           </div>
//                         ) : (
//                           <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter
//                           end={stat.number}
//                           className="text-3xl md:text-4xl font-extrabold text-white"
//                         />

//                         {stat.unit && (
//                           <span className="text-sm mt-1 text-white/90">
//                             {stat.unit}
//                           </span>
//                         )}
//                       </div>

//                       <p className="text-lg font-bold mt-3">
//                         {stat.label}
//                       </p>

//                     </div>
//                   </ScrollReveal>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* ================= TESTIMONIALS ================= */}

//         <TestimonialsSection />

//         {/* ================= PARTNERS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">

//           <div className="absolute inset-0 pattern-diagonal opacity-30" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   شركاؤنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= JOIN US ================= */}

//         <section
//           id="about"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >

//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   انضم إلينا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//               {/* تطوع */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       تطوع معنا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك
//                       وجهدك
//                     </p>

//                     <a href="tel:920011240">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-lg">
//                         سجل الآن
//                       </Button>
//                     </a>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* شريك */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       كن شريكًا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر
//                       والثواب
//                     </p>

//                     <a href="tel:920011240">
//   <Button className="interactive-button w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] text-white shadow-lg">
//     تواصل معنا
//   </Button>
// </a>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* اعرف أكثر */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       اعرف أكثر
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>

//                     <Link href="/about">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] text-white shadow-lg">
//                         من نحن
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* زر العودة للأعلى */}
//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="scroll-top-button fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] text-white rounded-2xl shadow-2xl flex items-center justify-center"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 transition-transform duration-300" />
//           </button>
//         )}

//         <WhatsAppButton />

//         <SiteFooter />
//       </div>

//       {/* ================= CUSTOM MOTION ================= */}

//       <style jsx global>{`

//         /* حركة صورة الواجهة - هادئة جداً */
//         @keyframes heroBreath {
//           0%, 100% {
//             transform: scale(1.02);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .hero-image {
//           animation: heroBreath 18s ease-in-out infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-image { animation: none !important; }
//         }


//         /* ظهور الرسائل عند تغيير المشهد */
//         @keyframes messageReveal {
//           from { opacity: .15; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .hero-message { animation: messageReveal .65s ease-out both; }

//         /* دخول عناصر الواجهة */
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .hero-content {
//           opacity: 0;
//           animation: heroReveal 0.9s cubic-bezier(.22, .8, .25, 1) forwards;
//         }

//         .hero-delay-1 {
//           animation-delay: 0.1s;
//         }

//         .hero-delay-2 {
//           animation-delay: 0.3s;
//         }

//         .hero-delay-3 {
//           animation-delay: 0.5s;
//         }

//         .hero-delay-4 {
//           animation-delay: 0.7s;
//         }


//         /* إضاءة خفيفة فوق الصورة */
//         .hero-light {
//           background:
//             radial-gradient(
//               circle at 75% 30%,
//               rgba(255,255,255,0.10),
//               transparent 30%
//             );
//         }


//         /* البطاقات الجانبية */
//         .hero-stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .hero-stat-card:hover {
//           transform: translateY(-8px) translateX(-4px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
//         }


//         /* الأزرار */
//         .interactive-button {
//           transition:
//             transform 0.35s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.35s ease,
//             background-color 0.35s ease;
//         }

//         .interactive-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 16px 35px rgba(0, 0, 0, 0.16);
//         }

//         .interactive-button:active {
//           transform: translateY(0) scale(0.98);
//         }


//         /* البطاقات الرئيسية */
//         .premium-card {
//           transition:
//             transform 0.55s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.55s ease,
//             border-color 0.55s ease;
//         }

//         .premium-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.10);
//         }


//         /* الإضاءة داخل البطاقة */
//         .card-glow {
//           position: absolute;
//           width: 180px;
//           height: 180px;
//           top: -100px;
//           right: -100px;
//           border-radius: 9999px;
//           background: rgba(8, 112, 76, 0.08);
//           filter: blur(25px);
//           opacity: 0;
//           transition:
//             opacity 0.6s ease,
//             transform 0.8s ease;
//         }

//         .premium-card:hover .card-glow {
//           opacity: 1;
//           transform: scale(1.4);
//         }


//         /* الأيقونات بدون دوران */
//         .service-icon,
//         .join-icon {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .premium-card:hover .service-icon,
//         .premium-card:hover .join-icon {
//           transform: translateY(-6px) scale(1.04);
//           box-shadow: 0 20px 35px rgba(0, 0, 0, 0.16);
//         }


//         /* بطاقات الإحصائيات */
//         .stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             background 0.5s ease,
//             border-color 0.5s ease,
//             box-shadow 0.5s ease;
//         }

//         .group:hover .stat-card {
//           transform: translateY(-8px);
//           background: rgba(255, 255, 255, 0.14);
//           border-color: rgba(255, 255, 255, 0.28);
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
//         }

//         .stat-logo {
//           transition: transform 0.5s cubic-bezier(.22, .8, .25, 1);
//         }

//         .group:hover .stat-logo {
//           transform: scale(1.08);
//         }


//         /* زر العودة للأعلى */
//         @keyframes scrollButtonIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.9);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .scroll-top-button {
//           animation: scrollButtonIn 0.45s cubic-bezier(.22, .8, .25, 1);
//           transition:
//             transform 0.35s ease,
//             box-shadow 0.35s ease;
//         }

//         .scroll-top-button:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//         }

//         .scroll-top-button:hover svg {
//           transform: translateY(-3px);
//         }


//         /* احترام إعدادات المستخدم لتقليل الحركة */
//         @media (prefers-reduced-motion: reduce) {

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//             scroll-behavior: auto !important;
//           }

//         }

//       `}</style>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Building2,
//   Wrench,
//   Sparkles,
//   ExternalLink,
//   Users,
//   Handshake,
//   BookOpen,
//   ArrowUp,
//   ArrowLeft,
//   TrendingUp,
//   FileText, Heart, Pause, Play, ChevronLeft, ChevronRight, ShieldCheck, MapPin, CheckCircle2, ClipboardCheck
// } from "lucide-react";

// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import  NewsSlider  from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // صورة الواجهة
// const HERO_IMAGE = "/picture24.jpg";
// const DONATION_URL = "https://store.yaamur.org.sa/";

// // ضع الصور الجديدة في public/hero/ بالأسماء المحددة.
// // إذا لم تتوفر صورة بعد، يعرض الموقع picture24.jpg تلقائيًا.
// const heroSlides = [
//   { image: HERO_IMAGE, eyebrow: "معًا لبيوت الله", title: "أثرٌ يبقى.. ومساجد عامرة", description: "ساهم في العناية ببيوت الله، وكن جزءًا من أثر يمتد لخدمة المصلين.", action: "تبرع الآن" },
//   { image: "/hero/slide-2.jpg", eyebrow: "فرش المساجد", title: "سجادة جديدة.. وراحة لكل مصلٍ", description: "بدعمك تتجدد المصليات وتتهيأ لاستقبال المصلين في أجواء مريحة.", action: "ساهم في الفرش" },
//   { image: "/hero/slide-3.jpg", eyebrow: "صيانة المساجد", title: "عناية مستمرة ببيوت الله", description: "ساهم في صيانة المرافق والتكييف والإضاءة، لتبقى المساجد مهيأة.", action: "ادعم الصيانة" },
//   { image: "/hero/slide-4.jpg", eyebrow: "أثر عطائك", title: "من مساهمتك يبدأ الأثر", description: "ساهم في مشاريع العناية بالمساجد، وتعرّف على الإنجازات المنفذة.", action: "استعرض فرص العطاء" }
// ];

// // روابط فئات وليست حملات مباشرة. حدّث كل رابط عندما تتوفر صفحة الحملة الرسمية.
// const opportunities = [
//   { title: "فرش وتجهيز المساجد", description: "مساهمات تدعم تهيئة المصليات وتجديد الفرش.", icon: Building2, label: "فرص الفرش والتجهيز" },
//   { title: "صيانة المرافق والتكييف", description: "مساهمات تدعم جاهزية المساجد ومرافقها.", icon: Wrench, label: "فرص الصيانة" },
//   { title: "تشغيل والعناية اليومية", description: "مساهمات تدعم استدامة خدمات العناية بالمساجد.", icon: Sparkles, label: "فرص التشغيل" }
// ];

// // صورة مستقلة لكل مشهد مع بديل تلقائي؛ يسمح بالتدرج والتلاشي بين الصور.
// function HeroBackgroundImage({ src, alt, active, priority = false }: {
//   src: string;
//   alt: string;
//   active: boolean;
//   priority?: boolean;
// }) {
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
//       <Image
//         src={failed ? HERO_IMAGE : src}
//         alt={alt}
//         fill
//         priority={priority}
//         sizes="100vw"
//         onError={() => setFailed(true)}
//         className="object-cover object-center hero-image"
//       />
//     </div>
//   );
// }

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [reducedMotion, setReducedMotion] = useState(false);

//   useEffect(() => {
//     const query = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const sync = () => setReducedMotion(query.matches);
//     sync();
//     query.addEventListener?.("change", sync);
//     return () => query.removeEventListener?.("change", sync);
//   }, []);

//   useEffect(() => {
//     if (!isPlaying || reducedMotion) return;
//     const interval = window.setInterval(() => {
//       setActiveSlide((current) => (current + 1) % heroSlides.length);
//     }, 6000);
//     return () => window.clearInterval(interval);
//   }, [isPlaying, reducedMotion]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },

//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description:
//         "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: " ثلاثة أعوام من العضوية المستمرة في مجلس الجمعيات الأهلية",
//       description:
//         "نعتز في #جمعية_يعمر للعناية بالمساجد بهذا التكريم من مجلس الجمعيات الأهلية بالمنطقة الشرقية  @ercharities  بمناسبة إكمال ثلاثة أعوام من العضوية المستمرة في المجلس. ثلاثة أعوام من الشراكة والتعاون، نسعى فيها إلى الإسهام في تمكين القطاع غير الربحي وتعزيز أثره، وخدمة بيوت الله بما يحقق رسالتنا: #مساجد_عامرة_ونموذجية ",
//       image: "/iamge/adh.png",
//     }
//   ];

//   const stats = [
//     { number: 10, label: "المساجد والجوامع التي تم بناؤها إجمالي", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 413, label: "إجمالي المساجد والجوامع المخدومة", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 496, label: "إجمالي مشاريع الصيانة المنفذة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 23, label: "مشاريع الصيانة الطارئة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 53, label: "الأحياء المستفيدة", unit: "", icon: TrendingUp, logo: "مزلة8.png" },
//     { number: 243, label: "المكيفات الجديدة التي تم تركيبها", unit: "", icon: Sparkles, logo: "مزلة4.png" },
//     { number: 1185, label: "المكيفات التي تمت صيانتها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 621, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 17057, label: "إجمالي أمتار العزل المنفذة", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 20973, label: "إجمالي أمتار الفرش الجديد", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 67806, label: "إجمالي أمتار الفرش التي تم غسلها", unit: "م", icon: Sparkles, logo: "مزلة3.png" },
//     { number: 6783, label: "إجمالي مساحة دورات المياه التي تمت صيانتها أو خدمتها", unit: "م²", icon: Wrench, logo: "مزلة.png" }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>

//         <meta
//           name="description"
//           content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة"
//         />

//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7] overflow-hidden" dir="rtl">

//         {/* الخلفية */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ================= HERO - واجهة يعمر المطوّرة ================= */}
//         <section id="home" className="relative min-h-[min(780px,94vh)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="واجهة يعمر الرئيسية">
//           {/* صور المشاهد تتغير مع النص تلقائيًا. الصورة الأولى هي صورة الموقع الأصلية. */}
//           <div className="absolute inset-0 hero-image-wrapper">
//             {heroSlides.map((slide, index) => (
//               <HeroBackgroundImage
//                 key={slide.image}
//                 src={slide.image}
//                 alt={`صورة ${slide.eyebrow}`}
//                 active={index === activeSlide}
//                 priority={index === 0}
//               />
//             ))}
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/65 via-[#08704C]/35 to-[#205939]/10" />
//           <div className="absolute inset-0 hero-light pointer-events-none" />
//           <div className="container mx-auto relative z-10 w-full">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//               <div className="space-y-8">
//                 <div className="hero-content hero-delay-1">
//                   <Image src="/maidelog.png" alt="شعار جمعية يعمر للعناية بالمساجد" width={1000} height={600} className="h-auto w-[min(85vw,430px)] object-contain brightness-0 invert drop-shadow-lg" priority />
//                 </div>
//                 {/* key يعيد حركة ظهور النص فقط عند تغير المشهد */}
//                 <div key={activeSlide} className="hero-message space-y-4 min-h-[195px]" aria-live="off">
//                   <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/15 border border-white/25 text-white px-4 py-2 rounded-full">{heroSlides[activeSlide].eyebrow}</span>
//                   <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white">{heroSlides[activeSlide].title}</h1>
//                   <p className="text-base sm:text-xl leading-relaxed max-w-xl text-white/90">{heroSlides[activeSlide].description}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-3 items-center">
//                   <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 bg-white text-[#08704C] font-black text-lg shadow-xl hover:bg-[#eaf8f0] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-[#e7d79d]">
//                     <Heart className="w-5 h-5" aria-hidden="true" /> {heroSlides[activeSlide].action} <ExternalLink className="w-4 h-4" aria-hidden="true" />
//                   </a>
//                   <a href="#opportunities" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 border-2 border-white/80 text-white font-bold hover:bg-white/15 transition-colors">فرص العطاء</a>
//                 </div>
//                 <div className="flex items-center gap-3 text-white" aria-label="التحكم في المشاهد">
//                   <button type="button" onClick={() => {setActiveSlide((a)=>(a+1)%heroSlides.length);}} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد التالي"><ChevronRight className="w-5 h-5" /></button>
//                   <div className="flex gap-2" role="group" aria-label="اختيار المشهد">
//                     {heroSlides.map((slide, i) => <button key={i} type="button" onClick={() => setActiveSlide(i)} aria-label={`عرض المشهد ${i+1}: ${slide.eyebrow}`} aria-current={i===activeSlide ? "true" : undefined} className={`h-2.5 rounded-full transition-all ${i===activeSlide ? "w-9 bg-white" : "w-2.5 bg-white/45 hover:bg-white/80"}`} />)}
//                   </div>
//                   <button type="button" onClick={()=>setIsPlaying(p=>!p)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label={isPlaying ? "إيقاف تبديل المشاهد" : "استئناف تبديل المشاهد"}>{isPlaying ? <Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}</button>
//                   <button type="button" onClick={() => setActiveSlide((a)=>(a-1+heroSlides.length)%heroSlides.length)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد السابق"><ChevronLeft className="w-5 h-5" /></button>
//                   <span className="text-sm text-white/75">{activeSlide+1} / {heroSlides.length}</span>
//                 </div>
//               </div>
//               <div className="hidden lg:flex flex-col gap-4 items-end hero-content hero-delay-3">
//                 <div className="w-[min(100%,390px)] rounded-3xl border border-white/25 bg-white/12 backdrop-blur-md p-8 text-white shadow-xl">
//                   <div className="flex items-center gap-3 mb-4"><ShieldCheck className="w-8 h-8"/><span className="text-lg font-black">تبرع بثقة</span></div>
//                   <p className="leading-8 text-white/90">جمعية أهلية متخصصة في العناية بالمساجد؛ ترخيص رقم 5161 وفق البيانات المنشورة في الموقع.</p>
//                   <div className="mt-5 h-px bg-white/25" />
//                   <p className="mt-4 text-sm text-white/80">تنتقل التبرعات إلى متجر يعمر الرسمي عبر اتصال آمن.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* آية قرآنية بزخرفة هادئة — بدون عنوان أو مرجع أسفلها */}
//         <div className="relative bg-[#F0F3E7] px-4 sm:px-6 lg:px-8 py-9 sm:py-12" dir="rtl">
//           <div className="container mx-auto max-w-6xl">
//             <div className="flex items-center justify-center gap-3 sm:gap-7">
//               {/* زخارف متناظرة خفيفة تراعي عرض الجوال */}
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#08704C]/30 to-transparent" />
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//               </div>
//               <p className="text-center text-[#08704C] font-medium text-[15px] sm:text-lg lg:text-[22px] leading-[2.3] tracking-normal max-w-[830px]" lang="ar">
//                 ﴿ إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ﴾
//               </p>
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#08704C]/30 to-transparent" />
//               </div>
//             </div>
//             <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#08704C]/30 to-transparent" aria-hidden="true" />
//           </div>
//         </div>

//         {/* ================= OPPORTUNITIES - فرص العطاء ================= */}
//         <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7]">
//           <div className="container mx-auto">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <span className="inline-block rounded-full bg-[#08704C]/10 px-4 py-2 text-sm font-bold text-[#08704C] mb-4">فرص العطاء</span>
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#103f31] mb-4">عطاؤك يساهم في عمارة بيوت الله</h2>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-6">
//               {opportunities.map((item, index) => {
//                 const Icon = item.icon;
//                 return <ScrollReveal key={item.title} delay={index*100}>
//                   <article className="h-full flex flex-col rounded-3xl bg-white border border-[#08704C]/10 shadow-sm p-7 hover:shadow-xl transition-shadow">
//                     <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C] mb-6"><Icon className="w-9 h-9"/></div>
//                     <h3 className="text-2xl font-black text-[#143f32] mb-3">{item.title}</h3>
//                     <p className="text-gray-600 leading-8 mb-7 flex-1">{item.description}</p>
//                     <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] text-white px-5 py-3 font-bold hover:bg-[#065538]">استعرض فرص التبرع <ExternalLink className="w-4 h-4"/></a>
//                   </article>
//                 </ScrollReveal>;
//               })}
//             </div>
//             <p className="text-center text-gray-500 text-sm mt-5">تُعرض الفئات للتعريف؛ تفاصيل المشاريع المتاحة ومبالغها داخل المتجر الرسمي.</p>
//           </div>
//         </section>

//         {/* ================= IMPACT JOURNEY - من عطائكم إلى الأثر ================= */}
//         <section id="impact-journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto max-w-6xl">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#08704C] mb-4">من عطائكم إلى الأثر</h2>
//                 <p className="text-gray-600 text-lg">رحلة مبسطة تشرح كيف تسهم تبرعاتكم في دعم أعمال العناية بالمساجد.</p>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-5">
//               {[
//                 {title:"مساهمتك",text:"اختر إحدى فرص التبرع المتاحة في المتجر الرسمي.",icon:Heart},
//                 {title:"تنفيذ المشروع",text:"تُوجَّه الموارد لدعم أعمال البناء أو الصيانة أو التشغيل وفق المشروع.",icon:Wrench},
//                 {title:"أثر ملموس",text:"اطّلع على أخبار الجمعية وتقارير إنجازاتها المنشورة.",icon:CheckCircle2}
//               ].map((step, i) => {const Icon=step.icon; return <div key={step.title} className="relative rounded-3xl border border-[#08704C]/15 bg-[#F0F3E7] p-8 text-center">
//                 <span className="absolute top-4 right-5 text-[#08704C]/40 text-sm font-bold">0{i+1}</span>
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#08704C] text-white mb-5"><Icon className="w-8 h-8"/></div>
//                 <h3 className="text-xl font-black text-[#08704C] mb-3">{step.title}</h3><p className="text-gray-600 leading-7">{step.text}</p>
//               </div>;})}
//             </div>
//           </div>
//         </section>

//         {/* ================= TRUST - الثقة والشفافية ================= */}
//         <section aria-label="معلومات الثقة والشفافية" className="bg-[#eaf2ed] px-4 sm:px-6 lg:px-8 py-10">
//           <div className="container mx-auto grid sm:grid-cols-3 gap-5 text-center">
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><ShieldCheck className="w-7 h-7"/> ترخيص الجمعية: 5161</div>
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><ClipboardCheck className="w-7 h-7"/> ISO 9001:2015 </div>
//             <div className="flex items-center justify-center gap-3 text-[#08704C] font-bold"><TrendingUp className="w-7 h-7"/> حوكمة 2024: 99.40%</div>
//           </div>
//         </section>

//         {/* ================= SERVICES ================= */}

//         <section
//           id="services"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   خدماتنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير
//                   الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {/* البناء */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors duration-500">
//                         بناء المساجد
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسية
//                         المعتمدة.
//                       </p>
//                     </div>

//                     <Link href="/services/construction">
//                       <Button
//                         variant="ghost"
//                         className="text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* الصيانة */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors duration-500">
//                         الصيانة
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تنفيذ أعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>

//                     <Link href="/services/maintenance">
//                       <Button
//                         variant="ghost"
//                         className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* التشغيل */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors duration-500">
//                         التشغيل
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة
//                         المصلين.
//                       </p>
//                     </div>

//                     <Link href="/services/operation">
//                       <Button
//                         variant="ghost"
//                         className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* ================= ACHIEVEMENTS ================= */}

//         <section
//           id="achievements"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-grid opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-14">
//                 <h2 className="text-4xl font-black text-gray-900 mb-3">
//                   أبرز الإنجازات
//                 </h2>
//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* ================= NEWS ================= */}

//         <section
//           id="news"
//           className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden"
//         >
//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   آخر الأخبار
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

            
// <ScrollReveal delay={200}>
//   <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//     <NewsSlider limit={3} />
//   </div>
// </ScrollReveal>

// {/* زر عرض جميع الأخبار */}
// <div className="relative z-20 mt-10 flex justify-center">
//   <Link
//     href="/news"
//     className="inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#06583B] transition-colors"
//   >
//     عرض جميع الأخبار
//     <ArrowLeft className="h-5 w-5" />
//   </Link>
// </div>


//           </div>
//         </section>

//         {/* ================= STATISTICS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">

//           <div className="absolute inset-0 pattern-grid opacity-10" />

//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black mb-6">
//                   إنجازاتنا بالأرقام
//                 </h2>

//                 <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                   نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <ScrollReveal key={index} delay={index * 80}>

//                     <div className="text-center space-y-6 group">

//                       <div className="stat-card w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 shadow-md">

//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16 stat-logo"
//                             />
//                           </div>
//                         ) : (
//                           <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter
//                           end={stat.number}
//                           className="text-3xl md:text-4xl font-extrabold text-white"
//                         />

//                         {stat.unit && (
//                           <span className="text-sm mt-1 text-white/90">
//                             {stat.unit}
//                           </span>
//                         )}
//                       </div>

//                       <p className="text-lg font-bold mt-3">
//                         {stat.label}
//                       </p>

//                     </div>
//                   </ScrollReveal>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* ================= TESTIMONIALS ================= */}

//         <TestimonialsSection />

//         {/* ================= PARTNERS ================= */}

//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">

//           <div className="absolute inset-0 pattern-diagonal opacity-30" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   شركاؤنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= JOIN US ================= */}

//         <section
//           id="about"
//           className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >

//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   انضم إلينا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//               {/* تطوع */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       تطوع معنا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك
//                       وجهدك
//                     </p>

//                     <Link href="/volunteer">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-lg">
//                         تقديم طلب تطوع
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* شريك */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       كن شريكًا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر
//                       والثواب
//                     </p>

//                     <Link href="/partnership">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] text-white shadow-lg">
//                         تقديم طلب شراكة
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* اعرف أكثر */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       اعرف أكثر
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>

//                     <Link href="/about">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] text-white shadow-lg">
//                         من نحن
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* زر العودة للأعلى */}
//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="scroll-top-button fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] text-white rounded-2xl shadow-2xl flex items-center justify-center"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 transition-transform duration-300" />
//           </button>
//         )}

//         <WhatsAppButton />

//         <SiteFooter />
//       </div>

//       {/* ================= CUSTOM MOTION ================= */}

//       <style jsx global>{`

//         /* حركة صورة الواجهة - هادئة جداً */
//         @keyframes heroBreath {
//           0%, 100% {
//             transform: scale(1.02);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .hero-image {
//           animation: heroBreath 18s ease-in-out infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-image { animation: none !important; }
//         }


//         /* ظهور الرسائل عند تغيير المشهد */
//         @keyframes messageReveal {
//           from { opacity: .15; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .hero-message { animation: messageReveal .65s ease-out both; }

//         /* دخول عناصر الواجهة */
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .hero-content {
//           opacity: 0;
//           animation: heroReveal 0.9s cubic-bezier(.22, .8, .25, 1) forwards;
//         }

//         .hero-delay-1 {
//           animation-delay: 0.1s;
//         }

//         .hero-delay-2 {
//           animation-delay: 0.3s;
//         }

//         .hero-delay-3 {
//           animation-delay: 0.5s;
//         }

//         .hero-delay-4 {
//           animation-delay: 0.7s;
//         }


//         /* إضاءة خفيفة فوق الصورة */
//         .hero-light {
//           background:
//             radial-gradient(
//               circle at 75% 30%,
//               rgba(255,255,255,0.10),
//               transparent 30%
//             );
//         }


//         /* البطاقات الجانبية */
//         .hero-stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .hero-stat-card:hover {
//           transform: translateY(-8px) translateX(-4px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
//         }


//         /* الأزرار */
//         .interactive-button {
//           transition:
//             transform 0.35s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.35s ease,
//             background-color 0.35s ease;
//         }

//         .interactive-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 16px 35px rgba(0, 0, 0, 0.16);
//         }

//         .interactive-button:active {
//           transform: translateY(0) scale(0.98);
//         }


//         /* البطاقات الرئيسية */
//         .premium-card {
//           transition:
//             transform 0.55s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.55s ease,
//             border-color 0.55s ease;
//         }

//         .premium-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.10);
//         }


//         /* الإضاءة داخل البطاقة */
//         .card-glow {
//           position: absolute;
//           width: 180px;
//           height: 180px;
//           top: -100px;
//           right: -100px;
//           border-radius: 9999px;
//           background: rgba(8, 112, 76, 0.08);
//           filter: blur(25px);
//           opacity: 0;
//           transition:
//             opacity 0.6s ease,
//             transform 0.8s ease;
//         }

//         .premium-card:hover .card-glow {
//           opacity: 1;
//           transform: scale(1.4);
//         }


//         /* الأيقونات بدون دوران */
//         .service-icon,
//         .join-icon {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .premium-card:hover .service-icon,
//         .premium-card:hover .join-icon {
//           transform: translateY(-6px) scale(1.04);
//           box-shadow: 0 20px 35px rgba(0, 0, 0, 0.16);
//         }


//         /* بطاقات الإحصائيات */
//         .stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             background 0.5s ease,
//             border-color 0.5s ease,
//             box-shadow 0.5s ease;
//         }

//         .group:hover .stat-card {
//           transform: translateY(-8px);
//           background: rgba(255, 255, 255, 0.14);
//           border-color: rgba(255, 255, 255, 0.28);
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
//         }

//         .stat-logo {
//           transition: transform 0.5s cubic-bezier(.22, .8, .25, 1);
//         }

//         .group:hover .stat-logo {
//           transform: scale(1.08);
//         }


//         /* زر العودة للأعلى */
//         @keyframes scrollButtonIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.9);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .scroll-top-button {
//           animation: scrollButtonIn 0.45s cubic-bezier(.22, .8, .25, 1);
//           transition:
//             transform 0.35s ease,
//             box-shadow 0.35s ease;
//         }

//         .scroll-top-button:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//         }

//         .scroll-top-button:hover svg {
//           transform: translateY(-3px);
//         }


//         /* احترام إعدادات المستخدم لتقليل الحركة */
//         @media (prefers-reduced-motion: reduce) {

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//             scroll-behavior: auto !important;
//           }

//         }

//       `}</style>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Building2,
//   Wrench,
//   Sparkles,
//   ExternalLink,
//   Users,
//   Handshake,
//   BookOpen,
//   ArrowUp,
//   ArrowLeft,
//   TrendingUp,
//   FileText, Heart, Pause, Play, ChevronLeft, ChevronRight, ShieldCheck, MapPin, CheckCircle2, ClipboardCheck
// } from "lucide-react";

// import { AnimatedCounter } from "@/components/AnimatedCounter";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { PartnersCarousel } from "@/components/PartnersCarousel";
// import  NewsSlider  from "@/components/NewsSlider";
// import AchievementsSlider from "@/components/AchievementsSlider";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Link from "next/link";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// // صورة الواجهة
// const HERO_IMAGE = "/picture24.jpg";
// const DONATION_URL = "https://store.yaamur.org.sa/";

// // ضع الصور الجديدة في public/hero/ بالأسماء المحددة.
// // إذا لم تتوفر صورة بعد، يعرض الموقع picture24.jpg تلقائيًا.
// const heroSlides = [
//   { image: HERO_IMAGE, eyebrow: "معًا لبيوت الله", title: "أثرٌ يبقى.. ومساجد عامرة", description: "ساهم في العناية ببيوت الله، وكن جزءًا من أثر يمتد لخدمة المصلين.", action: "تبرع الآن" },
//   { image: "/hero/slide-2.jpg", eyebrow: "فرش المساجد", title: "سجادة جديدة.. وراحة لكل مصلٍ", description: "بدعمك تتجدد المصليات وتتهيأ لاستقبال المصلين في أجواء مريحة.", action: "ساهم في الفرش" },
//   { image: "/hero/slide-3.jpg", eyebrow: "صيانة المساجد", title: "عناية مستمرة ببيوت الله", description: "ساهم في صيانة المرافق والتكييف والإضاءة، لتبقى المساجد مهيأة.", action: "ادعم الصيانة" },
//   { image: "/hero/slide-4.jpg", eyebrow: "أثر عطائك", title: "من مساهمتك يبدأ الأثر", description: "ساهم في مشاريع العناية بالمساجد، وتعرّف على الإنجازات المنفذة.", action: "استعرض فرص العطاء" }
// ];

// // روابط فئات وليست حملات مباشرة. حدّث كل رابط عندما تتوفر صفحة الحملة الرسمية.
// const opportunities = [
//   { title: "فرش وتجهيز المساجد", description: "مساهمات تدعم تهيئة المصليات وتجديد الفرش.", icon: Building2, label: "فرص الفرش والتجهيز" },
//   { title: "صيانة المرافق والتكييف", description: "مساهمات تدعم جاهزية المساجد ومرافقها.", icon: Wrench, label: "فرص الصيانة" },
//   { title: "تشغيل والعناية اليومية", description: "مساهمات تدعم استدامة خدمات العناية بالمساجد.", icon: Sparkles, label: "فرص التشغيل" }
// ];

// // صورة مستقلة لكل مشهد مع بديل تلقائي؛ يسمح بالتدرج والتلاشي بين الصور.
// function HeroBackgroundImage({ src, alt, active, priority = false }: {
//   src: string;
//   alt: string;
//   active: boolean;
//   priority?: boolean;
// }) {
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
//       <Image
//         src={failed ? HERO_IMAGE : src}
//         alt={alt}
//         fill
//         priority={priority}
//         sizes="100vw"
//         onError={() => setFailed(true)}
//         className="object-cover object-center hero-image"
//       />
//     </div>
//   );
// }

// export default function HomePage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [showSceneBackground, setShowSceneBackground] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [reducedMotion, setReducedMotion] = useState(false);

//   useEffect(() => {
//     const query = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const sync = () => setReducedMotion(query.matches);
//     sync();
//     query.addEventListener?.("change", sync);
//     return () => query.removeEventListener?.("change", sync);
//   }, []);

//   useEffect(() => {
//     if (!isPlaying || reducedMotion) return;
//     const interval = window.setInterval(() => {
//       setActiveSlide((current) => (current + 1) % heroSlides.length);
//     }, 6000);
//     return () => window.clearInterval(interval);
//   }, [isPlaying, reducedMotion]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//       const scene = document.getElementById("home-scroll-scene");
//       setShowSceneBackground(Boolean(scene && scene.getBoundingClientRect().top <= 0));
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   const achievements = [
//     {
//       title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
//       description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
//       image: "/achif/iso.png"
//     },

//     {
//       title: "نسبة الحوكمة لعام 2024: 99.40%",
//       description:
//         "تحقيق معايير الالتزام والشفافية والسلامة المالية بدرجات كاملة تقريباً.",
//       image: "/achif/99.40.jpg"
//     },
//     {
//       title: " ثلاثة أعوام من العضوية المستمرة في مجلس الجمعيات الأهلية",
//       description:
//         "نعتز في #جمعية_يعمر للعناية بالمساجد بهذا التكريم من مجلس الجمعيات الأهلية بالمنطقة الشرقية  @ercharities  بمناسبة إكمال ثلاثة أعوام من العضوية المستمرة في المجلس. ثلاثة أعوام من الشراكة والتعاون، نسعى فيها إلى الإسهام في تمكين القطاع غير الربحي وتعزيز أثره، وخدمة بيوت الله بما يحقق رسالتنا: #مساجد_عامرة_ونموذجية ",
//       image: "/iamge/adh.png",
//     }
//   ];

//   const stats = [
//     { number: 10, label: "المساجد والجوامع التي تم بناؤها إجمالي", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 413, label: "إجمالي المساجد والجوامع المخدومة", unit: "", icon: Building2, logo: "مزلة33.png" },
//     { number: 496, label: "إجمالي مشاريع الصيانة المنفذة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 23, label: "مشاريع الصيانة الطارئة", unit: "", icon: Wrench, logo: "مزلة.png" },
//     { number: 53, label: "الأحياء المستفيدة", unit: "", icon: TrendingUp, logo: "مزلة8.png" },
//     { number: 243, label: "المكيفات الجديدة التي تم تركيبها", unit: "", icon: Sparkles, logo: "مزلة4.png" },
//     { number: 1185, label: "المكيفات التي تمت صيانتها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 621, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: "مزلة4.png" },
//     { number: 17057, label: "إجمالي أمتار العزل المنفذة", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 20973, label: "إجمالي أمتار الفرش الجديد", unit: "م", icon: Building2, logo: "مزلة3.png" },
//     { number: 67806, label: "إجمالي أمتار الفرش التي تم غسلها", unit: "م", icon: Sparkles, logo: "مزلة3.png" },
//     { number: 6783, label: "إجمالي مساحة دورات المياه التي تمت صيانتها أو خدمتها", unit: "م²", icon: Wrench, logo: "مزلة.png" }
//   ];

//   return (
//     <>
//       <Head>
//         <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>

//         <meta
//           name="description"
//           content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة"
//         />

//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7] overflow-hidden" dir="rtl">

//         {/* الخلفية */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl" />
//         </div>

//         {/* ================= HERO - واجهة يعمر المطوّرة ================= */}
//         <section id="home" className="relative min-h-[min(780px,94vh)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="واجهة يعمر الرئيسية">
//           {/* صور المشاهد تتغير مع النص تلقائيًا. الصورة الأولى هي صورة الموقع الأصلية. */}
//           <div className="absolute inset-0 hero-image-wrapper">
//             {heroSlides.map((slide, index) => (
//               <HeroBackgroundImage
//                 key={slide.image}
//                 src={slide.image}
//                 alt={`صورة ${slide.eyebrow}`}
//                 active={index === activeSlide}
//                 priority={index === 0}
//               />
//             ))}
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/65 via-[#08704C]/35 to-[#205939]/10" />
//           <div className="absolute inset-0 hero-light pointer-events-none" />
//           <div className="container mx-auto relative z-10 w-full">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//               <div className="space-y-8">
//                 <div className="hero-content hero-delay-1">
//                   <Image src="/maidelog.png" alt="شعار جمعية يعمر للعناية بالمساجد" width={1000} height={600} className="h-auto w-[min(85vw,430px)] object-contain brightness-0 invert drop-shadow-lg" priority />
//                 </div>
//                 {/* key يعيد حركة ظهور النص فقط عند تغير المشهد */}
//                 <div key={activeSlide} className="hero-message space-y-4 min-h-[195px]" aria-live="off">
//                   <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/15 border border-white/25 text-white px-4 py-2 rounded-full">{heroSlides[activeSlide].eyebrow}</span>
//                   <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white">{heroSlides[activeSlide].title}</h1>
//                   <p className="text-base sm:text-xl leading-relaxed max-w-xl text-white/90">{heroSlides[activeSlide].description}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-3 items-center">
//                   <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 bg-white text-[#08704C] font-black text-lg shadow-xl hover:bg-[#eaf8f0] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-[#e7d79d]">
//                     <Heart className="w-5 h-5" aria-hidden="true" /> {heroSlides[activeSlide].action} <ExternalLink className="w-4 h-4" aria-hidden="true" />
//                   </a>
//                   <a href="#opportunities" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 border-2 border-white/80 text-white font-bold hover:bg-white/15 transition-colors">فرص العطاء</a>
//                 </div>
//                 <div className="flex items-center gap-3 text-white" aria-label="التحكم في المشاهد">
//                   <button type="button" onClick={() => {setActiveSlide((a)=>(a+1)%heroSlides.length);}} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد التالي"><ChevronRight className="w-5 h-5" /></button>
//                   <div className="flex gap-2" role="group" aria-label="اختيار المشهد">
//                     {heroSlides.map((slide, i) => <button key={i} type="button" onClick={() => setActiveSlide(i)} aria-label={`عرض المشهد ${i+1}: ${slide.eyebrow}`} aria-current={i===activeSlide ? "true" : undefined} className={`h-2.5 rounded-full transition-all ${i===activeSlide ? "w-9 bg-white" : "w-2.5 bg-white/45 hover:bg-white/80"}`} />)}
//                   </div>
//                   <button type="button" onClick={()=>setIsPlaying(p=>!p)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label={isPlaying ? "إيقاف تبديل المشاهد" : "استئناف تبديل المشاهد"}>{isPlaying ? <Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}</button>
//                   <button type="button" onClick={() => setActiveSlide((a)=>(a-1+heroSlides.length)%heroSlides.length)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد السابق"><ChevronLeft className="w-5 h-5" /></button>
//                   <span className="text-sm text-white/75">{activeSlide+1} / {heroSlides.length}</span>
//                 </div>
//               </div>
//               <div className="hidden lg:flex flex-col gap-4 items-end hero-content hero-delay-3">
//                 <div className="w-[min(100%,390px)] rounded-3xl border border-white/25 bg-white/12 backdrop-blur-md p-8 text-white shadow-xl">
//                   <div className="flex items-center gap-3 mb-4"><ShieldCheck className="w-8 h-8"/><span className="text-lg font-black">تبرع بثقة</span></div>
//                   <p className="leading-8 text-white/90">جمعية أهلية متخصصة في العناية بالمساجد؛ ترخيص رقم 5161 وفق البيانات المنشورة في الموقع.</p>
//                   <div className="mt-5 h-px bg-white/25" />
//                   <p className="mt-4 text-sm text-white/80">تنتقل التبرعات إلى متجر يعمر الرسمي عبر اتصال آمن.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* الخلفية المستمرة: تبدأ بعد الواجهة الرئيسية فقط وتبقى حتى التذييل */}
//         <div id="home-scroll-scene" className="home-scroll-scene relative isolate">
//           <div className={`home-scene-background fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${showSceneBackground ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
//             {heroSlides.map((slide, index) => (
//               <HeroBackgroundImage
//                 key={`scene-${slide.image}`}
//                 src={slide.image}
//                 alt=""
//                 active={index === activeSlide}
//               />
//             ))}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#F0F3E7]/45 via-[#D2DED7]/40 to-[#08704C]/35" />
//           </div>

//         {/* آية قرآنية بزخرفة هادئة — بدون عنوان أو مرجع أسفلها */}
//         <div className="home-scene-panel home-scene-verse relative bg-[#F0F3E7] px-4 sm:px-6 lg:px-8 py-9 sm:py-12" dir="rtl">
//           <div className="container mx-auto max-w-6xl">
//             <div className="flex items-center justify-center gap-3 sm:gap-7">
//               {/* زخارف متناظرة خفيفة تراعي عرض الجوال */}
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#08704C]/30 to-transparent" />
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//               </div>
//               <p className="text-center text-[#08704C] font-medium text-[15px] sm:text-lg lg:text-[22px] leading-[2.3] tracking-normal max-w-[830px]" lang="ar">
//                 ﴿ إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ﴾
//               </p>
//               <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
//                 <span className="text-2xl lg:text-3xl font-light">✧</span>
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#08704C]/30 to-transparent" />
//               </div>
//             </div>
//             <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#08704C]/30 to-transparent" aria-hidden="true" />
//           </div>
//         </div>

//         {/* ================= OPPORTUNITIES - فرص العطاء ================= */}
//         <section id="opportunities" className="home-scene-panel py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7]">
//           <div className="container mx-auto">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <span className="inline-block rounded-full bg-[#08704C]/10 px-4 py-2 text-sm font-bold text-[#08704C] mb-4">فرص العطاء</span>
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#103f31] mb-4">عطاؤك يساهم في عمارة بيوت الله</h2>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-6">
//               {opportunities.map((item, index) => {
//                 const Icon = item.icon;
//                 return <ScrollReveal key={item.title} delay={index*100}>
//                   <article className="h-full flex flex-col rounded-3xl bg-white border border-[#08704C]/10 shadow-sm p-7 hover:shadow-xl transition-shadow">
//                     <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C] mb-6"><Icon className="w-9 h-9"/></div>
//                     <h3 className="text-2xl font-black text-[#143f32] mb-3">{item.title}</h3>
//                     <p className="text-gray-600 leading-8 mb-7 flex-1">{item.description}</p>
//                     <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] text-white px-5 py-3 font-bold hover:bg-[#065538]">استعرض فرص التبرع <ExternalLink className="w-4 h-4"/></a>
//                   </article>
//                 </ScrollReveal>;
//               })}
//             </div>
//             <p className="text-center text-gray-500 text-sm mt-5">تُعرض الفئات للتعريف؛ تفاصيل المشاريع المتاحة ومبالغها داخل المتجر الرسمي.</p>
//           </div>
//         </section>

//         {/* ================= IMPACT JOURNEY - من عطائكم إلى الأثر ================= */}
//         <section id="impact-journey" className="home-scene-panel py-20 px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="container mx-auto max-w-6xl">
//             <ScrollReveal>
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl sm:text-5xl font-black text-[#08704C] mb-4">من عطائكم إلى الأثر</h2>
//                 <p className="text-gray-600 text-lg">رحلة مبسطة تشرح كيف تسهم تبرعاتكم في دعم أعمال العناية بالمساجد.</p>
//               </div>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-5">
//               {[
//                 {title:"مساهمتك",text:"اختر إحدى فرص التبرع المتاحة في المتجر الرسمي.",icon:Heart},
//                 {title:"تنفيذ المشروع",text:"تُوجَّه الموارد لدعم أعمال البناء أو الصيانة أو التشغيل وفق المشروع.",icon:Wrench},
//                 {title:"أثر ملموس",text:"اطّلع على أخبار الجمعية وتقارير إنجازاتها المنشورة.",icon:CheckCircle2}
//               ].map((step, i) => {const Icon=step.icon; return <div key={step.title} className="relative rounded-3xl border border-[#08704C]/15 bg-[#F0F3E7] p-8 text-center">
//                 <span className="absolute top-4 right-5 text-[#08704C]/40 text-sm font-bold">0{i+1}</span>
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#08704C] text-white mb-5"><Icon className="w-8 h-8"/></div>
//                 <h3 className="text-xl font-black text-[#08704C] mb-3">{step.title}</h3><p className="text-gray-600 leading-7">{step.text}</p>
//               </div>;})}
//             </div>
//           </div>
//         </section>

//         {/* ================= TRUST - الثقة والشفافية ================= */}
       
// {/* ================= TRUST - الثقة والشفافية ================= */}
// <section
//   aria-label="معلومات الثقة والشفافية"
//   className="relative px-4 sm:px-6 lg:px-8 py-6"
// >
//   <div className="container mx-auto max-w-5xl">
//     <div className="rounded-2xl border border-[#08704C]/15 bg-white/75 backdrop-blur-md shadow-sm px-4 sm:px-6 py-4">

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">

//         <div className="flex items-center justify-center gap-3 py-2 px-3">
//           <ShieldCheck className="w-6 h-6 text-[#08704C] shrink-0" />
//           <span className="text-sm font-bold text-[#174734]">
//             ترخيص الجمعية: 5161
//           </span>
//         </div>

//         <div className="flex items-center justify-center gap-3 py-2 px-3 border-y sm:border-y-0 sm:border-x border-[#08704C]/15">
//           <ClipboardCheck className="w-6 h-6 text-[#08704C] shrink-0" />
//           <span className="text-sm font-bold text-[#174734]" dir="ltr">
//             ISO 9001:2015
//           </span>
//         </div>

//         <div className="flex items-center justify-center gap-3 py-2 px-3">
//           <TrendingUp className="w-6 h-6 text-[#08704C] shrink-0" />
//           <span className="text-sm font-bold text-[#174734]">
//             حوكمة 2024: 99.40%
//           </span>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>


//         {/* ================= SERVICES ================= */}

//         <section
//           id="services"
//           className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">
//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   خدماتنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير
//                   الجودة والاحترافية
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {/* البناء */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Building2 className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors duration-500">
//                         بناء المساجد
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسية
//                         المعتمدة.
//                       </p>
//                     </div>

//                     <Link href="/services/construction">
//                       <Button
//                         variant="ghost"
//                         className="text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* الصيانة */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Wrench className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors duration-500">
//                         الصيانة
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تنفيذ أعمال الصيانة الدورية لضمان جاهزية المسجد.
//                       </p>
//                     </div>

//                     <Link href="/services/maintenance">
//                       <Button
//                         variant="ghost"
//                         className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* التشغيل */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">

//                   <div className="card-glow" />

//                   <CardContent className="p-8 space-y-6 relative z-10">

//                     <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Sparkles className="w-10 h-10 text-white" />
//                     </div>

//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors duration-500">
//                         التشغيل
//                       </h3>

//                       <p className="text-gray-600 leading-relaxed">
//                         تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة
//                         المصلين.
//                       </p>
//                     </div>

//                     <Link href="/services/operation">
//                       <Button
//                         variant="ghost"
//                         className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] font-bold transition-all duration-300"
//                       >
//                         اعرف المزيد
//                         <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* ================= ACHIEVEMENTS ================= */}

//         <section
//           id="achievements"
//           className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 pattern-grid opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-14">
//                 <h2 className="text-4xl font-black text-gray-900 mb-3">
//                   أبرز الإنجازات
//                 </h2>
//               </div>
//             </ScrollReveal>

//             <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//               <ScrollReveal>
//                 <AchievementsSlider items={achievements} />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* ================= NEWS ================= */}

//         <section
//           id="news"
//           className="home-scene-panel py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden"
//         >
//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   آخر الأخبار
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

            
// <ScrollReveal delay={200}>
//   <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
//     <NewsSlider limit={3} />
//   </div>
// </ScrollReveal>

// {/* زر عرض جميع الأخبار */}
// <div className="relative z-20 mt-10 flex justify-center">
//   <Link
//     href="/news"
//     className="inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#06583B] transition-colors"
//   >
//     عرض جميع الأخبار
//     <ArrowLeft className="h-5 w-5" />
//   </Link>
// </div>


//           </div>
//         </section>

//         {/* ================= STATISTICS ================= */}

//         <section className="home-scene-panel home-scene-dark py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">

//           <div className="absolute inset-0 pattern-grid opacity-10" />

//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black mb-6">
//                   إنجازاتنا بالأرقام
//                 </h2>

//                 <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                   نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <ScrollReveal key={index} delay={index * 80}>

//                     <div className="text-center space-y-6 group">

//                       <div className="stat-card w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 shadow-md">

//                         {stat.logo ? (
//                           <div className="mb-2 flex items-center justify-center">
//                             <Image
//                               src={`/logoashe/${stat.logo}`}
//                               alt={stat.label}
//                               width={64}
//                               height={64}
//                               className="object-contain w-14 h-14 md:w-16 md:h-16 stat-logo"
//                             />
//                           </div>
//                         ) : (
//                           <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
//                         )}

//                         <AnimatedCounter
//                           end={stat.number}
//                           className="text-3xl md:text-4xl font-extrabold text-white"
//                         />

//                         {stat.unit && (
//                           <span className="text-sm mt-1 text-white/90">
//                             {stat.unit}
//                           </span>
//                         )}
//                       </div>

//                       <p className="text-lg font-bold mt-3">
//                         {stat.label}
//                       </p>

//                     </div>
//                   </ScrollReveal>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* ================= TESTIMONIALS ================= */}

//         <div className="home-scene-panel home-testimonials-shell">
//           <TestimonialsSection />
//         </div>

//         {/* ================= PARTNERS ================= */}

//         <section className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">

//           <div className="absolute inset-0 pattern-diagonal opacity-30" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   شركاء النجاح
//                 </span>

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   شركاؤنا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
//                 </p>

//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <PartnersCarousel />
//             </ScrollReveal>

//           </div>
//         </section>

//         {/* ================= JOIN US ================= */}

//         <section
//           id="about"
//           className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
//         >

//           <div className="absolute inset-0 pattern-dots opacity-20" />

//           <div className="container mx-auto relative z-10">

//             <ScrollReveal>
//               <div className="text-center mb-20">

//                 <h2 className="text-5xl font-black text-gray-900 mb-6">
//                   انضم إلينا
//                 </h2>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
//                 </p>

//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//               {/* تطوع */}
//               <ScrollReveal delay={100}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Users className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       تطوع معنا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك
//                       وجهدك
//                     </p>

//                     <Link href="/volunteer">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-lg">
//                         تقديم طلب تطوع
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* شريك */}
//               <ScrollReveal delay={200}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <Handshake className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       كن شريكًا
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر
//                       والثواب
//                     </p>

//                     <Link href="/partnership">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] text-white shadow-lg">
//                         تقديم طلب شراكة
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               {/* اعرف أكثر */}
//               <ScrollReveal delay={300}>
//                 <Card className="group premium-card border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">

//                   <CardContent className="p-8 text-center space-y-6">

//                     <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
//                       <BookOpen className="w-12 h-12 text-white" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       اعرف أكثر
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
//                     </p>

//                     <Link href="/about">
//                       <Button className="interactive-button w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] text-white shadow-lg">
//                         من نحن
//                       </Button>
//                     </Link>

//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//             </div>
//           </div>
//         </section>

//         {/* زر العودة للأعلى */}
//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="scroll-top-button fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] text-white rounded-2xl shadow-2xl flex items-center justify-center"
//             aria-label="العودة للأعلى"
//           >
//             <ArrowUp className="w-6 h-6 transition-transform duration-300" />
//           </button>
//         )}

//         <WhatsAppButton />

//         <div className="home-scene-footer relative z-10">
//           <SiteFooter />
//         </div>
//         </div>{/* نهاية الخلفية المستمرة */}
//       </div>

//       {/* ================= CUSTOM MOTION ================= */}

//       <style jsx global>{`

//         /* خلفية المساجد المستمرة تحت كل الأقسام بعد الـ Hero */
//         .home-scroll-scene {
//           position: relative;
//         }
//         .home-scene-background {
//           position: fixed;
//           inset: 0;
//           z-index: 0;
//           overflow: hidden;
//         }
//         .home-scroll-scene > .home-scene-panel {
//           position: relative;
//           z-index: 1;
//           background: rgba(240, 243, 231, 0.70) !important;
//           background-image: none !important;
//           -webkit-backdrop-filter: blur(4px);
//           backdrop-filter: blur(4px);
//         }
//         /* تنويع بسيط في شفافية الأقسام مع بقاء صورة المسجد ظاهرة */
//         .home-scroll-scene > .home-scene-panel:nth-child(2n) {
//           background: rgba(255, 255, 255, 0.73) !important;
//         }
//         /* الحفاظ على النصوص البيضاء في قسم الإحصاءات */
//         .home-scroll-scene > .home-scene-dark,
//         .home-scroll-scene > .home-scene-dark:nth-child(2n) {
//           background: rgba(7, 70, 48, 0.81) !important;
//           color: white;
//         }
//         /* قسم قالوا عنا يأتي من ملف مكون مستقل */
//         .home-testimonials-shell > section {
//           background: transparent !important;
//           background-image: none !important;
//         }
//         /* يظهر خلف الفوتر بشكل خفيف مع بقاء النصوص مقروءة */
//         .home-scene-footer footer {
//           background: rgba(13, 32, 26, 0.90) !important;
//           background-image: none !important;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .home-scene-background .hero-image {
//             animation: none !important;
//           }
//         }

//         /* حركة صورة الواجهة - هادئة جداً */
//         @keyframes heroBreath {
//           0%, 100% {
//             transform: scale(1.02);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .hero-image {
//           animation: heroBreath 18s ease-in-out infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-image { animation: none !important; }
//         }


//         /* ظهور الرسائل عند تغيير المشهد */
//         @keyframes messageReveal {
//           from { opacity: .15; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .hero-message { animation: messageReveal .65s ease-out both; }

//         /* دخول عناصر الواجهة */
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .hero-content {
//           opacity: 0;
//           animation: heroReveal 0.9s cubic-bezier(.22, .8, .25, 1) forwards;
//         }

//         .hero-delay-1 {
//           animation-delay: 0.1s;
//         }

//         .hero-delay-2 {
//           animation-delay: 0.3s;
//         }

//         .hero-delay-3 {
//           animation-delay: 0.5s;
//         }

//         .hero-delay-4 {
//           animation-delay: 0.7s;
//         }


//         /* إضاءة خفيفة فوق الصورة */
//         .hero-light {
//           background:
//             radial-gradient(
//               circle at 75% 30%,
//               rgba(255,255,255,0.10),
//               transparent 30%
//             );
//         }


//         /* البطاقات الجانبية */
//         .hero-stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .hero-stat-card:hover {
//           transform: translateY(-8px) translateX(-4px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
//         }


//         /* الأزرار */
//         .interactive-button {
//           transition:
//             transform 0.35s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.35s ease,
//             background-color 0.35s ease;
//         }

//         .interactive-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 16px 35px rgba(0, 0, 0, 0.16);
//         }

//         .interactive-button:active {
//           transform: translateY(0) scale(0.98);
//         }


//         /* البطاقات الرئيسية */
//         .premium-card {
//           transition:
//             transform 0.55s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.55s ease,
//             border-color 0.55s ease;
//         }

//         .premium-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.10);
//         }


//         /* الإضاءة داخل البطاقة */
//         .card-glow {
//           position: absolute;
//           width: 180px;
//           height: 180px;
//           top: -100px;
//           right: -100px;
//           border-radius: 9999px;
//           background: rgba(8, 112, 76, 0.08);
//           filter: blur(25px);
//           opacity: 0;
//           transition:
//             opacity 0.6s ease,
//             transform 0.8s ease;
//         }

//         .premium-card:hover .card-glow {
//           opacity: 1;
//           transform: scale(1.4);
//         }


//         /* الأيقونات بدون دوران */
//         .service-icon,
//         .join-icon {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             box-shadow 0.5s ease;
//         }

//         .premium-card:hover .service-icon,
//         .premium-card:hover .join-icon {
//           transform: translateY(-6px) scale(1.04);
//           box-shadow: 0 20px 35px rgba(0, 0, 0, 0.16);
//         }


//         /* بطاقات الإحصائيات */
//         .stat-card {
//           transition:
//             transform 0.5s cubic-bezier(.22, .8, .25, 1),
//             background 0.5s ease,
//             border-color 0.5s ease,
//             box-shadow 0.5s ease;
//         }

//         .group:hover .stat-card {
//           transform: translateY(-8px);
//           background: rgba(255, 255, 255, 0.14);
//           border-color: rgba(255, 255, 255, 0.28);
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
//         }

//         .stat-logo {
//           transition: transform 0.5s cubic-bezier(.22, .8, .25, 1);
//         }

//         .group:hover .stat-logo {
//           transform: scale(1.08);
//         }


//         /* زر العودة للأعلى */
//         @keyframes scrollButtonIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.9);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .scroll-top-button {
//           animation: scrollButtonIn 0.45s cubic-bezier(.22, .8, .25, 1);
//           transition:
//             transform 0.35s ease,
//             box-shadow 0.35s ease;
//         }

//         .scroll-top-button:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//         }

//         .scroll-top-button:hover svg {
//           transform: translateY(-3px);
//         }


//         /* احترام إعدادات المستخدم لتقليل الحركة */
//         @media (prefers-reduced-motion: reduce) {

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//             scroll-behavior: auto !important;
//           }

//         }

//       `}</style>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Wrench,
  Sparkles,
  ExternalLink,
  Users,
  Handshake,
  BookOpen,
  ArrowUp,
  ArrowLeft,
  TrendingUp,
  FileText, Heart, Pause, Play, ChevronLeft, ChevronRight, ShieldCheck, MapPin, CheckCircle2, ClipboardCheck
} from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import  NewsSlider  from "@/components/NewsSlider";
import AchievementsSlider from "@/components/AchievementsSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

// صورة الواجهة
const HERO_IMAGE = "/picture24.jpg";
const DONATION_URL = "https://store.yaamur.org.sa/";

// ضع الصور الجديدة في public/hero/ بالأسماء المحددة.
// إذا لم تتوفر صورة بعد، يعرض الموقع picture24.jpg تلقائيًا.
const heroSlides = [
  { image: HERO_IMAGE, eyebrow: "معًا لبيوت الله", title: "أثرٌ يبقى.. ومساجد عامرة", description: "ساهم في العناية ببيوت الله، وكن جزءًا من أثر يمتد لخدمة المصلين.", action: "تبرع الآن" },
  { image: "/hero/slide-2.jpg", eyebrow: "فرش المساجد", title: "سجادة جديدة.. وراحة لكل مصلٍ", description: "بدعمك تتجدد المصليات وتتهيأ لاستقبال المصلين في أجواء مريحة.", action: "ساهم في الفرش" },
  { image: "/hero/slide-3.jpg", eyebrow: "صيانة المساجد", title: "عناية مستمرة ببيوت الله", description: "ساهم في صيانة المرافق والتكييف والإضاءة، لتبقى المساجد مهيأة.", action: "ادعم الصيانة" },
  { image: "/hero/slide-4.jpg", eyebrow: "أثر عطائك", title: "من مساهمتك يبدأ الأثر", description: "ساهم في مشاريع العناية بالمساجد، وتعرّف على الإنجازات المنفذة.", action: "استعرض فرص العطاء" }
];

// روابط فئات وليست حملات مباشرة. حدّث كل رابط عندما تتوفر صفحة الحملة الرسمية.
const opportunities = [
  { title: "فرش وتجهيز المساجد", description: "مساهمات تدعم تهيئة المصليات وتجديد الفرش.", icon: Building2, label: "فرص الفرش والتجهيز" },
  { title: "صيانة المرافق والتكييف", description: "مساهمات تدعم جاهزية المساجد ومرافقها.", icon: Wrench, label: "فرص الصيانة" },
  { title: "تشغيل والعناية اليومية", description: "مساهمات تدعم استدامة خدمات العناية بالمساجد.", icon: Sparkles, label: "فرص التشغيل" }
];

// صورة مستقلة لكل مشهد مع بديل تلقائي؛ يسمح بالتدرج والتلاشي بين الصور.
function HeroBackgroundImage({ src, alt, active, priority = false }: {
  src: string;
  alt: string;
  active: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
      <Image
        src={failed ? HERO_IMAGE : src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        onError={() => setFailed(true)}
        className="object-cover object-center hero-image"
      />
    </div>
  );
}

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSceneBackground, setShowSceneBackground] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (!isPlaying || reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPlaying, reducedMotion]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const scene = document.getElementById("home-scroll-scene");
      setShowSceneBackground(Boolean(scene && scene.getBoundingClientRect().top <= 0));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const achievements = [
    {
      title: "حصول يعمر على شهادة الآيزو في إدارة الجودة ISO 9001:2015",
      description: "شهادة الاعتماد في الجودة الإدارية ISO 9001:2015.",
      image: "/achif/iso.png"
    },

    {
      title: "نتائج الحوكمة والالتزام لعامي 2024 و2025",
      description:
        "نسبة الحوكمة في عام 2024: 99.40%، وفي عام 2025: 98.80%.",
      image: "/achif/governance-2024-2025.jpeg"
    },
    {
      title: " ثلاثة أعوام من العضوية المستمرة في مجلس الجمعيات الأهلية",
      description:
        "نعتز في #جمعية_يعمر للعناية بالمساجد بهذا التكريم من مجلس الجمعيات الأهلية بالمنطقة الشرقية  @ercharities  بمناسبة إكمال ثلاثة أعوام من العضوية المستمرة في المجلس. ثلاثة أعوام من الشراكة والتعاون، نسعى فيها إلى الإسهام في تمكين القطاع غير الربحي وتعزيز أثره، وخدمة بيوت الله بما يحقق رسالتنا: #مساجد_عامرة_ونموذجية ",
      image: "/iamge/adh.png",
    }
  ];

  const stats = [
    { number: 10, label: "المساجد والجوامع التي تم بناؤها إجمالي", unit: "", icon: Building2, logo: "مزلة33.png" },
    { number: 413, label: "إجمالي المساجد والجوامع المخدومة", unit: "", icon: Building2, logo: "مزلة33.png" },
    { number: 496, label: "إجمالي مشاريع الصيانة المنفذة", unit: "", icon: Wrench, logo: "مزلة.png" },
    { number: 23, label: "مشاريع الصيانة الطارئة", unit: "", icon: Wrench, logo: "مزلة.png" },
    { number: 53, label: "الأحياء المستفيدة", unit: "", icon: TrendingUp, logo: "مزلة8.png" },
    { number: 243, label: "المكيفات الجديدة التي تم تركيبها", unit: "", icon: Sparkles, logo: "مزلة4.png" },
    { number: 1185, label: "المكيفات التي تمت صيانتها", unit: "", icon: Wrench, logo: "مزلة4.png" },
    { number: 621, label: "المكيفات التي تم غسلها", unit: "", icon: Wrench, logo: "مزلة4.png" },
    { number: 17057, label: "إجمالي أمتار العزل المنفذة", unit: "م", icon: Building2, logo: "مزلة3.png" },
    { number: 20973, label: "إجمالي أمتار الفرش الجديد", unit: "م", icon: Building2, logo: "مزلة3.png" },
    { number: 67806, label: "إجمالي أمتار الفرش التي تم غسلها", unit: "م", icon: Sparkles, logo: "مزلة3.png" },
    { number: 6783, label: "إجمالي مساحة دورات المياه التي تمت صيانتها أو خدمتها", unit: "م²", icon: Wrench, logo: "مزلة.png" }
  ];

  return (
    <>
      <Head>
        <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>

        <meta
          name="description"
          content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>

      <div className="min-h-screen bg-[#F0F3E7] overflow-hidden" dir="rtl">

        {/* الخلفية */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl" />
        </div>

        {/* ================= HERO - واجهة يعمر المطوّرة ================= */}
        <section id="home" className="relative min-h-[min(780px,94vh)] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="واجهة يعمر الرئيسية">
          {/* صور المشاهد تتغير مع النص تلقائيًا. الصورة الأولى هي صورة الموقع الأصلية. */}
          <div className="absolute inset-0 hero-image-wrapper">
            {heroSlides.map((slide, index) => (
              <HeroBackgroundImage
                key={slide.image}
                src={slide.image}
                alt={`صورة ${slide.eyebrow}`}
                active={index === activeSlide}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/65 via-[#08704C]/35 to-[#205939]/10" />
          <div className="absolute inset-0 hero-light pointer-events-none" />
          <div className="container mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="hero-content hero-delay-1">
                  <Image src="/maidelog.png" alt="شعار جمعية يعمر للعناية بالمساجد" width={1000} height={600} className="h-auto w-[min(85vw,430px)] object-contain brightness-0 invert drop-shadow-lg" priority />
                </div>
                {/* key يعيد حركة ظهور النص فقط عند تغير المشهد */}
                <div key={activeSlide} className="hero-message space-y-4 min-h-[195px]" aria-live="off">
                  <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/15 border border-white/25 text-white px-4 py-2 rounded-full">{heroSlides[activeSlide].eyebrow}</span>
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white">{heroSlides[activeSlide].title}</h1>
                  <p className="text-base sm:text-xl leading-relaxed max-w-xl text-white/90">{heroSlides[activeSlide].description}</p>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 bg-white text-[#08704C] font-black text-lg shadow-xl hover:bg-[#eaf8f0] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-[#e7d79d]">
                    <Heart className="w-5 h-5" aria-hidden="true" /> {heroSlides[activeSlide].action} <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#opportunities" className="inline-flex items-center justify-center rounded-2xl px-6 py-4 border-2 border-white/80 text-white font-bold hover:bg-white/15 transition-colors">فرص العطاء</a>
                </div>
                <div className="flex items-center gap-3 text-white" aria-label="التحكم في المشاهد">
                  <button type="button" onClick={() => {setActiveSlide((a)=>(a+1)%heroSlides.length);}} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد التالي"><ChevronRight className="w-5 h-5" /></button>
                  <div className="flex gap-2" role="group" aria-label="اختيار المشهد">
                    {heroSlides.map((slide, i) => <button key={i} type="button" onClick={() => setActiveSlide(i)} aria-label={`عرض المشهد ${i+1}: ${slide.eyebrow}`} aria-current={i===activeSlide ? "true" : undefined} className={`h-2.5 rounded-full transition-all ${i===activeSlide ? "w-9 bg-white" : "w-2.5 bg-white/45 hover:bg-white/80"}`} />)}
                  </div>
                  <button type="button" onClick={()=>setIsPlaying(p=>!p)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label={isPlaying ? "إيقاف تبديل المشاهد" : "استئناف تبديل المشاهد"}>{isPlaying ? <Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}</button>
                  <button type="button" onClick={() => setActiveSlide((a)=>(a-1+heroSlides.length)%heroSlides.length)} className="p-2 rounded-full bg-white/15 hover:bg-white/25" aria-label="المشهد السابق"><ChevronLeft className="w-5 h-5" /></button>
                  <span className="text-sm text-white/75">{activeSlide+1} / {heroSlides.length}</span>
                </div>
              </div>
              <div className="hidden lg:flex flex-col gap-4 items-end hero-content hero-delay-3">
                <div className="w-[min(100%,390px)] rounded-3xl border border-white/25 bg-white/12 backdrop-blur-md p-8 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4"><ShieldCheck className="w-8 h-8"/><span className="text-lg font-black">تبرع بثقة</span></div>
                  <p className="leading-8 text-white/90">جمعية أهلية متخصصة في العناية بالمساجد؛ ترخيص رقم 5161 وفق البيانات المنشورة في الموقع.</p>
                  <div className="mt-5 h-px bg-white/25" />
                  <p className="mt-4 text-sm text-white/80">تنتقل التبرعات إلى متجر يعمر الرسمي عبر اتصال آمن.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* الخلفية المستمرة: تبدأ بعد الواجهة الرئيسية فقط وتبقى حتى التذييل */}
        <div id="home-scroll-scene" className="home-scroll-scene relative isolate">
          <div className={`home-scene-background fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${showSceneBackground ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <HeroBackgroundImage
                key={`scene-${slide.image}`}
                src={slide.image}
                alt=""
                active={index === activeSlide}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F3E7]/45 via-[#D2DED7]/40 to-[#08704C]/35" />
          </div>

        {/* آية قرآنية بزخرفة هادئة — بدون عنوان أو مرجع أسفلها */}
        <div className="home-scene-panel home-scene-verse relative bg-[#F0F3E7] px-4 sm:px-6 lg:px-8 py-9 sm:py-12" dir="rtl">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-3 sm:gap-7">
              {/* زخارف متناظرة خفيفة تراعي عرض الجوال */}
              <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
                <span className="h-px flex-1 bg-gradient-to-l from-[#08704C]/30 to-transparent" />
                <span className="text-2xl lg:text-3xl font-light">✧</span>
              </div>
              <p className="text-center text-[#08704C] font-medium text-[15px] sm:text-lg lg:text-[22px] leading-[2.3] tracking-normal max-w-[830px]" lang="ar">
                ﴿ إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ﴾
              </p>
              <div className="hidden sm:flex flex-1 max-w-40 items-center gap-3 text-[#08704C]/25" aria-hidden="true">
                <span className="text-2xl lg:text-3xl font-light">✧</span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#08704C]/30 to-transparent" />
              </div>
            </div>
            <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#08704C]/30 to-transparent" aria-hidden="true" />
          </div>
        </div>

        {/* ================= OPPORTUNITIES - فرص العطاء ================= */}
        <section id="opportunities" className="home-scene-panel py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7]">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-[#08704C]/10 px-4 py-2 text-sm font-bold text-[#08704C] mb-4">فرص العطاء</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#103f31] mb-4">عطاؤك يساهم في عمارة بيوت الله</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {opportunities.map((item, index) => {
                const Icon = item.icon;
                return <ScrollReveal key={item.title} delay={index*100}>
                  <article className="h-full flex flex-col rounded-3xl bg-white border border-[#08704C]/10 shadow-sm p-7 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#08704C]/10 text-[#08704C] mb-6"><Icon className="w-9 h-9"/></div>
                    <h3 className="text-2xl font-black text-[#143f32] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-8 mb-7 flex-1">{item.description}</p>
                    <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08704C] text-white px-5 py-3 font-bold hover:bg-[#065538]">استعرض فرص التبرع <ExternalLink className="w-4 h-4"/></a>
                  </article>
                </ScrollReveal>;
              })}
            </div>
            <p className="text-center text-gray-500 text-sm mt-5">تُعرض الفئات للتعريف؛ تفاصيل المشاريع المتاحة ومبالغها داخل المتجر الرسمي.</p>
          </div>
        </section>

        {/* ================= IMPACT JOURNEY - من عطائكم إلى الأثر ================= */}
        <section id="impact-journey" className="home-scene-panel py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-5xl font-black text-[#08704C] mb-4">من عطائكم إلى الأثر</h2>
                <p className="text-gray-600 text-lg">رحلة مبسطة تشرح كيف تسهم تبرعاتكم في دعم أعمال العناية بالمساجد.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {title:"مساهمتك",text:"اختر إحدى فرص التبرع المتاحة في المتجر الرسمي.",icon:Heart},
                {title:"تنفيذ المشروع",text:"تُوجَّه الموارد لدعم أعمال البناء أو الصيانة أو التشغيل وفق المشروع.",icon:Wrench},
                {title:"أثر ملموس",text:"اطّلع على أخبار الجمعية وتقارير إنجازاتها المنشورة.",icon:CheckCircle2}
              ].map((step, i) => {const Icon=step.icon; return <div key={step.title} className="relative rounded-3xl border border-[#08704C]/15 bg-[#F0F3E7] p-8 text-center">
                <span className="absolute top-4 right-5 text-[#08704C]/40 text-sm font-bold">0{i+1}</span>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#08704C] text-white mb-5"><Icon className="w-8 h-8"/></div>
                <h3 className="text-xl font-black text-[#08704C] mb-3">{step.title}</h3><p className="text-gray-600 leading-7">{step.text}</p>
              </div>;})}
            </div>
          </div>
        </section>

        {/* ================= TRUST - الثقة والشفافية ================= */}
       
{/* ================= TRUST - الثقة والشفافية ================= */}
<section
  aria-label="معلومات الثقة والشفافية"
  className="relative px-4 sm:px-6 lg:px-8 py-6"
>
  <div className="container mx-auto max-w-5xl">
    <div className="rounded-2xl border border-[#08704C]/15 bg-white/75 backdrop-blur-md shadow-sm px-4 sm:px-6 py-4">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">

        <div className="flex items-center justify-center gap-3 py-2 px-3">
          <ShieldCheck className="w-6 h-6 text-[#08704C] shrink-0" />
          <span className="text-sm font-bold text-[#174734]">
            ترخيص الجمعية: 5161
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 py-2 px-3 border-y sm:border-y-0 sm:border-x border-[#08704C]/15">
          <ClipboardCheck className="w-6 h-6 text-[#08704C] shrink-0" />
          <span className="text-sm font-bold text-[#174734]" dir="ltr">
            ISO 9001:2015
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 py-2 px-3">
          <TrendingUp className="w-6 h-6 text-[#08704C] shrink-0" />
          <span className="text-sm font-bold text-[#174734]">
            حوكمة 2024: 99.40%
          </span>
        </div>

      </div>
    </div>
  </div>
</section>


        {/* ================= SERVICES ================= */}

        <section
          id="services"
          className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-dots opacity-20" />

          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-5xl font-black text-gray-900 mb-6">
                  خدماتنا
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير
                  الجودة والاحترافية
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* البناء */}
              <ScrollReveal delay={100}>
                <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

                  <div className="card-glow" />

                  <CardContent className="p-8 space-y-6 relative z-10">

                    <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors duration-500">
                        بناء المساجد
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        إنشاء مساجد دائمة أو مؤقتة وفق المعايير الهندسية
                        المعتمدة.
                      </p>
                    </div>

                    <Link href="/services/construction">
                      <Button
                        variant="ghost"
                        className="text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold transition-all duration-300"
                      >
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* الصيانة */}
              <ScrollReveal delay={200}>
                <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

                  <div className="card-glow" />

                  <CardContent className="p-8 space-y-6 relative z-10">

                    <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
                      <Wrench className="w-10 h-10 text-white" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A2B366] transition-colors duration-500">
                        الصيانة
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        تنفيذ أعمال الصيانة الدورية لضمان جاهزية المسجد.
                      </p>
                    </div>

                    <Link href="/services/maintenance">
                      <Button
                        variant="ghost"
                        className="text-[#A2B366] hover:text-white hover:bg-[#A2B366] font-bold transition-all duration-300"
                      >
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* التشغيل */}
              <ScrollReveal delay={300}>
                <Card className="group premium-card relative overflow-hidden border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5 md:col-span-2 lg:col-span-1">

                  <div className="card-glow" />

                  <CardContent className="p-8 space-y-6 relative z-10">

                    <div className="service-icon w-20 h-20 bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4D7A61] transition-colors duration-500">
                        التشغيل
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        تأمين الاحتياجات التشغيلية اليومية التي تضمن راحة
                        المصلين.
                      </p>
                    </div>

                    <Link href="/services/operation">
                      <Button
                        variant="ghost"
                        className="text-[#4D7A61] hover:text-white hover:bg-[#4D7A61] font-bold transition-all duration-300"
                      >
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}

        <section
          id="achievements"
          className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-grid opacity-20" />

          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="text-4xl font-black text-gray-900 mb-3">
                  أبرز الإنجازات
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <AchievementsSlider items={achievements} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ================= NEWS ================= */}

        <section
          id="news"
          className="home-scene-panel py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F0F3E7] to-white relative overflow-hidden"
        >
          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-20">

                <h2 className="text-5xl font-black text-gray-900 mb-6">
                  آخر الأخبار
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
                </p>
              </div>
            </ScrollReveal>

            
<ScrollReveal delay={200}>
  <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
    <NewsSlider limit={3} />
  </div>
</ScrollReveal>

{/* زر عرض جميع الأخبار */}
<div className="relative z-20 mt-10 flex justify-center">
  <Link
    href="/news"
    className="inline-flex items-center gap-2 rounded-xl bg-[#08704C] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#06583B] transition-colors"
  >
    عرض جميع الأخبار
    <ArrowLeft className="h-5 w-5" />
  </Link>
</div>


          </div>
        </section>

        {/* ================= STATISTICS ================= */}

        <section className="home-scene-panel home-scene-dark py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">

          <div className="absolute inset-0 pattern-grid opacity-10" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-20">

                <h2 className="text-5xl font-black mb-6">
                  إنجازاتنا بالأرقام
                </h2>

                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
                </p>

              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <ScrollReveal key={index} delay={index * 80}>

                    <div className="text-center space-y-6 group">

                      <div className="stat-card w-36 h-36 mx-auto bg-white/8 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center border-2 border-white/10 shadow-md">

                        {stat.logo ? (
                          <div className="mb-2 flex items-center justify-center">
                            <Image
                              src={`/logoashe/${stat.logo}`}
                              alt={stat.label}
                              width={64}
                              height={64}
                              className="object-contain w-14 h-14 md:w-16 md:h-16 stat-logo"
                            />
                          </div>
                        ) : (
                          <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-white/90" />
                        )}

                        <AnimatedCounter
                          end={stat.number}
                          className="text-3xl md:text-4xl font-extrabold text-white"
                        />

                        {stat.unit && (
                          <span className="text-sm mt-1 text-white/90">
                            {stat.unit}
                          </span>
                        )}
                      </div>

                      <p className="text-lg font-bold mt-3">
                        {stat.label}
                      </p>

                    </div>
                  </ScrollReveal>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}

        <div className="home-scene-panel home-testimonials-shell">
          <TestimonialsSection />
        </div>

        {/* ================= PARTNERS ================= */}

        <section className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative overflow-hidden">

          <div className="absolute inset-0 pattern-diagonal opacity-30" />

          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-20">

                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  شركاء النجاح
                </span>

                <h2 className="text-5xl font-black text-gray-900 mb-6">
                  شركاؤنا
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <PartnersCarousel />
            </ScrollReveal>

          </div>
        </section>

        {/* ================= JOIN US ================= */}

        <section
          id="about"
          className="home-scene-panel py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        >

          <div className="absolute inset-0 pattern-dots opacity-20" />

          <div className="container mx-auto relative z-10">

            <ScrollReveal>
              <div className="text-center mb-20">

                <h2 className="text-5xl font-black text-gray-900 mb-6">
                  انضم إلينا
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
                </p>

              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

              {/* تطوع */}
              <ScrollReveal delay={100}>
                <Card className="group premium-card border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">

                  <CardContent className="p-8 text-center space-y-6">

                    <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center shadow-xl">
                      <Users className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      تطوع معنا
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك
                      وجهدك
                    </p>

                    <Link href="/volunteer">
                      <Button className="interactive-button w-full bg-gradient-to-r from-[#08704C] to-[#4D7A61] text-white shadow-lg">
                        تقديم طلب تطوع
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* شريك */}
              <ScrollReveal delay={200}>
                <Card className="group premium-card border-2 border-transparent hover:border-[#A2B366]/30 h-full card-elevated bg-gradient-to-br from-white to-[#A2B366]/5">

                  <CardContent className="p-8 text-center space-y-6">

                    <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
                      <Handshake className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      كن شريكًا
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر
                      والثواب
                    </p>

                    <Link href="/partnership">
                      <Button className="interactive-button w-full bg-gradient-to-r from-[#A2B366] to-[#08704C] text-white shadow-lg">
                        تقديم طلب شراكة
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* اعرف أكثر */}
              <ScrollReveal delay={300}>
                <Card className="group premium-card border-2 border-transparent hover:border-[#4D7A61]/30 h-full card-elevated bg-gradient-to-br from-white to-[#4D7A61]/5">

                  <CardContent className="p-8 text-center space-y-6">

                    <div className="join-icon w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center shadow-xl">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      اعرف أكثر
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
                    </p>

                    <Link href="/about">
                      <Button className="interactive-button w-full bg-gradient-to-r from-[#4D7A61] to-[#08704C] text-white shadow-lg">
                        من نحن
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* زر العودة للأعلى */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-top-button fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#4D7A61] text-white rounded-2xl shadow-2xl flex items-center justify-center"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-6 h-6 transition-transform duration-300" />
          </button>
        )}

        <WhatsAppButton />

        <div className="home-scene-footer relative z-10">
          <SiteFooter />
        </div>
        </div>{/* نهاية الخلفية المستمرة */}
      </div>

      {/* ================= CUSTOM MOTION ================= */}

      <style jsx global>{`

        /* خلفية المساجد المستمرة تحت كل الأقسام بعد الـ Hero */
        .home-scroll-scene {
          position: relative;
        }
        .home-scene-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .home-scroll-scene > .home-scene-panel {
          position: relative;
          z-index: 1;
          background: rgba(240, 243, 231, 0.70) !important;
          background-image: none !important;
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
        }
        /* تنويع بسيط في شفافية الأقسام مع بقاء صورة المسجد ظاهرة */
        .home-scroll-scene > .home-scene-panel:nth-child(2n) {
          background: rgba(255, 255, 255, 0.73) !important;
        }
        /* الحفاظ على النصوص البيضاء في قسم الإحصاءات */
        .home-scroll-scene > .home-scene-dark,
        .home-scroll-scene > .home-scene-dark:nth-child(2n) {
          background: rgba(7, 70, 48, 0.81) !important;
          color: white;
        }
        /* قسم قالوا عنا يأتي من ملف مكون مستقل */
        .home-testimonials-shell > section {
          background: transparent !important;
          background-image: none !important;
        }
        /* يظهر خلف الفوتر بشكل خفيف مع بقاء النصوص مقروءة */
        /* الفوتر باللون الأخضر الرسمي للجمعية بدل الأسود */
        .home-scene-footer footer {
          background: #08704C !important;
          background-color: #08704C !important;
          background-image: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-scene-background .hero-image {
            animation: none !important;
          }
        }

        /* فواصل ناعمة بين أقسام الصفحة الرئيسية، بدون تغيير محتواها */
        .home-scroll-scene > section,
        .home-scroll-scene > .home-scene-verse,
        .home-scroll-scene > .home-testimonials-shell {
          position: relative;
        }

        /* خط رفيع يتلاشى عند الطرفين */
        .home-scroll-scene > section::after,
        .home-scroll-scene > .home-scene-verse::after,
        .home-scroll-scene > .home-testimonials-shell::after {
          content: "";
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: min(280px, 58vw);
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(8, 112, 76, .28) 35%,
            rgba(8, 112, 76, .55) 50%,
            rgba(8, 112, 76, .28) 65%,
            transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* نقطة زخرفية صغيرة في وسط الخط */
        .home-scroll-scene > section::before,
        .home-scroll-scene > .home-scene-verse::before,
        .home-scroll-scene > .home-testimonials-shell::before {
          content: "";
          position: absolute;
          bottom: 12px;
          left: 50%;
          width: 7px;
          height: 7px;
          transform: translateX(-50%) rotate(45deg);
          background: #A2B366;
          border: 1px solid rgba(8,112,76,.5);
          z-index: 6;
          pointer-events: none;
        }

        /* فاصل فاتح فوق خلفية الإحصائيات الخضراء */
        .home-scroll-scene > .home-scene-dark::after {
          background: linear-gradient(90deg, transparent,
            rgba(255,255,255,.65), transparent);
        }
        .home-scroll-scene > .home-scene-dark::before {
          background: #F0F3E7;
          border-color: rgba(255,255,255,.6);
        }

        /* حركة صورة الواجهة - هادئة جداً */
        @keyframes heroBreath {
          0%, 100% {
            transform: scale(1.02);
          }

          50% {
            transform: scale(1.06);
          }
        }

        .hero-image {
          animation: heroBreath 18s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-image { animation: none !important; }
        }


        /* ظهور الرسائل عند تغيير المشهد */
        @keyframes messageReveal {
          from { opacity: .15; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-message { animation: messageReveal .65s ease-out both; }

        /* دخول عناصر الواجهة */
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content {
          opacity: 0;
          animation: heroReveal 0.9s cubic-bezier(.22, .8, .25, 1) forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.1s;
        }

        .hero-delay-2 {
          animation-delay: 0.3s;
        }

        .hero-delay-3 {
          animation-delay: 0.5s;
        }

        .hero-delay-4 {
          animation-delay: 0.7s;
        }


        /* إضاءة خفيفة فوق الصورة */
        .hero-light {
          background:
            radial-gradient(
              circle at 75% 30%,
              rgba(255,255,255,0.10),
              transparent 30%
            );
        }


        /* البطاقات الجانبية */
        .hero-stat-card {
          transition:
            transform 0.5s cubic-bezier(.22, .8, .25, 1),
            box-shadow 0.5s ease;
        }

        .hero-stat-card:hover {
          transform: translateY(-8px) translateX(-4px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
        }


        /* الأزرار */
        .interactive-button {
          transition:
            transform 0.35s cubic-bezier(.22, .8, .25, 1),
            box-shadow 0.35s ease,
            background-color 0.35s ease;
        }

        .interactive-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.16);
        }

        .interactive-button:active {
          transform: translateY(0) scale(0.98);
        }


        /* البطاقات الرئيسية */
        .premium-card {
          transition:
            transform 0.55s cubic-bezier(.22, .8, .25, 1),
            box-shadow 0.55s ease,
            border-color 0.55s ease;
        }

        .premium-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.10);
        }


        /* الإضاءة داخل البطاقة */
        .card-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          top: -100px;
          right: -100px;
          border-radius: 9999px;
          background: rgba(8, 112, 76, 0.08);
          filter: blur(25px);
          opacity: 0;
          transition:
            opacity 0.6s ease,
            transform 0.8s ease;
        }

        .premium-card:hover .card-glow {
          opacity: 1;
          transform: scale(1.4);
        }


        /* الأيقونات بدون دوران */
        .service-icon,
        .join-icon {
          transition:
            transform 0.5s cubic-bezier(.22, .8, .25, 1),
            box-shadow 0.5s ease;
        }

        .premium-card:hover .service-icon,
        .premium-card:hover .join-icon {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.16);
        }


        /* بطاقات الإحصائيات */
        .stat-card {
          transition:
            transform 0.5s cubic-bezier(.22, .8, .25, 1),
            background 0.5s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .group:hover .stat-card {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
        }

        .stat-logo {
          transition: transform 0.5s cubic-bezier(.22, .8, .25, 1);
        }

        .group:hover .stat-logo {
          transform: scale(1.08);
        }


        /* زر العودة للأعلى */
        @keyframes scrollButtonIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .scroll-top-button {
          animation: scrollButtonIn 0.45s cubic-bezier(.22, .8, .25, 1);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .scroll-top-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .scroll-top-button:hover svg {
          transform: translateY(-3px);
        }


        /* احترام إعدادات المستخدم لتقليل الحركة */
        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>
    </>
  );
}