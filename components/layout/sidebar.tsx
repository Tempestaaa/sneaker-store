import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { PiSneakerFill } from "react-icons/pi";

export default function Sidebar() {
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
        <SheetTitle className="flex-center justify-center-safe gap-4 text-2xl font-bold">
          <PiSneakerFill className="size-8" />
          <span>Sneaker Vault</span>
        </SheetTitle>
      </SheetHeader>

      <menu className="flex flex-col">
        {items.map((item, id) => (
          <Link
            key={id}
            href={item.href}
            className="py-4 px-2 hover:px-8 transition-[padding] font-medium text-4xl hover:bg-primary hover:text-background duration-300"
          >
            {item.label}
          </Link>
        ))}
      </menu>
    </SheetContent>
  );
}
