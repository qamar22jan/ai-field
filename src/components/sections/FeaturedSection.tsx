"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════
   DATA — Edit / Add cards here (no JSX changes needed)
   ═══════════════════════════════════════════════ */
interface FeatureCardData {
  tag: string;
  subtitle: string;
  badge: string[];
  title: string;
  desc: string;
  bgGradient: string;
  bgColor: string;
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    tag: "NexAI",
    subtitle: "Marketing Studio",
    badge: ["MARKETING", "STUDIO"],
    title: "Marketing Studio",
    desc: "Different Formats. One Product. Powered by NexAI.",
    bgGradient: "linear-gradient(135deg, #2a1a0e 0%, #1a0f08 40%, #0f0a05 100%)",
    bgColor: "#1e1510",
  },
  {
    tag: "NexAI",
    subtitle: "Seedance 2.0",
    badge: ["URL TO", "VIDEO"],
    title: "URL-to-Ad",
    desc: "One URL. Professional Ads. Powered by NexAI.",
    bgGradient: "linear-gradient(135deg, #0e2a1a 0%, #081a0f 40%, #050f0a 100%)",
    bgColor: "#101e1a",
  },
  {
    tag: "NexAI",
    subtitle: "Seedance 2.0",
    badge: ["NEXAI", "2.0"],
    title: "NEXAI 2.0",
    desc: "The world's most advanced AI model. Now on NexAI.",
    bgGradient: "linear-gradient(135deg, #1a0e2a 0%, #0f081a 40%, #0a050f 100%)",
    bgColor: "#10101e",
  },
];

/* Shared grain texture for all cards */
const GRAIN_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`;

/* ═══════════════════════════════════════════════
   FEATURE CARD — One reusable card component
   ═══════════════════════════════════════════════ */
function FeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="carousel-card"
    >
      {/* ── Image Area ── */}
      <div className="card-image-area" style={{ backgroundColor: card.bgColor }}>
        {/* Background gradient */}
        <div className="card-layer" style={{ background: card.bgGradient }} />

        {/* Grain texture overlay */}
        <div
          className="card-layer"
          style={{ backgroundImage: GRAIN_TEXTURE, opacity: 0.4 }}
        />

        {/* Bottom fade gradient */}
        <div
          className="card-layer"
          style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)" }}
        />

        {/* ── Overlay Labels ── */}
        <div className="card-overlay">
          {/* Tag + Subtitle */}
          <div>
            <p className="card-tag">{card.tag}</p>
            <p className="card-subtitle">{card.subtitle}</p>
          </div>

          {/* Glass Badge */}
          <div className="glass-badge">
            {card.badge.map((line, i) => (
              <p key={i} className="badge-text">
                {line}
                {i < card.badge.length - 1 && <br />}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── Card Info Below ── */}
      <div className="card-info">
        <p className="card-info-title">{card.title}</p>
        <p className="card-info-desc">{card.desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   FEATURED SECTION — Infinite Loop Carousel
   ═══════════════════════════════════════════════ */
export default function FeaturedSection() {
  const [isPaused, setIsPaused] = useState(false);

  /* Duplicate cards to create seamless infinite loop.
     When the track scrolls -50%, it looks identical to 0%. */
  const loopCards = [...FEATURE_CARDS, ...FEATURE_CARDS];

  return (
    <section className="featured-section">
      {/* ── Carousel Container ── */}
      <div
        className="carousel-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left edge fade */}
        <div className="carousel-fade-left" />
        {/* Right edge fade */}
        <div className="carousel-fade-right" />

        {/* Scrolling track — CSS animation handles the infinite loop */}
        <div
          className="carousel-track"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {loopCards.map((card, i) => (
            <FeatureCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
