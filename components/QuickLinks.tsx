"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Building2,
  Calendar,
  Newspaper,
  Users,
  ClipboardList,
  Phone,
  Leaf,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Forms and Permits",
    description: "Access and download various city forms and permit applications",
    href: "/forms-permits",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: Building2,
    title: "City Executive Orders",
    description: "View city resolutions and executive orders",
    href: "/executive-orders",
    color: "bg-purple-50 text-purple-700",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Stay updated with upcoming city events and programs",
    href: "/events",
    color: "bg-orange-50 text-orange-700",
  },
  {
    icon: Newspaper,
    title: "City News",
    description: "Latest news and announcements from the city government",
    href: "/news",
    color: "bg-green-50 text-green-700",
  },
  {
    icon: Users,
    title: "Directory",
    description: "Find contact information for city departments and officials",
    href: "/directory",
    color: "bg-red-50 text-red-700",
  },
  {
    icon: ClipboardList,
    title: "Fund Utilization",
    description: "Transparency reports on city budget and fund utilization",
    href: "/fund-utilization",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: Leaf,
    title: "Green Card Program",
    description: "Learn about San Pedro's environmental initiatives",
    href: "/green-card",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Phone,
    title: "Talk to Us",
    description: "Get in touch with city hall and file concerns",
    href: "/contact",
    color: "bg-indigo-50 text-indigo-700",
  },
];

export default function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the services and information you need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
