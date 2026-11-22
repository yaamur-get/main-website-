import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import MobileJourneyRoad from "@/components/MobileJourneyRoad";

const STEP_MS = 5000; // مدة عرض كل مرحلة (5 ثواني)

// صور الصيانة موجودة داخل public/iamge/maintenance
const stepImage = (i: number) => `/iamge/maintenance/${String(i + 1).padStart(2, "0")}.png`;

// خلاصة رحلة الصيانة المعتمدة: خمس مراحل من استقبال الطلب حتى الإغلاق.
// تُعرض التفاصيل المختصرة على الكمبيوتر والجوال، مع الإبقاء على القرارات الجوهرية.
const STEPS: { title: string; bullets: string[] }[] = [
  {
    title: "استقبال الطلب",
    bullets: [
      "03 عمليات: استقبال الطلب عبر الاتصال أو واتساب أو الزيارة، وتسجيله رسميًا.",
      "إسناد الطلب لفريق الصيانة والتحقق من دخوله ضمن نطاق خدمات الجمعية.",
      "عند خروجه عن النطاق: إشعار مقدم الطلب بسبب الرفض وإغلاق الطلب.",
    ],
  },
  {
    title: "دراسة الطلب",
    bullets: [
      "11 عملية: تنسيق المعاينة الميدانية وحصر الكميات والبنود وإعداد التسعيرة الأولية.",
      "توثيق الزيارة وإعداد التقرير الفني، وتعديل الملاحظات وإعادة رفعه عند الحاجة.",
      "إرسال التقرير لمقدم الطلب وتوقيع الإمام، ثم رفع الموافقات لإدارة المساجد.",
      "القرار الإشرافي: موافقة للتمويل، أو استيفاء وإعادة رفع، أو رفض مسبب وإغلاق الطلب.",
    ],
  },
  {
    title: "التمويل",
    bullets: [
      "14 عملية: اعتماد فتح الفرصة، وتجهيز المتطلبات، ونشرها وتسويقها عبر المتجر والإمام.",
      "متابعة التبرعات خلال المدة المحددة؛ يُفحص التقدم في اليوم 20 للمبالغ دون 50 ألف ريال، واليوم 30 لما فوقها.",
      "بعد إغلاق الفرصة يُحصر المبلغ ويُحدد ما يمكن تنفيذه من البنود المتاحة.",
      "إذا لم يغطِّ المبلغ بندًا قابلًا للتنفيذ تُرفع الحالة للجنة الشرعية، وتُحفظ الفتوى في الملف.",
    ],
  },
  {
    title: "التنفيذ",
    bullets: [
      "12 عملية: مراجعة التسعيرات، وتوقيع العقود والتعميد قبل التسليم للمقاول.",
      "توثيق الموقع قبل التنفيذ، وصرف الدفعة المقدمة، ثم مباشرة الأعمال والتصوير أثناءها.",
      "التحقق الميداني إلزامي قبل اعتماد كل مستخلص؛ تُعاد المستخلصات غير المكتملة لاستيفاء الملاحظات.",
      "تُكرر دورة المستخلصات والدفعات حتى الإنجاز، ثم يُوثّق الاستلام والتصوير البعدي.",
    ],
  },
  {
    title: "الإغلاق",
    bullets: [
      "08 عمليات: صرف الدفعة الأخيرة واستلام الفاتورة وإعداد التقرير الختامي.",
      "اعتماد التقرير ورفعه في المنصة وإرساله إلى المستفيدين.",
      "طلب تقييم رضا المستفيدين والمقاول، ثم إغلاق المشروع بوصفه مكتملًا.",
      "ضابط مالي وشرعي: تمر جميع المبالغ عبر حسابات الجمعية؛ وتُرفع حالات الفائض أو تعذر التنفيذ للجنة الشرعية.",
    ],
  },
];

// ===== شكل المسار المتعرّج: 3 دوائر في كل صف، ويتعدّل تلقائيًا حسب عدد المراحل =====
const W = 1000;
const PER_ROW = 3;
const ROW_COUNT = Math.ceil(STEPS.length / PER_ROW);
const ROWS = Array.from({ length: ROW_COUNT }, (_, r) => 110 + r * 370);
const H = ROWS[ROW_COUNT - 1] + 440;
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
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) return;
    const road = roadRef.current;
    if (!road) return;
    const total = road.getTotalLength();
    const at = NODES.map((n) => {
      let best = 0;
      let bestD = Infinity;
      for (let l = 0; l <= total; l += 12) {
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
                        <svg className="pointer-events-none absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 overflow-visible" viewBox="0 0 100 100">
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
                      <div className="rounded-2xl border border-[#08704C]/15 bg-white/95 p-4 text-right shadow-lg backdrop-blur">
                        <div className="mb-3 flex justify-center rounded-xl bg-[#F0F3E7] p-2">
                          <Image src={stepImage(i)} alt={`صورة توضيحية لمرحلة ${STEPS[i].title}`} width={160} height={108} className="h-[100px] w-auto max-w-full object-contain" />
                        </div>
                        <ul className="space-y-2">
                        {STEPS[i].bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
                            <span>{b}</span>
                          </li>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* الجوال: قائمة المراحل، والمفتوحة تنزل خطواتها تحتها */}
            <MobileJourneyRoad steps={STEPS.map((step, i) => ({ ...step, image: stepImage(i) }))} current={current} onSelect={setCurrent} />
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


        <SiteFooter />
      </div>
    </>
  );
}
