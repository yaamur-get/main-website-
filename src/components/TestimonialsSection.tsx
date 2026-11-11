
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Quote,
  ChevronRight,
  ChevronLeft,
  UserRound,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    quote:
      "رأيت في يعمر ما أثلج صدري من التميز في العمل والإتقان في الأداء والتكامل مع بقية المؤسسات المماثلة والتنسيق المستمر مع فرع وزارة الشؤون الإسلامية مما كان له بالغ الأثر في مخرجات عمل الجمعية، فالشكر للقائمين على الجمعية على هذه الجهود المباركة ونسأل الله للجميع التوفيق والسداد.",
    author: "الشيخ عمر الدويش",
    role: "مدير عام فرع وزارة الشؤون الإسلامية بالمنطقة الشرقية",
    image: "/testimonials/omar.jpg",
  },
  {
    id: 2,
    quote:
      'تشرفت بحضور حفل افتتاح الجمعية العامرة "جمعية يعمر للعناية بالمساجد"، وقد أبهجني المستوى الراقي والتنظيم الرائع داخل الجمعية الرائدة، أتمنى للجميع كل التوفيق والنجاح والسداد.',
    author: "م. وليد محمد الفوزان",
    role: "مستشار في القطاع غير الربحي",
    image: "",
  },
  {
    id: 3,
    quote:
      "سعدت كثيرا في لقائي مع جمعية يعمر للعناية بالمساجد، هذه الجمعية المميزة في جهودها وعطائها وتفانيها لخدمة مساجد وبيوت الله.",
    author: "د. سالم العجيمي",
    role: "عضو مجلس الأمناء لمؤسسة العجيمي الخيرية",
    image: "",
  },
  {
    id: 4,
    quote:
      "سعيد بلقائي مع جمعية يعمر للعناية بالمساجد، وحقيقةً هي من الجمعيات الرائدة والمتميزة دوماً، سائلاً المولى لهم التوفيق والسداد.",
    author: "د. سعد الأحمري",
    role: "المدير التنفيذي لجمعية البركة الخيرية",
    image: "",
  },
  {
    id: 5,
    quote:
      "سعدت وتشرفت بحضور وتدشين مقر جمعية يعمر للعناية بالمساجد، هذه الجمعية المباركة التي أسأل الله لها التوفيق والسداد ودوام التميز.",
    author: "د. غازي العتيبي",
    role: "مدير المنح في مؤسسة المجدوعي الخيرية",
    image: "",
  },
];

function PersonPhoto({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#08704C]/20 bg-[#F0F3E7] sm:h-[72px] sm:w-[72px]">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center text-[#08704C]">
          <UserRound className="h-8 w-8" />
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="72px"
         className="object-cover object-top" 
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function getStep() {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const firstCard = slider.firstElementChild as HTMLElement | null;
    if (!firstCard) return 0;

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;

    return firstCard.getBoundingClientRect().width + gap;
  }

  function getMaxIndex() {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const step = getStep();
    if (!step) return 0;

    return Math.max(
      0,
      Math.ceil((slider.scrollWidth - slider.clientWidth) / step)
    );
  }

  function scrollToIndex(index: number) {
    const slider = sliderRef.current;
    if (!slider) return;

    const nextIndex = Math.max(
      0,
      Math.min(index, getMaxIndex())
    );

    slider.scrollTo({
      left: -nextIndex * getStep(),
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  }

  function handleScroll() {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getStep();
    if (!step) return;

    const index = Math.round(Math.abs(slider.scrollLeft) / step);
    setCurrentIndex(Math.min(index, getMaxIndex()));
  }

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#F0F3E7] px-4 py-14 sm:px-6 lg:px-8"
      aria-label="قالوا عنا"
    >
      <div className="pointer-events-none absolute -right-28 top-4 h-64 w-64 rounded-full bg-[#08704C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-4 h-64 w-64 rounded-full bg-[#4D7A61]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">

        {/* عنوان القسم */}
        <ScrollReveal>
          <div className="mb-8 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#08704C]">
              <Quote className="h-4 w-4" />
              كلمات نعتز بها
            </span>

            <h2 className="mb-3 text-3xl font-black text-[#205939] sm:text-4xl">
              قالوا عنا
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              آراء وشهادات نعتز بها من شركائنا وقيادات المجتمع
            </p>
          </div>
        </ScrollReveal>

        {/* السلايدر */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="testimonials-slider flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5"
          aria-label="آراء الشخصيات"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group flex min-w-0 shrink-0 basis-full snap-start flex-col overflow-hidden rounded-2xl border border-[#08704C]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#08704C]/30 hover:shadow-md md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)] motion-reduce:transition-none"
            >
              {/* خط زخرفي */}
              <div className="h-1 w-full bg-gradient-to-l from-[#08704C] via-[#4D7A61] to-[#BBA15B]" />

              <div className="flex h-full flex-col p-5 sm:p-6">

                {/* الصورة والاسم والمنصب */}
                <div className="mb-5 flex items-center gap-3">
                  <PersonPhoto
                    src={testimonial.image}
                    name={testimonial.author}
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-base font-extrabold leading-6 text-[#205939]">
                      {testimonial.author}
                    </h3>

                    <p className="text-xs leading-5 text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>

                  <Quote
                    className="h-6 w-6 shrink-0 self-start text-[#08704C]/25"
                    aria-hidden="true"
                  />
                </div>

                {/* التعليق كاملًا دون اختصار */}
                <blockquote className="flex-1 border-t border-gray-100 pt-4">
                  <p className="text-[14px] font-normal leading-[1.9] text-gray-700 sm:text-[14.5px]">
                    «{testimonial.quote}»
                  </p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* أزرار التحكم */}
        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="الرأي السابق"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#08704C]/20 bg-white text-[#08704C] shadow-sm transition hover:bg-[#08704C] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <span className="text-sm font-bold text-[#08704C]">
            {currentIndex + 1} / {testimonials.length}
          </span>

          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex >= getMaxIndex()}
            aria-label="الرأي التالي"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#08704C]/20 bg-white text-[#08704C] shadow-sm transition hover:bg-[#08704C] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-2 text-center text-xs text-gray-400">
          اسحب البطاقات يمينًا أو يسارًا لاستعراض بقية الآراء
        </p>
      </div>

      <style jsx global>{`
        .testimonials-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .testimonials-slider::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials-slider {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
