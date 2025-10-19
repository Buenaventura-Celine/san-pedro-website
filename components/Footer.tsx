"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "City News" },
    { href: "/events", label: "Events" },
  ];

  const resources = [
    { href: "/forms-permits", label: "Forms & Permits" },
    { href: "/executive-orders", label: "Executive Orders" },
    { href: "/fund-utilization", label: "Fund Utilization" },
    { href: "/directory", label: "Directory" },
  ];

  const contact = [
    { icon: Phone, text: "(049) 808-1234", href: "tel:+63498081234" },
    { icon: Mail, text: "info@sanpedrolaguna.gov.ph", href: "mailto:info@sanpedrolaguna.gov.ph" },
    { icon: MapPin, text: "City Hall, San Pedro, Laguna" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/sanpedrocity", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/sanpedrocity", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="San Pedro Laguna City Seal"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-white text-lg">San Pedro</h3>
                <p className="text-sm text-gray-400">Laguna, Philippines</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Building a progressive, sustainable, and inclusive community for all residents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contact.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </>
                );

                return (
                  <li key={index} className="flex items-start gap-2">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-2 hover:text-green-400 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} City Government of San Pedro, Laguna. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
