"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Content Creation", href: "/contentCreation" },
    { label: "FAQs", href: "/FAQs" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
    hidden ? "-translate-y-full" : "translate-y-0"
  }`}
>
  <div className="bg-black/40 backdrop-blur-md border-b border-white/10">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" className="text-lg font-semibold tracking-wide text-white">
        Captured In Love
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="relative h-8 w-8 md:hidden"
      >
        <span
          className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all ${
            open ? "rotate-45 top-4" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-4 h-0.5 w-full bg-white transition-all ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-6 h-0.5 w-full bg-white transition-all ${
            open ? "-rotate-45 top-4" : ""
          }`}
        />
      </button>
    </nav>
    {open && (
      <div className="md:hidden border-t border-white/10">
        <ul className="flex flex-col px-6 py-6 gap-6 text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-lg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</header>
  );
}
