"use client";

import Link from "next/link";
import {
  Home,
  Coffee,
  ImageIcon,
  MapPin,
  Info,
  Utensils,
  ShoppingCart,
  CalendarCheck,
  Phone,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const cafeDock = [
  {
    title: "Home",
    icon: <Home className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/",
  },
  {
    title: "Menu",
    icon: <Utensils className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/menu",
  },
  {
    title: "Gallery",
    icon: <ImageIcon className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/gallery",
  },
  {
    title: "About",
    icon: <Info className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/about",
  },
  {
    title: "Contact",
    icon: <Phone className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/contact",
  },
  {
    title: "Cart",
    icon: <ShoppingCart className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
    href: "/cart",
  },
  {
    title: "Reserve",
    icon: (
      <CalendarCheck className="h-full w-full text-neutral-700 dark:text-neutral-200" />
    ),
    href: "/reservation",
  },
];

export function AppleStyleDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      <Dock className="items-end pb-3 shadow-2xl shadow-black/40 bg-gray-50/95 dark:bg-neutral-900/95 backdrop-blur">
        {cafeDock.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
