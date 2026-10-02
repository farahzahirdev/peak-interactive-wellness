"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function ScrollHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`site-header-scroll${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <Header />
    </div>
  );
}
