"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Fake grid images (replace with real later)
const gridImages = [
  { id: 1, bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", row: 1, col: 1 },
  { id: 2, bg: "linear-gradient(135deg, #0d1117 0%, #1a1a2e 100%)", row: 1, col: 2 },
  { id: 3, bg: "linear-gradient(135deg, #1a0a1a 0%, #2a1a2a 100%)", row: 1, col: 3 },
  { id: 4, bg: "linear-gradient(135deg, #0a1a0a 0%, #1a2a1a 100%)", row: 1, col: 4 },
  { id: 5, bg: "linear-gradient(135deg, #1a1a0a 0%, #2a2a0a 100%)", row: 2, col: 1 },
  { id: 6, bg: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)", row: 2, col: 2 },
  { id: 7, bg: "linear-gradient(135deg, #0a0a1a 0%, #10102a 100%)", row: 2, col: 3 },
  { id: 8, bg: "linear-gradient(135deg, #1a1510 0%, #2a2010 100%)", row: 2, col: 4 },
];

export default function PromoGrid() {
  const [progress, setProgress] = useState(0);

  // Animate progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 0.8;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#0f0f0f",
        padding: "4px 0 40px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "3px",
          background: "#1a1f2e",
          borderRadius: "16px",
          overflow: "hidden",
          margin: "0 20px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Left Promo Panel */}
        <div
          style={{
            background: "linear-gradient(180deg, #111827 0%, #0f172a 100%)",
            padding: "40px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(251,190,15,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Available tag */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#FBBE0F",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            AVAILABLE FOR EVERYONE
          </p>

          {/* Divider line */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(251,190,15,0.3)",
              marginBottom: "20px",
            }}
          />

          {/* Big Title */}
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 900,
              fontFamily: "Space Grotesk, sans-serif",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              background: "linear-gradient(180deg, #FBBE0F 0%, #f59e0b 50%, #d97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NEXAI
            <br />
            2.0
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.6,
              marginBottom: "20px",
              maxWidth: "220px",
            }}
          >
            World's best AI model available with up to{" "}
            <span style={{ color: "#FBBE0F", fontWeight: 600 }}>30% OFF</span>{" "}
            with special offer
          </p>

          {/* Progress Bar */}
          <div
            style={{
              width: "100%",
              height: "4px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "2px",
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #FBBE0F 0%, #f59e0b 100%)",
                borderRadius: "2px",
                boxShadow: "0 0 8px rgba(251,190,15,0.5)",
              }}
            />
          </div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ color: "#FBBE0F" }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              border: "none",
              color: "#9ca3af",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 20px",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Right Image Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "3px",
            padding: "3px",
          }}
        >
          {gridImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ scale: 0.97 }}
              style={{
                background: img.bg,
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                minHeight: "120px",
              }}
            >
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(251,190,15,0.05)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.opacity = "0";
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Button (centered bottom) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ffffff",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            padding: "10px 24px",
            borderRadius: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s",
          }}
        >
          View all of NEXAI 2.0
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
