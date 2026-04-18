"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Explore", href: "#", badge: null },
  { label: "Image", href: "#", badge: null },
  { label: "Video", href: "#", badge: null },
  { label: "Audio", href: "#", badge: null },
  { label: "Collab", href: "#", badge: null },
  { label: "Edit", href: "#", badge: null },
  { label: "Character", href: "#", badge: null },
  { label: "Marketing Studio", href: "#", badge: "New" },
  { label: "Cinema Studio", href: "#", badge: "3.5" },
  { label: "Originals", href: "#", badge: "New" },
  { label: "Apps", href: "#", badge: null },
  { label: "Assist", href: "#", badge: null },
  { label: "Community", href: "#", badge: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled
            ? "rgba(18, 18, 18, 0.98)"
            : "rgba(15, 15, 15, 1)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="w-full px-4">
          <div className="flex items-center h-[65px] gap-1">

            {/* Logo Icon */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 mr-3"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
                  border: "1px solid rgba(251,190,15,0.3)",
                  boxShadow: "0 0 12px rgba(251,190,15,0.15)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="2" fill="#FBBE0F" opacity="0.9" />
                  <rect x="13" y="3" width="8" height="8" rx="2" fill="#FBBE0F" opacity="0.5" />
                  <rect x="3" y="13" width="8" height="8" rx="2" fill="#FBBE0F" opacity="0.5" />
                  <rect x="13" y="13" width="8" height="8" rx="2" fill="#FBBE0F" opacity="0.2" />
                </svg>
              </div>
            </motion.a>

            {/* Scrollable Nav Links */}
            <nav className="flex items-center overflow-x-auto no-scrollbar flex-1" style={{ gap: "2px" }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ color: "#FBBE0F" }}
                  className="flex items-center gap-1.5 rounded-lg whitespace-nowrap flex-shrink-0 transition-colors duration-200 group"
                  style={{
                    color: "#a0a0a0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 400,
                    padding: "6px 14px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold leading-none"
                      style={{
                        backgroundColor:
                          link.badge === "New"
                            ? "rgba(251,190,15,0.15)"
                            : "rgba(251,190,15,0.1)",
                        color: "#FBBE0F",
                        border: "1px solid rgba(251,190,15,0.25)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">

              {/* Pricing Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col items-center"
              >
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(251,190,15,0.08)",
                    border: "1px solid rgba(251,190,15,0.25)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#FBBE0F">
                    <path d="M6 2L2 8l10 14L22 8l-4-6H6z" />
                  </svg>
                  <span
                    style={{
                      color: "#FBBE0F",
                      fontSize: "13px",
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Pricing
                  </span>
                </div>
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[9px] font-bold whitespace-nowrap"
                  style={{
                    backgroundColor: "#e8572a",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  30% OFF
                </div>
              </motion.a>

              {/* Notification Bell */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                style={{
                  color: "#a0a0a0",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </motion.button>

              {/* Assets Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                style={{
                  color: "#a0a0a0",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </motion.button>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-1.5 rounded-lg text-[13px] font-medium"
                style={{
                  background: "linear-gradient(135deg, #FBBE0F 0%, #e5a800 100%)",
                  color: "#0a0a0a",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Sign in
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="hidden max-[768px]:flex items-center justify-center w-8 h-8 rounded-lg"
                style={{
                  color: "#a0a0a0",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <>
                      <path d="M3 12h18" />
                      <path d="M3 6h18" />
                      <path d="M3 18h18" />
                    </>
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-40 p-4"
            style={{
              backgroundColor: "rgba(15, 15, 15, 0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-colors"
                  style={{
                    color: "#a0a0a0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold"
                      style={{
                        backgroundColor: "rgba(251,190,15,0.15)",
                        color: "#FBBE0F",
                        border: "1px solid rgba(251,190,15,0.25)",
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
