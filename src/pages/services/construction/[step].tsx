import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Compass,
  DraftingCompass,
  FileSignature,
  Hammer,
  HandHeart,
  LucideIcon,
  MapPin,
  PlugZap,
  ShieldCheck,
  Target,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import {
  ConstructionStep,
  ConstructionIconKey,
  constructionSteps,
  getNextStepSlug,
  getStepBySlug,
  totalSteps
} from "@/data/constructionJourney";

const iconMap: Record<ConstructionIconKey, LucideIcon> = {
  target: Target,
  mapPin: MapPin,
  fileSignature: FileSignature,
  draftingCompass: DraftingCompass,
  badgeCheck: BadgeCheck,
  hammer: Hammer,
  users2: Users2,
  plugZap: PlugZap,
  handHeart: HandHeart
};

type ConstructionStepPageProps = {
  step: ConstructionStep;
  nextStepSlug: string | null;
};

const stepHighlights: Record<string, string[]> = {
  "identifying-donor-needs": [
    "هي العصف الذهني وبناء الفكرة",
    "توضيح أهداف المتبرع والجدول الزمني والأثر المطلوب.",
    "توثيق التفضيلات لتجنب أي مفاجآت لاحقاً.",
    "مواءمة التوقعات مع الميزانية والاعتمادات."
  ],
  "selecting-the-land": [
    "تقييم ملاءمة الموقع وسهولة الوصول وجاهزيته النظامية.",
    "مراجعة المستندات والتأكد من صحتها قبل المضي قدماً.",
    "تجهيز الموقع لاعتمادات سريعة."
  ],
  "signing-the-agreement": [
    "تحديد المسؤوليات والمخرجات لكل الأطراف.",
    "وضع خارطة طريق مشتركة وآلية تواصل واضحة.",
    "تثبيت الجداول الزمنية للمحافظة على الزخم."
  ],
  "preparing-plans-and-designs": [
    "إصدار الرسومات والمخططات التنفيذية التفصيلية.",
    "تنسيق الجماليات والجودة والالتزام بالمعايير معاً.",
    "تسهيل التصاريح وسلاسة دخول المقاولين."
  ],
  "selecting-the-consultant-contractor": [
    "ترشيح استشاريين ومقاولين مؤهلين.",
    "مواءمة الخبرات مع حجم وتعقيد المشروع.",
    "حماية الجودة والسلامة والجدول الزمني."
  ],
  "project-execution": [
    "تجهيز الفرق، متابعة الإنجاز، وإشراف يومي.",
    "حل العوائق بسرعة للحفاظ على الجدول.",
    "تقارير تقدم شفافة للمتبرع."
  ],
  "selecting-imam-and-muezzin": [
    "ترشيح قيادات موثوقة لخدمة المصلين.",
    "تنسيق التهيئة والتدريب على المهام.",
    "ضمان جاهزية المسجد لاستقبال المصلين من اليوم الأول."
  ],
  "issuing-utility-meters-and-name": [
    "إنهاء الإجراءات الحكومية والتراخيص.",
    "الحصول على عدادات الماء والكهرباء دون تأخير.",
    "تسجيل الاسم الرسمي للمسجد واعتماده."
  ],
  "handover-to-ministry": [
    "إنهاء الفحص النهائي والمستندات.",
    "تسليم المفاتيح والمستندات لفرع الوزارة.",
    "الاحتفال بالافتتاح وبداية الأثر المستدام."
  ]
};

const stepImages: Record<string, string> = {
  "identifying-donor-needs": "/iamge/yaamurabout.jpg",
  "selecting-the-land": "/iamge/yaamur_mint.jpg",
  "signing-the-agreement": "/iamge/home.png",
  "preparing-plans-and-designs": "/iamge/yaamur_runing.jpg",
  "selecting-the-consultant-contractor": "/iamge/yaamur_bulding.jpg",
  "project-execution": "/iamge/yaamur_bulding.jpg",
  "selecting-imam-and-muezzin": "/iamge/yaamurabout.jpg",
  "issuing-utility-meters-and-name": "/iamge/yaamur_mint.jpg",
  "handover-to-ministry": "/iamge/yaamur_bulding.jpg"
};

export default function ConstructionStepPage({ step, nextStepSlug }: ConstructionStepPageProps) {
  const progress = Math.round((step.id / totalSteps) * 100);
  const highlights = stepHighlights[step.slug] ?? [];
  const imageSrc = stepImages[step.slug] ?? "/iamge/yaamur_bulding.jpg";
  const nextHref = nextStepSlug ? `/services/construction/${nextStepSlug}` : "/services/construction/final";

  return (
    <>
      <Head>
        <title>{`${step.title} | رحلة البناء`}</title>
        <meta
          name="description"
          content={`${step.summary} تابع الخطوة التالية أو ابدأ مشروعك الآن مع يعمر.`}
        />
      </Head>

      <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0F3E7] to-[#D2DED7]/20"></div>
          <div className="container relative z-10 pt-12 pb-6">
            <ScrollReveal>
              <div className="flex flex-col gap-4 text-right">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#08704C] font-semibold">الخطوة {step.id} من {totalSteps}</p>
                    <h1 className="text-4xl font-black text-gray-900 mt-1">{step.title}</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mt-2 ml-auto">{step.summary}</p>
                  </div>
                  <div className="min-w-[260px] bg-white/80 rounded-2xl p-4 border border-white/60 shadow-sm">
                    <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                      <span>التقدم</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Link href="/services/construction#journey">
                    <Button variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                      العودة للخريطة الزمنية
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href={nextHref}>
                    <Button className="bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white">
                      التالي
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="container grid lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal>
              <Card className="shadow-lg border-2 border-gray-100">
                <CardContent className="p-6 space-y-5 text-right">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#08704C] to-[#4D7A61] flex items-center justify-center text-white shadow-md">
                      {(() => {
                        const Icon = iconMap[step.icon];
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">لمحة عن المرحلة</div>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">{step.description}</p>
                  <div className="space-y-3">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#08704C] mt-1" />
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-[#08704C]/5 border border-[#08704C]/10 p-4 text-right">
                    <div className="text-sm text-[#08704C] font-semibold mb-1">زر دائم للتحفيز</div>
                    <p className="text-gray-700 text-sm">
                      زر "أريد بدء المشروع" يرافقك في كل خطوة. وزر "التالي" يبقيك متجهاً حتى صفحة التحويل النهائية.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid gap-4">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image src={imageSrc} alt={step.title} width={1200} height={800} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#08704C]" />
                    بإشراف يعمر
                  </div>
                </div>
                <Card className="border-2 border-gray-100 shadow-md">
                  <CardContent className="p-5 flex flex-col gap-3 text-right">
                    <div className="flex items-center gap-2 text-sm text-[#08704C] font-semibold">
                      <Compass className="w-4 h-4" />
                      مسارك الموجّه
                    </div>
                    <p className="text-gray-700">
                      استمر حتى النهاية: بعد الخطوة {totalSteps} ستصل لصفحة التحويل النهائية مع خيارات التبرع والدفع والمشاركة.
                    </p>
                    <div className="flex gap-3 justify-end pt-2">
                      <Link href={nextHref}>
                        <Button size="sm" className="bg-[#08704C] hover:bg-[#4D7A61] text-white">
                          الخطوة التالية
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                      <Link href="/services/construction/final">
                        <Button size="sm" variant="outline" className="border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                          صفحة التحويل
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container">
            <ScrollReveal>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 lg:p-8 text-right">
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-sm text-[#08704C] font-semibold">ما ينتظرك تالياً</p>
                    <h2 className="text-2xl font-bold text-gray-900">واصل التقدم</h2>
                    <p className="text-gray-700">
                      انتقل للخطوة التالية أو اذهب مباشرة لصفحة التحويل للتبرع، اختيار وسيلة الدفع، وتخصيص اسم المسجد.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Link href={nextHref}>
                      <Button className="bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white">
                        التالي
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                    <Link href="/services/construction/final">
                      <Button variant="outline" className="border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                        صفحة التحويل النهائية
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:right-8 z-30">
          <a href="https://store.yaamur.org.sa/">
            <Button
              size="lg"
              className="w-full shadow-2xl bg-[#08704C] hover:bg-[#4D7A61] text-white py-6 text-lg rounded-2xl"
            >
              أريد بدء المشروع
            </Button>
          </a>
        </div>

        <WhatsAppButton />
        <SiteFooter />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: constructionSteps.map((step) => ({ params: { step: step.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ConstructionStepPageProps> = async ({ params }) => {
  const slug = params?.step as string;
  const step = getStepBySlug(slug);

  if (!step) {
    return { notFound: true };
  }

  const nextStepSlug = getNextStepSlug(slug);

  return {
    props: {
      step,
      nextStepSlug
    }
  };
};
