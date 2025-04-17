"use client";

import Logo from "@/components/layout/logo";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Store",
      href: "/store",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>
          <Logo />
        </SheetTitle>
      </SheetHeader>

      <menu className="flex flex-col">
        {items.map((item, id) => (
          <Link
            key={id}
            href={item.href}
            className={`py-4 px-2 hover:px-8 transition-[padding] font-medium text-4xl hover:bg-primary hover:text-background duration-300 ${
              isActive(item.href) && "bg-primary text-background px-8"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </menu>
    </SheetContent>
  );
}
