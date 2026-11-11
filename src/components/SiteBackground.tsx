
import { useEffect, useState } from "react";
import Image from "next/image";

const BACKGROUND_IMAGE = "/picture24.jpg";

const backgroundSlides = [
  "/picture24.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
  "/hero/slide-4.jpg",
];

export default function SiteBackground() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);
    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) =>
        (current + 1) % backgroundSlides.length
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div
      className="site-fixed-background"
      aria-hidden="true"
    >
      {backgroundSlides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={
              failedImages.includes(index)
                ? BACKGROUND_IMAGE
                : src
            }
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover object-center"
            onError={() =>
              setFailedImages((previous) =>
                previous.includes(index)
                  ? previous
                  : [...previous, index]
              )
            }
          />
        </div>
      ))}

      {/* تدرج أخضر فوق صور المساجد */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#08704C]/30 via-[#4D7A61]/15 to-[#D2DED7]/10" />
    </div>
  );
}
