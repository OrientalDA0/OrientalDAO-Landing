"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Haru() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const step = 1;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += step;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const images: string[] = [
    "https://pbs.twimg.com/media/GPt2_e1aAAAMHl7?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GSG5AVXaUAI5Dxv?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GOhI6OgWIAAVolw.jpg:large",
    "https://pbs.twimg.com/media/GSRzVOTagAERlgz?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GR95ftrW0AEuWVL?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GPjnuK1bcAAtoGI?format=jpg&name=large",
  ];

  const infiniteImages = [...images, ...images];

  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* Hosted Gallery Section */}
      <section id="gallery" className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Event Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highlights from our recent events and community gatherings
          </p>
        </div>

        {/* Infinite scrolling row */}
        <div ref={scrollRef} className="flex overflow-x-hidden gap-6">
          {infiniteImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`gallery image ${i}`}
              width={500}
              height={500}
              className="w-[350px] h-72 object-cover rounded-md shadow-md shrink-0"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
