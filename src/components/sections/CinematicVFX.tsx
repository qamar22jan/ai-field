"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
interface GridItem {
  id: number;
  row: number;
  bg: string;
  imageSrc?: string;
  hasYellowBlock?: boolean;
}

interface StackedCard {
  id: number;
  rotate: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  bg: string;
  scale: number;
}

// ─────────────────────────────────────────
// GRID DATA
// ─────────────────────────────────────────
const gridItems: GridItem[] = [
  // ── ROW 1 ──
  {
    id: 1,
    row: 1,
    bg: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    row: 1,
    bg: "linear-gradient(135deg, #1a2a1a 0%, #0d1f0d 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    row: 1,
    bg: "linear-gradient(135deg, #0a1628 0%, #1a2a3a 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    row: 1,
    bg: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=400&h=250&fit=crop",
  },
  // ── ROW 2 ──
  {
    id: 5,
    row: 2,
    bg: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    row: 2,
    bg: "linear-gradient(135deg, #1a1a0a 0%, #2a2a10 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    row: 2,
    bg: "linear-gradient(135deg, #0a1a1a 0%, #102a2a 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    row: 2,
    bg: "linear-gradient(135deg, #1a0a1a 0%, #2a102a 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  },
  // ── ROW 3 ──
  {
    id: 9,
    row: 3,
    bg: "linear-gradient(135deg, #0a0a1a 0%, #10102a 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=250&fit=crop",
  },
  {
    id: 10,
    row: 3,
    bg: "linear-gradient(135deg, #1a1a10 0%, #2a2a18 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
    hasYellowBlock: true,
  },
  {
    id: 11,
    row: 3,
    bg: "linear-gradient(135deg, #0a1a1a 0%, #081818 100%)",
    imageSrc:
      "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=400&h=250&fit=crop",
  },
];

// ─────────────────────────────────────────
// STACKED CARDS DATA
// ─────────────────────────────────────────
const stackedCards: StackedCard[] = [
  {
    id: 1,
    rotate: -8,
    translateX: -30,
    translateY: 20,
    zIndex: 1,
    bg: "linear-gradient(135deg, #2a1a2e 0%, #1a0a1e 100%)",
    scale: 0.88,
  },
  {
    id: 2,
    rotate: 4,
    translateX: 20,
    translateY: 0,
    zIndex: 2,
    bg: "linear-gradient(135deg, #1e1e2e 0%, #2a1a3e 100%)",
    scale: 1,
  },
];

// ─────────────────────────────────────────
// REUSABLE GRID CARD COMPONENT
// ─────────────────────────────────────────
function GridCard({
  item,
  delay,
  hoveredId,
  onHoverStart,
  onHoverEnd,
}: {
  item: GridItem;
  delay: number;
  hoveredId: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.02 }}
      style={{
        borderRadius: "6px",
        overflow: "hidden",
        position: "relative",
        minHeight: "120px",
        cursor: "pointer",
        background: item.bg,
        boxShadow:
          hoveredId === item.id
            ? "0 0 0 1px rgba(251,190,15,0.35)"
            : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      {/* ── IMAGE ── */}
      {item.imageSrc && (
        <img
          src={item.imageSrc}
          alt="cinematic shot"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Golden hover overlay */}
      <motion.div
        animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(251,190,15,0.08)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Yellow block (item 10 only) */}
      {item.hasYellowBlock && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "28px",
            background: "linear-gradient(90deg, #8fb800 0%, #FBBE0F 100%)",
            borderRadius: "4px",
            opacity: 0.9,
            zIndex: 3,
          }}
        />
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
export default function CinematicVFX() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const row1 = gridItems.filter((item) => item.row === 1);
  const row2 = gridItems.filter((item) => item.row === 2);
  const row3 = gridItems.filter((item) => item.row === 3);

  return (
    <section
      style={{
        backgroundColor: "#0f0f0f",
        padding: "4px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: "3px",
          backgroundColor: "#161616",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.05)",
          minHeight: "420px",
        }}
      >
        {/* ════════════════════════════════
            LEFT PANEL
            ════════════════════════════════ */}
        <div
          style={{
            background:
              "linear-gradient(180deg, #1a1a1f 0%, #141418 100%)",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "40%",
              width: "180px",
              height: "180px",
              background:
                "radial-gradient(circle, rgba(251,190,15,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* ── TOP TEXT ── */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                marginBottom: "12px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBE0F">
                <rect x="2" y="14" width="4" height="8" rx="1" />
                <rect x="9" y="9" width="4" height="13" rx="1" />
                <rect x="16" y="4" width="4" height="18" rx="1" />
              </svg>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#FBBE0F",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                NEXAI 2.0
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "#ffffff",
                fontFamily: "Space Grotesk, sans-serif",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              CINEMATIC VFX
              <br />
              READY TO USE
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "13px",
                color: "#888888",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.5,
              }}
            >
              Turn any shot cinematic
            </p>
          </div>

          {/* ── STACKED CARDS ── */}
          <div
            style={{
              position: "relative",
              height: "230px",
              marginTop: "24px",
            }}
          >
            {stackedCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{
                  rotate: card.rotate,
                  x: card.translateX,
                  y: card.translateY,
                  scale: card.scale,
                }}
                whileHover={{
                  y: card.translateY - 10,
                  transition: { duration: 0.3 },
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  marginLeft: "-85px",
                  width: "170px",
                  height: "210px",
                  borderRadius: "12px",
                  background: card.bg,
                  zIndex: card.zIndex,
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                }}
              >
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.65) 100%)",
                  }}
                />

                {/* Glow center */}
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background:
                      card.id === 2
                        ? "radial-gradient(circle, rgba(200,80,200,0.35) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(80,80,200,0.25) 0%, transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />

                {/* Label on front card */}
                {card.id === 2 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      zIndex: 2,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "2px",
                      }}
                    >
                      NexAI
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#ffffff",
                        fontFamily: "Space Grotesk, sans-serif",
                        fontStyle: "italic",
                      }}
                    >
                      Cinematic VFX
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* ════ END LEFT PANEL ════ */}

        {/* ════════════════════════════════
            RIGHT PANEL — IMAGE GRID
            ════════════════════════════════ */}
        <div
          style={{
            padding: "3px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          {/* ROW 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "3px",
              flex: 1,
            }}
          >
            {row1.map((item, i) => (
              <GridCard
                key={item.id}
                item={item}
                delay={i * 0.07}
                hoveredId={hoveredId}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* ROW 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "3px",
              flex: 1,
            }}
          >
            {row2.map((item, i) => (
              <GridCard
                key={item.id}
                item={item}
                delay={0.28 + i * 0.07}
                hoveredId={hoveredId}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* ROW 3 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "3px",
              flex: 1,
            }}
          >
            {row3.map((item, i) => (
              <GridCard
                key={item.id}
                item={item}
                delay={0.56 + i * 0.07}
                hoveredId={hoveredId}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
        {/* ════ END RIGHT PANEL ════ */}
      </motion.div>
    </section>
  );
}
