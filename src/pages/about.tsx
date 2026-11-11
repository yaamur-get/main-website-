
// import Head from "next/head";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowLeft, Users, Award, Target, Eye, Mail, Phone } from "lucide-react";
// import { ScrollReveal } from "@/components/ScrollReveal";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import Image from "next/image";
// import SiteFooter from "@/components/SiteFooter";

// interface BoardMember {
//   id: number;
//   name: string;
//   position: string;
//   image: string;
//   email?: string;
//   phone?: string;
// }

// interface Employee {
//   id: number;
//   name: string;
//   position: string;
//   department: string;
//   image: string;
//   email?: string;
// }

// // بيانات مجلس الإدارة
// const boardMembers: BoardMember[] = [
//   {
//     "id": 1,
//     "name": "م. عبدالله بن صالح العباد",
//     "position": "نائب رئيس مجلس الإدارة",
//     "image": "/iamge/bordmambr/abad.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 2,
//     "name": "د. صالح بن سليمان الرشيد",
//     "position": "رئيس مجلس الإدارة",
//     "image": "/iamge/bordmambr/salha.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 3,
//     "name": "أ. صلاح بن محمد السويدان",
//     "position": "عضو مجلس الإدارة",
//     "image": "/iamge/bordmambr/swedan.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 4,
//     "name": "أ. رامي بن زبب الزهراني",
//     "position": "عضو مجلس الإدارة",
//     "image": "/iamge/bordmambr/ramy.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 5,
//     "name": "م. يوسف بن عبدالله العبيدي",
//     "position": "المشرف المالي",
//     "image": "/iamge/bordmambr/yousefady.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 6,
//     "name": "د. عادل بن علي القحطاني",
//     "position": "عضو مجلس الإدارة",
//     "image": "/iamge/bordmambr/qhtiny.png",
//     "email": "",
//     "phone": ""
//   },
//   {
//     "id": 7,
//     "name": "م. عبدالله بن فهد العويمري",
//     "position": "عضو مجلس الإدارة",
//     "image": "/iamge/bordmambr/unknow.jpeg",
//     "email": "",
//     "phone": ""
//   }
// ];

// // بيانات موظفي الجمعية
// const employees: Employee[] = [
//   {
//     "id": 1,
//     "name": "عبدالله جاسم البنعلي",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 2,
//     "name": "حمزة رشيد السعيد",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 3,
//     "name": "عبدالعزيز محمد عبدالرحيم",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 4,
//     "name": "سليمان فهد البيشي",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 5,
//     "name": "عبدالرحمن حسن العطاس",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 6,
//     "name": "عبدالله موسى البارقي",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 7,
//     "name": "عبدالعزيز فؤاد البارقي",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 8,
//     "name": "يوسف حسن البارقي",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 9,
//     "name": "خالد عبدالله الشمراني",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 10,
//     "name": "فارس إبراهيم الدخيل",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 11,
//     "name": "علي إبراهيم العقل",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 12,
//     "name": "أحمد عبدالله بونيس",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 13,
//     "name": "حمدان فهد الودعاني",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//    {
//     "id": 14,
//     "name": "منير محمد الزهراني",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   },
//   {
//     "id": 14,
//     "name": "عبدالعزيز السرحاني",
//     "position": "",
//     "department": "",
//     "image": "",
//     "email": ""
//   }
// ];


// export default function AboutPage() {
//   return (
//     <>
//       <Head>
//         <title>عن يعمر | جمعية يعمر لعناية المساجد</title>
//         <meta name="description" content="تعرف على جمعية يعمر - رؤيتنا، رسالتنا، مجلس إدارتنا وفريق العمل المتميز" />
//       </Head>

//       <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
//         </div>

        

//         {/* Hero Section */}
//         <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-4xl mx-auto mb-12">
                
//                 <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
//                   عن جمعية يعمر
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   جمعية متخصصة في عناية المساجد بالمنطقة الشرقية، نعمل على بناء وصيانة وتشغيل المساجد بأعلى معايير الجودة والإتقان
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* من نحن */}
//         <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
//           <div className="container mx-auto relative z-10">
//             <div className="grid md:grid-cols-3 gap-8 mb-16">
//               <ScrollReveal>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#08704C]/20 bg-gradient-to-br from-white to-[#08704C]/5 h-full">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#08704C] to-[#4D7A61] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
//                       <Eye className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                      مساجد عامرة ونموذجيه
//                     </p>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={100}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#A2B366]/20 bg-gradient-to-br from-white to-[#A2B366]/5 h-full">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#A2B366] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
//                       <Target className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">رسالتنا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                      جمعية أهلية تسعى للعناية ببيوت الله عز وجل, من خلال تطبيق الممارسات الفضلى لتحقيق استدامتها
//                     </p>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>

//               <ScrollReveal delay={200}>
//                 <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#4D7A61]/20 bg-gradient-to-br from-white to-[#4D7A61]/5 h-full">
//                   <CardContent className="p-8 text-center space-y-6">
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#4D7A61] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
//                       <Award className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">قيمنا</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                      الجودة - الشراكة- الإخلاص - الإحسان - الاستدامة


//                     </p>
//                   </CardContent>
//                 </Card>
//               </ScrollReveal>
//             </div>

//             <ScrollReveal delay={300}>
//               <Card className="border-2 border-gray-100 bg-white shadow-xl">
//                 <CardContent className="p-8 md:p-12">
//                   <div className="grid md:grid-cols-2 gap-8 items-center">
//                     <div className="space-y-6">
//                       <Image 
//                         src="/yaamurlogoone.png" 
//                         alt="شعار جمعية يعمر" 
//                         width={150}
//                         height={150}
//                         />

//                       <h2 className="text-4xl font-black text-gray-900">نبذة عن الجمعية</h2>
//                       <p className="text-lg text-gray-600 leading-relaxed">
//                           جمعية خيرية تأسست عام 2023م بالمنطقة الشرقية، بهدف خدمة بيوت الله من خلال ثلاثة محاور رئيسية: البناء والصيانة والتشغيل.
//                       </p>
//                       <p className="text-lg text-gray-600 leading-relaxed">
//                         نعمل على توفير بيئة مثالية للعبادة في المساجد، من خلال فريق متخصص من المهندسين والفنيين والإداريين، ونلتزم بأعلى معايير الجودة والشفافية في جميع أعمالنا.
//                       </p>
//                       <div className="grid grid-cols-2 gap-4 pt-4">
//                         <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
//                           <div className="text-3xl font-black text-[#08704C] mb-2">2023</div>
//                           <div className="text-sm text-gray-600">سنة التأسيس</div>
//                         </div>
//                         <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
//                           <div className="text-3xl font-black text-[#08704C] mb-2">305+</div>
//                           <div className="text-sm text-gray-600">مسجد تم خدمته</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="aspect-square bg-gradient-to-br from-[#08704C]/20 to-[#4D7A61]/20 rounded-3xl relative overflow-hidden">
//                       <Image
//                         src="/iamge/yaamurabout.jpg"
//                         alt="نبذة عن الجمعية"
//                         fill
//                         className="object-cover"
//                         sizes="(min-width: 768px) 50vw, 100vw"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* مجلس الإدارة */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-dots opacity-20"></div>
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   قيادتنا
//                 </span>
//                 <h2 className="text-4xl font-black text-gray-900 mb-6">مجلس الإدارة</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   يقود جمعية يعمر مجلس إدارة متميز من أصحاب الخبرة والكفاءة في مختلف المجالات
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {boardMembers.map((member, index) => (
//                 <ScrollReveal key={member.id} delay={index * 100}>
//                   <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 bg-white hover:shadow-2xl">
//                     <CardContent className="p-0">
//                       <div className="aspect-square bg-gradient-to-br from-[#08704C]/20 to-[#4D7A61]/20 relative overflow-hidden">
//                         <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
//                         <Image
//                           src={member.image || "/image/placeholder-profile.png"}
//                           alt={member.name}
//                           width={900}
//                           height={1000}
//                           />
//                       </div>
                      
//                       <div className="p-6 space-y-4">
//                         <div className="text-center">
//                           <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                           <p className="text-[#08704C] font-semibold">{member.position}</p>
//                         </div>

//                         {(member.email || member.phone) && (
//                           <div className="space-y-2 pt-4 border-t border-gray-100">
//                             {member.email && (
//                               <div className="flex items-center gap-2 text-sm text-gray-600">
//                                 <Mail className="w-4 h-4 text-[#08704C]" />
//                                 <span className="truncate">{member.email}</span>
//                               </div>
//                             )}
//                             {member.phone && (
//                               <div className="flex items-center gap-2 text-sm text-gray-600">
//                                 <Phone className="w-4 h-4 text-[#08704C]" />
//                                 <span dir="ltr">{member.phone}</span>
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* موظفي الجمعية */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7] relative">
//           <div className="container mx-auto relative z-10">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
//                   فريق العمل
//                 </span>
//                 <h2 className="text-4xl font-black text-gray-900 mb-6">موظفي الجمعية</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   فريق محترف ومتفاني يعمل بإخلاص لتحقيق أهداف الجمعية وخدمة بيوت الله
//                 </p>
//               </div>
//             </ScrollReveal>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {employees.map((employee, index) => (
//                 <ScrollReveal key={employee.id} delay={index * 50}>
//                   <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 bg-white hover:shadow-2xl h-full">
//                     <CardContent className="p-0">
//                       <div className="aspect-square bg-gradient-to-br from-[#08704C]/10 to-[#A2B366]/10 relative overflow-hidden">
//                         <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
//                             <Users className="w-12 h-12 text-[#08704C]" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
//                           <div className="text-white text-xs font-semibold">{employee.department}</div>
//                         </div>
//                       </div>
                      
//                       <div className="p-4 space-y-3">
//                         <div className="text-center">
//                           <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{employee.name}</h3>
//                           <p className="text-[#08704C] font-semibold text-sm">{employee.position}</p>
//                         </div>

//                         {employee.email && (
//                           <div className="pt-3 border-t border-gray-100">
//                             <div className="flex items-center gap-2 text-xs text-gray-600">
//                               <Mail className="w-3 h-3 text-[#08704C] flex-shrink-0" />
//                               <span className="truncate">{employee.email}</span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#4D7A61] to-[#08704C] text-white relative overflow-hidden">
//           <div className="absolute inset-0 pattern-grid opacity-10"></div>
//           <div className="container mx-auto relative z-10 text-center">
//             <ScrollReveal>
//               <h2 className="text-4xl font-black mb-6">انضم إلى فريقنا</h2>
//               <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//                 نبحث دائماً عن الكفاءات المتميزة للانضمام إلى فريق عمل يعمر
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/careers">
//                   <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
//                     الفرص الوظيفية
//                     <ArrowLeft className="w-5 h-5 mr-2" />
//                   </Button>
//                 </Link>
//                 <Link href="/#contact">
//                   <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
//                     تواصل معنا
//                   </Button>
//                 </Link>
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

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

import {
  ArrowLeft,
  Eye,
  Target,
  Award,
  Building2,
  Wrench,
  Settings,
  Users,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Sparkles,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

// ==============================================
// أنواع البيانات
// ==============================================

interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  email?: string;
  phone?: string;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  email?: string;
}

// ==============================================
// بيانات مجلس الإدارة
// ==============================================

const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "د. صالح بن سليمان الرشيد",
    position: "رئيس مجلس الإدارة",
    image: "/iamge/bordmambr/salha.png",
  },
  {
    id: 2,
    name: "م. عبدالله بن صالح العباد",
    position: "نائب رئيس مجلس الإدارة",
    image: "/iamge/bordmambr/abad.png",
  },
  {
    id: 3,
    name: "م. يوسف بن عبدالله العيدي",
    position: "عضو مجلس الإدارة",
    image: "/iamge/bordmambr/yousefady.png",
  },
  {
    id: 4,
    name: "أ. صلاح بن محمد السويدان",
    position: "عضو مجلس الإدارة",
    image: "/iamge/bordmambr/swedan.png",
  },
  {
    id: 5,
    name: "أ. رامي بن رجب الزهراني",
    position: "عضو مجلس الإدارة",
    image: "/iamge/bordmambr/ramy.png",
  },
  
  {
    id: 6,
    name: "د. عادل بن علي القحطاني",
    position: "عضو مجلس الإدارة",
    image: "/iamge/bordmambr/qhtiny.png",
  },
  {
    id: 7,
    name: "م. عبدالله بن فهد العويمري",
    position: "عضو مجلس الإدارة",
    image: "/iamge/bordmambr/unknow.jpeg",
  },
];

// ==============================================
// بيانات المدير التنفيذي
// ==============================================

const executive = {
  name: "عبدالله جاسم البنعلي",
  position: "المدير التنفيذي",
};

// ==============================================
// بيانات موظفي الجمعية
// ==============================================

const employees: Employee[] = [
  {
    id: 2,
    name: " حسن الخياط ",
    position: "مدير مكتب الرئيس التنفيذي",
    department: "",
    image: "",
  },
  {
    id: 5,
    name: "عبدالرحمن حسن العطاس",
    position: "مدير الادارة المالية",
    department: "",
    image: "",
  },
  {
    id: 15,
    name: "عبدالعزيز السرحاني",
    position: "مدير ادارة الصيانة ",
    department: "",
    image: "",
  },
  {
    id: 11,
    name: "علي إبراهيم العقل",
    position: "مدير ادارة البناء",
    department: "",
    image: "",
  },
  {
    id: 4,
    name: "سليمان فهد البيشي",
    position: "مسؤول الشراكات و تطوير الاعمال ",
    department: "",
    image: "",
  },
  {
    id: 3,
    name: "عبدالعزيز محمد عبدالرحيم",
    position: "قسم الصيانة",
    department: "",
    image: "",
  },
  {
    id: 6,
    name: "عبدالله موسى البارقي",
    position: "خدمة العملاء",
    department: "",
    image: "",
  },
  {
    id: 7,
    name: "عبدالعزيز فؤاد ابوبشيت",
    position: "قسم المشاريع",
    department: "",
    image: "",
  },
  {
    id: 8,
    name: " ابراهيم صلاح الطيب ",
    position: "قسم التقنية",
    department: "",
    image: "",
  },
  {
    id: 9,
    name: "خالد عبدالله الشمراني",
    position: "قسم التسويق",
    department: "",
    image: "",
  },
  {
    id: 10,
    name: "فارس إبراهيم الدخيل",
    position: "قسم المشاريع",
    department: "",
    image: "",
  },
  {
    id: 12,
    name: "أحمد عبدالله بونيس",
    position: "قسم المشاريع",
    department: "",
    image: "",
  },
  {
    id: 13,
    name: " احمد الاحمدي ",
    position: "قسم التسويق ",
    department: "",
    image: "",
  },
  {
    id: 14,
    name: "منير محمد الزهراني",
    position: "محاسب",
    department: "",
    image: "",
  },
  {
    id: 15,
    name: " حازم الجعفري  ",
    position: "قسم البناء",
    department: "",
    image: "",
  },
  {
    id: 16,
    name: " عبدالعزيز القحطاني    ",
    position: "قسم التشغيل",
    department: "",
    image: "",
  },
];

// ==============================================
// بيانات الصفحة
// ==============================================

const values = [
  { name: "الجودة", icon: Award },
  { name: "الشراكة", icon: HeartHandshake },
  { name: "الإخلاص", icon: ShieldCheck },
  { name: "الإحسان", icon: Sparkles },
  { name: "الاستدامة", icon: Leaf },
];

// محاور العمل وروابط صفحات الخدمات

const workAreas = [
  {
    number: "01",
    title: "البناء",
    description:
      "المساهمة في بناء وتجهيز المساجد لتكون بيئة مناسبة ومهيأة لاستقبال المصلين.",
    icon: Building2,
    href: "/services/construction",
  },
  {
    number: "02",
    title: "الصيانة",
    description:
      "العناية بالمساجد والمحافظة على مرافقها ورفع كفاءتها وجودة خدماتها.",
    icon: Wrench,
    href: "/services/maintenance",
  },
  {
    number: "03",
    title: "التشغيل",
    description:
      "العمل على تشغيل المساجد والعناية باحتياجاتها بما يعزز استدامة خدماتها.",
    icon: Settings,
    href: "/services/operation",
  },
];

const chairman = boardMembers.find((member) =>
  member.position.includes("رئيس مجلس الإدارة")
);

const otherBoardMembers = boardMembers.filter(
  (member) => member.id !== chairman?.id
);

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

// ==============================================
// صفحة عن الجمعية
// ==============================================

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>عن جمعية يعمر | جمعية يعمر للعناية بالمساجد</title>

        <meta
          name="description"
          content="تعرف على جمعية يعمر للعناية بالمساجد بالمنطقة الشرقية، رؤيتنا ورسالتنا وقيمنا ومجلس إدارتنا وفريق العمل."
        />

        <meta
          property="og:title"
          content="عن جمعية يعمر للعناية بالمساجد"
        />

        <meta
          property="og:description"
          content="نعمل على بناء وصيانة وتشغيل المساجد بأعلى معايير الجودة والإتقان."
        />
      </Head>

      <main
        className="min-h-screen bg-[#F0F3E7] text-gray-900 overflow-hidden"
        dir="rtl"
      >
        {/* خلفية الصفحة */}

        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#08704C]/5 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#A2B366]/5 blur-3xl" />
        </div>

        {/* ======================================
            1. الواجهة الرئيسية
        ====================================== */}

        <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#08704C]/10 text-[#08704C] px-5 py-2.5 text-sm font-bold mb-7">
                    <Sparkles className="w-4 h-4" />
                    <span>نتشرف بخدمة بيوت الله</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-7">
                    نعمر بيوت الله...
                    <span className="block text-[#08704C] mt-2">
                      لنصنع بيئة تليق بالعبادة
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-600 leading-loose mb-8">
                    جمعية متخصصة في العناية بالمساجد بالمنطقة الشرقية،
                    نعمل على بناء وصيانة وتشغيل المساجد بأعلى معايير
                    الجودة والإتقان.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a href="#our-story">
                      <Button className="bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-7 py-6 font-bold shadow-lg shadow-[#08704C]/20">
                       نبذة عنا 
                        <ArrowLeft className="w-5 h-5 mr-3" />
                      </Button>
                    </a>

                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C]/5 rounded-xl px-7 py-6 font-bold"
                      >
                        تواصل معنا
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#08704C]/10 flex items-center justify-center">
                        <CalendarDays className="w-5 h-5 text-[#08704C]" />
                      </div>

                      <div>
                        <p className="text-xl font-black text-gray-900">
                          2023
                        </p>
                        <p className="text-xs text-gray-500">
                          سنة التأسيس
                        </p>
                      </div>
                    </div>

                    <div className="w-px h-10 bg-gray-200" />

                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#08704C]/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#08704C]" />
                      </div>

                      <div>
                        <p className="text-xl font-black text-gray-900">
                          413+
                        </p>
                        <p className="text-xs text-gray-500">
                          مسجد تم خدمته
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative">
                  <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-[#08704C]/20 rounded-3xl" />

                  <div className="relative aspect-[4/4.2] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#08704C]/10 bg-[#08704C]/10">
                    <Image
                      src="/iamge/yaamurabout.jpg"
                      alt="جمعية يعمر للعناية بالمساجد"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#063E2D]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-7 right-7 left-7 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Image
                            src="/yaamurlogoone.png"
                            alt="شعار جمعية يعمر"
                            width={38}
                            height={38}
                            className="object-contain"
                          />
                        </div>

                        <div>
                          <p className="font-black text-lg">
                            جمعية يعمر
                          </p>
                          <p className="text-white/75 text-sm">
                            للعناية بالمساجد
                          </p>
                        </div>
                      </div>

                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        عناية مستدامة ببيوت الله، وعمل متقن يصنع الأثر.
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#08704C]/10 flex items-center justify-center">
                      <HeartHandshake className="w-6 h-6 text-[#08704C]" />
                    </div>

                    <div>
                      <p className="font-black text-gray-900">
                        رسالة سامية
                      </p>
                      <p className="text-xs text-gray-500">
                        في خدمة بيوت الله
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ======================================
            2. الرؤية والرسالة
        ====================================== */}

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-[#08704C] text-sm font-bold">
                  هويتنا المؤسسية
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
                  ما الذي نؤمن به؟
                </h2>

                <p className="text-gray-500 leading-relaxed">
                  تنطلق أعمالنا من رؤية واضحة ورسالة نسعى لتحقيقها
                  وقيم نلتزم بها في كل ما نقدمه.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal>
                <div className="h-full rounded-[2rem] bg-[#F0F3E7] border border-[#08704C]/10 p-8 sm:p-10 group hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#08704C] flex items-center justify-center mb-7 shadow-lg shadow-[#08704C]/20 group-hover:scale-105 transition-transform">
                    <Eye className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-[#08704C] font-bold text-sm mb-3">
                    تطلعاتنا
                  </p>

                  <h3 className="text-3xl font-black mb-5">
                    رؤيتنا
                  </h3>

                  <p className="text-xl sm:text-2xl text-gray-700 font-bold leading-relaxed">
                    مساجد عامرة ونموذجية
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="h-full rounded-[2rem] bg-[#F0F3E7] border border-[#A2B366]/10 p-8 sm:p-10 group hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#A2B366] flex items-center justify-center mb-7 shadow-lg shadow-[#A2B366]/20 group-hover:scale-105 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-[#A2B366] font-bold text-sm mb-3">
                    غايتنا
                  </p>

                  <h3 className="text-3xl font-black mb-5">
                    رسالتنا
                  </h3>

                  <p className="text-lg text-gray-700 leading-loose">
                    جمعية أهلية تسعى للعناية ببيوت الله عز وجل،
                    من خلال تطبيق الممارسات الفضلى لتحقيق استدامتها.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ======================================
            3. قيم الجمعية
        ====================================== */}

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-[#08704C] text-sm font-bold">
                  مبادئنا التي نعمل بها
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mt-3">
                  قيمنا
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <ScrollReveal key={value.name} delay={index * 70}>
                    <div className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-[#08704C]/10 flex items-center justify-center mb-5 group-hover:bg-[#08704C] transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#08704C] group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="font-black text-lg text-gray-900">
                        {value.name}
                      </h3>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================
            4. قصة الجمعية
        ====================================== */}

        
<section
  id="our-story"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
>
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* الصورة الجديدة */}
      <ScrollReveal>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#08704C]/5 rounded-[2.5rem] rotate-3" />

          <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-xl">
            <Image
              src="/iamge/yaamur-our-story.jpg"
              alt="أعمال جمعية يعمر في العناية بالمساجد وتركيب أجهزة التكييف"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* عام التأسيس */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#08704C] text-white rounded-2xl p-5 sm:p-7 shadow-xl">
            <p className="text-4xl font-black">2023</p>
            <p className="text-sm text-white/80 mt-1">
              عام التأسيس
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* نبذة عن الجمعية */}
      <ScrollReveal delay={150}>
        <div className="lg:pr-6 pt-8 lg:pt-0">
          <span className="inline-flex items-center gap-2 text-[#08704C] font-bold text-sm">
            
          </span>

          <h2 className="text-3xl sm:text-4xl font-black mt-5 mb-7 leading-tight">
            نبذة عن
            <span className="text-[#08704C]"> الجمعية</span>
          </h2>

          <p className="text-lg text-gray-600 leading-loose mb-5">
            جمعية خيرية تأسست عام 2023م بالمنطقة الشرقية،
            بهدف خدمة بيوت الله من خلال ثلاثة محاور رئيسية:
            البناء والصيانة والتشغيل.
          </p>

          <p className="text-lg text-gray-600 leading-loose mb-8">
            نعمل على توفير بيئة مثالية للعبادة في المساجد،
            من خلال فريق متخصص من المهندسين والفنيين والإداريين،
            ونلتزم بأعلى معايير الجودة والشفافية في جميع أعمالنا.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#08704C] flex-shrink-0" />
              <span className="text-gray-700 font-medium">
                العناية ببيوت الله وخدمة المصلين
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#08704C] flex-shrink-0" />
              <span className="text-gray-700 font-medium">
                تطبيق أعلى معايير الجودة والإتقان
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#08704C] flex-shrink-0" />
              <span className="text-gray-700 font-medium">
                تعزيز استدامة خدمات المساجد
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </div>
</section>


        {/* ======================================
            5. محاور عمل الجمعية
            البطاقات مرتبطة بصفحات الخدمات
        ====================================== */}

        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          id="services"
        >
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-[#08704C] text-sm font-bold">
                  مجالات عملنا
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-5">
                  ثلاثة محاور لخدمة بيوت الله
                </h2>

                <p className="text-gray-500 leading-relaxed">
                  نعمل من خلال منظومة متكاملة تجمع بين البناء
                  والصيانة والتشغيل لتحقيق العناية الشاملة بالمساجد.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {workAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <ScrollReveal key={area.number} delay={index * 120}>
                    <Link
                      href={area.href}
                      className="block h-full group"
                      aria-label={`الانتقال إلى خدمة ${area.title}`}
                    >
                      <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#08704C]/30 transition-all duration-500 cursor-pointer">
                        <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-[#08704C]/5 group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#08704C] flex items-center justify-center shadow-lg shadow-[#08704C]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <Icon className="w-8 h-8 text-white" />
                            </div>

                            <span className="text-5xl font-black text-[#08704C]/10">
                              {area.number}
                            </span>
                          </div>

                          <h3 className="text-2xl font-black mb-4 group-hover:text-[#08704C] transition-colors">
                            {area.title}
                          </h3>

                          <p className="text-gray-600 leading-loose mb-8">
                            {area.description}
                          </p>

                          <div className="flex items-center gap-2 text-[#08704C] font-bold">
                            <span>اكتشف الخدمة</span>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================
            6. مجلس الإدارة
        ====================================== */}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#08704C]/5 blur-3xl" />

          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-5">
                  <Users className="w-4 h-4" />
                  قيادتنا
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mb-5">
                  مجلس الإدارة
                </h2>

                <p className="text-gray-500 leading-relaxed text-lg">
                  يقود جمعية يعمر مجلس إدارة متميز من أصحاب الخبرة
                  والكفاءة في مختلف المجالات.
                </p>
              </div>
            </ScrollReveal>

            {/* رئيس مجلس الإدارة */}

            {chairman && (
              <ScrollReveal>
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="grid md:grid-cols-2 overflow-hidden rounded-[2rem] bg-[#F0F3E7] border border-[#08704C]/10 shadow-lg">
                    <div className="relative min-h-[340px] md:min-h-[390px] bg-[#08704C]/10">
                      <Image
                        src={chairman.image}
                        alt={chairman.name}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />

                      <div className="absolute top-5 right-5 bg-[#08704C] text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg">
                        رئيس مجلس الإدارة
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 flex flex-col justify-center">
                      <span className="text-[#08704C] text-sm font-bold mb-4">
                        قيادة الجمعية
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-black mb-4">
                        {chairman.name}
                      </h3>

                      <p className="text-[#08704C] font-bold mb-6">
                        {chairman.position}
                      </p>

                      <div className="w-16 h-1 bg-[#08704C] rounded-full mb-6" />

                      <p className="text-gray-600 leading-loose">
                        قيادة تسهم في توجيه أعمال الجمعية وتعزيز رسالتها
                        في العناية ببيوت الله.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* بقية أعضاء المجلس */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBoardMembers.map((member, index) => (
                <ScrollReveal key={member.id} delay={index * 70}>
                  <article className="group h-full bg-[#F0F3E7] rounded-[1.7rem] overflow-hidden border border-gray-100 hover:border-[#08704C]/30 hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/4.2] overflow-hidden bg-[#08704C]/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-lg font-black text-gray-900 mb-3">
                        {member.name}
                      </h3>

                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#08704C]/10 text-[#08704C] text-sm font-bold">
                        {member.position}
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            7. فريق العمل
        ====================================== */}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F3E7]">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-5">
                  <Users className="w-4 h-4" />
                  فريق العمل
                </span>

                <h2 className="text-3xl sm:text-4xl font-black mb-5">
                  موظفو الجمعية
                </h2>

                <p className="text-gray-500 leading-relaxed text-lg">
                  فريق محترف ومتفانٍ يعمل بإخلاص لتحقيق أهداف الجمعية
                  وخدمة بيوت الله.
                </p>
              </div>
            </ScrollReveal>

            {/* المدير التنفيذي - يظهر أولًا */}

            <ScrollReveal>
              <div className="max-w-4xl mx-auto mb-12">
                <div className="grid md:grid-cols-2 overflow-hidden rounded-[2rem] bg-white border border-[#08704C]/10 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="relative min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-[#08704C] to-[#08704C] flex items-center justify-center overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[35px] border-white/5" />
                    <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full border-[35px] border-white/5" />

                    <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/10 border-4 border-white/30 shadow-2xl flex items-center justify-center">
                      <span className="text-5xl sm:text-6xl font-black text-white">
                        {getInitials(executive.name)}
                      </span>
                    </div>

                    <div className="absolute top-5 right-5 bg-white text-[#08704C] rounded-full px-4 py-2 text-sm font-bold shadow-lg">
                      المدير التنفيذي
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-2 text-[#08704C] text-sm font-bold mb-4">
                      <CheckCircle2 className="w-4 h-4" />
                      الإدارة التنفيذية
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                      {executive.name}
                    </h3>

                    <p className="text-[#08704C] font-bold text-lg mb-6">
                      {executive.position}
                    </p>

                    <div className="w-16 h-1 bg-[#08704C] rounded-full mb-6" />

                    <p className="text-gray-600 leading-loose">
                      قيادة العمل التنفيذي والإشراف على أعمال الجمعية
                      ومتابعة تنفيذ خططها وبرامجها لتحقيق رسالتها
                      في العناية ببيوت الله.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* بقية موظفي الجمعية */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {employees.map((employee, index) => (
                <ScrollReveal
                  key={employee.id}
                  delay={(index % 5) * 60}
                >
                  <article className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#08704C]/10 to-[#A2B366]/10 flex items-center justify-center">
                      {employee.image ? (
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 20vw, 50vw"
                        />
                      ) : (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <span className="text-3xl sm:text-4xl font-black text-[#08704C]">
                            {getInitials(employee.name)}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#08704C]" />
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 text-center">
                      <h3 className="text-sm sm:text-base font-black text-gray-900 leading-relaxed">
                        {employee.name}
                      </h3>

                      {employee.position && (
                        <p className="text-xs text-[#08704C] font-bold mt-2">
                          {employee.position}
                        </p>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            8. أرقام الجمعية
        ====================================== */}

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08704C] text-white px-7 py-14 sm:px-12 sm:py-16">
              <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full border-[50px] border-white/5" />
              <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[60px] border-white/5" />

              <div className="relative z-10">
                <ScrollReveal>
                  <div className="text-center mb-12">
                    <span className="text-white/70 font-bold text-sm">
                      أثرنا في خدمة بيوت الله
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-black mt-4">
                      أرقام تحكي أثرنا
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <ScrollReveal>
                    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-center">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                        <Building2 className="w-7 h-7 text-white" />
                      </div>

                      <p
                        className="text-5xl sm:text-6xl font-black mb-3"
                        dir="ltr"
                      >
                        413+
                      </p>

                      <p className="text-white/80 font-bold">
                        مسجد تم خدمته
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={120}>
                    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-center">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                        <CalendarDays className="w-7 h-7 text-white" />
                      </div>

                      <p
                        className="text-5xl sm:text-6xl font-black mb-3"
                        dir="ltr"
                      >
                        2023
                      </p>

                      <p className="text-white/80 font-bold">
                        سنة التأسيس
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            9. انضم إلى فريقنا
        ====================================== */}

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-[#08704C]/10 shadow-xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#08704C]/5 rounded-full blur-3xl" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12">
                <ScrollReveal>
                  <span className="inline-flex items-center gap-2 text-[#08704C] font-bold text-sm mb-5">
                    <HeartHandshake className="w-5 h-5" />
                    كن جزءًا من الأثر
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-5">
                    انضم إلى
                    <span className="text-[#08704C]"> فريق يعمر</span>
                  </h2>

                  <p className="text-gray-600 text-lg leading-loose">
                    نبحث دائمًا عن الكفاءات المتميزة التي تشاركنا
                    الشغف برسالتنا وتسعى للإسهام في خدمة بيوت الله.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={120}>
                  <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                    <Link href="/careers">
                      <Button className="w-full sm:w-auto bg-[#08704C] hover:bg-[#08704C] text-white rounded-xl px-8 py-6 font-bold shadow-lg shadow-[#08704C]/20">
                        الفرص الوظيفية
                        <ArrowLeft className="w-5 h-5 mr-3" />
                      </Button>
                    </Link>

                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-[#08704C]/30 text-[#08704C] hover:bg-[#08704C]/5 rounded-xl px-8 py-6 font-bold"
                      >
                        تواصل معنا
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            10. الموقع والتواصل
        ====================================== */}

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-500 text-sm">
              <MapPin className="w-5 h-5 text-[#08704C]" />

              <span>
                المنطقة الشرقية، المملكة العربية السعودية
              </span>
            </div>
          </div>
        </section>

        {/* التذييل */}

        <WhatsAppButton />

        <SiteFooter />
      </main>
    </>
  );
}
