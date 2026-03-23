"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/shared/SvgIcons";

export function WhatsAppButton() {
  const WHATSAPP_NUMBER =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

  const href = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi! I’d like to book a free demo with Indian Mentors."
      )}`,
    [WHATSAPP_NUMBER]
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50"
    >
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/25 ring-1 ring-white/10"
      >
        <motion.div
          className="absolute inset-0 rounded-3xl bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <WhatsAppIcon />
      </motion.div>

      <div className="pointer-events-none absolute right-0 top-0 translate-x-[calc(100%-2.5rem)] translate-y-[-0.1rem] opacity-0 transition group-hover:opacity-100">
        <div className="rounded-xl bg-zinc-950/90 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
          WhatsApp us
        </div>
      </div>
    </a>
  );
}

