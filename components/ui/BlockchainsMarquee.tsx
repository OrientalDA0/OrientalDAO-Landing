"use client";
import Image from "next/image";

const logos = [
  { src: "/logos/bitcoin.png", alt: "Polygon" },
  { src: "/logos/ethereum.png", alt: "Ethereum" },
  { src: "/logos/solana.png", alt: "Solana" },
  { src: "/logos/stellar.png", alt: "Solana" },
  { src: "/logos/sui.png", alt: "Solana" },
  { src: "/logos/arbitrum.png", alt: "Solana" },
  { src: "/logos/monero.png", alt: "Solana" },
  { src: "/logos/uniswap.png", alt: "Solana" },
  { src: "/logos/near.png", alt: "Cardano" },
  { src: "/logos/op.png", alt: "Cardano" },
  { src: "/logos/chainlink.png", alt: "Cardano" },
  { src: "/logos/pyth.png", alt: "Polygon" },
  { src: "/logos/bonk.png", alt: "Cardano" },
];

export default function BlockchainsMarquee() {
  return (
    <div className="w-full overflow-hidden py-8">
      {/* First Line - Left to Right */}
      <div className="flex space-x-10 animate-marquee">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="h-12 w-auto object-contain"
          />
        ))}
        {/* duplicate for infinite loop */}
        {logos.map((logo, i) => (
          <Image
            key={`dup1-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>

      {/* Second Line - Right to Left */}
      <div className="flex space-x-10 animate-marquee-reverse mt-6">
        {logos.map((logo, i) => (
          <Image
            key={`rev-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="h-12 w-auto object-contain"
          />
        ))}
        {logos.map((logo, i) => (
          <Image
            key={`dup2-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
