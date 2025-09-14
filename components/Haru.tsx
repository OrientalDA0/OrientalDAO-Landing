"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InfiniteImageCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1; // px per tick (scroll speed)
    const intervalMs = 20;

    const interval = setInterval(() => {
      if (scrollContainer && !isPaused) {
        scrollAmount += step;
        scrollContainer.scrollLeft = scrollAmount;

        // reset when we've scrolled half the duplicated width
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPaused]);

  const images: string[] = [
    "https://pbs.twimg.com/media/GPt2_e1aAAAMHl7?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GSG5AVXaUAI5Dxv?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GOhI6OgWIAAVolw.jpg:large",
    "https://pbs.twimg.com/media/GSRzVOTagAERlgz?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GR95ftrW0AEuWVL?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GPjnuK1bcAAtoGI?format=jpg&name=large",
  ];

  const infiniteImages = [...images, ...images];

  const overlap = 24; // <- smaller number = less overlap (e.g. 8), larger number = more overlap (images closer)

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <section className="w-full max-w-7xl px-6 py-20">
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-hidden gap-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          {infiniteImages.map((src, i) => (
            <div
              key={i}
              // negative margin to reduce gap / create overlap
              style={{ marginLeft: i === 0 ? 0 : -overlap }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="shrink-0 rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`carousel image ${i}`}
                width={320}
                height={200}
                style={{
                  width: 320,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 12,
                  // initial 70% -> on hover 100%
                  transform: hoveredIndex === i ? "scale(1)" : "scale(0.7)",
                  transition: "transform 300ms ease, filter 300ms ease",
                  // blur other images when any image is hovered
                  filter:
                    hoveredIndex !== null && hoveredIndex !== i
                      ? "blur(4px)"
                      : "none",
                  zIndex: hoveredIndex === i ? 10 : 1,
                }}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
