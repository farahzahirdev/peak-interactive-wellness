"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CONDITIONS_SECTION_ID,
  FORM_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICES_SECTION_ID,
} from "@/lib/constants";

const NAV_ITEMS = [
  { href: `#${SERVICES_SECTION_ID}`, label: "Services" },
  { href: "#tms", label: "TMS" },
  { href: "#spravato", label: "Spravato®" },
  { href: `#${CONDITIONS_SECTION_ID}`, label: "Conditions" },
  { href: "#why", label: "Why Peak" },
  { href: "#providers", label: "Providers" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}${open ? " is-menu-open" : ""}`}>
        <div className="container-main relative flex items-center justify-between gap-4 py-3.5">
          <Link href="/" className="relative z-[80] shrink-0" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="Peak Interactive Wellness"
              width={192}
              height={78}
              className="h-11 w-auto max-w-[13rem] object-contain object-left sm:h-12 sm:max-w-[15rem]"
              priority
              unoptimized
            />
          </Link>

          <nav
            className="hidden items-center gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/90 xl:flex"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-mustard">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-white transition-colors hover:text-mustard"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={`#${FORM_SECTION_ID}`}
              className="btn btn-primary !px-4 !py-2.5 !text-[0.7rem]"
            >
              Find out if you Qualify
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="mobile-nav-toggle relative z-[80] xl:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          {open && (
            <div
              ref={panelRef}
              id="mobile-nav"
              className="mobile-nav-panel"
              aria-label="Mobile navigation"
            >
              <p className="mobile-nav-label">Menu</p>
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
                  {item.label}
                </a>
              ))}
              <a href={`#${FORM_SECTION_ID}`} className="mobile-nav-cta" onClick={close}>
                Find out if you Qualify
              </a>
              <a
                href={PHONE_HREF}
                className="mt-1 rounded-md px-3 py-3 text-center text-sm font-semibold text-teal-deep"
                onClick={close}
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          )}
        </div>
      </header>

      {mounted &&
        open &&
        createPortal(
          <button
            type="button"
            className="mobile-nav-backdrop xl:hidden"
            aria-label="Close menu"
            onClick={close}
          />,
          document.body,
        )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
