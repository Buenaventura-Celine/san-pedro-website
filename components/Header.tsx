"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 12px rgba(0,0,0,0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "City News" },
    { href: "/events", label: "Events" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80" : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      }`}
      style={{
        opacity: headerOpacity,
        boxShadow: headerShadow as unknown as string
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="San Pedro Laguna City Seal"
              width={50}
              height={50}
              className="object-contain md:w-[60px] md:h-[60px]"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-lg leading-tight text-gray-900">
                City of San Pedro
              </span>
              <span className="text-xs md:text-sm text-gray-600">Laguna, Philippines</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <SheetHeader className="border-b p-6 text-left">
                <SheetTitle className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="San Pedro Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <div className="font-bold text-base text-gray-900">City of San Pedro</div>
                    <div className="text-xs text-gray-600 font-normal">Laguna, Philippines</div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors py-3 px-4 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Button asChild className="bg-green-700 hover:bg-green-800 w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
