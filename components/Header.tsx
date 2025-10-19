"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "City News" },
    { href: "/events", label: "Events" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="San Pedro Laguna City Seal"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-900">
                City of San Pedro
              </span>
              <span className="text-sm text-gray-600">Laguna, Philippines</span>
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
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-green-700 hover:bg-green-800 mt-4">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
