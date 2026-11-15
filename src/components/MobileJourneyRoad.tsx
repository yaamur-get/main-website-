import { useEffect, useMemo, useRef, useState } from "react";

type JourneyStep = { title: string; bullets: string[] };

type Props = {
  steps: JourneyStep[];
  current: number;
  onSelect: (index: number) => void;
};

const STEP_MS = 5000;
const ROAD_ANIMATION_MS = 900;
const RADIUS = 25;
const RING_LENGTH = 2 * Math.PI * RADIUS;

function makeSegment(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mid = (a.y + b.y) / 2;
  return `M ${a.x} ${a.y} C ${a.x} ${mid}, ${b.x} ${mid}, ${b.x} ${b.y}`;
}

export default function MobileJourneyRoad({ steps, current, onSelect }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const width = 360;
  const top = 62;
  const baseGap = 148;
  const activeStep = steps[current] ?? steps[0];

  // نحجز مساحة فعلية تحت المرحلة النشطة حتى تسير بطاقة تفاصيلها معها،
  // ولا تغطي المرحلة التالية عند تغيير الدائرة أو التقدم التلقائي.
  const detailsSpace = useMemo(() => {
    if (!activeStep) return 0;
    const textHeight = activeStep.bullets.reduce(
      (sum, bullet) => sum + 24 + 18 * Math.max(1, Math.ceil(bullet.length / 27)),
      0
    );
    return Math.max(280, 125 + textHeight);
  }, [activeStep]);

  const nodes = useMemo(
    () =>
      steps.map((_, i) => ({
        x: i % 2 === 0 ? 84 : 276,
        y: top + i * baseGap + (i > current ? detailsSpace : 0),
      })),
    [steps, current, detailsSpace]
  );
  const segments = useMemo(
    () => nodes.slice(1).map((end, i) => makeSegment(nodes[i], end)),
    [nodes]
  );
  const road = useMemo(() => {
    if (!nodes.length) return "";
    return `M ${nodes[0].x} ${nodes[0].y} ${segments
      .map((segment) => segment.replace(/^M [\d.]+ [\d.]+ /, ""))
      .join(" ")}`;
  }, [nodes, segments]);
  const height = top * 2 + Math.max(0, steps.length - 1) * baseGap + detailsSpace;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!visible || reducedMotion || steps.length < 2) return;
    const timer = window.setTimeout(() => onSelect((current + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [visible, reducedMotion, steps.length, current, onSelect]);

  if (!activeStep) return null;

  return (
    <div ref={rootRef} className="md:hidden" dir="rtl">
      <p className="mb-3 text-center text-xs text-gray-500">
        اضغط على الرقم لعرض تفاصيل المرحلة — انتقال تلقائي كل ٥ ثوانٍ
      </p>
      <div
        className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl bg-[#F0F3E7]/55"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path d={road} fill="none" stroke="#CFE0D7" strokeWidth="17" strokeLinecap="round" />
          <path d={road} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 12" />
          {segments.map((segment, i) => {
            if (i >= current) return null;
            const entering = i === current - 1;
            return (
              <path
                key={`${i}-${entering ? current : "done"}`}
                d={segment}
                fill="none"
                stroke="#74AC72"
                strokeWidth="12"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray={100}
                className={entering && !reducedMotion ? "ym-road-draw" : ""}
                style={{ animationDuration: `${ROAD_ANIMATION_MS}ms` }}
              />
            );
          })}
        </svg>

        {nodes.map(({ x, y }, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${(x / width) * 100}%`,
                top: `${(y / height) * 100}%`,
                transform: "translate(-50%, -50%)",
                zIndex: active ? 5 : 2,
              }}
            >
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`المرحلة ${i + 1}: ${steps[i].title}`}
                aria-expanded={active}
                className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-[3px] text-sm font-black shadow-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08704C] ${
                  active
                    ? "border-white bg-[#08704C] text-white ring-4 ring-[#08704C]/20"
                    : done
                      ? "border-[#08704C] bg-[#08704C] text-white"
                      : "border-[#C6DACE] bg-white text-[#08704C]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
                {active && (
                  <svg
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 60 60"
                    aria-hidden="true"
                  >
                    <circle
                      key={`timer-${current}-${visible}`}
                      cx="30"
                      cy="30"
                      r={RADIUS}
                      fill="none"
                      stroke="#79B377"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={RING_LENGTH}
                      className={!reducedMotion && visible ? "ym-mobile-timer" : ""}
                      style={{ animationDuration: `${STEP_MS}ms` }}
                      transform="rotate(-90 30 30)"
                    />
                  </svg>
                )}
              </button>
              <span
                className={`pointer-events-none absolute top-1/2 w-[108px] max-w-[108px] -translate-y-1/2 text-[13px] font-bold leading-5 ${
                  active ? "text-[#08704C]" : "text-gray-600"
                } ${i % 2 === 0 ? "left-[calc(100%+10px)] text-right" : "right-[calc(100%+10px)] text-left"}`}
              >
                {steps[i].title}
              </span>

            </div>
          );
        })}
        {nodes[current] && (
          <section
            className="absolute left-1/2 z-20 w-[calc(100%-24px)] max-w-[320px] -translate-x-1/2 rounded-2xl border border-[#08704C]/15 bg-white/95 p-3 text-right shadow-lg backdrop-blur-sm"
            style={{ top: `${((nodes[current].y + 60) / height) * 100}%` }}
            aria-label={`تفاصيل ${activeStep.title}`}
          >
            <p className="mb-2 text-[13px] font-extrabold text-[#08704C]">
              المرحلة {String(current + 1).padStart(2, "0")}: {activeStep.title}
            </p>
            <ul className="space-y-1.5">
              {activeStep.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px] leading-6 text-gray-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#08704C]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <style jsx global>{`
        @keyframes ymMobileRoadDraw { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes ymMobileTimer { from { stroke-dashoffset: ${RING_LENGTH}; } to { stroke-dashoffset: 0; } }
        .ym-road-draw { animation-name: ymMobileRoadDraw; animation-timing-function: ease-in-out; animation-fill-mode: both; }
        .ym-mobile-timer { animation-name: ymMobileTimer; animation-timing-function: linear; animation-fill-mode: both; }
        @media (prefers-reduced-motion: reduce) {
          .ym-road-draw, .ym-mobile-timer { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
