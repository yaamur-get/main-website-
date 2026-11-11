import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, CreditCard, HandHeart, Share2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";

const stats = [
  { label: "المساجد المنجزة", value: "5+", color: "bg-[#08704C]" },
  { label: "عدد المستفيدين", value: "1,200+", color: "bg-[#4D7A61]" },
  { label: "نسبة التسليم في الموعد", value: "100%", color: "bg-[#A2B366]" }
];

const paymentMethods = ["مدى", "فيزا", "ماستركارد", "تحويل بنكي", "أبل باي"];

export default function FinalConversionPage() {
  const shareMessage = encodeURIComponent(
    "أنهيت رحلة بناء المسجد مع يعمر. انضم إلي في بناء صدقة جارية."
  );

  const shareLinks = [
    {
      platform: "واتساب",
      href: `https://wa.me/?text=${shareMessage}`
    },
    {
      platform: "تويتر",
      href: `https://twitter.com/intent/tweet?text=${shareMessage}`
    },
    {
      platform: "سنابشات",
      href: "https://www.snapchat.com/"
    }
  ];

  return (
    <>
      <Head>
        <title>نهاية الرحلة | تحويل المتصفح إلى متبرع</title>
        <meta
          name="description"
          content="هنا تنتهي رحلة البناء وتبدأ صدقتك الجارية. أكمل تبرعك، اختر وسيلة الدفع، وشارك مشروع مسجدك."
        />
      </Head>

      <div className="min-h-screen bg-[#F0F3E7]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A2B366]/5 rounded-full blur-3xl"></div>
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#4D7A61]/10"></div>
          <div className="container relative z-10 pt-16 pb-10 text-right">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-[#08704C] font-semibold flex items-center justify-end gap-2">
                  <HandHeart className="w-5 h-5" />
                  هنا تنتهي رحلة البناء وتبدأ صدقتك الجارية.
                </p>
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                  حوّل الزائر إلى متبرع بثقة ووضوح
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl ml-auto">
                  اطلع على الأرقام، أكمل نموذج التبرع البسيط، اختر طريقة الدفع، وخصص اسم المسجد. ثم شارك مشروعك عبر واتساب وتويتر وسنابشات.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-end pt-3">
                  <Link href="/services/construction/identifying-donor-needs">
                    <Button variant="outline" className="border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                      العودة للخطوات
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                  <a href="https://store.yaamur.org.sa/">
                    <Button className="bg-gradient-to-r from-[#08704C] to-[#4D7A61] hover:from-[#4D7A61] hover:to-[#08704C] text-white">
                      أريد بدء المشروع
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container grid lg:grid-cols-3 gap-8 items-start">
            <ScrollReveal>
              <Card className="shadow-xl border-2 border-gray-100">
                <CardContent className="p-6 space-y-5 text-right">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 font-semibold">نموذج تبرع مبسط</div>
                    <Sparkles className="w-5 h-5 text-[#08704C]" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم</Label>
                      <Input id="name" placeholder="الاسم الثلاثي" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input id="phone" type="tel" placeholder="+966" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">مبلغ التبرع</Label>
                      <Input id="amount" type="number" placeholder="أدخل المبلغ بالريال" />
                    </div>
                    <div className="space-y-2">
                      <Label>طريقة الدفع</Label>
                      <Select defaultValue="مدى">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="اختر طريقة الدفع" />
                        </SelectTrigger>
                        <SelectContent>
                          {paymentMethods.map((method) => (
                            <SelectItem key={method} value={method}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mosqueName">اسم المسجد (اختياري)</Label>
                      <Input id="mosqueName" placeholder="اكتب الاسم المقترح للمسجد" />
                    </div>
                  </div>
                  <Button className="w-full bg-[#08704C] hover:bg-[#4D7A61] text-white py-6 text-lg">
                    إتمام التبرع
                  </Button>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 text-[#08704C]" />
                    دفع آمن وتأكيد فوري
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Card className="shadow-xl border-2 border-gray-100">
                <CardContent className="p-6 space-y-4 text-right">
                    <div className="flex items-center justify-between">
                    <div className="text-sm text-[#08704C] font-semibold">ملخص الأثر</div>
                    <ShieldCheck className="w-5 h-5 text-[#08704C]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-right space-y-1"
                      >
                        <div className={`w-10 h-1.5 rounded-full ${stat.color}`}></div>
                        <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                    <div className="rounded-2xl bg-[#08704C]/5 border border-[#08704C]/10 p-4">
                    <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                      <span>اكتمال الرحلة</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} />
                    <p className="text-sm text-gray-600 mt-2">
                      انتهت الخطوات التسع. حان وقت تحويل النية إلى تبرع فعلي.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-800">طرق الدفع</p>
                    <div className="flex flex-wrap gap-2">
                      {paymentMethods.map((method) => (
                        <span
                          key={method}
                          className="px-3 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-800"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-800">شارك مشروع مسجدك</p>
                    <div className="flex flex-wrap gap-2">
                      {shareLinks.map((link) => (
                        <a key={link.platform} href={link.href} target="_blank" rel="noreferrer">
                          <Button variant="outline" className="border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                            {link.platform}
                            <Share2 className="w-4 h-4 mr-2" />
                          </Button>
                        </a>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      ادعُ عائلتك وأصدقاءك ليكونوا جزءاً من صدقتك الجارية.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <Card className="shadow-xl border-2 border-gray-100 bg-gradient-to-b from-white to-[#08704C]/5">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="text-sm text-[#08704C] font-semibold">تحويل قوي وواضح</div>
                  <h3 className="text-2xl font-bold text-gray-900">جاهز للتبرع؟</h3>
                  <p className="text-gray-700">
                    أكد تبرعك، اختر طريقة الدفع، وحدد الاسم الرسمي للمسجد. بعد التبرع ستجد أزرار المشاركة لواتساب وتويتر وسنابشات.
                  </p>
                  <div className="rounded-2xl bg-white border border-gray-100 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">تخصيص الاسم الرسمي</p>
                        <p className="text-lg font-semibold text-gray-900">أضف اسماً مميزاً للمسجد</p>
                      </div>
                      <Sparkles className="w-5 h-5 text-[#08704C]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      بعد التأكيد نتولى الاعتمادات، العدادات، والتسليم لفرع الوزارة.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="https://store.yaamur.org.sa/">
                      <Button className="w-full bg-[#08704C] hover:bg-[#4D7A61] text-white py-6 text-lg">
                        إتمام تبرعي
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                    <Link href="/services/construction#journey">
                      <Button variant="outline" className="w-full border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                        العودة للخريطة الزمنية
                      </Button>
                    </Link>
                  </div>
                  <div className="rounded-2xl bg-white/70 border border-gray-100 p-4 space-y-2">
                    <p className="text-sm font-semibold text-gray-800">بعد التبرع</p>
                    <p className="text-sm text-gray-600">
                      ستظهر لك شاشة "شارك مشروع مسجدك" مع أزرار جاهزة لواتساب وتويتر وسنابشات.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
