"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <div className="backdrop-blur-xl shadow-2xl shadow-black/50 flex justify-between items-center px-6 py-2 bg-card/70 border border-border rounded-[50px] [corner-shape:squircle_squircle_squircle_squircle]  min-w-[320px] md:min-w-112.5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt=""
            width={24}
            height={24}
          />
          <span className="text-sm font-semibold text-foreground hidden sm:block">
            Strafe
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#open-source"
            onClick={(e) => scrollToSection(e, "open-source")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="#legal"
            onClick={(e) => scrollToSection(e, "legal")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Legal
          </a>
          <Link
            href="/download"
            className="bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-all rounded-[25px] [corner-shape:squircle_squircle_squircle_squircle] px-4 py-1.5 text-xs"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 px-6 py-4 backdrop-blur-xl bg-card/90 border border-border rounded-3xl">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#open-source"
              onClick={(e) => scrollToSection(e, "open-source")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Github
            </a>
            <a
              href="#legal"
              onClick={(e) => scrollToSection(e, "legal")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </a>
            <hr className="border-border" />
            <Link
              href="/download"
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium text-center hover:bg-primary-hover transition-colors rounded-[25px] [corner-shape:squircle_squircle_squircle_squircle]"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
