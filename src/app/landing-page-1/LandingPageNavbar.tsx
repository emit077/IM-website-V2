"use client";

import { Navbar } from "@/components/home/Navbar";

/** Client boundary so `onPrimaryCTA` can be a function (RSC-safe). */
export function LandingPageNavbar() {
  return (
    <Navbar
      fixedClassName="top-[42px]"
      onPrimaryCTA={() => {
        console.log("primaryCTA");
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    />
  );
}
